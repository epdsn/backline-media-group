document.getElementById('year').textContent = new Date().getFullYear();
const form = document.querySelector('form');
if (form && ['localhost', '127.0.0.1'].includes(location.hostname)) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('form-status').textContent = 'This is a local preview. Your message has not been sent. The inquiry form will be available when the site is deployed with Netlify Forms enabled.';
  });
}
