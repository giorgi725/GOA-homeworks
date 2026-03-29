import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

export default function App() {
  return (
    <>
      <Greeting username="giorgi"></Greeting>
    </>
  )
}