<template>
<div>
  <div v-for="articles in Article" class="w-full" v-bind:key="articles.article_id">
    <div style="display: flex; align-items: center;" class="flex-col">
      <h1 class="text-xl font-black">{{articles.title}}</h1>
      <img style="width: 800px;" :src="articles.image" alt="">
    </div>
    <div class="mt-4">
      <p class="text-left">{{articles.information}}</p>
    </div>
    
<!-- comment box -->
<div class="mt-4">
  <form>
    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
    <div class="flex items-center space-x-1 sm:pr-4">
    <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
    </div>
    </div>
    <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
    <label for="editor" class="sr-only">Publish post</label>
    <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required=""></textarea>
    </div>
    </div>
    <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
    Comment
    </button>
</form>
</div>
  </div>
  <!-- comment -->
  <div class="mt-4">
    <article v-for="comments in Comment" v-bind:key="comments.article_id" class="md:gap-8 md:grid md:grid-cols-3">
    <div>
        <div class="flex items-center mb-6 space-x-4">
            <img class="w-10 h-10 rounded-full" :src="comments.profile_pic" alt="">
            <div class="space-y-1 font-medium dark:text-white">
                <p>{{comments.firstname+" "+comments.lastname}}</p>
            </div>
        </div>
    </div>
    <div class="col-span-2 mt-6 md:mt-0">
        <div class="flex items-start mb-5">
            <div class="pr-4">
                <footer>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Reviewed: <time datetime="2022-01-20 19:00">January 20, 2022</time></p>
                </footer>
            </div>
        </div>
        <p class="text-bold text-black mb-2 dark:text-gray-400">{{comments.comment}}</p>
    </div>
</article>
  </div>
  
  
</div>

  
</template>

<script>

import axios from "axios";
export default {
  name: "ShowArticleDetail",
  data() {
    return {
      Article: [],
      Comment:[],
      articleid: this.$route.params.id
    };
  },
  created() {
    this.getArticle();
    this.getComment();
  },
  methods: {
    async getArticle() {
      try {
        const response = await axios.get(`http://localhost:4000/article/${this.articleid}`);
        this.Article = response.data;
        console.log(this.Article)
      } catch (err) {
        console.log(err);
      }
    },
    async getComment() {
      try {
        const comment = await axios.get(`http://localhost:4000/article/comment/${this.articleid}`);
        this.Comment = comment.data;
        console.log(this.Article)
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
