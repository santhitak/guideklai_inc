<template>
  <div>
    <button
      @click="showModal"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
    >
      Write Post
    </button>
    <a-modal v-model:visible="visible" title="Title" width="60%">
      <template #footer>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          key="submit"
          type="primary"
          :loading="loading"
          @click="postArticle()"
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
        <div class="" v-if="typeArticle === 'Tour'">
          <p class="font-semibold text-gray-600 mt-2">Title</p>
          <a-input v-model:value="title" show-count :maxlength="60" />
          <p class="font-semibold text-gray-600 mt-2">Province</p>
          <a-select style="width: 200px" placeholder="Select Province">
            <a-select-option
              v-for="option in options"
              v-bind:key="option.id"
              @click="indexProvince = option.id"
            >{{ option.value }}
            </a-select-option>
          </a-select>
          <p class="font-semibold text-gray-600 mt-2">Price</p>
          <a-input
            prefix="฿"
            type="number"
            suffix="Baht"
            v-model:value="price"
          />
          <p class="font-semibold text-gray-600 mt-2">Language</p>
          <a-checkbox-group v-model:value="language_id">
            <a-row>
              <a-col :span="8">
                <a-checkbox value="1">Thai</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="2">English</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="3">Chinese</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="4">Korean</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="5">Japanese</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="6">German</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="7">French</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="8">Lao</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="9">Burmese</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
          <p class="font-semibold text-gray-600 mt-2">Attach images</p>
          <input
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mr-2 mb-4"
            ref="file"
            name="file"
            type="file"
            multiple
            @change="selectImages"
            style="padding-right: 1rem"
          />
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
          <div class="py-2 px-4 bg-white rounded-lg border">
            <textarea
              rows="8"
              v-model="information"
              class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write an article..."
              required
            ></textarea>
          </div>
        </div>
        <div class="" v-if="typeArticle === 'Guide'">
          <p class="font-semibold text-gray-600 mt-2">Title</p>
          <a-input v-model:value="title" show-count :maxlength="60" />
          <p class="font-semibold text-gray-600 mt-2">Price</p>
          <a-input
            prefix="฿"
            type="number"
            suffix="Baht"
            v-model:value="price"
          />
          <p class="font-semibold text-gray-600 mt-2">Age</p>
          <a-input type="number" maxlength="100" v-model:value="age" />
          <p class="font-semibold text-gray-600 mt-2">Gender</p>
          <a-select
            style="width: 200px"
            placeholder="Select Gender"
            v-model="gender"
          >
            <a-select-option value="male">Male</a-select-option>
            <a-select-option value="female">Female</a-select-option>
            <a-select-option value="non">Rather not say</a-select-option>
          </a-select>
          <p class="font-semibold text-gray-600 mt-2">Language</p>
          <a-checkbox-group v-model:value="language_id">
            <a-row>
              <a-col :span="8">
                <a-checkbox value="1">Thai</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="2">English</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="3">Chinese</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="4">Korean</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="5">Japanese</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="6">German</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="7">French</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="8">Lao</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="9">Burmese</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
          <p class="font-semibold text-gray-600 mt-2">Attach images</p>
          <input
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mr-2 mb-4"
            ref="file"
            name="file"
            type="file"
            multiple
            @change="selectImages"
            style="padding-right: 1rem"
          />
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
          <div class="py-2 px-4 bg-white rounded-lg border">
            <textarea
              rows="8"
              v-model="information"
              class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write an article..."
              required
            ></textarea>
          </div>
        </div>
      </div>
      <div class="" v-if="typeArticle === 'Hotel'">
        <p class="font-semibold text-gray-600 mt-2">Title</p>
        <a-input v-model:value="title" show-count :maxlength="60" />
        <p class="font-semibold text-gray-600 mt-2">Province</p>
        <a-select style="width: 200px" placeholder="Select Province">
          <a-select-option
            v-for="option in options"
            v-bind:key="option.id"
            @click="indexProvince = option.id"
          >{{ option.value }}
          </a-select-option>
        </a-select>
        <p class="font-semibold text-gray-600 mt-2">Lower Price:</p>
        <a-input
          prefix="฿"
          type="number"
          suffix="Baht"
          v-model:value="lowerPrice"
        />
        <p class="font-semibold text-gray-600 mt-2">Higher Price:</p>
        <a-input
          prefix="฿"
          type="number"
          suffix="Baht"
          v-model:value="higherPrice"
        />
        <p class="font-semibold text-gray-600 mt-2">Attach images</p>
        <input
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mr-2 mb-4"
          ref="file"
          name="file"
          type="file"
          multiple
          @change="selectImages"
          style="padding-right: 1rem"
        />
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
        <div class="py-2 px-4 bg-white rounded-lg border">
          <textarea
            rows="8"
            v-model="information"
            class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
      <div class="" v-if="typeArticle === 'Attraction'">
        <p class="font-semibold text-gray-600 mt-2">Title</p>
        <a-input v-model:value="title" show-count :maxlength="60" />
        <p class="font-semibold text-gray-600 mt-2">Province</p>
        <a-select style="width: 200px" placeholder="Select Province">
          <a-select-option
            v-for="option in options"
            v-bind:key="option.id"
            @click="indexProvince = option.id"
          >{{ option.value }}
          </a-select-option>
        </a-select>
        <p class="font-semibold text-gray-600 mt-2">Office Hour</p>
        <a-input v-model:value="officeHour" />
        <p class="font-semibold text-gray-600 mt-2">Price:</p>
        <a-input prefix="฿" type="number" suffix="Baht" v-model:value="price" />
        <p class="font-semibold text-gray-600 mt-2">Attach images</p>
        <input
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mr-2 mb-4"
          ref="file"
          name="file"
          type="file"
          multiple
          @change="selectImages"
          style="padding-right: 1rem"
        />
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
        <div class="py-2 px-4 bg-white rounded-lg border">
          <textarea
            rows="8"
            v-model="information"
            class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "CreatePost",
  props: ["user"],
  data() {
    return {
      visible: false,
      officeHour: "",
      lowerPrice: 0,
      higherPrice: 0,
      age: 0,
      gender: "",
      price: 0,
      indexProvince: 0,
      options: [],
      province: 0,
      typeArticle: "",
      title: "",
      previewVisible: false,
      previewImage: "",
      provinceList: [],
      information: "",
      images: []
    };
  },
  created() {
    this.getProvince();
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
      formData.append("type", this.typeArticle);
      formData.append("language", this.language_id);
      formData.append("province", parseInt(this.indexProvince));
      formData.append("price", parseInt(this.price));
      formData.append("information", this.information);
      formData.append("title", this.title);
      formData.append("office_hour", this.officeHour);
      formData.append("age", parseInt(this.age));
      formData.append("gender", this.gender);
      formData.append("lowerprice", parseInt(this.lowerPrice));
      formData.append("higherprice", parseInt(this.higherPrice));
      for (const item of this.images) {
        formData.append("file", item);
      }
      try {
        await axios.post(
          `http://localhost:4000/create/article/promote/${this.user.member_id}`,
          formData
        );
        location.reload();
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async getProvince() {
      try {
        const response = await axios.get(`http://localhost:4000/province`);
        this.provinceList = response.data;
        for (let i = 0; i < this.provinceList.length; i++) {
          const value = this.provinceList[i].province_name;
          const id = this.provinceList[i].province_id;
          this.options.push({
            value,
            id
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    handleCancelIMG() {
      this.previewVisible = false;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    }
  }
};
</script>
