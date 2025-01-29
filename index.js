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
    // Load the Alex Brush font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Set background image and page styles
    document.body.style.background = "url('neon backdrop.webp') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.minHeight = "200vh"; // Increases the height for scrolling
    document.body.style.justifyContent = "space-between";
    document.body.style.overflowY = "auto"; // Enables vertical scrolling

    // Create a top-aligned text box
    const textBox = document.createElement("div");
    textBox.style.position = "absolute";
    textBox.style.top = "80px"; // Moves text box near the top
    textBox.style.left = "50%";
    textBox.style.transform = "translateX(-50%)";
    textBox.style.background = "rgba(0, 0, 0, 0)"; // Transparent background
    textBox.style.padding = "10px";
    textBox.style.borderRadius = "10px";
    textBox.style.textAlign = "center";
    textBox.style.maxWidth = "80%";
    
    // Add the text inside the text box
    const heading = document.createElement("h1");
    heading.style.fontFamily = "\"Alex Brush\", cursive";
    heading.style.fontSize = "3rem";  // You can adjust the font size here
    heading.style.color = "white";    // Set the text color to white
    heading.innerHTML = "Embrace The Slice"; // Text content
    
    // Append the heading to the text box and the text box to the body
    textBox.appendChild(heading);
    document.body.appendChild(textBox);
});
