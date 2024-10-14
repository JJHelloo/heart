document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    if (btn) {
        btn.addEventListener('click', function() {
            // Hide the button
            btn.style.display = 'none';

            // Change the ID of the 'first' element to 'heart' and update the text
            const first = document.getElementById('first');
            if (first) {
                first.id = 'heart';
            }

            const words = document.getElementById('words');
            if (words) {
                words.innerText = "I love you";
            }
        });
    }
});
