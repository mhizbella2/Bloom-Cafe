const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        menuBtn.addEventListener("click", function() {
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuBtn.textContent = isOpen ? "✕" : "☰";
            menuBtn.setAttribute("aria-expanded", isOpen);
        });

        
        const links = document.querySelectorAll(".nav-links a");

        links.forEach(function(link) {
            link.addEventListener("click", function() {
                navLinks.classList.remove("active");
                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });