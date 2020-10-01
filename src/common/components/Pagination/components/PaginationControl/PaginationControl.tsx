import React from 'react';
import Dropdown, { ItemType } from '../../../Dropdown';

interface Props {
  currentLimit: number;
  setLimit: (l: number) => void;
  limitOptions?: number[];
}

const PaginationControl: React.FC<Props> = ({
  currentLimit,
  setLimit,
  limitOptions,
}) => {
  if (!limitOptions) return null;

  const dropdownOptions: ItemType[] = limitOptions.map((option) => ({
    id: `${option}`,
    label: `${option}`,
  }));

  const handleChange = (item: ItemType) => setLimit(parseInt(item.id, 10));
  const selectedLimit: ItemType = {
    id: `${currentLimit}`,
    label: `${currentLimit}`,
  };

  return (
    <Dropdown
      items={dropdownOptions}
      onChange={handleChange}
      selectedItem={selectedLimit}
      id="limit-selection"
    />
  );
};

export default PaginationControl;
