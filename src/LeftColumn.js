import React from 'react';

const LeftColumn = ({ items, selectedItems, handleCheckboxChange }) => {
  return (
    <div className="column">
      <h3>Left Column</h3>
      {items.map(item => (
        <div key={item}>
          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => handleCheckboxChange(item, selectedItems)}
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default LeftColumn;
