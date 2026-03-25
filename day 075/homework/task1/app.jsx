// 2) React-ის კომპონენტში შექმენით boolean ცვლადი. && ოპერატორის გამოყენებით დაარენდერეთ <p> ტექსტით "User is active" მხოლოდ მაშინ, როცა boolean არის true. კომენტარებში ახსენით && ოპერატორის ლოგიკა JSX-ში

function app() {
    const isActive = true;
    return (
        <div>
        {isActive && <p>User is active</p>}
        </div>
    );
}
export default app;