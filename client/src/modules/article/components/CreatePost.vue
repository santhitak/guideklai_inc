<template>
  <div>
    <button
      @click="showModal"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
    >
      Write ReviewPost
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
          <!-- {{provinceList}} -->
          <p>TitleTour {{user}}</p>
          
          <a-input v-model:value="title" show-count :maxlength="60" />
          <p>Province</p> 
        <a-select style="width: 200px" placeholder="Select Province">
         
        <a-select-option v-for="option in options" v-bind:key="option.id" @click="indexProvince = option.id">{{option.value}}</a-select-option>
        </a-select>
         <p>Price:</p>
         <a-input prefix="฿" type="number" suffix="Baht" v-model:value="price"/>
          <p>Language</p>
           <a-checkbox-group v-model:value="language_id">
              <a-row>
                <a-col :span="8">
                  <a-checkbox value=1>Thai</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=2>English</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=3>Chinese</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=4>Korean</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=5>Japanese</a-checkbox>
                </a-col>
                 <a-col :span="8">
                  <a-checkbox value=6>German</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=7>French</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=8>Lao</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=9>Burmese</a-checkbox>
                </a-col>
              </a-row>
            </a-checkbox-group>
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
            <textarea
              id="editor"
              rows="8"
              v-model="information"
              class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write an article..."
              required
            ></textarea>
            {{ user }}
          </div>
        </div>
        <div class="" v-if="typeArticle === 'Guide'">
          <p>TitleGuide</p>
          <a-input v-model:value="title" show-count :maxlength="60" />
        <p>Price:</p>
         <a-input prefix="฿" type="number" suffix="Baht" v-model:value="price"/>
          <p>Age:</p>
         <a-input type="number" maxlength="100" v-model:value="age"/>
         <p>Gender:</p>
           <a-select style="width: 200px" placeholder="Select Gender">

         <a-select-option @click="gender = 'male'">Male</a-select-option>
          <a-select-option @click="gender = 'female'">Female</a-select-option>
           <a-select-option @click="gender = 'ETC'">ETC</a-select-option>
           </a-select>
           <p>Language</p>
           <a-checkbox-group v-model:value="language_id">
              <a-row>
                <a-col :span="8">
                  <a-checkbox value=1>Thai</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=2>English</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=3>Chinese</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=4>Korean</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=5>Japanese</a-checkbox>
                </a-col>
                 <a-col :span="8">
                  <a-checkbox value=6>German</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=7>French</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=8>Lao</a-checkbox>
                </a-col>
                <a-col :span="8">
                  <a-checkbox value=9>Burmese</a-checkbox>
                </a-col>
              </a-row>
            </a-checkbox-group>
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
            <textarea
              id="editor"
              rows="8"
              v-model="information"
              class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write an article..."
              required
            ></textarea>
            {{ user }}
          </div>
        </div>
        <div class="" v-if="typeArticle === 'Hotel'">
          <p>TitleHotel</p>
          <a-input v-model:value="title" show-count :maxlength="60" />
           <p>Province</p> 
        <a-select style="width: 200px" placeholder="Select Province">
         
        <a-select-option v-for="option in options" v-bind:key="option.id" @click="indexProvince = option.id">{{option.value}}</a-select-option>
        </a-select>
        <p>Lower Price:</p>
         <a-input prefix="฿" type="number" suffix="Baht" v-model:value="lowerPrice"/>
         <p>Higher Price:</p>
         <a-input prefix="฿" type="number" suffix="Baht" v-model:value="higherPrice"/>
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
            <textarea
              id="editor"
              rows="8"
              v-model="information"
              class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write an article..."
              required
            ></textarea>
            {{ user }}
          </div>
        </div>
        <div class="" v-if="typeArticle === 'Attraction'">
          <p>TitleAttraction</p>
          <a-input v-model:value="title" show-count :maxlength="60" />
            <p>Province</p> 
        <a-select style="width: 200px" placeholder="Select Province">
         
        <a-select-option v-for="option in options" v-bind:key="option.id" @click="indexProvince = option.id">{{option.value}}</a-select-option>
        </a-select>
        <p>Office Hour</p>
          <a-input v-model:value="officeHour"  />
           <p>Price:</p>
         <a-input prefix="฿" type="number" suffix="Baht" v-model:value="price"/>
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
            <textarea
              id="editor"
              rows="8"
              v-model="information"
              class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write an article..."
              required
            ></textarea>
            {{ user }}
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "CreatePost",
  props: ["user"],
  data() {
    return {
      officeHour:"",
      lowerPrice:0,
      higherPrice:0,
      age:0,
      gender:"",
      price:0,
      indexProvince: 0,
      options: [],
      province:0,
      typeArticle: "",
      title: "",
      previewVisible: false,
      previewImage: "",
      provinceList: [],
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
    
     const popupScroll = () => {
      console.log('popupScroll');
    };
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
       popupScroll,
      size: ref('default'),
      value1: ref(''),
      
      language_id:ref([]),
      loading,
      visible,
      showModal,
      handleOk,
      handleCancel,
    };
  },
  created() {
    this.getProvince();
  },
  methods: {
    async postArticle() {
      try {
        await axios.post(
          `http://localhost:4000/create/article/Promote/105`,
          {
            type: this.typeArticle,
            language: this.language_id,
            province: parseInt(this.indexProvince),
            price: parseInt(this.price),
            information: this.information,
            title: this.title,
            office_hour: this.officeHour,
            age: parseInt(this.age),
            gender: this.gender,
            lowerprice:  parseInt(this.lowerPrice),
            higherprice: parseInt(this.higherPrice)
          }
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
          const value =   this.provinceList[i].province_name;
          const id =  this.provinceList[i].province_id;
          this.options.push({
            value,
            id
          });
        }              
      } catch (err) {
        console.log(err);
      }
    },
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
  },
};
</script>
