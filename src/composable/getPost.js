import { ref } from "vue";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Tag from "@/views/posts/Tag.vue";  

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const isLoading = ref(false); // Tambahan state loading

  const load = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      if (!id) throw new Error("ID tidak valid");

      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error(`Post dengan ID ${id} tidak ditemukan`);
      }

      post.value = {
        id: docSnap.id,
        ...docSnap.data(),
        Tags: docSnap.data().Tags,
      };
    } catch (err) {
      error.value = err.message;
      console.error("Error mengambil post:", err);
    } finally {
      isLoading.value = false;
    }
  };

  return { post, error, isLoading, load };
};

export default getPost;
