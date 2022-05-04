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
          @click="handleOk"
        >
          Submit
        </button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <div class="py-2 px-4 bg-white rounded-lg border">
        <label for="editor" class="sr-only">Publish post</label>
        <textarea
          id="editor"
          rows="8"
          class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Write an article..."
          required
        ></textarea>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CreateReview",
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
      handleCancel
    };
  }
};
</script>
