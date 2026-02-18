let firstLi = document.getElementById("first");
console.log(firstLi);

let allLiTags = document.getElementsByTagName("li");
console.log(allLiTags);

let allItems = document.getElementsByClassName("items");
console.log(allItems);

let secondLi = document.getElementById("second");
console.log(secondLi.previousElementSibling);

console.log(secondLi.nextElementSibling);

let ul = document.getElementById("myList");
console.log(ul.firstChild);

console.log(ul.lastChild);

console.log(ul.childNodes);

console.log(ul.children);