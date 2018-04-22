import axios from 'axios';

const mailerURL = "asdfasdfas";

/*
AJAX call for sending an email
Data has 4 fields
-to 
-from 
-subject
-message
*/
export const send = (data) => {
  return axios.post('localhost:3000/mail', data);
}

