import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Tai nghe không dây X13",
      description: "Chống nước IPX5, âm thanh sống động",
      detail: "Sản phẩm có thiết kế thể thao, kết nối Bluetooth 5.1, pin 6 giờ.",
      price: 259000,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Loa mini Bluetooth",
      description: "Âm thanh nổi, nhỏ gọn",
      detail: "Phù hợp để nghe nhạc trong phòng cá nhân, hỗ trợ thẻ nhớ.",
      price: 199000,
      image: "https://via.placeholder.com/150"
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Danh sách sản phẩm</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", width: "220px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%" }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>{product.price.toLocaleString()} đ</strong></p>
            <button onClick={() => setSelectedProduct(product)}>Xem chi tiết</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
        }}
          onClick={() => setSelectedProduct(null)}
        >
          <div style={{
            backgroundColor: "white", padding: "20px", borderRadius: "10px", minWidth: "300px"
          }}
            onClick={e => e.stopPropagation()}
          >
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%", marginBottom: "10px" }} />
            <p><strong>Mô tả:</strong> {selectedProduct.detail}</p>
            <p><strong>Giá:</strong> {selectedProduct.price.toLocaleString()} đ</p>
            <button onClick={() => setSelectedProduct(null)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;