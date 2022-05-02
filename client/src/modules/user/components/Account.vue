<template>
  <div style="margin: 0 5rem">
    <p class="font-bold text-2xl">Profile update</p>
    {{ user }}
    <FlexColCenter>
      <a-space :size="size / 2" direction="vertical">
        <a-space :size="size">
          <FlexColCenter>
            <a-space direction="vertical" align="center" :size="size - 15">
              <a-avatar
                :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }"
              >
                <template #icon>
                  <img
                    src="https://pbs.twimg.com/media/FOuHWvdWUAUmuY7.jpg"
                    alt=""
                  />
                </template>
              </a-avatar>
              <a-upload
                v-model:file-list="fileList"
                list-type="picture"
                :max-count="1"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              >
                <a-button>
                  <upload-outlined></upload-outlined>
                  Upload new profile picture
                </a-button>
              </a-upload>
            </a-space>
          </FlexColCenter>
          <div class="space-y-6" style="width: 25vw">
            <div class="">
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                {{ user.username }}
              </label>
              <div class="flex">
                <span
                  class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
                >
                  @
                </span>
                <input
                  type="text"
                  id="username"
                  class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie Green"
                />
              </div>
            </div>
            <div>
              <label
                for="email-address-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your Email</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    ></path>
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
            </div>
          </div>
        </a-space>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          style="margin: 3rem 0"
        >
          Confirm Changes
        </button>
      </a-space>
    </FlexColCenter>
  </div>
</template>

<script>
import FlexColCenter from "@/components/containers/FlexColCenter";
import { UploadOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { ref } from "vue";
import axios from "@/plugins/axios";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  name: "Account",
  props: ["user"],
  components: {
    FlexColCenter,
    UploadOutlined
  },
  data() {
    return {
      user_log: []
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const user = await axios.get(
          `http://localhost:4000/manage_account/${this.user.username}`
        );
        this.user_log = user.data;
      } catch (err) {
        console.log(err);
      }
    }
  },
  setup() {
    const fileList = ref([]);
    const loading = ref(false);
    const imageUrl = ref("");

    const handleChange = (info) => {
      if (info.file.status === "uploading") {
        loading.value = true;
        return;
      }

      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (base64Url) => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
      }

      if (info.file.status === "error") {
        loading.value = false;
        message.error("upload error");
      }
    };

    const beforeUpload = (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";

      if (!isJpgOrPng) {
        message.error("You can only upload JPG file!");
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }

      return isJpgOrPng && isLt2M;
    };

    return {
      fileList,
      loading,
      imageUrl,
      handleChange,
      beforeUpload,
      size: ref(50)
    };
  }
};
</script>
