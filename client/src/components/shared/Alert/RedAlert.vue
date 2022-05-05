<template>
  <div
    class="border border-red-600 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
    role="alert"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RedAlert"
};
</script>
