const axios = require('axios');
import { addDateObj } from '../helpers';

export const getMails = () => {
  return axios('http://localhost:3001/mails').then((resp) => {
    if (resp.status >= 400) {
      console.error(resp);
      throw new Error('Bad response from server');
    }
    return addDateObj(resp.data);
  });
};
