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

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.background = "url('slice-life-background.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.minHeight = "200vh"; // Increases the height for scrolling
    document.body.style.justifyContent = "space-between";
    document.body.style.overflowY = "auto"; // Enables vertical scrolling



    // Create product container
    const productContainer = document.createElement("div");
    productContainer.style.display = "grid";
    productContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    productContainer.style.gap = "20px";
    productContainer.style.justifyContent = "center";
    productContainer.style.margin = "150px auto";
    productContainer.style.width = "80%";
    
    // Product names
    const products = ["Red Tee", "Black Tee", "White and Red Tee", "White and Black Tee", "OG Slice Hat", "The Slice Cap"];
    
    products.forEach(name => {
        const productBox = document.createElement("div");
        productBox.style.background = "rgba(255, 255, 255, 0.8)";
        productBox.style.padding = "20px";
        productBox.style.borderRadius = "10px";
        productBox.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        productBox.style.textAlign = "center";
        productBox.innerHTML = `<p>${name}</p><img src='images/placeholder.png' alt='${name}' style='width:100%; border-radius:10px;'>`;
        productContainer.appendChild(productBox);
    });
    
    document.body.appendChild(productContainer);
});
