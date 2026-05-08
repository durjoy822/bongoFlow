<template>
  <div class="frontend-wrapper">
    <FrontendNavbar />
    <main>
      <slot />
    </main>
    <FrontendFooter />
  </div>
</template>

<script setup>
import FrontendNavbar from './FrontendNavbar.vue';
import FrontendFooter from './FrontendFooter.vue'
</script>
