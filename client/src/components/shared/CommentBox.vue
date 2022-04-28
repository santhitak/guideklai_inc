<template>
        <div class="mt-4">
        <form>
          <div
            class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          >
            <div
              class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600"
            >
              <div
                class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600"
              >
                <div class="flex items-center space-x-1 sm:pr-4">
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
              <label for="editor" class="sr-only">Publish post</label>
              <textarea
                id="editor"
                rows="8"
                class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Leave comment"
                required=""
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Comment
          </button>
        </form>
      </div>
</template>

<script>
export default {
  name: "CommentBox",
};
</script>