$(function(){

  /* ═══ SIDEBAR ════════════════════════════════════════ */
  $('#collapse-btn').on('click', function(){
    $('#sidebar').toggleClass('collapsed');
  });
  $('#mobile-menu-btn').on('click', function(){
    $('#sidebar').toggleClass('mobile-open');
    $('#sidebar-overlay').toggleClass('show');
  });
  $('#sidebar-overlay').on('click', function(){
    $('#sidebar').removeClass('mobile-open');
    $(this).removeClass('show');
  });

  /* Sub-menu toggling */
  $('.has-sub > .nav-link').on('click', function(e){
    e.preventDefault();
    $(this).closest('.has-sub').toggleClass('open');
  });

  /* ═══ PAGE ROUTING ═══════════════════════════════════ */
  function showPage(name){
    $('.page-section').removeClass('active');
    $('#page-' + name).addClass('active');
    // highlight sidebar
    $('.nav-link').removeClass('active');
    $('[data-page="'+ name +'"]').addClass('active');
    // close mobile sidebar
    $('#sidebar').removeClass('mobile-open');
    $('#sidebar-overlay').removeClass('show');
  }

  $('[data-page]').on('click', function(e){
    e.preventDefault();
    showPage($(this).data('page'));
  });
  $('[data-page-link]').on('click', function(e){
    e.preventDefault();
    showPage($(this).data('page-link'));
  });

  /* ═══ DARK MODE ══════════════════════════════════════ */
  $('#theme-toggle').on('click', function(){
    const isDark = $('html').attr('data-theme') === 'dark';
    $('html').attr('data-theme', isDark ? 'light' : 'dark');
    $(this).find('i').toggleClass('bi-moon bi-sun');
    updateCharts();
  });

  /* ═══ CHARTS ══════════════════════════════════════════ */
  const chartColors = () => ({
    grid: getComputedStyle(document.documentElement).getPropertyValue('--border').trim(),
    text: getComputedStyle(document.documentElement).getPropertyValue('--muted').trim(),
  });


  /* ═══ CATEGORY TABLE ══════════════════════════════════ */
  let categories = [
    { id: 1, name: 'Chronic Care',    dept: 'Cardiology',  patients: 84, priority: 'High',     status: 'Active',   created: '2024-01-12' },
    { id: 2, name: 'Acute Care',      dept: 'Emergency',   patients: 132, priority: 'Critical', status: 'Active',   created: '2024-02-03' },
    { id: 3, name: 'Palliative',      dept: 'General',     patients: 27, priority: 'Medium',   status: 'Inactive', created: '2024-03-15' },
    { id: 4, name: 'Pediatric OPD',   dept: 'Pediatrics',  patients: 61, priority: 'High',     status: 'Active',   created: '2024-04-08' },
    { id: 5, name: 'Orthopedic Rehab',dept: 'Orthopedic',  patients: 49, priority: 'Medium',   status: 'Active',   created: '2024-05-20' },
    { id: 6, name: 'Neuro ICU',       dept: 'Neurology',   patients: 18, priority: 'Critical', status: 'Active',   created: '2024-06-01' },
    { id: 7, name: 'Post-Op Care',    dept: 'General',     patients: 55, priority: 'High',     status: 'Inactive', created: '2024-07-11' },
    { id: 8, name: 'Cardiac Rehab',   dept: 'Cardiology',  patients: 38, priority: 'Low',      status: 'Active',   created: '2024-08-25' },
  ];
  let deleteId = null;

  const priorityPill = { Low:'pill-info', Medium:'pill-primary', High:'pill-warning', Critical:'pill-danger' };
  const statusPill   = { Active:'pill-success', Inactive:'pill-danger' };

  function renderCatTable(data){
    const tbody = $('#cat-tbody').empty();
    if(!data.length){
      tbody.append('<tr><td colspan="8" class="text-center py-5" style="color:var(--muted)"><i class="bi bi-inbox" style="font-size:2rem;display:block;margin-bottom:8px"></i>No categories found</td></tr>');
      return;
    }
    data.forEach(c => {
      tbody.append(`
        <tr data-id="${c.id}">
          <td><input type="checkbox" class="form-check-input"></td>
          <td><div class="fw-500">${c.name}</div></td>
          <td><span class="cat-chip"><i class="bi bi-hospital" style="color:var(--primary)"></i>${c.dept}</span></td>
          <td><strong>${c.patients}</strong></td>
          <td><span class="pill ${priorityPill[c.priority]}">${c.priority}</span></td>
          <td><span class="pill ${statusPill[c.status]}">${c.status}</span></td>
          <td style="font-size:.82rem;color:var(--muted)">${c.created}</td>
          <td>
            <div class="d-flex gap-1">
              <button class="btn btn-icon btn-sm btn-outline-warning edit-btn" data-id="${c.id}" title="Edit"><i class="bi bi-pencil"></i></button>
              <button class="btn btn-icon btn-sm btn-outline-danger delete-btn" data-id="${c.id}" title="Delete"><i class="bi bi-trash"></i></button>
            </div>
          </td>
        </tr>`);
    });
    $('#cat-count').text(`Showing ${data.length} of ${categories.length}`);
  }

  function filterCat(){
    const q = $('#cat-search').val().toLowerCase();
    const f = $('#cat-filter').val();
    const res = categories.filter(c =>
      (!q || c.name.toLowerCase().includes(q) || c.dept.toLowerCase().includes(q)) &&
      (!f || c.status === f)
    );
    renderCatTable(res);
  }

  renderCatTable(categories);
  $('#cat-search, #cat-filter').on('input change', filterCat);

  /* Create */
  $('#create-save-btn').on('click', function(){
    const name = $('#create-name').val().trim();
    const dept = $('#create-dept').val();
    if(!name){ toast('Please enter a category name.', 'danger'); return; }
    const newCat = {
      id: Date.now(), name, dept: dept||'General',
      patients: 0,
      priority: $('#create-priority').val(),
      status: $('#create-status').val(),
      created: new Date().toISOString().split('T')[0],
    };
    categories.unshift(newCat);
    filterCat();
    bootstrap.Modal.getInstance(document.getElementById('createModal')).hide();
    $('#createModal input, #createModal textarea, #createModal select').val('');
    toast('Category created successfully!', 'success');
  });

  /* Edit — open */
  $(document).on('click', '.edit-btn', function(){
    const id = +$(this).data('id');
    const c = categories.find(x => x.id === id);
    if(!c) return;
    $('#edit-id').val(c.id);
    $('#edit-name').val(c.name);
    $('#edit-dept').val(c.dept);
    $('#edit-priority').val(c.priority);
    $('#edit-status').val(c.status);
    $('#edit-desc').val(c.description||'');
    new bootstrap.Modal(document.getElementById('editModal')).show();
  });

  /* Edit — save */
  $('#edit-save-btn').on('click', function(){
    const id = +$('#edit-id').val();
    const name = $('#edit-name').val().trim();
    if(!name){ toast('Name is required.', 'danger'); return; }
    const idx = categories.findIndex(x => x.id === id);
    if(idx < 0) return;
    categories[idx] = { ...categories[idx], name, dept: $('#edit-dept').val()||'General', priority: $('#edit-priority').val(), status: $('#edit-status').val(), description: $('#edit-desc').val() };
    filterCat();
    bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
    toast('Category updated successfully!', 'success');
  });

  /* Delete — open confirm */
  $(document).on('click', '.delete-btn', function(){
    deleteId = +$(this).data('id');
    new bootstrap.Modal(document.getElementById('deleteModal')).show();
  });
  $('#confirm-delete-btn').on('click', function(){
    categories = categories.filter(x => x.id !== deleteId);
    filterCat();
    bootstrap.Modal.getInstance(document.getElementById('deleteModal')).hide();
    toast('Category deleted.', 'warning');
    deleteId = null;
  });

  /* Table search (Components page) */
  $('#comp-tbl-search').on('input', function(){
    const q = $(this).val().toLowerCase();
    $('#comp-table tbody tr').each(function(){
      $(this).toggle($(this).text().toLowerCase().includes(q));
    });
  });

  /* ═══ TOAST HELPER ════════════════════════════════════ */
  function toast(msg, type='success'){
    const icons = { success:'check-circle-fill', danger:'x-circle-fill', warning:'exclamation-triangle-fill', primary:'info-circle-fill' };
    const id = 'toast-' + Date.now();
    const t = $(`
      <div id="${id}" class="d-flex align-items-center gap-2 p-3 rounded-3 shadow-lg" style="background:var(--surface);border:1px solid var(--border);min-width:260px;animation:fadeUp .25s ease;margin-top:8px">
        <i class="bi bi-${icons[type]||icons.primary} text-${type}" style="font-size:1.1rem"></i>
        <span style="font-size:.88rem;flex:1">${msg}</span>
        <i class="bi bi-x close-toast" style="cursor:pointer;color:var(--muted)"></i>
      </div>`);
    $('#toast-container').append(t);
    t.find('.close-toast').on('click', () => t.fadeOut(200, () => t.remove()));
    setTimeout(() => t.fadeOut(400, () => t.remove()), 3500);
  }

});
