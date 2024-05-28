// import React from 'react';
import { Button } from "./button"

export default function ProductList() {
  const items = ["pd1", "pd2", "pd3", "pd4", "pd5", "pd6", "pd7", "pd8"];


  return (
    <div>
      <div>Product List</div>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-32 h-32 bg-blue-300 rounded-lg flex items-center justify-center"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button variant="outline" className="w-80">Load more...</Button>
      </div>
    </div>
  );
}
