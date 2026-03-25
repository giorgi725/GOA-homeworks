// 15) React კომპონენტში შექმენით boolean ცვლადი isLoggedIn. JSX-ს გარეთ დაწერეთ ლოგიკა, რომელიც ქმნის ცვლადს message. თუ isLoggedIn არის true, message იყოს , წინააღმდეგ შემთხვევაში "Please log in". JSX-ში გამოიტანეთ message. კომენტარებში ახსენით რას ``ნიშნავს ლოგიკის გამოყოფა JSX-დან

export default function app() {
    const isLoggedIn = true
    let message
    if (isLoggedIn) {
        message = "Hello user";
    } else {
        message = "Please log in";
    }
    return (
        <div>
        <p>{message}</p>
        </div>
    );
}