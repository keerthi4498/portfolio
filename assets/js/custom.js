Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

var myOffcanvas = document.getElementById('menuoffcanvas')
var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
  
document.querySelectorAll('.mobile-menu li').forEach(item => {
  item.addEventListener('click', () => {
    bsOffcanvas.hide();
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
  });
});