import React, { useEffect, useState } from 'react';
// import axois from 'axois';
import {
    Form,
    Input,
    Button,
  } from 'antd';

function AddTransaction() {
    // useEffect(() => {
    //     async function postTransaction() {
    //         let transactionAPI = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add'
    //         axios.defaults.headers.common = {
    //             "X-API-Key": "Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO",
    //         };
    //         axios.post(transactionAPI, {
    //             "custID": "",
    //             "accountKey": "",
    //             "payeeID": "",
    //             "amount": "",
    //             "eGift": "",
    //             "message": "",
    //         }).then(function (response) {
    //             console.log(response)
    //         }).catch(function (error) {
    //             console.log(error);
    //         });
    //     }
    // }
    // )
    const initialFormData = Object.freeze({
        custID: "",
        accountKey: "",
        firstName: "",
        lastName: "",
        nric: "",
        age: null,
        phoneNumber: null,
        email: "",
    })

    const [formData, setFormData] = useState(initialFormData);

    // const [formStatusType, setFormStatusType] = useState("");

    // const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit

    return (
        <>
            <h1>Make a Transaction</h1>
            <form>
                <div class="mb-3">
                    <label for="custID" class="form-label">Customer ID</label>
                    <input type="text" id="custID"></input>
                </div>
                <div class="mb-3">
                    <label for="accountKey" class="form-label">Account Key</label>
                    <input type="text" id="accountKey"></input>
                </div>
                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" id="firstName"></input>
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" id="lastName"></input>
                </div>
                <div class="mb-3">
                    <label for="nric" class="form-label">NRIC</label>
                    <input type="text" id="nric"></input>
                </div>
                <div class="mb-3">
                    <label for="age" class="form-label">Age</label>
                    <input type="text" id="age"></input>
                </div>
                <div class="mb-3">
                    <label for="phoneNumber" class="form-label">Phone Number</label>
                    <input type="text" id="phoneNumber"></input>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" id="email"></input>
                </div>
            </form>
        </>
    )
}

export default AddTransaction;
