import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import isEqual from 'lodash/isEqual';
import { ShowData } from '../../../../interfaces/show.interface';
import { ADMIN_SHOW_SLICE_NAME } from './types';
import {
  OmdbDetailsQuery,
  OmdbSearchData,
  OmdbSearchQuery,
} from '../../../../interfaces';

export interface SearchResultsType {
  params: OmdbSearchQuery;
  results: OmdbSearchData[];
  loading: boolean;
  error: any;
}

export interface ShowsDetailsType {
  id: string;
  details: ShowData | null;
  loading: boolean;
  error: any;
}

interface InitialState {
  data: {
    shows: ShowData[];
    searchResults: SearchResultsType[];
    showsDetails: ShowsDetailsType[];
  };
  loading: boolean;
  error: Error | null;
}

const initialState: InitialState = {
  data: {
    shows: [],
    searchResults: [],
    showsDetails: [],
  },
  error: null,
  loading: false,
};

const { reducer: showsManagerReducer, actions } = createSlice({
  name: ADMIN_SHOW_SLICE_NAME,
  initialState,
  reducers: {
    getAdminShowsAction(state) {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },
    setAdminShowsDataAction(state, action: PayloadAction<ShowData[]>) {
      return {
        ...state,
        data: {
          ...state.data,
          shows: action.payload,
        },
        loading: false,
      };
    },
    setAdminShowsErrorAction(state, action: PayloadAction<Error>) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    getOmdbShowsSearchAction(state, action: PayloadAction<OmdbSearchQuery>) {
      return {
        ...state,
        data: {
          ...state.data,
          searchResults: [
            ...state.data.searchResults,
            { params: action.payload, loading: true, error: null, results: [] },
          ],
        },
      };
    },
    setOmdbShowsSearchDataAction(
      state,
      action: PayloadAction<{
        params: OmdbSearchQuery;
        results: OmdbSearchData[];
      }>
    ) {
      return {
        ...state,
        data: {
          ...state.data,
          searchResults: state.data.searchResults.map((search) => {
            if (isEqual(search.params, action.payload.params)) {
              return {
                ...search,
                results: action.payload.results,
                loading: false,
                error: null,
              };
            }
            return search;
          }),
        },
      };
    },
    setOmdbShowsSearchErrorAction(
      state,
      action: PayloadAction<{
        params: OmdbSearchQuery;
        error: any;
      }>
    ) {
      return {
        ...state,
        data: {
          ...state.data,
          searchResults: state.data.searchResults.map((search) => {
            if (isEqual(search.params, action.payload.params)) {
              return {
                ...search,
                loading: false,
                error: action.payload.error,
              };
            }
            return search;
          }),
        },
      };
    },
    getOmdbShowDetailsAction(state, action: PayloadAction<OmdbDetailsQuery>) {
      return {
        ...state,
        data: {
          ...state.data,
          showsDetails: [
            ...state.data.showsDetails,
            { id: action.payload.i, loading: true, details: null, error: null },
          ],
        },
      };
    },
    setOmdbShowDetailsDataAction(
      state,
      action: PayloadAction<{ details: ShowData; params: OmdbDetailsQuery }>
    ) {
      return {
        ...state,
        data: {
          ...state.data,
          showsDetails: state.data.showsDetails.map((detailsData) => {
            if (detailsData.id === action.payload.params.i) {
              return {
                ...detailsData,
                details: action.payload.details,
                loading: false,
                error: null,
              };
            }
            return detailsData;
          }),
        },
      };
    },
    setOmdbShowDetailsErrorAction(
      state,
      action: PayloadAction<{ error: any; params: OmdbDetailsQuery }>
    ) {
      return {
        ...state,
        data: {
          ...state.data,
          showsDetails: state.data.showsDetails.map((detailsData) => {
            if (detailsData.id === action.payload.params.i) {
              return {
                ...detailsData,
                loading: false,
                error: action.payload.error,
              };
            }
            return detailsData;
          }),
        },
      };
    },
  },
});

export default showsManagerReducer;
export const {
  getOmdbShowsSearchAction,
  getOmdbShowDetailsAction,
  setOmdbShowDetailsErrorAction,
  setOmdbShowDetailsDataAction,
  setOmdbShowsSearchErrorAction,
  setOmdbShowsSearchDataAction,
  setAdminShowsErrorAction,
  setAdminShowsDataAction,
  getAdminShowsAction,
} = actions;
