export default function ListRender() {
    const items = ["HTML", "CSS", "JS"]  
    return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    );
}