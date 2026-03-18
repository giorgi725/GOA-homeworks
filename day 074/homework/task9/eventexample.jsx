export default function EventExample() {
    const Click = () => {
        console.log("Clicked");
    };
    return <button onClick={Click}>Click Me</button>
}