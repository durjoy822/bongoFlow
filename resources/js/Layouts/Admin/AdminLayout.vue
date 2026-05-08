<template>
  <div class="admin-wrapper">
    <AdminSidebar />
    <div class="admin-content">
      <AdminNavbar />
      <main class="admin-main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from './AdminSidebar.vue'
import AdminNavbar from './AdminNavbar.vue'
</script>
