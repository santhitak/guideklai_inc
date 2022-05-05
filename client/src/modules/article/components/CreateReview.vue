<template>
  <div>
    <button
      @click="showModal"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
    >
      Write Review
    </button>
    <a-modal v-model:visible="visible" title="Write Review" width="60%">
      <div>
        <div>
          <a-radio-group v-model:value="typeArticle" button-style="solid">
            <a-radio-button value="Tour">Tour</a-radio-button>
            <a-radio-button value="Guide">Guide</a-radio-button>
            <a-radio-button value="Hotel">Hotel</a-radio-button>
            <a-radio-button value="Attraction">Attraction</a-radio-button>
          </a-radio-group>
        </div>
        <p class="text-gray-900 font-medium mt-2">Title</p>
        <a-input v-model:value="title" show-count :maxlength="60" />
        <p class="text-gray-900 font-medium mt-2">Attach images</p>
        <input
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mr-2 mb-2"
          ref="file"
          name="file"
          type="file"
          multiple
          @change="selectImages"
          style="padding-right: 1rem"
        />
        <RedAlert v-if="msg !== ''">{{ msg }}</RedAlert>
        <div v-if="images" class="flex flex-col">
          <div v-for="(image, index) in images" :key="image.id">
            <div>
              <img
                class="rounded-lg my-4"
                style="width: 200px; height: auto"
                :src="showSelectImage(image)"
                alt="Placeholder image"
              />
              <button
                @click="deleteSelectImage(index)"
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div class="py-2 my-3 px-4 bg-white rounded-lg border">
          <textarea
            rows="8"
            v-model="content"
            class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
      <template #footer>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          @click="postArticle"
        >
          Submit
        </button>
      </template>
    </a-modal>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import RedAlert from "@/components/shared/Alert/RedAlert";

export default {
  name: "CreateReview",
  components: { RedAlert },
  props: ["user"],
  data() {
    return {
      visible: false,
      typeArticle: "",
      title: "",
      content: "",
      images: [],
      previewImage: "",
      msg: ""
    };
  },
  methods: {
    showModal() {
      return (this.visible = true);
    },
    selectImages(event) {
      this.images = event.target.files;
    },
    showSelectImage(image) {
      return URL.createObjectURL(image);
    },
    deleteSelectImage(index) {
      console.log(this.images);
      this.images = Array.from(this.images);
      this.images.splice(index, 1);
    },
    async postArticle() {
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("type", this.typeArticle);
      for (const item of this.images) {
        formData.append("file", item);
      }
      axios
        .post(
          `http://localhost:4000/create/article/review/${this.user.member_id}`, formData
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>
