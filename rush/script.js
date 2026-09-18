// โค้ด JS ง่ายๆ สำหรับทำ Smooth Scrolling เวลากดที่เมนู Navbar
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // ปิดการกระโดดแบบปกติ

        // ดึง id ของส่วนที่เราต้องการเลื่อนไป
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // สั่งให้เลื่อนหน้าจออย่างสมูท
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});