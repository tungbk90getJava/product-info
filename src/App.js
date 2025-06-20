import { useState } from 'react';

const sampleProducts = [
  {
    id: 1,
    name: 'Tai nghe Bluetooth X13',
    description: 'Chống nước IPX5, thời lượng pin 10h',
    price: 309000,
    image: 'https://picsum.photos/seed/x13/200/150'
  },
  {
    id: 2,
    name: 'Chuột không dây Logitech M185',
    description: 'Kết nối USB, pin 12 tháng',
    price: 189000,
    image: 'https://picsum.photos/seed/m185/200/150'
  },
  {
    id: 3,
    name: 'Bàn phím cơ AKKO 3068-sửa 1',
    description: 'Switch Gateron, Led RGB',
    price: 1290000,
    image: 'https://picsum.photos/seed/akko3068/200/150'
  },
  {
    id: 4,
    name: 'Ổ cứng SSD Kingston 240GB',
    description: 'Tốc độ đọc 500MB/s- sửa 2',
    price: 650000,
    image: 'https://picsum.photos/seed/ssd240/200/150'
  },
  {
    id: 5,
    name: 'Loa Bluetooth JBL GO 3',
    description: 'Chống nước IP67, pin 5h',
    price: 8900000,
    image: 'https://picsum.photos/seed/jblgo3/200/150'
  },
  {
    id: 6,
    name: 'USB Sandisk 64GB',
    description: 'Chuẩn 3.0, tốc độ cao',
    price: 199000,
    image: 'https://picsum.photos/seed/usb64/200/150'
  },
  {
    id: 7,
    name: 'Camera hành trình Vietmap C65',
    description: 'Ghi hình 4K, tích hợp GPS',
    price: 2350000,
    image: 'https://picsum.photos/seed/c65/200/150'
  },
  {
    id: 8,
    name: 'Đồng hồ thông minh Xiaomi Band 7',
    description: 'Màn hình AMOLED, đo nhịp tim',
    price: 990000,
    image: 'https://picsum.photos/seed/band7/200/150'
  },
  {
    id: 9,
    name: 'Pin dự phòng Anker 10000mAh',
    description: 'Hỗ trợ sạc nhanh',
    price: 750000,
    image: 'https://picsum.photos/seed/anker10000/200/150'
  },
  {
    id: 10,
    name: 'Quạt mini để bàn Xiaomi',
    description: 'Thiết kế nhỏ gọn, êm ái',
    price: 250000,
    image: 'https://picsum.photos/seed/fanmini/200/150'
  }
];

export default function App() {
  const [search, setSearch] = useState('');

  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Danh sách sản phẩm</h1>
      <input
        type="text"
        placeholder="Tìm theo tên sản phẩm..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '12px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '12px' }} />
            <h2 style={{ fontSize: '18px', fontWeight: '600' }}>{product.name}</h2>
            <p style={{ fontSize: '14px', color: '#555' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', color: '#007bff' }}>{product.price.toLocaleString()} đ</p>
          </div>
        ))}
      </div>
    </div>
  );
}