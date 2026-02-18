// 10) შექმენით ინტერვალი, რომელიც ყოველ 1 წუთში ერთხელ (60000 ms) ზრდის time ცვლადს ერთით და კონსოლში წერს "Current minutes: " + time. როდესაც time გახდება 34, უნდა გაჩერდეს ინტერვალი და გამოიტანოს ტექსტი "Time up". კომენტარებით ახსენით როგორ მუშაობს clearInterval და რატომ ვამოწმებთ პირობას if(time === 34)


let time = 0; 

const interval = setInterval(function() {
    time++;
    console.log("Current minutes: " + time);

    if (time === 34) {
        clearInterval(interval);
        console.log("Time up");
    }
}, 60000); 
