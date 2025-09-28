const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;
const localStorageKey = "feedback-form-state";

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    try {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email ?? "";
        formData.message = parsedData.message ?? "";
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    } catch (err) {
        console.error("Помилка парсингу localStorage:", err);
    }
}

form.addEventListener("input", (event) => {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    } else if (event.target.name === "message") {
        formData.message = event.target.value.trim();   
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});



    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!formData.email.trim() || !formData.message.trim()) {
            alert("Fill please all fields");
            return;
        }
console.log("Submitted formData:", formData);

form.reset();
    formData.email = "";
    formData.message = "";        
localStorage.removeItem(localStorageKey);
});



