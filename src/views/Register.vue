<script lang="ts" setup>
import InputText from "primevue/InputText";
import Password from "primevue/password";
import Button from "primevue/button";
import {computed, ref, type UnwrapRef} from "vue";
import type {ISubmitData} from "@/interfaces/submit";
import {useRouter} from "vue-router";
import {submitRequest} from "@/utilities/submitRequest";

const router = useRouter()

const registerformData = ref<UnwrapRef<ISubmitData>>({
  userName: "",
  email: "",
  password: ""
})

const isValidEmail = computed<boolean>(() => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (registerformData.value.email)
    return re.test(registerformData.value.email);
  return false
});

const isSubmitButtonDisabled = computed(() => {
  const {userName, email, password} = registerformData.value;
  return !userName || !email || !password || !isValidEmail.value
});

</script>

<template>
  <div class="shadow-2xl rounded-lg p-5 max-w-[25rem] w-full">
    <p class="text-4xl mb-4 text-center text-green-800">Sign up</p>
    <form @submit.prevent>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label
              class="text-xs text-green-800"
              for="username">
            Username
          </label>
          <InputText
              id="username"
              v-model="registerformData.userName"
              class="text-sm"
              placeholder="Enter your username"
              required/>
        </div>
        <div class="flex flex-col gap-1">
          <label
              class="text-xs text-green-800"
              for="email">
            Email
          </label>
          <InputText
              id="email"
              v-model="registerformData.email"
              class="text-sm"
              placeholder="example@domain.com"
              required/>
          <span
              v-if="registerformData.email && !isValidEmail"
              class="text-red-500 text-xs">
            Invalid email address
          </span>
        </div>
        <div class="flex flex-col gap-1">
          <label
              class="text-xs text-green-800"
              for="password">
            Password
          </label>
          <Password
              id="password"
              v-model="registerformData.password"
              input-class="grow pr-0 text-sm"
              placeholder="Enter your password"
              required
              toggle-mask/>
        </div>
        <Button
            :disabled="isSubmitButtonDisabled"
            class="flex justify-center items-center"
            type="submit"
            @click="submitRequest(registerformData, '')">
          Sign up
        </Button>
      </div>
      <span class="text-sm">Already have an account?</span>
      <Button
          class="pb-0"
          label="Sign in"
          link
          size="small"
          @click="router.push('/login')"/>
    </form>
  </div>
</template>
