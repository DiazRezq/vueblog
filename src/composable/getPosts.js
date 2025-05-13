import { ref } from "vue";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await getDocs(collection(db, "posts"));
      posts.value = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        Tags: doc.data().Tags,
      }));
    } catch (err) {
      error.value = "Firebase error: " + err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
