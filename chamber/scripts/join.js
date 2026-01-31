
document.addEventListener('DOMContentLoaded', () => {
  const timestamp = new Date().toISOString();
  document.getElementById('timestamp').value = timestamp;
});


const modalLinks = document.querySelectorAll('.open-modal');
modalLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const modalId = link.parentElement.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

const closes = document.querySelectorAll('.modal .close');
closes.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.style.display = 'none';
  });
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
