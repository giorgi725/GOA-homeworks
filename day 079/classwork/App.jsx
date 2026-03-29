// function MyComponent() {
//   const chance = Math.random() < 0.5;

//   const handleSubmit = () => {
//     alert('Form submitted!');
//   };
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <div>
//       {chance ? (
//         <form>
//           <input type="text" />
//           <button type="submit" onClick={handleSubmit}>Submit</button>
//         </form>
//       ) : (
//         <ul>
//           <li>group</li>
//           <li>88</li>
//           <button onClick={handleClick}>Click</button>
//         </ul>
//       )}
//     </div>
//   );
// }
// export default MyComponent;

//React-ში არსებობს hooks კაუჭები რომლებიც თითქმის თავისებურ პრობლემას წყვეტს
//react-ისეულ ღრმა ლოგიკას გვისრულებს, დახმარება ფუნქციის როლს ასრულებს

//hook-ს react-ში აქვთ დასახელების წესი: useHook

//კაუჭების გამოყენების წესები:
//1. ყოველთვის კომპონენტის შიგნით იწერება თუარა error-ს აირტყავ
//2. არ შეიძლება if/else loop ან რაიმე სტრუქტურაში ჩაწერა
import { useState } from "react";

//usestate არის კაუჭა რომლის მეშვეობითაც ვქმნით მდგომარეობას
//როდესაც მდგომარეობის მნიშვნელობა შეიცვლება სადმე თუკია გამოყენებული ეს მდგომარეობა თქვენს აპლიკაციაში ყველგან თავიდან მოხდება მისი განახლებული მნიშვნელობის დარენდერება

//usestate-ის გამოყენებისას თქვენ გიბრუნდებათ მასივი 2 მნიშვნელობიტ: პირველი არის თვითონ მდგომარეობის მნიშვნელობა, ხოლო მეორე არის მისი setter ფუნქცია (რომლის გამოძახებისას count თუ შეიცვალა თავიდან დაარენდერებს ყველგან), მდგომარეობის შეცვლა მხოლოდ თავის usestate გადაეცემა ერთი არგუმენტი რაც არის თავდაპირველი მდგომარეობის მნიშვნელობა
export default function app() {

  const [count, setCount] = useState()
  function handleDecrement () {
    setCount(count + 1)
  }
  function handleIncrement () {
    setCount(count - 1)
  }
  return (
    <>
      <button onClick={handleIncrement}>Increment -1</button>
      <br />
      <button onClick={handleDecrement}>Decrement +1</button>
      <p>Count: {count}</p>
    </>
  )
  // hooks
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment -1</button>
      <br />
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement +1</button>
      <p>Count: {count}</p>
    </>
  )
}