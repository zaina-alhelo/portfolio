
        /* ===============================
           Particles Background
        =============================== */
        function createParticles() {
            const container = document.querySelector('.bg-animation');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.width = Math.random() * 100 + 50 + 'px';
                particle.style.height = particle.style.width;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDuration = Math.random() * 20 + 10 + 's';
                particle.style.animationDelay = Math.random() * 5 + 's';
                container.appendChild(particle);
            }
        }
        createParticles();

        /* ===============================
           Mobile Menu
        =============================== */
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        /* ===============================
           Language Toggle (DEFAULT: EN)
        =============================== */
        let currentLang = 'en';

        // Initial language setup
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        document.getElementById('langBtn').textContent = 'العربية';
        updateContent('en');

        function toggleLanguage() {
            const html = document.documentElement;
            const langBtn = document.getElementById('langBtn');

            if (currentLang === 'en') {
                currentLang = 'ar';
                html.setAttribute('lang', 'ar');
                html.setAttribute('dir', 'rtl');
                langBtn.textContent = 'English';
                updateContent('ar');
            } else {
                currentLang = 'en';
                html.setAttribute('lang', 'en');
                html.setAttribute('dir', 'ltr');
                langBtn.textContent = 'العربية';
                updateContent('en');
            }
        }

        function updateContent(lang) {
            document.querySelectorAll('[data-ar][data-en]').forEach(el => {
                el.textContent = el.getAttribute(lang === 'ar' ? 'data-ar' : 'data-en');
            });
        }

        /* ===============================
           Smooth Scroll
        =============================== */
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        /* ===============================
           Scroll Reveal
        =============================== */
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        /* ===============================
           Custom Cursor
        =============================== */
        const cursorGlow = document.querySelector('.cursor-glow');

        document.addEventListener('mousemove', e => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, .skill-card, .project-card, .timeline-content').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorGlow.style.transform = 'scale(2)';
                cursorGlow.style.borderColor = 'var(--secondary)';
            });
            el.addEventListener('mouseleave', () => {
                cursorGlow.style.transform = 'scale(1)';
                cursorGlow.style.borderColor = 'var(--primary)';
            });
        });

        /* ===============================
           Certificates Modal
        =============================== */
        function openCertificateModal(btn) {
            const modal = document.getElementById('certificateModal');
            const modalImg = document.getElementById('modalImage');
            const modalCaption = document.getElementById('modalCaption');

            const card = btn.closest('.certificate-card');
            const img = card.querySelector('.certificate-img');
            const title = card.querySelector('.certificate-info h3');

            modal.classList.add('active');
            modalImg.src = img.src;
            modalCaption.textContent = title.textContent;
            document.body.style.overflow = 'hidden';
        }

        function closeCertificateModal() {
            document.getElementById('certificateModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.getElementById('certificateModal')?.addEventListener('click', e => {
            if (e.target.id === 'certificateModal') closeCertificateModal();
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeCertificateModal();
        });

