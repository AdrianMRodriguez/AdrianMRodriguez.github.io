document.addEventListener("DOMContentLoaded", () => {
    loadClasses();
    document.getElementById("contact-form").addEventListener("submit", submitForm);
});

function addClass() {
    let input = document.getElementById("class-input");
    let className = input.value.trim();
    if (className) {
        let li = document.createElement("li");
        li.textContent = className;
        document.getElementById("class-list").appendChild(li);
        saveClass(className);
        input.value = "";
    }
}

function saveClass(className) {
    let classes = JSON.parse(localStorage.getItem("classes")) || [];
    classes.push(className);
    localStorage.setItem("classes", JSON.stringify(classes));
}

function loadClasses() {
    let classes = JSON.parse(localStorage.getItem("classes")) || [];
    let classList = document.getElementById("class-list");
    classes.forEach(className => {
        let li = document.createElement("li");
        li.textContent = className;
        classList.appendChild(li);
    });
}

function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    document.getElementById("contact-form").reset();
}
