        AOS.init({
            duration: 700,
            once: true,
            easing: 'ease-in-out', 
            offset: 100,
        });

        document.getElementById('current-year').textContent = new Date().getFullYear();

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    const headerOffset = document.querySelector('header').offsetHeight + 24; 
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                         top: offsetPosition,
                         behavior: "smooth"
                    });
                }
            });
        });
