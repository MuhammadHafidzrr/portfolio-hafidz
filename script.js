// Init AOS Animation
AOS.init({ once: true, offset: 100, duration: 800 });

// SELECT SEMUA LINK DI NAVBAR
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

navLinks.forEach((link) => {
    link.addEventListener('click', function() {
        
        // 1. Matikan semua lampu dulu (Reset)
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // 2. Nyalakan lampu HANYA di tombol yang diklik
        this.classList.add('active');
        
        // 3. Tutup menu mobile jika sedang dibuka
        if(window.innerWidth < 992){
            bsCollapse.hide();
        }

        // 4. (FITUR UTAMA) Tunggu 1 detik (1000ms), lalu matikan lampunya lagi
        setTimeout(() => {
            this.classList.remove('active');
        }, 1000); 
    });
});