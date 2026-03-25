// 14) React კომპონენტში შექმენით ცვლადი imgUrl და ჩაწერეთ სურათის ლინკი. JSX-ში <img> ტეგის src ატრიბუტში გამოიყენეთ ეს ცვლადი. კომენტარებში ახსენით რას ნიშნავს Variable Attribute JSX-ში

export default function app() {
    const imgUrl = "https://dynamic-media.tacdn.com/media/photo-o/31/08/cc/33/caption.jpg?f=webp&w=1000&h=700"
    return <img src={imgUrl} />
}