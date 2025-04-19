<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostsList :posts="posts" />
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList.vue";
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
