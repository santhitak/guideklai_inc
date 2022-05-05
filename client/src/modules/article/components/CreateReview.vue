<template>
  <div>
    <button
      @click="showModal"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
    >
      Write Review
    </button>
    <a-modal v-model:visible="visible" title="Title" @ok="handleOk">
      <template #footer>
        <button
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          key="back"
          @click="handleCancel"
        >
          Return
        </button>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          key="submit"
          type="primary"
          
          :loading="loading"
          @click="postArticle"
        >
          Submit
        </button>
      </template>
      <div>
        <div>
          <a-radio-group v-model:value="typeArticle" button-style="solid">
            <a-radio-button value="Tour">Tour</a-radio-button>
            <a-radio-button value="Guide">Guide</a-radio-button>
            <a-radio-button value="Hotel">Hotel</a-radio-button>
            <a-radio-button value="Attraction">Attraction</a-radio-button>
          </a-radio-group>
          
        </div>       
        <p>Title</p>
        <a-input v-model:value="title" show-count :maxlength="60" />
        <p>IMG</p>

        <div class="clearfix">
          <a-upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            :fileList="fileList"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div>
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
          <a-modal
            :visible="previewVisible"
            :footer="null"
            @cancel="handleCancelIMG"
          >
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </div>



        <div class="py-2 px-4 bg-white rounded-lg border">
          <label for="editor" class="sr-only">Publish post</label>
          <textarea
            id="editor"
            rows="8"
            v-model="information"
            class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write an article..."
            required
          ></textarea>
          {{user}}5555
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "CreateReview",
  props: ["user"],
  data() {
    return {
      editToggle: -1,
      typeArticle: "",
      title: "",
      previewVisible: false,
      previewImage: "",
      images:[],
      fileList: [
        {
          uid: -1,
          name: "xxx.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ],
      information: "",
      // editCommentMessage: "",
      // articles: [],
      // comments: [],
      // articleTour: [],
      // articleType: [],
      // articleAttraction: [],
      // articleRest: [],
      // star: [],
      // language:[],
      // type: "",
      // category: "",
      // commentInput: "",
      // article_id: this.$route.params.id,
    };
  },
  setup() {
    const loading = ref(false);
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        visible.value = false;
      }, 2000);
    };

    const handleCancel = () => {
      visible.value = false;
    };

    return {
      loading,
      visible,
      showModal,
      handleOk,
      handleCancel,
    };
  },
  methods: {
    getTypeArticle(type) {
      this.typeArticle = type;
    },
    handleCancelIMG() {
      this.previewVisible = false;
    },
    handlePreview(file) {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
    async postArticle() {
      axios
        .post(
          `http://localhost:4000/create/article/${this.typeArticle}/105`,
          {
            type_article: "Review",
            information: this.information,
            // image: this.fileList[0].url,
            image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/554be868741469.5bd69d5754b57.jpg",
            title: this.title
          }
        )
        .then((response) => {
          
          this.previewVisible = false;
          // console.log(this.typeArticle)
          this.typeArticle = "";
          this.information = "";
          this.fileList = [];
          this.title = "";
          
          console.log(response)
          // this.handleCancelIMG;
          // this.comments.push(response.data);
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
};
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
