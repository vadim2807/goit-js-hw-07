const input = document.querySelector("#name-input");
const span = document.querySelector('#name-output');
input.addEventListener('input', function () {
    
    let trimmedValue = input.value.trim();
        input.value = trimmedValue;
    
    if (trimmedValue === "") {
        span.textContent = "Anonymous";
    } else {
        span.textContent = trimmedValue;
    }
   


    
    
    
})