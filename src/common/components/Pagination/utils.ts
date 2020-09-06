import { useEffect, useMemo, useState } from 'react';
import inRange from 'lodash/inRange';
import chunk from 'lodash/chunk';

export type PaginationStatus = 'start' | 'middle' | 'end' | 'default';

interface PagePaginationArgs {
  maxPage: number;
  page: number;
}

export function usePagePagination({
  maxPage,
  page,
}: PagePaginationArgs): [number[], PaginationStatus] {
  const [paginationStatus, setPaginationStatus] = useState<PaginationStatus>(
    'start'
  );

  useEffect(() => {
    if (maxPage <= 5) {
      setPaginationStatus('default');
      return;
    }
    if (page <= 3) {
      setPaginationStatus('start');
      return;
    }
    if (page >= maxPage - 3) {
      setPaginationStatus('end');
      return;
    }
    setPaginationStatus('middle');
  }, [maxPage, page, setPaginationStatus]);

  const pages = useMemo(
    () =>
      new Array(maxPage)
        .fill(0)
        .map((p, i) => i + 1)
        .filter((p) => {
          switch (paginationStatus) {
            case 'default':
              return true;
            case 'start':
              return p <= 5;
            case 'middle':
              return inRange(p, page - 2, page + 3);
            case 'end':
              return p > maxPage - 5;
            default:
              return false;
          }
        }),
    [paginationStatus, maxPage, page]
  );

  return [pages, paginationStatus];
}

export function useChunkPagination<T>(
  items: T[],
  limit: number,
  page: number
): [T[], number] {
  type ItemType = typeof items[0];
  const [filteredItems, setFilteredItems] = useState<ItemType[][]>([[]]);

  useEffect(() => {
    const chunks = chunk(items, limit);
    setFilteredItems(chunks);
  }, [items, limit]);

  const currentItems = useMemo(() => filteredItems[page - 1], [
    filteredItems,
    page,
  ]);

  const maxPage = filteredItems.length;

  return [currentItems, maxPage];
}
