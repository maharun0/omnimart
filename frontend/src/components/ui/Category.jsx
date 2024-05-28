// import React from 'react';

export default function Category() {
  const items = ['pc1', 'pc2', 'pc3', 'pc4', 'pc5', 'pc6', 'pc7'];

  return (
    <div>
      <div>Category</div>
      <div className="flex flex-wrap space-x-2 space-y-2">
        {items.map((item, index) => (
          <div key={index} className="w-24 h-24 bg-blue-300 rounded-lg flex items-center justify-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
