<template>
  <div class="w-full">
    <a
      href="#"
      style="min-height: 10rem; justify-content: space-evenly"
      class="min-w-full mb-3 flex justify-evenly items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <img
        class="object-cover mx-4 h-96 rounded-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://i.kym-cdn.com/entries/icons/original/000/039/679/fishscreamingwar.jpg"
        alt=""
      />
      <div class="flex flex-col p-4 leading-normal">
        <div class="flex justify-between">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
          <p
            class="h-6 mt-2 bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded"
          >
            8.7
          </p>
        </div>
        <p class="mb-3 font-normal text-gray-600">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "PreviewArticle"
};
</script>
