<template>
  <div>
    <div style="margin: 0 5rem">
      <InfoAlert
        v-if="user.verify_status !== 'verify'"
        message="Please verify your account to post or reviews"
      />
      <div class="flex">
        <p class="font-bold text-2xl">Verify Account</p>
        <div v-if="user.verify_status === 'verify'">
          <VerifyGreen v-if="user.type_member === 'Entrepreneur'" />
          <VerifyBlue v-else />
        </div>
      </div>
      <div v-if="user.verify_status !== 'verify'">
        <p class="font-medium text-gray-400">
          Upload your identity card to verify.
        </p>
        <input
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mr-2 mb-2"
          ref="file"
          name="file"
          @change="onSelect"
          type="file"
          style="padding-right: 1rem"
        />
        <button
          @click="onSubmit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          submit
        </button>
        <RedAlert v-if="msg !== ''" style="width: 50vw">
          <p class="font-medium" style="margin: 0.5rem 0">{{ msg }}</p>
        </RedAlert>
        <img
          class="rounded-lg"
          style="width: 500px; height: auto"
          :src="display"
          alt=""
        />
      </div>
      <div v-for="item in evidences" v-bind:key="item.evidence_id">
        <div>
          <img
            class="rounded-lg"
            style="width: 500px; height: auto"
            :src="`http://localhost:4000/static/verify/${item.image}`"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import VerifyGreen from "@/components/shared/VerifyGreen";
import InfoAlert from "@/components/shared/Alert/InfoAlert";
import VerifyBlue from "@/components/shared/VerifyBlue";
import RedAlert from "@/components/shared/Alert/RedAlert";

export default {
  name: "Security",
  props: ["user"],
  components: { RedAlert, VerifyBlue, VerifyGreen, InfoAlert },
  data() {
    return {
      evidences: [],
      file: "",
      msg: "",
      display: ""
    };
  },
  created() {
    this.getEvi();
  },
  methods: {
    onSelect() {
      const allowedTypes = ["image/jpeg", "image/jpg"];
      this.file = this.$refs.file.files[0];
      console.log(this.file);
      if (!allowedTypes.includes(this.file.type)) {
        this.msg = "Please insert only image file";
      }
      if (this.file.size > 500000) {
        this.msg = "Too large, max size allowed is 500KB";
      }
      this.display = URL.createObjectURL(this.file);
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);
      try {
        await axios.post(`/member/verify/${this.user.member_id}`, formData);
        console.log("uploaded");
        location.reload();
      } catch (err) {
        console.log(err);
      }
    },
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
    }
  }
};
</script>
