// pages/AdminPanel.jsx

import { useState } from "react";

function AdminPanel() {
    const [products, setProducts] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
        id: Date.now(),
        name: formData.name,
        price: formData.price,
        description: formData.description,
        };

        setProducts([...products, newProduct]);

        setFormData({
        name: "",
        price: "",
        description: "",
        });

        /*
        state ცვლილების შემდეგ
        კომპონენტი rerender ხდება,
        რადგან React UI-ს აახლებს.
        */
    };

    const deleteProduct = (id) => {
        const filtered = products.filter(
        (product) => product.id !== id
        );

        setProducts(filtered);
    };

    return (
        <div>
        <h1>Admin Panel</h1>

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            />

            <br />
            <br />

            <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            />

            <br />
            <br />

            <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            />

            <br />
            <br />

            <button type="submit">
            Add Product
            </button>
        </form>

        <hr />

        {products.length === 0 ? (
            <h2>There are no products</h2>
        ) : (
            <table border="1">
            <thead>
                <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.name}</td>

                    <td>{product.price}</td>

                    <td>{product.description}</td>

                    <td>
                    <button
                        onClick={() =>
                        deleteProduct(product.id)
                        }
                    >
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

export default AdminPanel;