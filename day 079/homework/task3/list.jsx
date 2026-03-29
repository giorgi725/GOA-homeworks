import ListItem from "./item";

export default function List(props) {
    return (
        <ul>
        {props.items.map((item, index) => (
            <ListItem key={index} item={item} />
        ))}
        </ul>
    );
}