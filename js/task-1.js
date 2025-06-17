const listUl = document.querySelectorAll('.item');
console.log("Number of categories: " + listUl.length);

listUl.forEach(li => {
    console.log("Category: " + li.querySelector('h2').textContent);
    console.log("Category: " + li.querySelector('ul').children.length);
});