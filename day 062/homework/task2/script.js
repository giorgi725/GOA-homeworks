// 3) დაწერეთ მაგალითი სადაც გამოყენებული იქნება var, let და const ცვლადები. კომენტარებით ახსენით რით განსხვავდებიან ისინი ერთმანეთისგან და როგორია მათი მოქმედების არეალი: გლობალური, ლოკალური (ფუნქციის) და ბლოკის ფარგლები. აგრეთვე შექმენით მაგალითი ლექსიკური ფარგლების მუშაობისას და კომენტარებით ახსენით რას ნიშნავს ლექსიკური ფარგლები და როგორ მუშაობს ცვლადების ხილვადობა შიდა და გარე ფუნქციებში


var globalVar = "I am var";

let globalLet = "I am let";

const globalConst = "I am const";

function testScope() {
    // var მოქმედებს ფუნქციის ფარგლებში (Function Scope)
    var functionVar = "var inside function";
    //let მოქმედებს ბლოკის ფარგლებში (Block Scope)
    let functionLet = "let inside function";
    // const მოქმედებს ბლოკის ფარგლებში (Block Scope)
    const functionConst = "const inside function";


    if (true) {
    var blockVar = "var";
    // let მუშაობს მხოლოდ ამ ბლოკში
    let blockLet = "let";
    // const მუშაობს მხოლოდ ამ ბლოკში
    const blockConst = "const";
    console.log(blockVar);   
    console.log(blockLet);   
    console.log(blockConst); 
    }
    //var ჩანს ბლოკის გარეთაც რადგან function scope აქვს
    console.log(blockVar);

}

testScope();


function outerFunction() {
    let outerVariable = "I am outside";
        function innerFunction() {
        let innerVariable = "I am inside";

    console.log(outerVariable);
    console.log(innerVariable);
    }
    innerFunction();
}

outerFunction();

// ლექსიკური ფარგლები ნიშნავს:
// შიდა ფუნქციას შეუძლია გამოიყენოს გარე ფუნქციაში შექმნილი ცვლადები,
// მაგრამ გარე ფუნქცია ვერ ხედავს შიდა ფუნქციის ცვლადებს.
