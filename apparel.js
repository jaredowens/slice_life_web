function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        closeSidebar();
    }
});

// Commented out background JS to focus on layout testing
// document.addEventListener("DOMContentLoaded", function() {
//     document.body.style.background = "url('slice-life-background.png') no-repeat center center fixed";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.display = "flex";
//     document.body.style.flexDirection = "column";
//     document.body.style.minHeight = "200vh"; // Increases the height for scrolling
//     document.body.style.justifyContent = "space-between";
//     document.body.style.overflowY = "auto"; // Enables vertical scrolling
// });
