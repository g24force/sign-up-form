const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordMismatchError = document.querySelector('p.password-mismatch-error')

password.addEventListener("input", () => {
    comparePasswordFields ();
});

confirmPassword.addEventListener("input", () => {
    comparePasswordFields ();
});

function comparePasswordFields () {
    if ((password.value !== undefined || password.value !== "") && (confirmPassword.value !== undefined|| confirmPassword.value !== "")) {
        if (password.value === confirmPassword.value) {
            password.classList.remove("error");
            confirmPassword.classList.remove("error");
            passwordMismatchError.textContent = '';
            document.querySelector("#submit-button").disabled = false;
        }
    }
};