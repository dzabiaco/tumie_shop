<template>
  <div class="wrapper">
  <Preloader v-if="isLoading"/>
  <AboutHeader/>
    <main class="main-content">
      <!--== Start Page Header Area Wrapper ==-->
      <div class="page-header-area" data-bg-img="assets/img/photos/bg1.webp">
        <div class="container pt--0 pb--0">
          <div class="row">
            <div class="col-12">
              <div class="page-header-content">
                <h2 class="title">Contact Us</h2>
                <nav class="breadcrumb-area">
                  <ul class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li class="breadcrumb-sep">//</li>
                    <li>Contact Us</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--== End Page Header Area Wrapper ==-->

      <!--== Start Contact Area Wrapper ==-->
      <section class="contact-area contact-inner-area">
        <div class="container">
          <div class="row contact-page-wrapper">
            <div class="col-xl-5">
              <h4 class="contact-page-title">We Are Here! <br>Please Contact Us.</h4>
              <div class="contact-info-wrap">
                <div class="contact-info">
                  <div class="row">
                    <div class="col-12 col-lg-6 col-xl-12">
                      <div class="info-item">
                        <div class="icon">
                          <img src="../../assets/img/icons/c1.png" alt="Image-HasTech">
                        </div>
                        <div class="info">
                          <h5 class="title">Address:</h5>
                          <p>Your address goes here.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-12">
                      <div class="info-item">
                        <div class="icon">
                          <img src="../../assets/img/icons/c2.png" alt="Image-HasTech">
                        </div>
                        <div class="info">
                          <h5 class="title">Phone:</h5>
                          <p>
                            <a href="tel://+00123456789">+00 123 456 789</a><br>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6 col-xl-12">
                      <div class="info-item">
                        <div class="icon">
                          <img src="../../assets/img/icons/c3.png" alt="Image-HasTech">
                        </div>
                        <div class="info">
                          <h5 class="title">Email:</h5>
                          <p>
                            <a href="mailto://demo@example.com">demo@example.com</a><br>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-7">
              <h4 class="contact-page-title page-title-style2">Send A Quest</h4>
              <div class="contact-form-wrap">
                <!--== Start Contact Form ==-->
                <div class="contact-form">
                  <form id="contact-form" @submit.prevent="sendAMessage">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input v-model.trim="name" class="form-control" type="text" name="con_name" placeholder="Name *">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input v-model.trim="email" class="form-control" type="email" name="con_email" placeholder="Email *">
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <input v-model.trim="title" class="form-control" type="text" placeholder="Subject (Optinal)">
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group mb--0">
                          <textarea v-model.trim="message" class="form-control" name="con_message" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group mb--0">
                          <button class="btn-theme" type="submit">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <!--== End Contact Form ==-->

                <!--== Message Notification ==-->
                <div class="form-message"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--== End Contact Area Wrapper ==-->
    </main>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader";
import AboutHeader from "@/components/AboutPage/AboutHeader";
export default {
name: "Contact",
  components: {AboutHeader, Preloader},
  beforeMount() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  },
  data(){
    return {
      isLoading: false,
      name: '',
      email: '',
      title: '',
      message:''
    }
  },
  methods: {
    async sendAMessage(){
      const emailMessage = {
        name: this.name,
        email: this.email,
        title: this.title,
        message: this.message
      };

      const response = await fetch(`http://localhost:5000/contact`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailMessage)
      });

      const content = await response.json();

      console.log(content);
    }
  }
}
</script>

<style scoped>
.main-content{
    padding-top: 100px;
}

</style>