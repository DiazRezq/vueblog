<template>
  <div v-if="error">{{ error }}></div>
  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
    <button @click="handleDelete">Hapus Postingan</button>
  </div>

  <div v-else>
    <Loading />
  </div>
</template>

<script>
import getPost from "@/composable/getPost";
import Loading from "../../components/Loading.vue";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useRoute, useRouter } from "vue-router";
export default {
  props: ["id"],
  components: { Loading },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const { post, error, load } = getPost(props.id);
    const handleDelete = async () => {
      const confirmDelete = confirm("Yakin ingin menghapus postingan ini?");
      if (!confirmDelete) return;
      router.push({ name: "home" });

      try {
        await deleteDoc(doc(db, "posts", route.params.id));
        alert("Post berhasil dihapus.");
        router.push({ name: "home" });
      } catch (error) {
        console.error("Gagal menghapus:", error);
        alert("Terjadi kesalahan saat menghapus data.");
      }
    };

    load();

    return { post, error, handleDelete };
  },
};
</script>
