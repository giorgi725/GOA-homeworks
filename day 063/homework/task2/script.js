// 3) Event propagation ახსენით თქვენი სიტყვებით, დაწერეთ რას ნიშნავს კომენტარებით, მოიყვანეთ bubbling-ის და capturing-ის მაგალითი

// Event propagation ნიშნავს იმას, როგორ “მოგზაურობს” event (მოვლენა) DOM-ში.
// როცა მაგალითად ღილაკს ვაჭერთ, event არ ხდება მხოლოდ იმ ღილაკზე — ის გადის მშობელ ელემენტებშიც.

// Capturing phase (ზემოდან ქვემოთ)
// Bubbling phase (ქვემოდან ზემოთ)

// Bubbling (ქვემოდან ზემოთ)
// ანუ event იწყება target ელემენტიდან და ადის ზემოთ მშობლებში.
// <div id="parent">
//     <button id="child">Click</button>
// </div>
// parent listener (default → bubbling)
// parent.addEventListener("click", function() {
//     console.log("Parent clicked");
// });

// child listener
// child.addEventListener("click", function() {
//     console.log("Child clicked");
// });


// Capturing (ზემოდან ქვემოთ)
// Capturing ჩართულია მაშინ, როცა addEventListener-ში მესამე პარამეტრად ვწერთ true.
// element.addEventListener("click", function(){}, true);