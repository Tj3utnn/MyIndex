document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.menu button, .joinme-button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const link = button.getAttribute('data-link');
      if (link) {
        const linkOrigin = new URL(link, window.location.href).origin;
        const currentOrigin = window.location.origin;
        if (linkOrigin !== currentOrigin) {
          window.open(link, '_blank');
        } else {
          window.location.href = link;
        }
      }
    });
  });
});
