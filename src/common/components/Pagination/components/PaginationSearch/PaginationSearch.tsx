import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import { SearchInput } from '../../../Input';
import { useDebounce } from 'use-debounce';

interface Props {
  onSearch: (s: string) => void;
}

const PaginationSearch: React.FC<Props> = ({ onSearch }) => {
  const [localSearch, setLocalSearch] = useState('');
  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget?.value || '';
      setLocalSearch(value);
    },
    [setLocalSearch]
  );

  const [debouncedSearch] = useDebounce(localSearch, 500);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  return (
    <SearchInput
      onChange={handleSearch}
      name="pagination-search"
      placeholder="Search in table"
      margin="0"
      value={localSearch}
      id={'omdb-search-input'}
      hideLabel
      small
    />
  );
};

export default PaginationSearch;
