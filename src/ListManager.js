import React, { useState } from 'react';
import './ListManager.scss';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Controls from './Controls';

const ListManager = () => {
  const initialItemsLeft = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
  const initialItemsRight = ['Project A', 'Project B', 'Project C'];

  const [leftItems, setLeftItems] = useState(initialItemsLeft);
  const [rightItems, setRightItems] = useState(initialItemsRight);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  const handleCheckboxChange = (item, selected, setSelected) => {
    setSelected(prevSelected =>
      prevSelected.includes(item) ? prevSelected.filter(i => i !== item) : [...prevSelected, item]
    );
  };

  const transferSelected = (from, to, selected, setFrom, setTo, setSelected) => {
    setTo([...to, ...selected]);
    setFrom(from.filter(item => !selected.includes(item)));
    setSelected([]);
  };

  const transferAll = (from, to, setFrom, setTo) => {
    setTo([...to, ...from]);
    setFrom([]);
  };

  return (
    <div className="transfer-list">
      <LeftColumn
        items={leftItems}
        selectedItems={selectedLeft}
        handleCheckboxChange={(item, selected) => handleCheckboxChange(item, selected, setSelectedLeft)}
      />
      <Controls
        selectedLeft={selectedLeft}
        selectedRight={selectedRight}
        transferSelectedToRight={() => transferSelected(leftItems, rightItems, selectedLeft, setLeftItems, setRightItems, setSelectedLeft)}
        transferSelectedToLeft={() => transferSelected(rightItems, leftItems, selectedRight, setRightItems, setLeftItems, setSelectedRight)}
        transferAllToRight={() => transferAll(leftItems, rightItems, setLeftItems, setRightItems)}
        transferAllToLeft={() => transferAll(rightItems, leftItems, setRightItems, setLeftItems)}
        leftItems={leftItems}
        rightItems={rightItems}
      />
      <RightColumn
        items={rightItems}
        selectedItems={selectedRight}
        handleCheckboxChange={(item, selected) => handleCheckboxChange(item, selected, setSelectedRight)}
      />
    </div>
  );
};

export default ListManager;
