// $(function () {
//     /* ═══ SIDEBAR ════════════════════════════════════════ */
//     $("#collapse-btn").on("click", function () {
//         $("#sidebar").toggleClass("collapsed");
//     });
//     $("#mobile-menu-btn").on("click", function () {
//         $("#sidebar").toggleClass("mobile-open");
//         $("#sidebar-overlay").toggleClass("show");
//     });
//     $("#sidebar-overlay").on("click", function () {
//         $("#sidebar").removeClass("mobile-open");
//         $(this).removeClass("show");
//     });

//     /* Sub-menu toggling */
//     $(".has-sub > .nav-link").on("click", function (e) {
//         e.preventDefault();
//         $(this).closest(".has-sub").toggleClass("open");
//     });

//     /* ═══ PAGE ROUTING ═══════════════════════════════════ */
//     function showPage(name) {
//         $(".page-section").removeClass("active");
//         $("#page-" + name).addClass("active");
//         // highlight sidebar
//         $(".nav-link").removeClass("active");
//         $('[data-page="' + name + '"]').addClass("active");
//         // close mobile sidebar
//         $("#sidebar").removeClass("mobile-open");
//         $("#sidebar-overlay").removeClass("show");
//     }

//     $("[data-page]").on("click", function (e) {
//         e.preventDefault();
//         showPage($(this).data("page"));
//     });
//     $("[data-page-link]").on("click", function (e) {
//         e.preventDefault();
//         showPage($(this).data("page-link"));
//     });

//     /* ═══ DARK MODE ══════════════════════════════════════ */
//     $("#theme-toggle").on("click", function () {
//         const isDark = $("html").attr("data-theme") === "dark";
//         $("html").attr("data-theme", isDark ? "light" : "dark");
//         $(this).find("i").toggleClass("bi-moon bi-sun");
//         updateCharts();
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    initAdminPanel();
});

function initAdminPanel() {

    /* ═══ SIDEBAR ════════════════════════════════════════ */

    const collapseBtn = document.getElementById("collapse-btn");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");

    if (collapseBtn) {
        collapseBtn.addEventListener("click", () => {
            sidebar?.classList.toggle("collapsed");
        });
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            sidebar?.classList.toggle("mobile-open");
            sidebarOverlay?.classList.toggle("show");
        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", () => {
            sidebar?.classList.remove("mobile-open");
            sidebarOverlay.classList.remove("show");
        });
    }

    /* ═══ SUB MENU ═══════════════════════════════════════ */

    document.querySelectorAll(".has-sub > .nav-link").forEach(link => {
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

        document.querySelectorAll(".page-section").forEach(section => {
            section.classList.remove("active");
        });

        const targetPage = document.getElementById("page-" + name);

        if (targetPage) {
            targetPage.classList.add("active");
        }

        document.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active");
        });

        const activeLink = document.querySelector(`[data-page="${name}"]`);

        if (activeLink) {
            activeLink.classList.add("active");
        }

        sidebar?.classList.remove("mobile-open");
        sidebarOverlay?.classList.remove("show");
    }

    document.querySelectorAll("[data-page]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const page = btn.dataset.page;

            if (page) {
                showPage(page);
            }
        });
    });

    document.querySelectorAll("[data-page-link]").forEach(btn => {
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

            html.setAttribute(
                "data-theme",
                isDark ? "light" : "dark"
            );

            const icon = themeToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("bi-moon");
                icon.classList.toggle("bi-sun");
            }

            if (typeof updateCharts === "function") {
                updateCharts();
            }
        });
    }
}
