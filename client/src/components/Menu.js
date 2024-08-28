import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuItems } from '../actions/menuActions';

const Menu = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.menuItems);

  useEffect(() => {
    const items = [
      { id: 1, name: 'Pizza', price: 10 },
      { id: 2, name: 'Burger', price: 5 },
    ];
    dispatch(setMenuItems(items));
  }, [dispatch]);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
