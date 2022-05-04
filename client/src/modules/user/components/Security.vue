<template>
  <div>
    <div style="margin: 0 5rem">
      <InfoAlert
        v-if="evidences === []"
        message="Please verify your account to post or reviews"
      />
      <div class="flex">
        <p class="font-bold text-2xl">Verify Account</p>
        <VerifyGreen v-if="!evidences" />
      </div>
      <div v-for="item in evidences" v-bind:key="item.evidence_id">
        <div v-if="!item.image">
          <p class="font-medium text-gray-400">
            Upload your identity card to verify.
          </p>
          <a-upload-dragger
            v-model:fileList="fileList"
            name="file"
            :multiple="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            @change="handleChange"
            @drop="handleDrop"
            style="width: 500px; margin-top: 2rem"
          >
            <p class="ant-upload-drag-icon">
              <inbox-outlined />
            </p>
            <p class="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p class="ant-upload-hint">
              Support for a single upload. Strictly prohibit from uploading
              company data or other band files
            </p>
          </a-upload-dragger>
        </div>
        <div v-else>
          <img :src="item.image" class="rounded-lg" alt="" style="width: 450px; height: auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "@/plugins/axios";
import { message } from "ant-design-vue";
import { InboxOutlined } from "@ant-design/icons-vue";
import VerifyGreen from "@/components/shared/VerifyGreen";
import InfoAlert from "@/components/shared/Alert/InfoAlert";

export default {
  name: "Security",
  props: ["user"],
  components: { VerifyGreen, InfoAlert, InboxOutlined },
  data() {
    return {
      evidences: [],
      evi_img: ""
    };
  },
  created() {
    this.getEvi();
  },
  methods: {
    async getEvi() {
      try {
        await axios
          .get(
            `http://localhost:4000/manage_account/evidence/${this.user.member_id}`
          )
          .then((res) => {
            this.evidences = res.data[0];
          });
      } catch (err) {
        console.log(err);
      }
    },
    async postEvi() {
      try {
        await axios
          .post(
            `http://localhost:4000/manage_account/evidence/${this.user.member_id}`, { image: this.evi_img }
          )
          .then(() => {
            alert("Sent id validation");
          });
      } catch (err) {
        console.log(err);
      } finally {
        console.log("DONE!");
      }
    }
  },
  setup() {
    const handleChange = (info) => {
      const status = info.file.status;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    };

    return {
      handleChange,
      fileList: ref([]),
      handleDrop: (e) => {
        console.log(e);
      }
    };
  }
};
</script>

<style scoped></style>
