<template>
  <FrontendLayout>

    <h1>Welcome to Frontend</h1>
   <Link href="/home">Home</Link>
   <Link href="/about">About</Link>
   <Link href="/contact">Contact</Link>



  </FrontendLayout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import FrontendLayout from '../../Layouts/Frontend/FrontendLayout.vue'
</script>
