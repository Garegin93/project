<script lang="ts" setup>
import InputText from "primevue/InputText";
import Password from "primevue/password";
import Button from "primevue/button";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {submitRequest} from "@/utilities/submitRequest";
import type {ISubmitData} from "@/interfaces/submit";

const router = useRouter();

const loginformData = ref<ISubmitData>({
  userName: "",
  password: ""
})

</script>

<template>
  <div class="shadow-2xl rounded-lg p-5 max-w-[25rem] w-full">
    <p class="text-4xl mb-4 text-center text-green-800">Sign in</p>
    <form @submit.prevent>
      <div class="flex flex-col gap-4 mb-4">
        <div class="flex flex-col gap-1">
          <label
              class="text-xs text-green-800"
              for="username">
            Username
          </label>
          <InputText
              id="username"
              v-model="loginformData.userName"
              class="text-sm"
              placeholder="Enter your username"
              required/>
        </div>
        <div class="flex flex-col gap-1">
          <label
              class="text-xs text-green-800"
              for="password">
            Password
          </label>
          <Password
              id="password"
              v-model="loginformData.password"
              input-class="grow pr-0 text-sm"
              placeholder="Enter your password"
              required
              toggle-mask/>
        </div>
        <Button
            :disabled="!loginformData.userName || !loginformData.password"
            class="flex justify-center items-center"
            type="submit"
            @click="submitRequest(loginformData,'')">
          Sign in
        </Button>
      </div>
      <span class="text-sm">Not a member?</span>
      <Button
          class="pb-0"
          label="Register now"
          link
          size="small"
          @click="router.push('/register')"/>
    </form>
  </div>
</template>
