// 3) შექმენით ClassNameExample კომპონენტი  
// დააბრუნეთ <div className="box">Content</div>  
// კომენტარებში ახსენით რატომ ვიყენებთ className-ს და არა class-ს JSX-ში  
// App-ში გამოიტანეთ <ClassNameExample />

import ClassNameExample from "./ClassName";

function app() {
    return (
        <ClassNameExample />
    )
}
export default app;
// class არის javascript ის რეზერვირებული სიტყვა და jsx არ გამოიყენება