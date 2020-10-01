import React, { memo, useState } from 'react';
import SearchForm from './compenents/SearchForm';
import { OmdbSearchQuery } from '../../../../../../../interfaces';
import { useSelector } from 'react-redux';
import { omdbSearchResultsSelector } from '../../../../ducks/selectors';
import SearchResultsPanel from './compenents/SearchResultsPanel';
import isEqual from 'lodash/isEqual';

const AddShowControlPanel: React.FC = () => {
  const [
    currentSearchQuery,
    setCurrentSearchQuery,
  ] = useState<OmdbSearchQuery | null>(null);
  const searchResults = useSelector(omdbSearchResultsSelector);
  const existingSearchQuery = searchResults.find(({ params }) =>
    isEqual(params, currentSearchQuery)
  );
  const { loading, error } = existingSearchQuery || {};

  return (
    <div>
      <SearchForm
        searchResults={searchResults}
        setSearchQuery={setCurrentSearchQuery}
      />
      <SearchResultsPanel
        currentSearchQuery={existingSearchQuery?.params}
        searchResults={existingSearchQuery?.results}
        queryHasError={error}
        queryIsLoading={loading}
      />
    </div>
  );
};

export default memo(AddShowControlPanel);
