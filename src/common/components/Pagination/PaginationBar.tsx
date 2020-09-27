import React from 'react';
import styled, {css} from 'styled-components';
import IconButton from '../Table/components/IconButton';
import {ColorVariants} from '../../../styles/themes/types/theme-types';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import {usePagePagination} from './utils';

const DotsPlaceholder = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0.125rem;
`;

const Col = styled.div<{ size: number }>`
  width: 100%;
  max-width: ${({ size }) => size}%;
  padding: 0 0.75rem;
`;

const PaginationBarContainer = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primaryLighten};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
`;

const PaginationItem = styled.li`
  margin: 0.125rem;
  width: 2rem;
  height: 2rem;
`;

const PaginationNumber = styled.span`
  font-size: 1.1rem;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownLabel = styled.span`
  color: ${({ theme }) => theme.colors.lightcyan};
  width: 60%;
  text-align: end;
  padding-right: 1rem;
  
  & + div {
    width: 40%;
    min-width: 5rem;
  }
`;

const ActionPagination = css`
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primaryLighten};
    color: ${({ theme }) => theme.colors.lightgrey};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.grey};

    cursor: default;
  }
`;

const PaginationIcon = styled(IconButton)<{
  active: boolean;
  color: ColorVariants;
  fontColor: ColorVariants;
}>`
  padding: 0.85rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme, fontColor }) => theme.colors[fontColor]};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.dark};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.grey};
  }

  &:not(:disabled):focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.info},
      0 0 0 3px ${({ theme }) => theme.colors.lightcyan};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.darken};
  }

  ${({ active }) => active && ActionPagination};
`;

interface Props {
  page: number;
  maxPage: number;
  onChange: (p: number) => void;
  searchSlot?: React.ReactElement;
  limitSlot?: React.ReactElement;
}

const PaginationBar: React.FC<Props> = ({
  page,
  maxPage,
  onChange,
  searchSlot,
  limitSlot,
}) => {
  const [pages, paginationStatus] = usePagePagination({ page, maxPage });

  const getPagination = () => {
    return pages.map((paginationPage) => (
      <PaginationItem>
        <PaginationIcon
          id={`Pagination page ${paginationPage}`}
          key={paginationPage}
          callback={() => onChange(paginationPage)}
          label={`Page ${paginationPage}`}
          color="grey"
          fontColor="primary"
          active={paginationPage === page}
          disabled={paginationPage === page}
        >
          <PaginationNumber>{paginationPage}</PaginationNumber>
        </PaginationIcon>
      </PaginationItem>
    ));
  };

  const getComplexPagination = () => {
    return (
      <>
        <PaginationItem>
          <PaginationIcon
            id={`Pagination first page`}
            callback={() => onChange(1)}
            label={`First page`}
            color="grey"
            fontColor="primary"
            disabled={page <= 1}
            active={false}
            icon={faAngleDoubleLeft}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationIcon
            id={`Pagination prev page`}
            callback={() => onChange(page - 1)}
            label={`Prev page`}
            color="grey"
            fontColor="primary"
            disabled={page <= 1}
            active={false}
            icon={faAngleLeft}
          />
        </PaginationItem>
        {paginationStatus === 'middle' || paginationStatus === 'end' ? (
          <PaginationItem>
            <PaginationIcon
              id={`Start dots pagination`}
              callback={() => {}}
              label={`Start dots`}
              color="primaryLighten"
              fontColor="lightgrey"
              disabled
              active={false}
              icon={faEllipsisH}
            />
          </PaginationItem>
        ) : (
          <DotsPlaceholder />
        )}
        {getPagination()}
        {paginationStatus === 'middle' || paginationStatus === 'start' ? (
          <PaginationItem>
            <PaginationIcon
              id={`End dots pagination`}
              callback={() => {}}
              label={`End dots`}
              color="primaryLighten"
              fontColor="lightgrey"
              disabled
              active={false}
              icon={faEllipsisH}
            />
          </PaginationItem>
        ) : (
          <DotsPlaceholder />
        )}
        <PaginationItem>
          <PaginationIcon
            id={`Pagination next page`}
            callback={() => onChange(page + 1)}
            label={`Next page`}
            color="grey"
            fontColor="primary"
            disabled={page >= maxPage}
            active={false}
            icon={faAngleRight}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationIcon
            id={`Pagination last page`}
            callback={() => onChange(maxPage)}
            label={`Last page`}
            color="grey"
            fontColor="primary"
            disabled={page >= maxPage}
            active={false}
            icon={faAngleDoubleRight}
          />
        </PaginationItem>
      </>
    );
  };

  return (
    <PaginationBarContainer>
      <Col size={25}>{searchSlot}</Col>
      <Col size={50}>
        <PaginationList>
          {paginationStatus === 'default'
            ? getPagination()
            : getComplexPagination()}
        </PaginationList>
      </Col>
      <Col size={25}>
        {limitSlot && (
          <DropdownContainer>
            <DropdownLabel>Items per page</DropdownLabel>
            {limitSlot}
          </DropdownContainer>
        )}
      </Col>
    </PaginationBarContainer>
  );
};

export default PaginationBar;
