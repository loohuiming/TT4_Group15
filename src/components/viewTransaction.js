import React from 'react';
import axios from "axios";
import {custID, accountKey} from "/Login.js";

axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',{
    custID: custID,
    accountKey: accountKey,
    xapikey: "Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO",
})
.then(response => {
    console.log("Payee ID: ", response[1])
})

