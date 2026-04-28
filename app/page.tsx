"use client";
import { useState } from "react";

const MENU_DATA = [
  { id: 1, name: "Malakue Cheese Blast", price: 35000, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800" },
  { id: 2, name: "Pepperoni Sulawesi", price: 42000, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800" },
  { id: 3, name: "Tuna Pedas Mapilli", price: 40000, img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800" },
];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const addToCart = (item:any) => setCart([...cart, item]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    const items = cart.map(i => `- ${i.name} Rp${i.price.toLocaleString()}`).join("%0A");
    const msg = `Halo Pizza Malakue! Saya mau pesan:%0A${items}%0A%0ATotal: Rp${total.toLocaleString()}%0A%0ANama:%0AAlamat:`;
    window.open(`https://wa.me/6282193795771?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-amber-50 text-gray-900 pb-32">
      <header className="bg-red-600 text-white p-4 sticky top-0 z-10">
        <h1 className="text-2xl font-bold">🍕 Pizza Malakue</h1>
        <p className="text-xs">BTN GRIYA BUMI REZKITA BLOK E No.5, MAPILLI</p>
      </header>
      
      <div className="p-4 grid gap-4">
        {MENU_DATA.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow p-3 flex gap-3">
            <img src={item.img} className="w-24 h-24 object-cover rounded-lg" alt={item.name} />
            <div className="flex-1">
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-red-600 font-semibold">Rp{item.price.toLocaleString()}</p>
              <button onClick={() => addToCart(item)} className="mt-2 bg-red-600 text-white px-3 py-1 rounded-lg text-sm">
                + Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t">
          <p className="font-bold">Total: Rp{total.toLocaleString()}</p>
          <button onClick={checkout} className="w-full bg-green-600 text-white py-3 rounded-xl mt-2 font-bold">
            Checkout via WhatsApp
          </button>
        </div>
      )}

      <footer className="bg-gray-800 text-white p-6 mt-10 text-center text-sm">
        <p className="font-bold text-lg mb-2">Pizza Malakue</p>
        <p>WA: 0821-9379-5771</p>
        <p className="text-xs mt-1">BTN GRIYA BUMI REZKITA BLOK E No.5, UGI BARU, MAPILLI, SULAWESI BARAT</p>
        <p className="mt-3">Transfer Bank:</p>
        <p className="font-bold">MUHAMMAD NAIM MU'MIN</p>
        <p className="font-bold">109389410103</p>
        <p className="mt-3">Buka 10:00 - 22:00 WITA</p>
      </footer>
    </main>
  );
}
