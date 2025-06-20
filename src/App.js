import { useState } from 'react';

const sampleProducts = [
  {
    id: 1,
    name: 'Tai nghe Bluetooth X13',
    description: 'Chống nước IPX5, thời lượng pin 10h',
    price: 309000,
    image: 'https://via.placeholder.com/150?text=X13'
  },
  {
    id: 2,
    name: 'Chuột không dây Logitech M185',
    description: 'Kết nối USB, pin 12 tháng',
    price: 189000,
    image: 'https://via.placeholder.com/150?text=M185'
  },
  {
    id: 3,
    name: 'Bàn phím cơ AKKO 3068',
    description: 'Switch Gateron, Led RGB',
    price: 1290000,
    image: 'https://via.placeholder.com/150?text=AKKO3068'
  },
  {
    id: 4,
    name: 'Ổ cứng SSD Kingston 240GB',
    description: 'Tốc độ đọc 500MB/s',
    price: 650000,
    image: 'https://via.placeholder.com/150?text=SSD240'
  },
  {
    id: 5,
    name: 'Loa Bluetooth JBL GO 3',
    description: 'Chống nước IP67, pin 5h',
    price: 890000,
    image: 'https://via.placeholder.com/150?text=JBLGO3'
  },
  {
    id: 6,
    name: 'USB Sandisk 64GB',
    description: 'Chuẩn 3.0, tốc độ cao',
    price: 199000,
    image: 'https://via.placeholder.com/150?text=USB64'
  },
  {
    id: 7,
    name: 'Camera hành trình Vietmap C65',
    description: 'Ghi hình 4K, tích hợp GPS',
    price: 2350000,
    image: 'https://via.placeholder.com/150?text=C65'
  },
  {
    id: 8,
    name: 'Đồng hồ thông minh Xiaomi Band 7',
    description: 'Màn hình AMOLED, đo nhịp tim',
    price: 990000,
    image: 'https://via.placeholder.com/150?text=Band7'
  },
  {
    id: 9,
    name: 'Pin dự phòng Anker 10000mAh',
    description: 'Hỗ trợ sạc nhanh',
    price: 750000,
    image: 'https://via.placeholder.com/150?text=Anker10000'
  },
  {
    id: 10,
    name: 'Quạt mini để bàn Xiaomi',
    description: 'Thiết kế nhỏ gọn, êm ái',
    price: 250000,
    image: 'https://via.placeholder.com/150?text=FanMini'
  }
];

export default function ProductList() {
  const [search, setSearch] = useState('');

  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <input
        type="text"
        placeholder="Tìm theo tên sản phẩm..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="rounded-2xl shadow p-4 bg-white">
            <img src={product.image} alt={product.name} className="mb-3 rounded" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold text-blue-600">{product.price.toLocaleString()} đ</p>
          </div>
        ))}
      </div>
    </div>
  );
}
