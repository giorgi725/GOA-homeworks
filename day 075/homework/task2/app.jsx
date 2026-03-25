// 3) JSX-ში სცადეთ if განცხადების პირდაპირ გამოყენება და დააკვირდით შეცდომას. შემდეგ იგივე პირობა განახორციელეთ JSX-ს გარეთ ცვლადის დახმარებით და შედეგი გამოიტანეთ JSX-ში. კომენტარებში ახსენით რატომ არ მუშაობს if პირდაპირ JSX-ში

// ar mushaobs
// function UserStatus() {
//     const isActive = true;
//     return (
//         <div>
//         {
//             if (isActive) {
//             return <p>User is active</p>;
//             }
//         }
//         </div>
//     );
// }


function UserStatus() {
    const isActive = true;
    let content;
    if (isActive) {
        content = <p>User is active</p>;
    }
    return (
        <div>
        {content}
        </div>
    );
    }
export default UserStatus;
