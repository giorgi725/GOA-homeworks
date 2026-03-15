// 5) შექმენით ImagesBlock კომპონენტი რომელიც აბრუნებს <div> და შიგნით 2 <img> ტეგს ნებისმიერი სურათის ლინკით  
// App-ში გამოიტანეთ <ImagesBlock /> და ნახეთ როგორ მუშაობს JSX-ში img ტეგი

function ImagesBlock(){
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSatxvizfQunTOqkNzuh98m87-C7f-oX8_qw&s" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgLVEvYYgGG0O9G9dRlV0NErNp8mwspo1jQ&s" />
        </div>
    )
}
export default ImagesBlock;