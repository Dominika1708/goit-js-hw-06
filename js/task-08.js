const form = document.querySelector('.login-form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.target;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    };

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    e.target.reset();
})
