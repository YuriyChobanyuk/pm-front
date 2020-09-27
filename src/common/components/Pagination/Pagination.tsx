import React, { useState, useMemo } from 'react';
import { useChunkPagination } from './utils';

interface RenderProps<T> {
  paginatedItems: T[];
  page: number;
  maxPage: number;
  changePage: (p: number) => void;
  setSearch: (s: string) => void;
  setLimit: (l: number) => void;
  search: string;
  limit: number;
}

interface Props<T> {
  items: T[];
  limit: number;
  children: React.FC<RenderProps<T>>;
}

const Pagination: <T extends {}>(props: Props<T>) => React.ReactElement = ({
  items,
  children,
  limit,
}) => {
  type ItemType = typeof items[0];
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>('');
  const [localLimit, setLocalLimit] = useState(limit);

  const filteredItems = useMemo(() => {
    if (!search) return items;
    console.log({items, search})
    return items.filter((itemProps) =>
      Object.values(itemProps).some((val) =>
        `${val}`.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [items, search]);
  const [currentItems, maxPage] = useChunkPagination<ItemType>(
    filteredItems,
    localLimit,
    page
  );

  return (
    <div>
      <div className="paginationContainer">
        {children({
          paginatedItems: currentItems,
          changePage: setPage,
          maxPage,
          page,
          setSearch,
          search,
          limit: localLimit,
          setLimit: setLocalLimit,
        })}
      </div>
    </div>
  );
};

export default Pagination;
