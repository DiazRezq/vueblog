<template>
  <div class="posts-list">
    <div v-for="post in posts" :key="post.id">
      <Postsingle :post="post" />
    </div>
  </div>
</template>

<script>
import Postsingle from "./Postsingle.vue";
export default {
  props: ["posts"],
  components: { Postsingle },
};
</script>
