<script>
export default {

}
</script>
<template>
 <nav id="navbar">
      <!-- Mobile hamburger + brand -->
      <button
        class="nav-icon-btn me-1 d-lg-none"
        id="mobile-menu-btn"
        style="border: none"
      >
        <i class="bi bi-list" style="font-size: 1.25rem"></i>
      </button>
      <div class="navbar-brand-mobile d-lg-none">
        <div class="logo-mark" style="width: 28px; height: 28px; font-size: 0.8rem">
          M+
        </div>
        MediCore
      </div>

      <!-- Desktop collapse btn -->
      <button
        class="nav-icon-btn d-none d-lg-flex"
        id="collapse-btn"
        style="border: none"
      >
        <i class="bi bi-layout-sidebar"></i>
      </button>

      <!-- Search -->
      <div class="search-box d-none d-md-block">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search patients, doctors, bills…" />
      </div>

      <div class="navbar-actions">
        <!-- Notifications -->
        <div class="dropdown">
          <div class="nav-icon-btn" data-bs-toggle="dropdown">
            <i class="bi bi-bell"></i>
            <span class="notif-dot"></span>
          </div>
          <ul
            class="dropdown-menu dropdown-menu-end"
            style="min-width: 300px; padding: 0"
          >
            <li style="padding: 12px 16px; border-bottom: 1px solid var(--border)">
              <strong style="font-family: var(--font-head); font-size: 0.95rem"
                >Notifications</strong
              >
            </li>
            <li>
              <a class="dropdown-item py-3" href="#">
                <div class="d-flex gap-2 align-items-start">
                  <div
                    class="activity-dot"
                    style="
                      background: var(--primary-light);
                      color: var(--primary);
                      width: 32px;
                      height: 32px;
                      border-radius: 8px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-shrink: 0;
                    "
                  >
                    <i class="bi bi-person-plus"></i>
                  </div>
                  <div>
                    <div style="font-size: 0.85rem; font-weight: 500">
                      New patient admitted
                    </div>
                    <div style="font-size: 0.75rem; color: var(--muted)">
                      2 minutes ago
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item py-3" href="#">
                <div class="d-flex gap-2 align-items-start">
                  <div
                    class="activity-dot"
                    style="
                      background: rgba(240, 78, 107, 0.1);
                      color: var(--danger);
                      width: 32px;
                      height: 32px;
                      border-radius: 8px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-shrink: 0;
                    "
                  >
                    <i class="bi bi-exclamation-triangle"></i>
                  </div>
                  <div>
                    <div style="font-size: 0.85rem; font-weight: 500">
                      Lab report ready - Ward 4
                    </div>
                    <div style="font-size: 0.75rem; color: var(--muted)">
                      15 minutes ago
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item py-3" href="#">
                <div class="d-flex gap-2 align-items-start">
                  <div
                    class="activity-dot"
                    style="
                      background: var(--accent-light);
                      color: var(--accent);
                      width: 32px;
                      height: 32px;
                      border-radius: 8px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-shrink: 0;
                    "
                  >
                    <i class="bi bi-capsule"></i>
                  </div>
                  <div>
                    <div style="font-size: 0.85rem; font-weight: 500">
                      Stock low: Paracetamol 500mg
                    </div>
                    <div style="font-size: 0.75rem; color: var(--muted)">1 hour ago</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <!-- Dark mode toggle -->
        <div class="nav-icon-btn" id="theme-toggle" title="Toggle theme">
          <i class="bi bi-moon"></i>
        </div>

        <!-- Profile -->
        <div class="dropdown">
          <div
            class="user-avatar dropdown-toggle"
            style="cursor: pointer; width: 36px; height: 36px; font-size: 0.82rem"
            data-bs-toggle="dropdown"
          >
            DR
          </div>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#"
                ><i class="bi bi-person me-2"></i>Profile</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#"
                ><i class="bi bi-gear me-2"></i>Settings</a
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
      </div>
    </nav>
</template>

<style scoped>

</style>
