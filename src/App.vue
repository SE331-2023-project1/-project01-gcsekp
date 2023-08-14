<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/management.png" width="125" height="125" />
    <div class="wrapper">
      <nav class="font-mono text-yellow-300">
        <RouterLink to="/">Student</RouterLink> |
        <RouterLink to="/about">advisor</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
