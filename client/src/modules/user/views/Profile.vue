<template>
  <div>
    <div class="centered">
      <div class="banner" />
      <div class="profile_avatar"><p class="font-semibold text-white text-4xl" style="margin: 0">
        {{ user.username.substr(0, 1)
        }}</p>
      </div>
    </div>
    <section>
    </section>
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
  background-color: #ccc;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px white solid;
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
