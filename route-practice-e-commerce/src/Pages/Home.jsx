import React from 'react';
import Product from './Product';

export default function Home() {
  const products = [
    { id: 1, name: 'Earbud Y168A', category: 'Earbuds', price: '$270.00 USD', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Pro X168A', category: 'Headphones', price: '$250.00 USD', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Speaker P168A', category: 'Speakers', price: '$240.00 USD', img: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="mx-auto max-w-[1100px] p-5">
      {/* Featured Products */}
      <Product />
    </div>
  );
}