const http = require('http');
const fs = require('fs');
const { URL } = require('url');

const PORT = 3000;

function readProducts() {
    const data = fs.readFileSync('./products.json', 'utf8');
    return JSON.parse(data);
}

function writeProducts(products) {
    fs.writeFileSync(
        './products.json',
        JSON.stringify(products, null, 2)
    );
}

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        if (req.method === 'GET' && url.pathname === '/products') {
            let products = readProducts();
            if (url.searchParams.get('id')) {
                const id = Number(url.searchParams.get('id'));
                const product = products.find(
                    product => product.id === id
                );
                if (!product) {
                    res.statusCode = 404;
                    return res.end(JSON.stringify({
                        message: 'Product not found'
                    }));
                }
                return res.end(JSON.stringify(product));
            }

            if (url.searchParams.get('price')) {
                const price = Number(
                    url.searchParams.get('price')
                );
                const filteredProducts = products.filter(
                    product => product.price === price
                );
                return res.end(
                    JSON.stringify(filteredProducts)
                );
            }
            return res.end(JSON.stringify(products));
        }
        else if (
            req.method === 'POST' &&
            url.pathname === '/add-product'
        ) {
            let body = '';
            req.on('data', chunk => {
                body += chunk;
            });
            req.on('end', () => {
                try {
                    const { title, price } = JSON.parse(body);
                    if (!title || !price) {
                        res.statusCode = 400;
                        return res.end(JSON.stringify({
                            message: 'Title and price are required'
                        }));
                    }
                    const products = readProducts();
                    const newProduct = {
                        id: Date.now(),
                        title,
                        price
                    };
                    products.push(newProduct);
                    writeProducts(products);
                    res.statusCode = 201;
                    res.end(JSON.stringify({
                        message: 'Product added',
                        product: newProduct
                    }));
                } catch (error) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({
                        message: 'Invalid JSON'
                    }));
                }
            });
        }
        else {
            res.statusCode = 404;
            res.end(JSON.stringify({
                message: 'Route not found'
            }));
        }
    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({
            message: 'Internal Server Error'
        }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});