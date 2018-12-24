import axios from 'axios';


/*
AJAX call for sending an email
Data has 4 fields
-to 
-from 
-subject
-message
*/

export const send = (data) => {
  const asdf = "https://joshuawootonn.xyz"
  const fdsa = "mailer_key_boy_56!"
  return axios.post(`${asdf}/mailer/${fdsa}`, data);

}
