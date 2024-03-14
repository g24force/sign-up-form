const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordMismatchError = document.querySelector('p.password-mismatch-error')

password.addEventListener("blur", () => {
    comparePasswordFields ();
});

confirmPassword.addEventListener("blur", () => {
    comparePasswordFields ();
});

function comparePasswordFields () {
    if (password.value !== undefined && confirmPassword.value !== undefined) {
        if (password.value === confirmPassword.value) {
            password.classList.remove("error");
            confirmPassword.classList.remove("error");
            passwordMismatchError.textContent = '';
        }
    }
};