document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('messageButton');
    const surpriseMessage = document.getElementById('surpriseMessage');

    button.addEventListener('click', () => {
        surpriseMessage.classList.toggle('hidden');
    });
});
