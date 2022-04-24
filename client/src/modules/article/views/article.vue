<template>
  <section style="height: auto; min-height: 100vh;">
    <div class="flex justify-between">
      <div class="flex-1">
        <Filterbar></Filterbar>
      </div>
      <div class="flex-auto grow">
        <PreviewArticle></PreviewArticle>
        <PreviewArticle></PreviewArticle>
      </div>
    </div>


  </section>
</template>

<script>

import Filterbar from "@/components/shared/Filter/Filterbar";
import PreviewArticle from "@/components/shared/PreviewArticle";

export default {
  name: "Article",
  components: { Filterbar, PreviewArticle },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
