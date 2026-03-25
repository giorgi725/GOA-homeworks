// 8) React-ის კომპონენტში შექმენით ღილაკი და დაამატეთ onClick event. ღილაკზე დაჭერისას console.log-ში დაბეჭდეთ "Button clicked". კომენტარებში ახსენით როგორ მუშაობს event handling JSX-ში

export default function app() {
    function Click() {
    console.log("Button clicked");
    }
    return (
        <div>
        <button onClick={Click}>
            Click me
        </button>
        </div>
    );
}