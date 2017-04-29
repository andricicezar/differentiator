import React from 'react';
import List from './list.js';

const Lists = ({
  lists
}) => (
  <div className="d-flex flex-row">
    {Object.keys(lists).map((listTitle, index) => (
      <List items={lists[listTitle]} title={listTitle} key={`${listTitle}-${index}`} />))}
  </div>
);

export default Lists;
