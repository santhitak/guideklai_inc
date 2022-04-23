<template>
  <section style="height: auto; min-height: 100vh;">
    <h1 style="font-size: 48px; font-weight: bolder">
      Hi, this is a Article page
    </h1>
    <div class="flex">
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

import Filterbar from "@/components/shared/Filterbar";
import PreviewArticle from "@/components/shared/PreviewArticle";
export default {
  name: "Article",
  components: { Filterbar, PreviewArticle },
  data() {
    return {
    };
  },
};
</script>

<style scoped></style>
