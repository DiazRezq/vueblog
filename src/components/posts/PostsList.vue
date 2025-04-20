<template>
  <div v-for="post in posts" :key="post.id">
    <div class="post-preview">
      <Postsingle :post="post" />
    </div>
  </div>
  <hr />
</template>

<script>
import Postsingle from "./Postsingle.vue";
export default {
  props: ["posts"],
  components: { Postsingle },
};
</script>
