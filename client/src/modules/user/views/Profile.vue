<template>
  <div>
    <div class="centered">
      <div class="banner" />
      <div class="profile_avatar" style="user-select: none">
        <p class="font-semibold text-white text-4xl" style="margin: 0">
          {{ user.username.substr(0, 1) }}
        </p>
      </div>
      <div class="flex">
        <p class="font-semibold text-3xl my-3">
          {{ user.firstname + " " + user.lastname }}
        </p>
        <VerifyGreen
          v-if="user.verify_status && user.type_member === 'Entrepreneur'"
          style="margin-top: 1.6rem"
        />
        <VerifyBlue
          v-if="user.verify_status && user.type_member === 'Member'"
          style="margin-top: 1.6rem"
        />
      </div>
      <p
        class="font-semibold text-lg text-gray-500"
        style="margin-top: -0.5rem"
      >
        @{{ user.username }}
      </p>
    </div>
    <section>
      <div class="flex justify-between mt-10">
        <BriefInfo :user="user" />
        <RecentPost :user="user" />
      </div>
    </section>
  </div>
</template>

<script>
import VerifyGreen from "@/components/shared/VerifyGreen";
import VerifyBlue from "@/components/shared/VerifyBlue";
import RecentPost from "@/modules/user/components/RecentPost";
import BriefInfo from "@/modules/user/components/BriefInfo";

export default {
  name: "Profile",
  props: ["user"],
  components: { BriefInfo, RecentPost, VerifyBlue, VerifyGreen }
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
