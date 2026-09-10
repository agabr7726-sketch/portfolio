document.addEventListener("DOMContentLoaded", () => {

    // ================= MOBILE MENU =================
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        // Toggle menu open/close
        menuIcon.addEventListener("click", () => {
            navbar.classList.toggle("show");
            const icon = menuIcon.querySelector("i");

            if (navbar.classList.contains("show")) {
                icon.classList.replace("fa-bars", "fa-xmark");
            } else {
                icon.classList.replace("fa-xmark", "fa-bars");
            }
        });

        // Close menu when clicking any nav link
        document.querySelectorAll(".navbar a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("show");
                const icon = menuIcon.querySelector("i");
                if (icon) {
                    icon.classList.replace("fa-xmark", "fa-bars");
                }
            });
        });

        // Close menu when clicking outside the navbar
        document.addEventListener("click", (event) => {
            if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
                navbar.classList.remove("show");
                const icon = menuIcon.querySelector("i");
                if (icon) {
                    icon.classList.replace("fa-xmark", "fa-bars");
                }
            }
        });
    }


    // ================= ACTIVE NAVBAR ON SCROLL =================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar a");

    const highlightActiveNav = () => {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 180;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    window.addEventListener("scroll", highlightActiveNav);


    // ================= CONTACT FORM HANDLING =================
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const submitBtn = form.querySelector("button[type='submit']");
            const originalText = submitBtn.textContent;

            // Show interactive feedback on the button
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";

            setTimeout(() => {
                submitBtn.textContent = "Message Sent! ✓";
                submitBtn.style.background = "#22c55e"; // Vibrant success green

                form.reset();

                // Reset button back to normal after 3 seconds
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = "";
                }, 3000);

            }, 1000);
        });
    }

});