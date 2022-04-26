<template>
  <aside class="w-64" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
      >Review</span
      >
      <ul class="space-y-1 my-4">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Restaurants</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Tour</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Guide</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Rest</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Attraction</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Store</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
      >
        Rating
      </span>
      <div class="my-4">
        <a
          href="#"
          class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
        >
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
          <EmptyStar />
          <p class="ml-2 text-sm font-medium text-gray-500">
            & up
          </p>
        </a>
        <a
          href=" #" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
        >
          <FullStar />
          <FullStar />
          <FullStar />
          <EmptyStar />
          <EmptyStar />
          <p class="ml-2 text-sm font-medium text-gray-500">
            & up
          </p>
        </a>
        <a
          href="#"
          class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FullStar />
          <FullStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <p class="ml-2 text-sm font-medium text-gray-500">
            & up
          </p>
        </a>
        <a
          href="#"
          class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FullStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <p class="ml-2 text-sm font-medium text-gray-500">& up</p>
        </a>
      </div>
    </div>
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
      >Suitability</span
      >
      <fieldset class="my-4">
        <legend class="sr-only">age</legend>
        <div class="flex items-center mb-4">
          <input
            checked
            id="suitable_all"
            type="radio"
            name="suitable"
            value="everyone"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_all"
            aria-describedby="suitable_all"
          />
          <label
            for="suitable_all"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Everyone
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="suitable_elder"
            type="radio"
            name="suitable"
            value="elder"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_elder"
            aria-describedby="suitable_elder"
          />
          <label
            for="suitable_elder"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Elder
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="suitable_adult"
            type="radio"
            name="suitable"
            value="adult"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_adult"
            aria-describedby="suitable_adult"
          />
          <label
            for="suitable_adult"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Adult
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="suitable_teen"
            type="radio"
            name="suitable"
            value="teen"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_teen"
            aria-describedby="suitable_teen"
          />
          <label
            for="suitable_teen"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Teen
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="suitable_kid"
            type="radio"
            name="suitable"
            value="kid"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_kid"
            aria-describedby="suitable_kid"
          />
          <label
            for="suitable_kid"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Kid
          </label>
        </div>
      </fieldset>
    </div>
  </aside>
</template>

<script>
import FullStar from "@/components/shared/Filter/components/FullStar";
import EmptyStar from "@/components/shared/Filter/components/EmptyStar";

export default {
  name: "Filterbar",
  components: { EmptyStar, FullStar }
};
</script>
