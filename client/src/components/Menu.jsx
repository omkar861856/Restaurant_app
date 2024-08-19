// src/components/Menu.js

import React, { useState } from 'react';
import './Menu.css';

const Menu = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Appetizers', 'Main Course', 'Desserts'];

  const filteredItems = items.filter(item =>
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <div className="menu-filters">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="menu-categories">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="menu-items">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Rating: {item.rating} ★</p>
              <p>Rs.{item.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;







// import React, { useState } from 'react';
// import './Menu.css';

// const Menu = ({ items }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const categories = ['All', 'Appetizers', 'Main Course', 'Desserts'];

//   const filteredItems = items.filter(item =>
//     (selectedCategory === 'All' || item.category === selectedCategory) &&
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="menu">
//       <div className="menu-filters">
//         <input
//           type="text"
//           placeholder="Search for a dish..."
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//         <div className="menu-categories">
//           {categories.map(category => (
//             <button
//               key={category}
//               className={selectedCategory === category ? 'active' : ''}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="menu-items">
//         {filteredItems.map((item, index) => (
//           <div key={index} className="menu-item">
//             <img src={item.image} alt={item.name} className="item-image" />
//             <div className="item-info">
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <p>Rating: {item.rating} ★</p>
//               <p>${item.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;
