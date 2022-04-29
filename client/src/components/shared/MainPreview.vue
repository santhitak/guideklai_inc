<template>
  <div class="text-gray-600 body-font" style="width: 450px;">
    <div class="py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div
            class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPreview"
};
</script>

<style scoped></style>
