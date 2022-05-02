<template>
  <section style="height: auto; min-height: 100vh">
    <div class="flex justify-between">
      <div class="flex-auto grow">
        <ShowArticleDetail :user="user" />
      </div>
    </div>
  </section>
</template>

<script>
import ShowArticleDetail from "@/components/shared/ShowArticleDetail";

export default {
  name: "ArticleDetail",
  props: ["user"],
  components: { ShowArticleDetail },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
