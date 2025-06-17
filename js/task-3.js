const input = document.querySelector("#name-input");
const span = document.querySelector('#name-output');
input.addEventListener('input', function () {
    
    let trimmedValue = input.value.trim();
    if (input.value === "") {
        span.textContent = "Anonymous";
    }
   


    
    
    
})