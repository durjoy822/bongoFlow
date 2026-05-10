<template>
  <AdminLayout>
    <div class="pg-wrap">

      <!-- ===== TOPBAR ===== -->
      <div class="topbar">
        <div class="topbar-left">
          <div class="breadcrumb">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            <span class="bc-muted">Admin</span>
            <span class="bc-sep">›</span>
            <span class="bc-active">Products</span>
          </div>
        </div>
        <div class="topbar-right">
          <button class="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export
          </button>
          <button class="btn btn-primary" @click="openModal()">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add Product
          </button>
        </div>
      </div>

      <!-- ===== STATS CARDS ===== -->
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-label">Total Products</div>
          <div class="stat-val">{{ products.length }}</div>
          <div class="stat-sub sub-green">↑ +3 this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Active</div>
          <div class="stat-val">{{ products.filter(p => p.status === 'Active').length }}</div>
          <div class="stat-sub sub-muted">Published</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Low Stock</div>
          <div class="stat-val">{{ products.filter(p => p.stock < 10).length }}</div>
          <div class="stat-sub sub-amber">Needs restock</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Inventory Value</div>
          <div class="stat-val">${{ inventoryValue }}</div>
          <div class="stat-sub sub-muted">Estimated</div>
        </div>
      </div>

      <!-- ===== TABLE CARD ===== -->
      <div class="content">
        <div class="card">

          <!-- Card Header -->
          <div class="card-header">
            <div class="card-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              Product List
              <span class="count-pill">{{ filteredProducts.length }} items</span>
            </div>
            <div class="header-actions">
              <div class="search-wrap">
                <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="Search products..."
                  class="search-input"
                />
              </div>
              <select v-model="categoryFilter" class="filter-select">
                <option value="">All categories</option>
                <option>Electronics</option>
                <option>Accessories</option>
                <option>Clothing</option>
              </select>
              <select v-model="statusFilter" class="filter-select">
                <option value="">All status</option>
                <option>Active</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
            </div>
          </div>

          <!-- Table -->
          <div class="table-wrap">
            <table class="product-table">
              <thead>
                <tr>
                  <th style="width:40px">
                    <input type="checkbox" />
                  </th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Added</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in filteredProducts" :key="product.id">
                  <td><input type="checkbox" /></td>

                  <!-- Product Name + SKU -->
                  <td>
                    <div class="product-cell">
                      <div class="product-thumb">{{ categoryEmoji(product.category) }}</div>
                      <div>
                        <div class="product-name">{{ product.name }}</div>
                        <div class="product-sku">{{ product.sku }}</div>
                      </div>
                    </div>
                  </td>

                  <!-- Category -->
                  <td>
                    <span class="badge badge-blue">{{ product.category }}</span>
                  </td>

                  <!-- Price -->
                  <td class="price-cell">${{ product.price.toFixed(2) }}</td>

                  <!-- Stock Bar -->
                  <td>
                    <div class="stock-wrap">
                      <div class="stock-bar">
                        <div
                          class="stock-fill"
                          :style="{ width: stockPercent(product.stock) + '%', background: stockColor(product.stock) }"
                        ></div>
                      </div>
                      <span class="stock-num">{{ product.stock }}</span>
                    </div>
                  </td>

                  <!-- Status Badge -->
                  <td>
                    <span class="badge" :class="statusClass(product.status)">
                      {{ product.status }}
                    </span>
                  </td>

                  <!-- Date -->
                  <td class="date-cell">{{ product.date }}</td>

                  <!-- Actions -->
                  <td>
                    <div class="action-btns">
                      <button class="icon-btn btn-edit" @click="editProduct(product)" title="Edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      </button>
                      <button class="icon-btn btn-delete" @click="deleteProduct(product.id)" title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                      </button>
                    </div>
                  </td>
                </tr>

                <!-- Empty state -->
                <tr v-if="filteredProducts.length === 0">
                  <td colspan="8" class="empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>
                    <p>No products found</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <div class="pg-info">Showing 1–{{ filteredProducts.length }} of {{ filteredProducts.length }}</div>
            <div class="pg-btns">
              <button class="pg-btn">‹</button>
              <button class="pg-btn active">1</button>
              <button class="pg-btn">2</button>
              <button class="pg-btn">›</button>
            </div>
          </div>

        </div>
      </div>

      <!-- ===== ADD / EDIT MODAL ===== -->
      <div class="modal-overlay" v-if="showModal" @click.self="closeModal()">
        <div class="modal">
          <div class="modal-header">
            <h3>{{ isEditing ? 'Edit Product' : 'Add New Product' }}</h3>
            <button class="icon-btn" @click="closeModal()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group form-full">
                <label>Product Name</label>
                <input type="text" v-model="form.name" placeholder="e.g. Wireless Headphones Pro" />
              </div>
              <div class="form-group">
                <label>Category</label>
                <select v-model="form.category">
                  <option>Electronics</option>
                  <option>Accessories</option>
                  <option>Clothing</option>
                </select>
              </div>
              <div class="form-group">
                <label>Status</label>
                <select v-model="form.status">
                  <option>Active</option>
                  <option>Draft</option>
                  <option>Archived</option>
                </select>
              </div>
              <div class="form-group">
                <label>Price ($)</label>
                <input type="number" v-model="form.price" placeholder="0.00" min="0" step="0.01" />
              </div>
              <div class="form-group">
                <label>Stock Qty</label>
                <input type="number" v-model="form.stock" placeholder="0" min="0" />
              </div>
              <div class="form-group form-full">
                <label>Description</label>
                <textarea v-model="form.description" placeholder="Short product description..." rows="3"></textarea>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-outline" @click="closeModal()">Cancel</button>
            <button class="btn btn-primary" @click="saveProduct()">
              {{ isEditing ? 'Save Changes' : 'Add Product' }}
            </button>
          </div>
        </div>
      </div>

    </div>
  </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import AdminLayout from '../../Layouts/Admin/AdminLayout.vue'

// ─── State ───────────────────────────────────────────────────────────────────
const searchQuery   = ref('')
const categoryFilter = ref('')
const statusFilter  = ref('')
const showModal     = ref(false)
const isEditing     = ref(false)
const editingId     = ref(null)

const form = ref({
  name: '',
  category: 'Electronics',
  status: 'Active',
  price: '',
  stock: '',
  description: '',
})

const products = ref([
  { id: 1, name: 'Wireless Headphones Pro', sku: 'SKU-001', category: 'Electronics', price: 149.99, stock: 42, status: 'Active',   date: 'Jan 12, 2025' },
  { id: 2, name: 'USB-C Hub 7-in-1',        sku: 'SKU-002', category: 'Electronics', price:  49.99, stock:  8, status: 'Active',   date: 'Jan 18, 2025' },
  { id: 3, name: 'Leather Wallet Slim',      sku: 'SKU-003', category: 'Accessories', price:  29.99, stock:  0, status: 'Draft',    date: 'Feb 02, 2025' },
  { id: 4, name: 'Running Jacket',           sku: 'SKU-004', category: 'Clothing',    price:  89.99, stock: 17, status: 'Active',   date: 'Feb 15, 2025' },
  { id: 5, name: 'Smart Watch Band',         sku: 'SKU-005', category: 'Accessories', price:  19.99, stock:  5, status: 'Active',   date: 'Mar 03, 2025' },
  { id: 6, name: 'Vintage Cap',              sku: 'SKU-006', category: 'Clothing',    price:  24.99, stock: 33, status: 'Archived', date: 'Mar 20, 2025' },
])
let nextId = 7

// ─── Computed ─────────────────────────────────────────────────────────────────
const filteredProducts = computed(() => {
  return products.value.filter(p => {
    const q = searchQuery.value.toLowerCase()
    const matchSearch   = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
    const matchCategory = !categoryFilter.value || p.category === categoryFilter.value
    const matchStatus   = !statusFilter.value   || p.status   === statusFilter.value
    return matchSearch && matchCategory && matchStatus
  })
})

const inventoryValue = computed(() => {
  const total = products.value.reduce((sum, p) => sum + p.price * p.stock, 0)
  return Math.round(total).toLocaleString()
})

// ─── Helpers ──────────────────────────────────────────────────────────────────
function categoryEmoji(cat) {
  return { Electronics: '🔌', Accessories: '🎧', Clothing: '👕' }[cat] || '📦'
}

function stockPercent(qty) {
  return Math.min((qty / 50) * 100, 100)
}

function stockColor(qty) {
  if (qty === 0) return '#E24B4A'
  if (qty < 10)  return '#EF9F27'
  return '#639922'
}

function statusClass(status) {
  return {
    Active:   'badge-green',
    Draft:    'badge-amber',
    Archived: 'badge-red',
  }[status] || 'badge-blue'
}

// ─── Actions ──────────────────────────────────────────────────────────────────
function openModal() {
  isEditing.value = false
  editingId.value = null
  form.value = { name: '', category: 'Electronics', status: 'Active', price: '', stock: '', description: '' }
  showModal.value = true
}

function editProduct(product) {
  isEditing.value = true
  editingId.value = product.id
  form.value = {
    name:        product.name,
    category:    product.category,
    status:      product.status,
    price:       product.price,
    stock:       product.stock,
    description: product.description || '',
  }
  showModal.value = true
}

function saveProduct() {
  if (!form.value.name.trim()) return

  if (isEditing.value) {
    const idx = products.value.findIndex(p => p.id === editingId.value)
    if (idx !== -1) {
      products.value[idx] = {
        ...products.value[idx],
        name:     form.value.name,
        category: form.value.category,
        status:   form.value.status,
        price:    parseFloat(form.value.price) || 0,
        stock:    parseInt(form.value.stock)   || 0,
      }
    }
  } else {
    const now = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    products.value.unshift({
      id:       nextId++,
      name:     form.value.name,
      sku:      'SKU-00' + nextId,
      category: form.value.category,
      status:   form.value.status,
      price:    parseFloat(form.value.price) || 0,
      stock:    parseInt(form.value.stock)   || 0,
      date:     now,
    })
  }

  closeModal()
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    products.value = products.value.filter(p => p.id !== id)
  }
}

function closeModal() {
  showModal.value = false
}
</script>

<style scoped>
/* ─── Reset ──────────────────────────────────────────────────────────────── */
* { box-sizing: border-box; }

/* ─── Page Wrapper ───────────────────────────────────────────────────────── */
.pg-wrap {
  min-height: 100vh;
  background: #f4f5f7;
  padding-bottom: 2rem;
  font-family: 'Inter', sans-serif;
}

/* ─── Topbar ─────────────────────────────────────────────────────────────── */
.topbar {
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  border-radius:10px;
  height: 58px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  margin: 0.5rem 0.5rem 0;
  z-index: 50;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}

.topbar-left, .topbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13.5px;
  color: #374151;
}
.bc-muted  { color: #9ca3af; }
.bc-sep    { color: #d1d5db; font-size: 15px; }
.bc-active { color: #111827; font-weight: 600; }

/* ─── Buttons ────────────────────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.15s ease;
}
.btn-outline {
  background: #ffffff;
  border: 1px solid #d1d5db;
  color: #374151;
}
.btn-outline:hover { background: #f9fafb; }

.btn-primary {
  background: #2563eb;
  color: #ffffff;
  border: 1px solid #2563eb;
}
.btn-primary:hover  { background: #1d4ed8; }
.btn-primary:active { transform: scale(0.98); }

/* ─── Stats Row ──────────────────────────────────────────────────────────── */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  padding: 0.5rem 0.5rem 0;
}

.stat-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px 18px;
}
.stat-label {
  font-size: 11.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #9ca3af;
  margin-bottom: 6px;
}
.stat-val {
  font-size: 26px;
  font-weight: 700;
  color: #111827;
  line-height: 1;
}
.stat-sub  { font-size: 12px; margin-top: 5px; }
.sub-green { color: #16a34a; }
.sub-amber { color: #d97706; }
.sub-muted { color: #9ca3af; }

/* ─── Content & Card ─────────────────────────────────────────────────────── */
.content { padding: 0.5rem 0.5rem 0; }

.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}

/* ─── Card Header ────────────────────────────────────────────────────────── */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid #f3f4f6;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #111827;
}
.count-pill {
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 99px;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

/* Search */
.search-wrap { position: relative; }
.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
}
.search-input {
  padding: 8px 12px 8px 32px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 13px;
  background: #f9fafb;
  color: #111827;
  width: 210px;
  outline: none;
  transition: all 0.15s;
}
.search-input:focus {
  border-color: #2563eb;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(37,99,235,0.08);
}

/* Selects */
.filter-select {
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 13px;
  background: #f9fafb;
  color: #374151;
  outline: none;
  cursor: pointer;
  transition: border 0.15s;
}
.filter-select:focus { border-color: #2563eb; }

/* ─── Table ──────────────────────────────────────────────────────────────── */
.table-wrap { overflow-x: auto; }

.product-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
}

.product-table thead tr {
  background: #f9fafb;
}
.product-table th {
  padding: 11px 16px;
  text-align: left;
  font-size: 11.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #9ca3af;
  border-bottom: 1px solid #f3f4f6;
  white-space: nowrap;
}
.product-table td {
  padding: 14px 16px;
  border-bottom: 1px solid #f9fafb;
  color: #374151;
  vertical-align: middle;
}
.product-table tbody tr:last-child td { border-bottom: none; }
.product-table tbody tr {
  transition: background 0.1s;
}
.product-table tbody tr:hover { background: #f9fafb; }

/* Product cell */
.product-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}
.product-thumb {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.product-name {
  font-weight: 600;
  font-size: 13.5px;
  color: #111827;
}
.product-sku {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 1px;
}

/* Price */
.price-cell { font-weight: 600; color: #111827; }

/* Stock bar */
.stock-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}
.stock-bar {
  width: 64px;
  height: 5px;
  background: #f3f4f6;
  border-radius: 99px;
  overflow: hidden;
}
.stock-fill {
  height: 100%;
  border-radius: 99px;
  transition: width 0.3s;
}
.stock-num {
  font-size: 13px;
  color: #374151;
  min-width: 20px;
}

/* Date */
.date-cell { font-size: 13px; color: #9ca3af; white-space: nowrap; }

/* ─── Badges ─────────────────────────────────────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 600;
}
.badge-green { background: #dcfce7; color: #15803d; }
.badge-amber { background: #fef3c7; color: #b45309; }
.badge-red   { background: #fee2e2; color: #b91c1c; }
.badge-blue  { background: #dbeafe; color: #1d4ed8; }

/* ─── Action Buttons ─────────────────────────────────────────────────────── */
.action-btns { display: flex; gap: 6px; }

.icon-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #9ca3af;
  transition: all 0.15s;
}
.icon-btn:hover { color: #374151; background: #f3f4f6; }

.btn-edit:hover  { border-color: #93c5fd; color: #2563eb; background: #eff6ff; }
.btn-delete:hover { border-color: #fca5a5; color: #dc2626; background: #fef2f2; }

/* ─── Empty State ────────────────────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 3rem 1rem !important;
  color: #9ca3af;
}
.empty-state svg { margin: 0 auto 10px; display: block; }
.empty-state p   { font-size: 13.5px; margin: 0; }

/* ─── Pagination ─────────────────────────────────────────────────────────── */
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid #f3f4f6;
}
.pg-info { font-size: 13px; color: #9ca3af; }
.pg-btns { display: flex; gap: 6px; }
.pg-btn {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  font-size: 13px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}
.pg-btn:hover  { background: #f3f4f6; }
.pg-btn.active { background: #2563eb; color: #ffffff; border-color: #2563eb; }

/* ─── Modal ──────────────────────────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.modal {
  background: #ffffff;
  border-radius: 14px;
  width: 500px;
  max-width: 100%;
  border: 1px solid #e5e7eb;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  animation: slideUp 0.2s ease;
}
@keyframes slideUp {
  from { transform: translateY(16px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid #f3f4f6;
}
.modal-header h3 {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  margin: 0;
}
.modal-body   { padding: 20px; }
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 20px;
  border-top: 1px solid #f3f4f6;
}

/* ─── Form ───────────────────────────────────────────────────────────────── */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.form-full { grid-column: 1 / -1; }

.form-group label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
  margin-bottom: 5px;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 13.5px;
  background: #f9fafb;
  color: #111827;
  outline: none;
  transition: all 0.15s;
  font-family: inherit;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #2563eb;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(37,99,235,0.08);
}
.form-group textarea { resize: vertical; min-height: 80px; }

/* ─── Responsive ─────────────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .stats-row { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .stats-row      { grid-template-columns: 1fr 1fr; }
  .card-header    { flex-direction: column; align-items: flex-start; }
  .header-actions { width: 100%; }
  .search-input   { width: 100%; }
  .form-grid      { grid-template-columns: 1fr; }
  .form-full      { grid-column: 1; }
}
</style>
