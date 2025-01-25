const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling; // The associated input
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;
        button.innerHTML = type === 'password' ? '&#128274' : '&#128275;'; // Eye (open/closed)
    });
});