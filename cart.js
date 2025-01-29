document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    const keepShoppingButton = document.querySelector('.cart-buttons button');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    /* Load cart from local storage */
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <p>${item.name} - $${item.price.toFixed(2)}</p>
                    <button class="remove-button" data-index="${index}">Remove</button>
                `;
                cartItemsContainer.appendChild(itemElement);
            });
        }

        updateCartTotal();
    }

    /* Update total price */
    function updateCartTotal() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('cart-total').innerText = `Total: $${total.toFixed(2)}`;
    }

    /* Remove item from cart */
    function removeItem(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }

    /* Event listener for removing items */
    cartItemsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-button')) {
            const index = event.target.getAttribute('data-index');
            removeItem(index);
        }
    });

    /* Checkout button */
    checkoutButton.addEventListener('click', function () {
        alert('Proceeding to checkout...');
    });

    /* Keep shopping button */
    keepShoppingButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    /* Toggle sidebar */
    function toggleSidebar() {
        sidebar.classList.toggle('open');
    }

    /* Close sidebar */
    function closeSidebar() {
        sidebar.classList.remove('open');
    }

    /* Toggle dropdown menu */
    function toggleDropdown(id) {
        const dropdown = document.getElementById(id);
        if (dropdown) {
            dropdown.classList.toggle('open');
        }
    }

    /* Sidebar toggle functionality */
    menuToggle.addEventListener('click', toggleSidebar);

    /* Close sidebar when clicking outside */
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            closeSidebar();
        }
    });

    /* Ensure dropdowns remain interactive */
    document.querySelectorAll('.sidebar ul li > a').forEach(link => {
        link.addEventListener('click', function (event) {
            const dropdown = this.nextElementSibling;
            if (dropdown && dropdown.classList.contains('dropdown')) {
                event.preventDefault();
                dropdown.classList.toggle('open');
            }
        });
    });

    loadCart();
});
