<script>
export default {

}
</script>
<template>
<aside id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-mark">M+</div>
      <div class="sidebar-logo-text">
        MediCore
        <span>Hospital Management</span>
      </div>
    </div>

    <nav class="sidebar-nav">
      <div class="sidebar-section-title">Main</div>

      <a class="nav-link active" data-page="dashboard">
        <i class="bi bi-grid-1x2-fill"></i>
        <span class="sidebar-label">Dashboard</span>
      </a>

      <!-- Patients dropdown -->
      <div class="has-sub">
        <a class="nav-link">
          <i class="bi bi-person-heart"></i>
          <span class="sidebar-label">Patients</span>
          <span class="badge-nav sidebar-label">248</span>
        </a>
        <div class="sub-menu">
          <a class="nav-link" data-page="category">Patient List</a>
          <a class="nav-link">Appointments</a>
          <a class="nav-link">Admissions</a>
        </div>
      </div>

      <a class="nav-link">
        <i class="bi bi-gear"></i>
        <span class="sidebar-label">Settings</span>
      </a>
    </nav>

    <div class="sidebar-footer">
      <div class="user-card dropdown" id="userDropdown" data-bs-toggle="dropdown">
        <div class="user-avatar">DR</div>
        <div class="sidebar-label">
          <div class="user-name">Dr. Rahman</div>
          <div class="user-role">Administrator</div>
        </div>
        <i class="bi bi-three-dots-vertical ms-auto sidebar-label text-muted"></i>
      </div>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <a class="dropdown-item" href="#"
            ><i class="bi bi-person me-2"></i>My Profile</a
          >
        </li>
        <li>
          <a class="dropdown-item" href="#"
            ><i class="bi bi-shield-lock me-2"></i>Security</a
          >
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <a class="dropdown-item text-danger" href="#"
            ><i class="bi bi-box-arrow-right me-2"></i>Logout</a
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>

</style>
