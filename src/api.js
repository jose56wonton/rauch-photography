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
  const dsa = "https://mailer-dot-tools-207802.appspot.com"
  const asdf = "http://joshuawootonn.xyz"
  const fdsa = "ab4361b6199447358a17fb336b42ed57"
  return axios.post(`${dsa}/${fdsa}`, data);

}
