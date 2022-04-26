<template>
  <div>
    <MostViewed />
    <MostRating />
  </div>
</template>

<script>
import MostViewed from "@/modules/home/components/MostViewed";
import MostRating from "@/modules/home/components/MostRating";

export default {
  name: "HomePage",
  components: { MostRating, MostViewed }
};
</script>

<style scoped>

</style>