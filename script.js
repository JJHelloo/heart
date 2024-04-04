document.addEventListener('DOMContentLoaded', function() {
    // Ensuring the btn element exists before adding the event listener
    const btn = document.getElementById('btn');
    if (btn) {
        btn.addEventListener('click', function() {
            // Hide the button
            btn.style.display = 'none';

            // Since the 'box' element is not mentioned in the provided HTML, this part is commented out
            // const box = document.getElementById('box');
            // if (box) {
            //     box.style.display = 'block';
            // }

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
