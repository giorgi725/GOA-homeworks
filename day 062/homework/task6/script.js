// 7) შექმენით ინტერვალი, რომელიც ყოველ 1 წამში ერთხელ კონსოლში გამოიტანს ამჟამინდელ თარიღსა და დროს new Date() ობიექტის გამოყენებით. კომენტარებით ახსენით რას აკეთებს setInterval ფუნქცია და რა არგუმენტებს იღებს


// სინტაქსი: setInterval(function, delay, [arguments])
// function - ფუნქცია, რომელიც შესრულდება
// delay - ინტერვალი მილიწამებში (1000 ms = 1 წამი)
// arguments - ფუნქციას გადასაცემი პარამეტრები (არასავალდებულოა)

const intervalId = setInterval(function() {
    const now = new Date();
    console.log("Current date: ", now);
}, 1000); // ყოველ 1000 მს = 1 წამი გაშვება

// სურვილისამებრ, შეიძლება გავაჩეროთ
// clearInterval(intervalId);