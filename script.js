// NAV SCROLL
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 20); }, { passive: true });

    // MOBILE MENU
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
    });
    document.querySelectorAll('[data-close]').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        toggle.classList.remove('open');
      });
    });

    // FADE IN ON SCROLL
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => observer.observe(el));

    // FAVICON LOGIC
    const setFavicon = (icon) => {
      const favicon = document.getElementById("favicon");
      if (!favicon) return;
      favicon.href = `${icon}?v=${Date.now()}`;
    };

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        setFavicon("favicon-active.svg");
      } else {
        setFavicon("favicon-default.svg");
      }
    });

    // ── NEW ADDITIVE FEATURES ──
    
    // CUSTOM CURSOR
    const cursor = document.getElementById("cursor");
    if (cursor) {
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let cursorX = mouseX;
      let cursorY = mouseY;
    
      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    
      const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateCursor);
      };
      animateCursor();
    
      const interactives = document.querySelectorAll("a, button, .nav-toggle");
      interactives.forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("magnetic"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("magnetic"));
      });
    }
    
    // BUTTON RIPPLE EFFECT
    document.querySelectorAll(".btn").forEach(btn => {
      btn.addEventListener("click", function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
