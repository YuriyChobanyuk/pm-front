import React, { useState } from 'react';
import { useChunkPagination } from './utils';

interface RenderProps<T> {
  paginatedItems: T[];
  page: number;
  maxPage: number;
  changePage: (p: number) => void;
  setSearch: (s: string) => void;
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
  const [currentItems, maxPage] = useChunkPagination<ItemType>(
    items,
    limit,
    page
  );

  console.log({ search });

  return (
    <div>
      <div className="paginationContainer">
        {children({
          paginatedItems: currentItems,
          changePage: setPage,
          maxPage,
          page,
          setSearch,
        })}
      </div>
    </div>
  );
};

export default Pagination;
