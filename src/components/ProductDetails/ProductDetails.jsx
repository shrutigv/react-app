
import { Card, Descriptions, Image, Button, Rate } from 'antd';
import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
     const [product, setProduct] = useState(product);
    useEffect(() => {
        // Fetch product details from API or state management
        fetch('https://localhost:8080/product/1')
            .then(response => response.json())
            .then(data => {
                // Update product state with fetched data
                setProduct(data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, []),
    <Card
        title={product.name}
        extra={<Button type="primary">Add to Cart</Button>}
        style={{ maxWidth: 700, margin: '40px auto' }}
    >
        <div style={{ display: 'flex', gap: 32 }}>
            <Image
                src={product.image}
                alt={product.name}
                width={300}
                style={{ borderRadius: 8 }}
            />
            <div style={{ flex: 1 }}>
                <Descriptions column={1} bordered>
                    <Descriptions.Item label="Description">{product.description}</Descriptions.Item>
                    <Descriptions.Item label="Category">{product.category}</Descriptions.Item>
                    <Descriptions.Item label="Price">${product.price.toFixed(2)}</Descriptions.Item>
                    <Descriptions.Item label="Stock">{product.stock > 0 ? `${product.stock} available` : 'Out of stock'}</Descriptions.Item>
                    <Descriptions.Item label="Rating">
                        <Rate allowHalf disabled defaultValue={product.rating} /> ({product.rating})
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    </Card>
};

export default ProductDetails;