// 7) React-ის კომპონენტში შექმენით რიცხვითი ცვლადი (მაგ: notificationsCount). && ოპერატორის გამოყენებით დაარენდერეთ <p> ტექსტით "You have new notifications" მხოლოდ მაშინ, როცა რიცხვი მეტია 0-ზე. კომენტარებში ახსენით რატომ მუშაობს && ამ შემთხვევაში

export default function Notifications() {
    const notificationsCount = 3;
    return <p>{notificationsCount > 0 && <p>You have new notifications</p>}</p>
}
