const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  btn.style.display = 'none';

  document.getElementById('first').id = 'heart';
  document.getElementById('words').innerText = "I love you";
});
