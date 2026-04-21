import { useState, useEffect } from "react";

function useProducts() {
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem("products");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);
    const addProduct = (name) => {
        const newProduct = {
        id: Date.now(),
        name,
        };
        setProducts((prev) => [...prev, newProduct]);
    };
    const deleteProduct = (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };
    return { products, addProduct, deleteProduct };
    }
    function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    const reset = () => setValues(initialValues);
    return { values, handleChange, reset };
    }
export default function Dashboard() {
    const { products, addProduct, deleteProduct } = useProducts();
    const { values, handleChange, reset } = useForm({
        name: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.name.trim()) return;
        addProduct(values.name);
        reset();
    };
    return (
        <div style={{ padding: "20px" }}>
        <h2>Dashboard</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Product name" value={values.name} onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
        <h3>Products</h3>
        {products.length === 0 ? (
            <p>No products found</p>
        ) : (
            <table border="1">
            <thead>
                <tr>
                <th>Name</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>
                    <button onClick={() => deleteProduct(product.id)}>
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
        </div>
    );
}
