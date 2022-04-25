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
      <section class="blog-details-area">
        <div class="container">
          <div class="row flex-md-row-reverse justify-content-between">
            <div class="col-xl-8">
              <div class="blog-details-content-wrap">
                <div class="blog-details-item">
                  <div class="blog-details-thumb">
                    <img :src="post.post.image" width="700" height="400" alt="Image-HasTech">
                  </div>
                  <div class="blog-details-content">
                    <div class="meta">
                      <ul>
                        <li class="post-date">{{post.post.title}}</li>
                      </ul>
                    </div>
                    <h3 class="main-title">Lorem Ipsum is siamply dumyte the printing and typese.</h3>
                    <p>{{post.post.message}}}</p>

                  </div>
                </div>

              </div>
            </div>
            <div class="col-xl-4">
              <div class="blog-sidebar">

                <div class="blog-widget blog-sidebar-post">
                  <h4 class="sidebar-title">Recent Posts</h4>
                  <div class="sidebar-post">
                    <RelatedPost v-for="related_post in relatedPosts.related_posts"
                                 :key="related_post._id"
                                 :id="related_post._id"
                                 :title="related_post.title"
                                 :date="related_post.date"
                                 :image="related_post.image"
                    />
                  </div>
                </div>
              </div>
            </div>
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
import RelatedPost from "@/components/Blog/RelatedPost";

export default {
name: "BlogDetails",
  components: {RelatedPost, AboutHeader, Preloader},
  beforeMount() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  },
  created() {
  const id = this.$route.params.id;
    this.$store.dispatch("posts/loadPost", id);
    this.$store.dispatch("posts/getRelatedPosts");
  },
  data() {
    return {
      isLoading: false,
      email: '',
      password: ''
    }
  },
  computed: {
    post(){
      return this.$store.getters["posts/selectedPost"];
    },
    relatedPosts(){
      return this.$store.getters["posts/relatedPosts"];
    }
  }
}
</script>

<style scoped>

</style>