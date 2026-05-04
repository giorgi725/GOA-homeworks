

function expensive(a) {
    for(let i = 0; i < 100000000; i++){}
    return a * 2
}

//useMemo
// memoization - ქეშირება
// gadaecema ori oarametri callBack da

export default function App(){
    const [num1, setNum2] = useState(1)
    const [num2, setNum2] = useState(1)
    const [doubled, setDoubled] = useState(num2)

    const getDouble = useMemo(() => expensive(num2), num2)

    return (
        <>
            <button onClick={() => setNum1((prev) => prev + 1)}>add one to num1</button>
            <p>number one: {num1}</p>

            <button onClick={() => setNum2((prev) => prev + 1)}>add one to num2</button>
            <p>number two: {num2}</p>

            <button onClick={() => setDoubled(getDouble)}>double num 2</button>
        </>
    )
}
import React, {useCallback, useEffect, useMemo, useState} from "react";
//useCallback

const products = [
    {id:0, title: "laptop"},
    {id:1, title: "router"},
    {id:2, title: "modem"},
    {id:3, title: "server"},
    {id:4, title: "pc"}
]

export default function App(){
    const [index, setIndex] = useState(0)
    const [otherState, setOtherState] = useState(0)

    const nextProduct = useCallback(() => {
        return products[index]
    }, [index])
    return (
        <>
            <button onClick={() => setIndex(prev => prev + 1)}>increment index</button>
            <p> index: {index}</p>
            <button onClick={() => setOtherState(otherState + 1)}>change other state</button>
            <p>other state: {otherState}</p>
            <hr />

            <Products productsRender={nextProduct} />
        </>
    )
}

function Products({productsRender, nextProduct}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts([...products, nextProduct()])
    }, [productsRender])

    return (
        <div>
            {products.map((_, value) => {
                return <p key={value.id}>{value.title}</p>
            })}
        </div>
    )
}