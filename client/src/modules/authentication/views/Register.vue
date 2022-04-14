<template>
  <section class="bg-gray-50">
    <div
      style="
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;
      "
    >
      <div
        class="rounded-lg shadow-md flex justify-between items-end"
        style="
          width: 80%;
          background-position: 100% 10%;
          background-image: url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v904-nunny-004.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=419940fc6baf1c6a20e20b10dbaf34f9');
        "
      >
        <div>
          <div
            class="max-w-md bg-white rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-8"
            style="min-width: 40vw"
          >
            <form class="p-8 space-y-6">
              <div class="divide-y">
                <div class="pb-6">
                  <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                    Sign up
                  </h5>
                </div>
                <div class="pt-6 flex flex-col justify-center">
                  <div class="mb-6">
                    <label
                      for="role"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >What do you use this account for?</label
                    >
                    <select
                      id="role"
                      v-model="role"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="member">Member</option>
                      <option value="entrepreneur">Entrepreneur</option>
                    </select>
                  </div>
                  <div class="flex">
                    <div class="mb-6 mr-3 w-1/2">
                      <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        v-model="first_name"
                        class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your first name"
                        required=""
                      />
                    </div>
                    <div class="mb-6 w-1/2">
                      <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        v-model="last_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your last name"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="flex">
                    <div class="mb-6 mr-3 w-1/2">
                      <label
                        for="emailAddress"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="emailAddress"
                        v-model="emailAddress"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your email"
                        required=""
                      />
                    </div>
                    <div class="mb-6 w-1/2">
                      <label
                        for="phone"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        v-model="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your phone number"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="mb-6">
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      v-model="password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Create your password"
                      required=""
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="password_confirm"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Confirm Your Password
                    </label>
                    <input
                      type="password"
                      id="password_confirm"
                      v-model="password_confirm"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Confirm your password"
                      required=""
                    />
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id="checkbox-1"
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked
                    />
                    <label
                      for="checkbox-1"
                      class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree to the
                      <a
                        href="#"
                        class="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        terms and conditions
                      </a></label
                    >
                  </div>
                  <button
                    type="submit"
                    @click="register"
                    class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <div class="text-sm my-6">
                Already have an account?
                <a href="#" @click="login" class="text-blue-600">Sign In</a>
              </div>
            </form>
          </div>
        </div>
        <div style="width: 100%">
          <div class="text-left text-white p-8">
            <h3 class="font-medium text-5xl">Travel<br />With<br />Us :)</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "../../../routes";
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      role: "member",
      first_name: null,
      last_name: null,
      emailAddress: null,
      phone: null,
      password: null,
      password_confirm: null,
      checkedPass: false,
    };
  },
  computed: {
    computedUsername() {
      return Math.random()
        .toString(36)
        .substring(2, this.first_name.length + 4);
    },
  },
  methods: {
    login() {
      router.push("/auth/login");
    },
    validPhone() {
      return this.phone.length !== 10
        ? alert("please input the correct phone number")
        : null;
    },
    validPass() {
      if (this.password < 6) {
        alert("password must be longer than 6");
      }
      return this.password !== this.password_confirm
        ? alert("password do not match")
        : null;
    },
    async register() {
      this.validPhone();
      this.validPass();
      try {
        await axios.post("http://localhost:4000/auth/register", {
          firstname: this.first_name,
          lastname: this.last_name,
          username: this.computedUsername,
          password: this.password,
          email: this.emailAddress,
          phone_number: this.phone,
          type_member: this.role,
        });
        console.log(
          this.computedUsername +
            " " +
            this.emailAddress +
            " is now a/an " +
            this.role
        );
      } catch (err) {
        console.log(err);
      } finally {
        console.log("DONE!");
        await router.push("/");
      }
    },
  },
};
</script>

<style scoped></style>
