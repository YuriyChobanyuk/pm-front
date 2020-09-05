import appClient from '../appClient';
import {
  OmdbDetailsQuery,
  OmdbSearchData,
  OmdbSearchQuery,
} from '../interfaces';
import { AxiosError, AxiosResponse } from 'axios';
import { ShowData } from '../interfaces/show.interface';

class OmdbService {
  searchOmdbShow(params: OmdbSearchQuery): Promise<OmdbSearchData[]> {
    return appClient
      .get('/omdb/find', {
        params,
      })
      .then((response: AxiosResponse<OmdbSearchData[]>) => response.data)
      .catch((error: AxiosError) => {
        console.error(error.message);
        throw error;
      });
  }

  getOmdbShowDetails(params: OmdbDetailsQuery): Promise<ShowData> {
    return appClient
      .get('/omdb', { params })
      .then((response: AxiosResponse<ShowData>) => response.data)
      .catch((error: AxiosError) => {
        console.error(error.message);
        throw error;
      });
  }
}

export default new OmdbService();
