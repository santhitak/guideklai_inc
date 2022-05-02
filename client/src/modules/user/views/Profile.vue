<template>
  <div>
    <div class="centered">
      <div class="banner" />
      <div class="profile_avatar"><p>{{ user.username }}</p></div>
    </div>
    <section></section>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["user"],
  components: {}
};
</script>

<style scoped>
.banner {
  width: 100vw;
  height: 30vh;
  background-color: grey;
  background-image: url("https://a-static.besthdwallpaper.com/sunrise-illustration-wallpaper-3840x2160-81331_54.jpg");
  background-position: -150px;
}

.profile_avatar {
  width: 150px;
  height: 150px;
  background-color: #e1e2e7;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px #f6f6f6 solid;
  margin-top: -5rem;
}

.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
}
</style>
