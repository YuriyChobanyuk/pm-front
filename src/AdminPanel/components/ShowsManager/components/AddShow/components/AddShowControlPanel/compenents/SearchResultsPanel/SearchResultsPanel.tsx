import React from 'react';
import {
  OmdbSearchData,
  OmdbSearchQuery,
} from '../../../../../../../../../interfaces';
import styled from 'styled-components';
import QueryHolder from './components/QueryHolder';
import CustomTable from '../../../../../../../../../common/components/Table';
import { TableButtonProps } from '../../../../../../../../../common/components/Table/components/IconButton';
import {
  faClipboard,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Pagination, {
  PaginationBar,
} from '../../../../../../../../../common/components/Pagination';
import PaginationSearch from '../../../../../../../../../common/components/Pagination/components/PaginationSearch';

const SearchResultsContainer = styled.div`
  position: relative;
`;

interface Props {
  currentSearchQuery: OmdbSearchQuery | null;
  searchResults: OmdbSearchData[] | null;
  queryIsLoading?: boolean;
  queryHasError?: any;
}

const SearchResultsPanel: React.FC<Props> = ({
  currentSearchQuery,
  searchResults,
  queryHasError,
  queryIsLoading,
}) => {
  const getSearchResults = () => {
    // TODO replace to the better loader
    if (queryIsLoading) {
      return <h2>Loading</h2>;
    }

    if (queryHasError) {
      return <div>Error(((</div>;
    }

    if (!searchResults) {
      return null;
    }

    const headers: (keyof OmdbSearchData)[] = ['title', 'type', 'year'];
    const rows = searchResults.map((result) => ({
      ...result,
      id: result.imdbId,
    }));
    const rowHeight = 3.25;
    const maxAllowedRows = 8;
    const maxHeight = `${(rowHeight + 2) * maxAllowedRows}rem`;

    const controls: TableButtonProps[] = [
      {
        icon: faClipboard,
        callback: (id: string) => id,
        color: 'info',
        label: 'Get details',
      },
      {
        icon: faPlus,
        callback: (id: string) => id,
        color: 'secondaryLighten',
        label: 'Add show',
      },
      {
        icon: faTrash,
        callback: (id: string) => id,
        color: 'danger',
        label: 'Remove from results',
      },
    ];

    return (
      <Pagination<typeof rows[0]> items={rows} limit={6}>
        {({ paginatedItems, page, maxPage, changePage, setSearch }) => {
          return (
            <CustomTable
              headers={headers}
              rows={paginatedItems}
              maxHeight={maxHeight}
              controls={controls}
              bottomSlot={
                <PaginationBar
                  page={page}
                  maxPage={maxPage}
                  onChange={changePage}
                  searchSlot={
                    <PaginationSearch onSearch={setSearch} />
                  }
                />
              }
            />
          );
        }}
      </Pagination>
    );
  };
  return (
    <SearchResultsContainer>
      <QueryHolder currentQuery={currentSearchQuery} />
      {getSearchResults()}
    </SearchResultsContainer>
  );
};

export default SearchResultsPanel;
