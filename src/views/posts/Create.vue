<template>
  <header
    class="masthead"
    style="
      background-image: url('static/img/contact-bg.jpg');
      padding-top: 100px;
      padding-bottom: 50px;
    "
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="page-heading">
            <h1>Create new Post</h1>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <form @submit.prevent="handleSubmit">
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Title</label>
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Title"
                required
                v-model="title"
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Body</label>
              <textarea
                rows="5"
                name="message"
                class="form-control"
                placeholder="input body"
                required
                v-model="body"
              ></textarea>
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Tags</label>
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Input Tags"
                id="name"
                v-model="tag"
                @keydown.enter.prevent="handleKeydown"
              />
              <p class="help-block text-danger"></p>
            </div>
            <span
              ><div v-for="tag in tags" :key="tag">#{{ tag }}</div></span
            >
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
export default {
  setup() {
    const router = useRouter();
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, "");

        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      try {
        const newPost = {
          title: title.value,
          body: body.value,
          tags: tags.value,
          createdAt: new Date(),
        };

        await addDoc(collection(db, "posts"), newPost);

        router.push({ name: "home" });
      } catch (error) {
        console.error("Gagal menambahkan post:", error);
        alert("Terjadi kesalahan saat menyimpan post.");
      }
    };
    
    return {
      title,
      body,
      tags,
      tag,
      handleKeydown,
      handleSubmit,
    };
  },
};
</script>

<style>
.masthead {
  padding-top: 100px;
  padding-bottom: 50px;
}

.main-content {
  margin-top: 30px;
}
</style>
