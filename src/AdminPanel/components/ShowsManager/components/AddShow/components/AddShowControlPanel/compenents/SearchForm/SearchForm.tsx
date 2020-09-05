import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import capitalize from 'lodash/capitalize';
import styled from 'styled-components';
import { useFormik } from 'formik';
import isEqual from 'lodash/isEqual';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Dropdown, {
  ItemType,
} from '../../../../../../../../../common/components/Dropdown';
import { SearchInput } from '../../../../../../../../../common/components/Input';
import { ShowType } from '../../../../../../../../../interfaces/show.interface';
import { ValidationStatus } from '../../../../../../../../../common/components/ValidationTag';
import {
  InputBorder,
  InputFocusShadow,
} from '../../../../../../../../../styles/templates/inputs';
import { OmdbSearchQuery } from '../../../../../../../../../interfaces';
import {
  SearchResultsType,
  getOmdbShowsSearchAction,
} from '../../../../../../ducks';

const items = Object.values(ShowType).map((key) => ({
  id: key,
  label: capitalize(key),
}));

const years = new Array(60).fill(0).map((zero, i) => ({
  id: `${1970 + i}`,
  label: `${1970 + i}`,
}));

const ControlPanelContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.light};
  border: 2px solid ${({ theme }) => theme.colors.dark};
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 1.3rem;
`;

const SearchButton = styled('button')<{ status?: ValidationStatus }>`
  ${InputBorder};
  height: 2.625rem;
  background-color: ${({ theme }) => theme.colors.info};
  color: ${({ theme }) => theme.colors.light};
  position: relative;
  overflow: hidden;
  outline: none;
  border-radius: 100rem;
  cursor: pointer;
  display: inline;
  white-space: nowrap;
  font-size: 1.1rem;
  padding: 0 1rem;

  &:focus {
    ${InputFocusShadow};
  }

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.grey}80;
    border-radius: 100rem;
  }

  &:hover:not(:disabled)::before {
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.dark};
  }

  svg {
    margin-left: 0.5rem;
  }
`;

interface Props {
  setSearchQuery: (query: OmdbSearchQuery) => void;
  searchResults: SearchResultsType[];
}

const SearchForm: React.FC<Props> = ({ setSearchQuery, searchResults }) => {
  const dispatch = useDispatch();

  const initialValues: {
    year?: string;
    type?: ShowType;
    search: string;
  } = {
    search: '',
  };

  const validationSchema = yup.object().shape({
    search: yup.string().max(20).required(),
  });

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    isValid,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    isInitialValid: false,
    onSubmit: (values, formikHelpers) => {
      const { search, type, year } = values;
      const searchQuery: OmdbSearchQuery = {
        s: search,
        type,
        y: year,
      };

      setSearchQuery(searchQuery);

      const existingSearchQuery = searchResults.find(({ params }) =>
        isEqual(params, searchQuery)
      );
      if (existingSearchQuery) {
        return;
      }
      dispatch(getOmdbShowsSearchAction(searchQuery));
      formikHelpers.resetForm({});
    },
  });

  const handleYearChange = useCallback(
    (item: ItemType) => {
      setFieldValue('year', item.id);
    },
    [setFieldValue]
  );
  const handleTypeChange = useCallback(
    (item: ItemType) => {
      setFieldValue('type', item.id);
    },
    [setFieldValue]
  );

  const selectedYear = useMemo(() => {
    if (!values.year) return null;
    return {
      id: values.year,
      label: values.year,
    };
  }, [values.year]);

  const selectedType = useMemo(() => {
    if (!values.type) return null;
    return {
      id: values.type,
      label: capitalize(values.type),
    };
  }, [values.type]);
  return (
    <ControlPanelContainer onSubmit={handleSubmit}>
      <SearchInput
        onChange={handleChange}
        name="search"
        label="Search for the shows"
        placeholder="Show title"
        margin="1.5rem 0"
        value={values.search}
        id={'34'}
        onBlur={handleBlur}
        isTouched={touched.search}
        error={errors.search}
      />

      <Dropdown
        items={items}
        onChange={handleTypeChange}
        selectedItem={selectedType}
        label="Show types"
        placeholder="Select show type"
        id="show-management-show-type-filter"
        margin="1.5rem 0"
        width="16rem"
        onBlur={handleBlur}
      />
      <Dropdown
        items={years}
        onChange={handleYearChange}
        selectedItem={selectedYear}
        label="Year"
        placeholder="Select year"
        id="show-management-show-year-filter"
        margin="1.5rem 0"
        width="11rem"
        onBlur={handleBlur}
      />
      <SearchButton
        disabled={!isValid}
        type="submit"
        name="search-show-button"
        id="search-show-button"
      >
        Search
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </ControlPanelContainer>
  );
};

export default SearchForm;
