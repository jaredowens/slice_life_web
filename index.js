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

    // Create a top-aligned text box
    const textBox = document.createElement("div");
    textBox.style.position = "absolute";
    textBox.style.top = "100px"; // Moves text box near the top
    textBox.style.left = "50%";
    textBox.style.transform = "translateX(-50%)";
    textBox.style.background = "rgba(255, 255, 255, 0.8)";
    textBox.style.padding = "20px";
    textBox.style.borderRadius = "10px";
    textBox.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    textBox.style.textAlign = "center";
    textBox.style.maxWidth = "80%";

    // Add content inside the text box
    textBox.innerHTML = "<h1>If you can't stop the Slice Embrace it</h1><p>Shop the best merch in the game.</p>";

    document.body.appendChild(textBox);
});
