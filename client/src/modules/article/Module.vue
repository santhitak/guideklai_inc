<template>
  <div>
    <router-view :user="user" />
  </div>
</template>

<script>
export default {
    props: ["user"]
}
</script>
