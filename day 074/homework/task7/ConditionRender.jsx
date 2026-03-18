export default function ConditionalRender() {
    const isLoggedIn = true

    return (
        <h2>
            {isLoggedIn ? "Welcome" : "Please log in"}
        </h2>
    )
}