<template>
  <!-- ═══ SIDEBAR ══════════════════════════════════════════ -->
  <AdminSidebar/>

  <!-- Sidebar overlay (mobile) -->
  <div id="sidebar-overlay"></div>

  <!-- ═══ MAIN WRAPPER ══════════════════════════════════════ -->
  <div id="wrapper">
    <!-- ─── NAVBAR ──────────────────────────────────────── -->
   <AdminNavbar/>

    <!-- ═══ MAIN CONTENT ══════════════════════════════════ -->
    <main class="main-content">
      <!-- ─── DASHBOARD PAGE ───────────────────────────── -->
      <slot/>

    </main>
  </div>
</template>

<script setup>
import AdminSidebar from "./AdminSidebar.vue";
import AdminNavbar from "./AdminNavbar.vue";

import { onMounted } from "vue";

onMounted(() => {
  /* ═══ SIDEBAR ════════════════════════════════════════ */

  const collapseBtn = document.getElementById("collapse-btn");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");

  // Desktop collapse
  if (collapseBtn) {
    collapseBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  // Mobile menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
      sidebarOverlay.classList.toggle("show");
    });
  }

  // Overlay close
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("mobile-open");
      sidebarOverlay.classList.remove("show");
    });
  }

  /* ═══ SUB MENU ═══════════════════════════════════════ */

  document.querySelectorAll(".has-sub > .nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const parent = link.closest(".has-sub");

      if (parent) {
        parent.classList.toggle("open");
      }
    });
  });

  /* ═══ PAGE ROUTING ═══════════════════════════════════ */

  function showPage(name) {
    document.querySelectorAll(".page-section").forEach((section) => {
      section.classList.remove("active");
    });

    const page = document.getElementById("page-" + name);

    if (page) {
      page.classList.add("active");
    }

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    const activeLink = document.querySelector(`[data-page="${name}"]`);

    if (activeLink) {
      activeLink.classList.add("active");
    }

    sidebar.classList.remove("mobile-open");
    sidebarOverlay.classList.remove("show");
  }

  document.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const page = btn.dataset.page;

      if (page) {
        showPage(page);
      }
    });
  });

  document.querySelectorAll("[data-page-link]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const page = btn.dataset.pageLink;

      if (page) {
        showPage(page);
      }
    });
  });

  /* ═══ DARK MODE ══════════════════════════════════════ */

  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const html = document.documentElement;

      const isDark = html.getAttribute("data-theme") === "dark";

      html.setAttribute("data-theme", isDark ? "light" : "dark");

      const icon = themeToggle.querySelector("i");

      if (icon) {
        icon.classList.toggle("bi-moon");
        icon.classList.toggle("bi-sun");
      }
    });
  }
});
</script>
