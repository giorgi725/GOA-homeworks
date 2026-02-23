// გატესტეთ და გამოიყენეთ თითეული მოვლენა, ასევე აღწერეთ თუ როდის მოხდება ეს მოვლენები

// onclick
// onload
// onunload
// onchange
// onmouseover
// onmouseout
// onmousedown
// onmouseup
// onblur
// onfocus

// onclick - როცა ელემენტზე მაუსით დავაჭერთ (click).
const btn = document.getElementById("btn");
btn.onclick = function() {
    alert("clicked!");
};

// onload - როცა გვერდი სრულად ჩაიტვირთება
// <body onload="pageLoaded()">
// function pageLoaded() {
//     console.log("Page fully loaded!");
// }

// onunload - როცა მომხმარებელი ტოვებს გვერდს (refresh, სხვა გვერდზე გადასვლა, tab დახურვა).

// <body onunload="byeMessage()">
// function byeMessage() {
//     console.log("You are leaving the page");
// }

// onchange - როცა input/select-ის მნიშვნელობა შეიცვლება და ელემენტი ფოკუსს დაკარგავს.

// <input type="text" id="name">
// const input = document.getElementById("name");

// input.onchange = function() {
//     console.log("Value changed to:", input.value);
// };

// onchange - როცა input/select-ის მნიშვნელობა შეიცვლება და ელემენტი ფოკუსს დაკარგავს.

// <input type="text" id="name">
// const input = document.getElementById("name");

// input.onchange = function() {
//     console.log("Value changed to:", input.value);
// };

// onmouseout - როცა მაუსი ელემენტიდან გადის.

box.onmouseout = function() {
    box.style.background = "blue";
};

// onmousedown - როცა მაუსის ღილაკს დავაჭერთ (ჯერ არ გაგვიშვია).

box.onmousedown = function() {
    console.log("Mouse button pressed");
};

// onmouseup - როცა მაუსის ღილაკს გავუშვებთ.

box.onmouseup = function() {
    console.log("Mouse button released");
};

// onblur - როცა input კარგავს ფოკუსს.

// <input type="text" id="email">

// const email = document.getElementById("email");

// email.onblur = function() {
//     email.style.border = "2px solid red";
// };

// onfocus - როცა ელემენტი იღებს ფოკუსს (input-ზე დაჭერა).

email.onfocus = function() {
    email.style.border = "2px solid green";
};