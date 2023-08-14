<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Student</RouterLink>
      <RouterLink to="/about">advisor</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
