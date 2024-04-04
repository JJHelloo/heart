btn.addEventListener('click', () => {
  btn.style.display = 'none';

  const box = document.getElementById('box');
  // box.style.display = 'block';
  document.getElementById('first').id = 'heart';
  document.getElementById('words').innerText = "I love you";
});
