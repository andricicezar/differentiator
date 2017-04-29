import React from 'react';
import Item from './item.js';

const List = ({
  title,
  items
}) => (
  <div className="mr-4">
    <h4 style={{whiteSpace: "nowrap"}}>{title}</h4>
    <div className="list-group">
      {items.map(item => (<Item key={`${title}-${item}`} item={item} />))}
    </div>
  </div>
);

export default List;
