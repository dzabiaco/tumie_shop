<template>
  <Preloader v-if="isLoading"/>
  <div class="wrapper">
    <AboutHeader/>
    <main class="main-content">
      <!--== Start Page Header Area Wrapper ==-->
      <div class="page-header-area" data-bg-img="assets/img/photos/bg1.webp">
        <div class="container pt--0 pb--0">
          <div class="row">
            <div class="col-12">
              <div class="page-header-content">
                <h2 class="title">Blog</h2>
                <nav class="breadcrumb-area">
                  <ul class="breadcrumb">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-sep">//</li>
                    <li>Blog</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--== End Page Header Area Wrapper ==-->

      <!--== Start Blog Area Wrapper ==-->
      <section class="blog-area blog-inner-area">
        <div class="container">
          <div class="row">
            <BlogItem v-for="post in posts"
                      :key="post.id"
                      :id="post._id"
                      :date="post.date"
                      :title="post.title"
                      :image="post.image"
            />
          </div>
        </div>
      </section>
      <!--== End Blog Area Wrapper ==-->
    </main>
  </div>
</template>

<script>
import AboutHeader from "@/components/AboutPage/AboutHeader";
import Preloader from "@/components/Preloader";
import BlogItem from "@/components/Blog/BlogItem";
export default {
  name: "Blog",
  components: {AboutHeader, Preloader,BlogItem},
  beforeMount() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
    this.$store.dispatch("posts/loadPosts");
  },
  data(){
    return {
      isLoading: false,
      email: '',
      password: ''
    }
  },
  computed: {
    posts(){
      return this.$store.getters["posts/posts"];
    }
  }
}
</script>

<style scoped>
.main-content{
  padding-top: 100px;
}
</style>