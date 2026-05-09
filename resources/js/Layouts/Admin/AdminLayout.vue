<template>
 <!-- ═══ SIDEBAR ══════════════════════════════════════════ -->
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

    <!-- Doctors dropdown -->
    <div class="has-sub">
      <a class="nav-link">
        <i class="bi bi-hospital"></i>
        <span class="sidebar-label">Doctors</span>
      </a>
      <div class="sub-menu">
        <a class="nav-link">Doctor List</a>
        <a class="nav-link">Schedules</a>
        <a class="nav-link">Departments</a>
      </div>
    </div>

    <a class="nav-link" data-page="components">
      <i class="bi bi-calendar2-week"></i>
      <span class="sidebar-label">Appointments</span>
      <span class="badge-nav sidebar-label">12</span>
    </a>

    <div class="sidebar-section-title">Clinical</div>

    <div class="has-sub">
      <a class="nav-link">
        <i class="bi bi-capsule"></i>
        <span class="sidebar-label">Pharmacy</span>
      </a>
      <div class="sub-menu">
        <a class="nav-link">Medicines</a>
        <a class="nav-link" data-page="category">Categories</a>
        <a class="nav-link">Stock</a>
      </div>
    </div>

    <a class="nav-link">
      <i class="bi bi-clipboard2-pulse"></i>
      <span class="sidebar-label">Lab Tests</span>
    </a>

    <a class="nav-link">
      <i class="bi bi-activity"></i>
      <span class="sidebar-label">OPD / IPD</span>
    </a>

    <div class="sidebar-section-title">Finance</div>

    <a class="nav-link">
      <i class="bi bi-receipt"></i>
      <span class="sidebar-label">Billing</span>
    </a>
    <a class="nav-link">
      <i class="bi bi-cash-stack"></i>
      <span class="sidebar-label">Accounts</span>
    </a>

    <div class="sidebar-section-title">Settings</div>

    <a class="nav-link" data-page="components">
      <i class="bi bi-grid-3x3-gap"></i>
      <span class="sidebar-label">Components</span>
    </a>
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
      <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>My Profile</a></li>
      <li><a class="dropdown-item" href="#"><i class="bi bi-shield-lock me-2"></i>Security</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item text-danger" href="#"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
    </ul>
  </div>
</aside>

<!-- Sidebar overlay (mobile) -->
<div id="sidebar-overlay"></div>

<!-- ═══ MAIN WRAPPER ══════════════════════════════════════ -->
<div id="wrapper">

  <!-- ─── NAVBAR ──────────────────────────────────────── -->
  <nav id="navbar">
    <!-- Mobile hamburger + brand -->
    <button class="nav-icon-btn me-1 d-lg-none" id="mobile-menu-btn" style="border:none">
      <i class="bi bi-list" style="font-size:1.25rem"></i>
    </button>
    <div class="navbar-brand-mobile d-lg-none">
      <div class="logo-mark" style="width:28px;height:28px;font-size:.8rem">M+</div>
      MediCore
    </div>

    <!-- Desktop collapse btn -->
    <button class="nav-icon-btn d-none d-lg-flex" id="collapse-btn" style="border:none">
      <i class="bi bi-layout-sidebar"></i>
    </button>

    <!-- Search -->
    <div class="search-box d-none d-md-block">
      <i class="bi bi-search"></i>
      <input type="text" placeholder="Search patients, doctors, bills…">
    </div>

    <div class="navbar-actions">
      <!-- Notifications -->
      <div class="dropdown">
        <div class="nav-icon-btn" data-bs-toggle="dropdown">
          <i class="bi bi-bell"></i>
          <span class="notif-dot"></span>
        </div>
        <ul class="dropdown-menu dropdown-menu-end" style="min-width:300px;padding:0">
          <li style="padding:12px 16px;border-bottom:1px solid var(--border)">
            <strong style="font-family:var(--font-head);font-size:.95rem">Notifications</strong>
          </li>
          <li><a class="dropdown-item py-3" href="#">
            <div class="d-flex gap-2 align-items-start">
              <div class="activity-dot" style="background:var(--primary-light);color:var(--primary);width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="bi bi-person-plus"></i></div>
              <div><div style="font-size:.85rem;font-weight:500">New patient admitted</div><div style="font-size:.75rem;color:var(--muted)">2 minutes ago</div></div>
            </div>
          </a></li>
          <li><a class="dropdown-item py-3" href="#">
            <div class="d-flex gap-2 align-items-start">
              <div class="activity-dot" style="background:rgba(240,78,107,.1);color:var(--danger);width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="bi bi-exclamation-triangle"></i></div>
              <div><div style="font-size:.85rem;font-weight:500">Lab report ready - Ward 4</div><div style="font-size:.75rem;color:var(--muted)">15 minutes ago</div></div>
            </div>
          </a></li>
          <li><a class="dropdown-item py-3" href="#">
            <div class="d-flex gap-2 align-items-start">
              <div class="activity-dot" style="background:var(--accent-light);color:var(--accent);width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="bi bi-capsule"></i></div>
              <div><div style="font-size:.85rem;font-weight:500">Stock low: Paracetamol 500mg</div><div style="font-size:.75rem;color:var(--muted)">1 hour ago</div></div>
            </div>
          </a></li>
        </ul>
      </div>

      <!-- Dark mode toggle -->
      <div class="nav-icon-btn" id="theme-toggle" title="Toggle theme">
        <i class="bi bi-moon"></i>
      </div>

      <!-- Profile -->
      <div class="dropdown">
        <div class="user-avatar dropdown-toggle" style="cursor:pointer;width:36px;height:36px;font-size:.82rem" data-bs-toggle="dropdown">DR</div>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Profile</a></li>
          <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Settings</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item text-danger" href="#"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- ═══ MAIN CONTENT ══════════════════════════════════ -->
  <main class="main-content">

    <!-- ─── DASHBOARD PAGE ───────────────────────────── -->
    <h2>Dashboard page </h2>

    <!-- ─── COMPONENTS PAGE ──────────────────────────── -->
    <section class="page-section" id="page-components">
      <div class="page-header">
        <div class="page-title">UI Components</div>
        <nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item">Home</li><li class="breadcrumb-item active">Components</li></ol></nav>
      </div>

      <div class="row g-3">
        <!-- Buttons -->
        <div class="col-12">
          <div class="card">
            <div class="card-header"><i class="bi bi-toggles me-1"></i>Buttons</div>
            <div class="card-body comp-section mb-0">
              <h5>Variants</h5>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <button class="btn btn-primary">Primary</button>
                <button class="btn btn-success">Success</button>
                <button class="btn btn-danger">Danger</button>
                <button class="btn btn-warning">Warning</button>
                <button class="btn btn-info text-white">Info</button>
                <button class="btn btn-secondary">Secondary</button>
                <button class="btn btn-dark">Dark</button>
                <button class="btn btn-light border">Light</button>
              </div>
              <h5>Outline</h5>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <button class="btn btn-outline-primary">Primary</button>
                <button class="btn btn-outline-success">Success</button>
                <button class="btn btn-outline-danger">Danger</button>
                <button class="btn btn-outline-warning">Warning</button>
                <button class="btn btn-outline-secondary">Secondary</button>
              </div>
              <h5>Sizes & Icon Buttons</h5>
              <div class="d-flex flex-wrap align-items-center gap-2">
                <button class="btn btn-primary btn-lg">Large</button>
                <button class="btn btn-primary">Default</button>
                <button class="btn btn-primary btn-sm">Small</button>
                <button class="btn btn-icon btn-primary"><i class="bi bi-plus"></i></button>
                <button class="btn btn-icon btn-outline-primary"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-icon btn-outline-danger"><i class="bi bi-trash"></i></button>
                <button class="btn btn-primary" disabled>Disabled</button>
                <button class="btn btn-primary"><span class="spinner-border spinner-border-sm me-1"></span>Loading…</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Badges / Pills -->
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header"><i class="bi bi-tag me-1"></i>Badges & Pills</div>
            <div class="card-body">
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span class="badge bg-primary">Primary</span>
                <span class="badge bg-success">Success</span>
                <span class="badge bg-danger">Danger</span>
                <span class="badge bg-warning">Warning</span>
                <span class="badge bg-info">Info</span>
                <span class="badge bg-secondary">Secondary</span>
              </div>
              <div class="d-flex flex-wrap gap-2">
                <span class="pill pill-success"><i class="bi bi-check-circle"></i>Admitted</span>
                <span class="pill pill-danger"><i class="bi bi-x-circle"></i>Critical</span>
                <span class="pill pill-warning"><i class="bi bi-clock"></i>Pending</span>
                <span class="pill pill-primary"><i class="bi bi-arrow-left-right"></i>Discharged</span>
                <span class="pill pill-info"><i class="bi bi-hospital"></i>OPD</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Alerts -->
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header"><i class="bi bi-bell me-1"></i>Alerts</div>
            <div class="card-body d-flex flex-column gap-2">
              <div class="alert alert-primary d-flex align-items-center gap-2 mb-0" role="alert"><i class="bi bi-info-circle-fill"></i><span>Patient <strong>Arif Khan</strong> appointment confirmed.</span></div>
              <div class="alert alert-success d-flex align-items-center gap-2 mb-0" role="alert"><i class="bi bi-check-circle-fill"></i><span>Lab results uploaded successfully.</span></div>
              <div class="alert alert-warning d-flex align-items-center gap-2 mb-0" role="alert"><i class="bi bi-exclamation-triangle-fill"></i><span>Pharmacy stock running low.</span></div>
              <div class="alert alert-danger d-flex align-items-center gap-2 mb-0" role="alert"><i class="bi bi-exclamation-octagon-fill"></i><span>Emergency in ICU — Ward 2!</span></div>
            </div>
          </div>
        </div>

        <!-- Modern Form -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header"><i class="bi bi-ui-checks me-1"></i>Form Elements</div>
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Full Name</label>
                <div class="input-group">
                  <span class="input-group-text"><i class="bi bi-person"></i></span>
                  <input type="text" class="form-control" placeholder="Patient full name">
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Email Address</label>
                <input type="email" class="form-control" placeholder="doctor@hospital.com">
              </div>
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <label class="form-label">Date of Birth</label>
                  <input type="date" class="form-control">
                </div>
                <div class="col-6">
                  <label class="form-label">Blood Group</label>
                  <select class="form-select">
                    <option>Select…</option>
                    <option>A+</option><option>A-</option><option>B+</option>
                    <option>B-</option><option>O+</option><option>O-</option>
                    <option>AB+</option><option>AB-</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Department</label>
                <select class="form-select">
                  <option>Choose department</option>
                  <option>Cardiology</option><option>Neurology</option><option>Orthopedic</option><option>Pediatrics</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Notes</label>
                <textarea class="form-control" rows="3" placeholder="Patient notes…"></textarea>
              </div>
              <div class="mb-3 d-flex gap-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="chk1" checked>
                  <label class="form-check-label" for="chk1">Active</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="r1" id="r1" checked>
                  <label class="form-check-label" for="r1">OPD</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="r1" id="r2">
                  <label class="form-check-label" for="r2">IPD</label>
                </div>
              </div>
              <button class="btn btn-primary w-100">Save Patient</button>
            </div>
          </div>
        </div>

        <!-- Color Palette + Cards -->
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="card-header"><i class="bi bi-palette me-1"></i>Color Palette</div>
            <div class="card-body">
              <div class="d-flex flex-wrap gap-2">
                <div title="Primary" class="color-swatch" style="background:var(--primary)"></div>
                <div title="Accent" class="color-swatch" style="background:var(--accent)"></div>
                <div title="Danger" class="color-swatch" style="background:var(--danger)"></div>
                <div title="Warning" class="color-swatch" style="background:var(--warning)"></div>
                <div title="Success" class="color-swatch" style="background:var(--success)"></div>
                <div title="Surface" class="color-swatch" style="background:var(--surface2);border:2px solid var(--border)"></div>
                <div title="Border" class="color-swatch" style="background:var(--border)"></div>
                <div title="Muted" class="color-swatch" style="background:var(--muted)"></div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header"><i class="bi bi-card-list me-1"></i>Info Cards</div>
            <div class="card-body d-flex flex-column gap-2">
              <div style="background:var(--primary-light);border-radius:10px;padding:14px;display:flex;align-items:center;gap:12px">
                <div style="background:var(--primary);color:#fff;width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center"><i class="bi bi-person-badge"></i></div>
                <div><div style="font-weight:600;font-size:.9rem">Dr. Sajeda Ali</div><div style="font-size:.78rem;color:var(--muted)">Head of Cardiology · On Duty</div></div>
                <span class="pill pill-success ms-auto">Active</span>
              </div>
              <div style="background:var(--accent-light);border-radius:10px;padding:14px;display:flex;align-items:center;gap:12px">
                <div style="background:var(--accent);color:#fff;width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center"><i class="bi bi-capsule"></i></div>
                <div><div style="font-weight:600;font-size:.9rem">Paracetamol 500mg</div><div style="font-size:.78rem;color:var(--muted)">Stock: 1,240 units</div></div>
                <span class="pill pill-info ms-auto">In Stock</span>
              </div>
              <div style="background:rgba(240,78,107,.08);border-radius:10px;padding:14px;display:flex;align-items:center;gap:12px">
                <div style="background:var(--danger);color:#fff;width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center"><i class="bi bi-heart-pulse-fill"></i></div>
                <div><div style="font-weight:600;font-size:.9rem">Emergency — Bed 7</div><div style="font-size:.78rem;color:var(--muted)">Critical · Dr. Rahim on call</div></div>
                <span class="pill pill-danger ms-auto">Critical</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Full Data Table with toolbar -->
        <div class="col-12">
          <div class="card table-card">
            <div class="card-header justify-content-between flex-wrap gap-2">
              <span><i class="bi bi-table me-1"></i>Doctor Directory</span>
              <button class="btn btn-primary btn-sm"><i class="bi bi-plus me-1"></i>Add Doctor</button>
            </div>
            <div class="tbl-toolbar">
              <div class="tbl-search">
                <i class="bi bi-search"></i>
                <input type="text" id="comp-tbl-search" placeholder="Search doctors…">
              </div>
              <select class="form-select form-select-sm" style="width:auto">
                <option>All Departments</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedic</option>
              </select>
              <select class="form-select form-select-sm" style="width:auto">
                <option>All Status</option>
                <option>Active</option>
                <option>Off Duty</option>
              </select>
              <button class="btn btn-sm btn-outline-primary ms-auto"><i class="bi bi-download me-1"></i>Export</button>
            </div>
            <div class="table-responsive">
              <table class="table" id="comp-table">
                <thead>
                  <tr>
                    <th>#</th><th>Doctor</th><th>Specialty</th><th>Department</th><th>Patients</th><th>Status</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>#D001</td><td><div class="d-flex align-items-center gap-2"><div class="user-avatar" style="width:30px;height:30px;font-size:.7rem;background:linear-gradient(135deg,#0a6efd,#4facfe)">SA</div><div><div class="fw-500">Dr. Sajeda Ali</div><div style="font-size:.75rem;color:var(--muted)">sajeda@medicore.com</div></div></div></td><td>Cardiologist</td><td>Cardiology</td><td>34</td><td><span class="pill pill-success">Active</span></td><td><div class="d-flex gap-1"><button class="btn btn-icon btn-sm btn-outline-primary"><i class="bi bi-eye"></i></button><button class="btn btn-icon btn-sm btn-outline-warning"><i class="bi bi-pencil"></i></button><button class="btn btn-icon btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button></div></td></tr>
                  <tr><td>#D002</td><td><div class="d-flex align-items-center gap-2"><div class="user-avatar" style="width:30px;height:30px;font-size:.7rem;background:linear-gradient(135deg,#00cba9,#20e3b2)">MR</div><div><div class="fw-500">Dr. Masud Rana</div><div style="font-size:.75rem;color:var(--muted)">masud@medicore.com</div></div></div></td><td>Neurologist</td><td>Neurology</td><td>21</td><td><span class="pill pill-success">Active</span></td><td><div class="d-flex gap-1"><button class="btn btn-icon btn-sm btn-outline-primary"><i class="bi bi-eye"></i></button><button class="btn btn-icon btn-sm btn-outline-warning"><i class="bi bi-pencil"></i></button><button class="btn btn-icon btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button></div></td></tr>
                  <tr><td>#D003</td><td><div class="d-flex align-items-center gap-2"><div class="user-avatar" style="width:30px;height:30px;font-size:.7rem;background:linear-gradient(135deg,#f9a825,#f97316)">TI</div><div><div class="fw-500">Dr. Tanzina Islam</div><div style="font-size:.75rem;color:var(--muted)">tanzina@medicore.com</div></div></div></td><td>Orthopedic</td><td>Orthopedic</td><td>18</td><td><span class="pill pill-warning">Off Duty</span></td><td><div class="d-flex gap-1"><button class="btn btn-icon btn-sm btn-outline-primary"><i class="bi bi-eye"></i></button><button class="btn btn-icon btn-sm btn-outline-warning"><i class="bi bi-pencil"></i></button><button class="btn btn-icon btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button></div></td></tr>
                  <tr><td>#D004</td><td><div class="d-flex align-items-center gap-2"><div class="user-avatar" style="width:30px;height:30px;font-size:.7rem;background:linear-gradient(135deg,#f04e6b,#f97068)">AH</div><div><div class="fw-500">Dr. Anwar Hossain</div><div style="font-size:.75rem;color:var(--muted)">anwar@medicore.com</div></div></div></td><td>Pediatrician</td><td>Pediatrics</td><td>29</td><td><span class="pill pill-success">Active</span></td><td><div class="d-flex gap-1"><button class="btn btn-icon btn-sm btn-outline-primary"><i class="bi bi-eye"></i></button><button class="btn btn-icon btn-sm btn-outline-warning"><i class="bi bi-pencil"></i></button><button class="btn btn-icon btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button></div></td></tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex align-items-center justify-content-between px-4 py-3 flex-wrap gap-2" style="border-top:1px solid var(--border)">
              <span style="font-size:.82rem;color:var(--muted)">Showing 1–4 of 87 doctors</span>
              <nav><ul class="pagination pagination-sm mb-0 gap-1">
                <li class="page-item disabled"><a class="page-link" href="#" style="border-radius:8px;border:1px solid var(--border);background:var(--surface2);color:var(--muted)">‹</a></li>
                <li class="page-item active"><a class="page-link" href="#" style="border-radius:8px;background:var(--primary);border-color:var(--primary)">1</a></li>
                <li class="page-item"><a class="page-link" href="#" style="border-radius:8px;border:1px solid var(--border);background:var(--surface2);color:var(--text)">2</a></li>
                <li class="page-item"><a class="page-link" href="#" style="border-radius:8px;border:1px solid var(--border);background:var(--surface2);color:var(--text)">3</a></li>
                <li class="page-item"><a class="page-link" href="#" style="border-radius:8px;border:1px solid var(--border);background:var(--surface2);color:var(--text)">›</a></li>
              </ul></nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CATEGORY PAGE ────────────────────────────── -->
    <section class="page-section" id="page-category">
      <div class="page-header d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div>
          <div class="page-title">Patient Categories</div>
          <nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item">Home</li><li class="breadcrumb-item">Patients</li><li class="breadcrumb-item active">Categories</li></ol></nav>
        </div>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createModal"><i class="bi bi-plus me-1"></i>Add Category</button>
      </div>

      <!-- Summary Chips -->
      <div class="d-flex flex-wrap gap-2 mb-4">
        <div class="cat-chip"><i class="bi bi-grid" style="color:var(--primary)"></i>All <strong>8</strong></div>
        <div class="cat-chip"><i class="bi bi-check-circle" style="color:var(--success)"></i>Active <strong>6</strong></div>
        <div class="cat-chip"><i class="bi bi-pause-circle" style="color:var(--warning)"></i>Inactive <strong>2</strong></div>
      </div>

      <div class="card table-card">
        <div class="card-header justify-content-between flex-wrap gap-2">
          <span><i class="bi bi-list-ul me-1"></i>Category List</span>
          <span style="font-size:.82rem;color:var(--muted)">Total: 8 categories</span>
        </div>
        <div class="tbl-toolbar">
          <div class="tbl-search">
            <i class="bi bi-search"></i>
            <input type="text" id="cat-search" placeholder="Search categories…">
          </div>
          <select class="form-select form-select-sm" style="width:auto" id="cat-filter">
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button class="btn btn-sm btn-outline-primary ms-auto"><i class="bi bi-download me-1"></i>Export</button>
        </div>
        <div class="table-responsive">
          <table class="table" id="cat-table">
            <thead>
              <tr>
                <th><input type="checkbox" class="form-check-input"></th>
                <th>Name</th><th>Department</th><th>Patients</th><th>Priority</th><th>Status</th><th>Created</th><th>Actions</th>
              </tr>
            </thead>
            <tbody id="cat-tbody">
              <!-- Rows injected by JS -->
            </tbody>
          </table>
        </div>
        <div class="d-flex align-items-center justify-content-between px-4 py-3 flex-wrap gap-2" style="border-top:1px solid var(--border)">
          <span style="font-size:.82rem;color:var(--muted)" id="cat-count">Showing 8 of 8</span>
          <nav><ul class="pagination pagination-sm mb-0 gap-1">
            <li class="page-item disabled"><a class="page-link" href="#" style="border-radius:8px;border:1px solid var(--border);background:var(--surface2);color:var(--muted)">‹</a></li>
            <li class="page-item active"><a class="page-link" href="#" style="border-radius:8px;background:var(--primary);border-color:var(--primary)">1</a></li>
            <li class="page-item"><a class="page-link" href="#" style="border-radius:8px;border:1px solid var(--border);background:var(--surface2);color:var(--text)">›</a></li>
          </ul></nav>
        </div>
      </div>
    </section>

  </main>
</div>

<!-- ═══ CREATE CATEGORY MODAL ════════════════════════════ -->
<div class="modal fade" id="createModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><i class="bi bi-plus-circle me-2 text-primary"></i>Create Category</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body p-4">
        <div class="mb-3">
          <label class="form-label">Category Name <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="create-name" placeholder="e.g. Chronic Care">
        </div>
        <div class="mb-3">
          <label class="form-label">Department</label>
          <select class="form-select" id="create-dept">
            <option value="">Select department</option>
            <option>Cardiology</option><option>Neurology</option><option>Orthopedic</option>
            <option>Pediatrics</option><option>General</option><option>Emergency</option>
          </select>
        </div>
        <div class="row g-2 mb-3">
          <div class="col-6">
            <label class="form-label">Priority</label>
            <select class="form-select" id="create-priority">
              <option>Low</option><option>Medium</option><option selected>High</option><option>Critical</option>
            </select>
          </div>
          <div class="col-6">
            <label class="form-label">Status</label>
            <select class="form-select" id="create-status">
              <option>Active</option><option>Inactive</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea class="form-control" id="create-desc" rows="3" placeholder="Brief description of this category…"></textarea>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="create-notify">
          <label class="form-check-label" for="create-notify">Notify staff when patient added</label>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
        <button class="btn btn-primary" id="create-save-btn"><i class="bi bi-check-circle me-1"></i>Create Category</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══ EDIT CATEGORY MODAL ══════════════════════════════ -->
<div class="modal fade" id="editModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><i class="bi bi-pencil-square me-2 text-warning"></i>Edit Category</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body p-4">
        <input type="hidden" id="edit-id">
        <div class="mb-3">
          <label class="form-label">Category Name <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="edit-name" placeholder="Category name">
        </div>
        <div class="mb-3">
          <label class="form-label">Department</label>
          <select class="form-select" id="edit-dept">
            <option value="">Select department</option>
            <option>Cardiology</option><option>Neurology</option><option>Orthopedic</option>
            <option>Pediatrics</option><option>General</option><option>Emergency</option>
          </select>
        </div>
        <div class="row g-2 mb-3">
          <div class="col-6">
            <label class="form-label">Priority</label>
            <select class="form-select" id="edit-priority">
              <option>Low</option><option>Medium</option><option>High</option><option>Critical</option>
            </select>
          </div>
          <div class="col-6">
            <label class="form-label">Status</label>
            <select class="form-select" id="edit-status">
              <option>Active</option><option>Inactive</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea class="form-control" id="edit-desc" rows="3"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
        <button class="btn btn-warning text-white" id="edit-save-btn"><i class="bi bi-floppy me-1"></i>Save Changes</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══ DELETE CONFIRM MODAL ═════════════════════════════ -->
<div class="modal fade" id="deleteModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-body text-center p-4">
        <div style="width:56px;height:56px;border-radius:16px;background:rgba(240,78,107,.12);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;color:var(--danger)"><i class="bi bi-trash3"></i></div>
        <div style="font-family:var(--font-head);font-size:1rem;font-weight:700;margin-bottom:6px">Delete Category?</div>
        <div style="font-size:.85rem;color:var(--muted);margin-bottom:20px">This action cannot be undone. All associated data will be removed.</div>
        <div class="d-flex gap-2 justify-content-center">
          <button class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
          <button class="btn btn-danger" id="confirm-delete-btn">Delete</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
// import AdminSidebar from './AdminSidebar.vue'
// import AdminNavbar from './AdminNavbar.vue'
</script>
