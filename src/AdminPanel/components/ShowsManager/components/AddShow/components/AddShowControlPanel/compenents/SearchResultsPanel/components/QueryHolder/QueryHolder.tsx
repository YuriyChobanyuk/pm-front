import React from 'react';
import { OmdbSearchQuery } from '../../../../../../../../../../../interfaces';
import styled from 'styled-components';

const NoQueryPlaceholder = styled.h3`
  margin: 0 1rem;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.darken};
`;

const QueryContainer = styled.div`
  padding: 2.25rem 1.5rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: .8rem;
`;

const QuerySearch = styled.span`
  padding: 0 0.5rem;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.primary};
`;

const SearchKey = styled.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.darken};
`;

const ParamKey = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.darken};
  margin-right: 1rem;
`;

const ParamResult = styled.span`
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.primaryLighten};
`;

interface Props {
  currentQuery: OmdbSearchQuery | undefined;
}

const QueryHolder: React.FC<Props> = ({ currentQuery }) => {
  if (!currentQuery) {
    return (
      <NoQueryPlaceholder>Search for some new shows here</NoQueryPlaceholder>
    );
  }
  return (
    <QueryContainer>
      <QuerySearch>
        <SearchKey>Results for: </SearchKey>
        {currentQuery.s}
      </QuerySearch>
      <ParamResult>
        <ParamKey>Year: </ParamKey>
        {currentQuery.y || '-'}
      </ParamResult>
      <ParamResult>
        <ParamKey>Type: </ParamKey>
        {currentQuery.type || '-'}
      </ParamResult>
    </QueryContainer>
  );
};

export default QueryHolder;
