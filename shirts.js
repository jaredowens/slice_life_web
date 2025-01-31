function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');  // Toggles sidebar visibility
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');  // Ensures sidebar is closed when needed
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        closeSidebar();  // Closes sidebar if clicked outside
    }
});

function redirectToProduct(productId) {
    window.location.href = `product.html?product=${productId}`;
}
