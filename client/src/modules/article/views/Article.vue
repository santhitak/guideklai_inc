<template>
  <section style="height: auto; min-height: 100vh">
    <div>
      <PreviewArticle></PreviewArticle>
    </div>
  </section>
</template>

<script>
import PreviewArticle from "@/components/shared/PreviewArticle";

export default {
  name: "Article",
  components: { PreviewArticle },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
