const form = document.querySelector("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    if (!email || !password) {
        alert("All form fields must be filled in")
    } else {
        const out = {
            email: email,
            password: password,
        }
        console.log(out);
        form.reset();
    }
})
