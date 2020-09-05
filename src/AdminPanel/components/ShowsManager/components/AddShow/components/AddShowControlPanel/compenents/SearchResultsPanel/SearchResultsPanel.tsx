import React from 'react';
import {
  OmdbSearchData,
  OmdbSearchQuery,
} from '../../../../../../../../../interfaces';
import styled from 'styled-components';
import QueryHolder from './components/QueryHolder';

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
  return (
    <SearchResultsContainer>
      <QueryHolder currentQuery={currentSearchQuery} />
      search results panel
    </SearchResultsContainer>
  );
};

export default SearchResultsPanel;
