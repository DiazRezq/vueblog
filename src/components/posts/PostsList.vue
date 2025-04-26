<template>
  <div v-for="post in posts" :key="post.id">
    <div class="post-preview">
      <Postsingle :post="post" />
    </div>
    <hr />
  </div>
</template>

<script>
import Postsingle from "@/components/posts/Postsingle.vue";
export default {
  props: ["posts"],
  components: { Postsingle },
};
</script>
