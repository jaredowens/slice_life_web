// Sidebar Toggle Functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        closeSidebar();
    }
});

// Dropdown Toggle Functionality
function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Extract query parameters from URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        image: params.get('image'),
        description: params.get('description'),
        price: params.get('price')
    };
}

// Load product details dynamically on the product page
function loadProductDetails() {
    const { name, image, description, price } = getQueryParams();

    if (name) {
        document.getElementById('product-name').textContent = name;
    }
    
    const productImage = document.getElementById('product-image');
    if (image) {
        console.log("Attempting to load image:", image); // Debug log
        productImage.src = image;
        productImage.onload = function () {
            console.log("Image loaded successfully.");
        };
        productImage.onerror = function() {
            console.error("Image failed to load:", image);
            productImage.src = 'fallback.jpg'; // Ensure this exists in the project
        };
    } else {
        console.warn("No image URL provided in query parameters.");
        productImage.src = 'fallback.jpg';
    }
    
    document.getElementById('product-description').textContent = description || "No description available.";
    document.getElementById('product-price').textContent = price || "$29.99"; // Default price
}

// Ensure product details load when on the product page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes("product.html")) {
        loadProductDetails();
    }
});

// Add to Cart Functionality
function addToCart() {
    const size = document.getElementById('size').value;
    alert("Added to cart: " + document.getElementById('product-name').textContent + " (Size: " + size + ")");
}

// Function to navigate to the product page with parameters
function goToProductPage(name, image, description, price) {
    const url = `product.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&price=${encodeURIComponent(price)}`;
    console.log("Navigating to:", url); // Debug log
    window.location.href = url;
}
