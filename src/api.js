import axios from 'axios';


/*
AJAX call for sending an email
Data has 4 fields
-to 
-from 
-subject
-message
*/
const host = "http://159.65.184.194:3000"
export const send = (data) => {
  return axios.post(`${host}/mail/9d10255b425b4b6e8d2f62c086c6a41a`, data);
}

