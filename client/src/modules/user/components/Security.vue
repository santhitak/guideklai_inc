<template>
  <div style="margin: 0 5rem">
    <InfoAlert message="Please verify your account to post or reviews" />
    <p class="font-bold text-2xl">Verify Account</p>
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
        <inbox-outlined></inbox-outlined>
      </p>
      <p class="ant-upload-text">Click or drag file to this area to upload</p>
      <p class="ant-upload-hint">
        Support for a single upload. Strictly prohibit from uploading company
        data or other band files
      </p>
    </a-upload-dragger>
  </div>
</template>

<script>
import { InboxOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { ref } from "vue";
import InfoAlert from "@/components/shared/Alert/InfoAlert";

export default {
  name: "Security",
  components: { InfoAlert, InboxOutlined },
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
