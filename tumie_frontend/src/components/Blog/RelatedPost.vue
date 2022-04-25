<template>
  <div class="single-post" @click="loadPost">
    <div class="post-thumb">
      <router-link :to="getUrl">
        <img :src="image" width="80" height="98" alt="Image-HasTech">
      </router-link>
    </div>
    <div class="post-content">
      <span class="date" style="color: #721b65;">{{date}}</span>
      <h6 class="title">
        <router-link :to="getUrl">{{title}}</router-link>
      </h6>
    </div>
  </div>
</template>

<script>
export default {
name: "RelatedPost",
  props: ["id", "title", "date", "image"],
  methods: {
    loadPost(){
      this.$store.dispatch("posts/loadPost", this.id);
    }
  },
  computed: {
    getUrl(){
      return "/blog-details/" + this.id;
    }
  }
}
</script>

<style scoped>

</style>