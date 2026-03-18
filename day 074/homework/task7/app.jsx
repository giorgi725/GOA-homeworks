// 8) შექმენით ConditionalRender კომპონენტი  
// შექმენით const isLoggedIn = true  
// JSX-ში გამოიყენეთ ternary ოპერატორი  
// თუ true → "Welcome"  
// თუ false → "Please log in"

import ConditionalRender from "./cONDITIONrENDER.JSX";

function app() {
    return <ConditionalRender />
}
export default app;