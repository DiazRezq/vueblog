<template>
  <!-- Page Header  -->
  <header
    class="masthead"
    style="
      background-image:../components/posts/PostsList.vuesh.com/photo-1470092306007-055b6797ca72?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80');
    "
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Heydar's Blog</h1>
            <span class="subheading"
              >A collection of Heydar's random musings.</span
            >
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
          <PostsList :posts="posts" />
        </div>
        <div v-else>
          <Loading />
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from "../components/posts/PostsList.vue";
import getPosts from "@/composable/getPosts";
import Loading from "@/components/Loading.vue";
export default {
  name: "Home",
  components: { PostsList, Loading },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
  mounted() {
    console.log($(".para").text());
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
