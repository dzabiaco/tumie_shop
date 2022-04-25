<template>
  <div class="col-md-6 col-lg-4">
    <!--== Start Blog Item ==-->
    <div class="post-item">
      <div class="thumb">
        <router-link :to="getUrl">
          <img :src="image" width="350" height="250" alt="Image-HasTech">
        </router-link>
      </div>
      <div class="content">
        <div class="meta">
          <ul>
            <li class="post-date"><router-link :to="getUrl">{{date}}</router-link></li>
          </ul>
        </div>
        <h4 class="title"><router-link :to="getUrl">{{title}}</router-link></h4>
        <router-link class="btn-theme btn-sm" :to="getUrl">Read More</router-link>
      </div>
    </div>
    <!--== End Blog Item ==-->
  </div>
</template>

<script>
export default {
name: "BlogItem",
  props: ["id", "title", "image", "date"],
  computed: {
    getUrl(){
      return `/blog-details/${this.id}`;
    }
  }
}
</script>

<style scoped>

</style>