// 16) React კომპონენტში შექმენით boolean ცვლადი showText. JSX-ში && ოპერატორის გამოყენებით გამოიტანეთ <p> ტექსტით "This text is visible" მხოლოდ მაშინ, როცა showText არის true. კომენტარებში ახსენით && ოპერატორის მუშაობის პრინციპი JSX-ში

export default function app() {
    const showText = true
    return (
        <div>
            {showText && <p>This text is visible</p>}
        </div>
    )

}