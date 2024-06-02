<script lang="ts" setup>
import {RouterView, useRouter} from 'vue-router'
import {onMounted} from "vue";

const router = useRouter()

onMounted(() => {
  router.push("/login")
})
</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen p-4 img-container">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="slide">
        <component
            :is="Component"
            :key="$route.path"/>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity .5s, transform .5s;
  }

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  }
</style>
