import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddTransaction() {
    useEffect(() => {
        async function postTransaction() {
            let transactionAPI = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add'
            axios.defaults.headers.common = {
                "X-API-Key": "Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO",
            };
            axios.post(transactionAPI, {
                "custID": null,
                "accountKey": "",
                "payeeID": null,
                "amount": null,
                "eGift": false,
                "message": "",
            }).then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
    )
    const initialFormData = Object.freeze({
        "custID": null,
        "accountKey": "",
        "payeeID": null,
        "amount": null,
        "eGift": false,
        "message": "",
    })

    const [formData, setFormData] = useState(initialFormData);

    // const [formStatusType, setFormStatusType] = useState("");

    // const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
        });
    };

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
                <div class="mb-2">
                    <label for="payeeID" class="form-label">Payee ID</label>
                    <input type="text" id="payeeID"></input>
                </div>
                <div class="mb-2">
                    <label for="amount" class="form-label">Amount</label>
                    <input type="text" id="amount"></input>
                </div>
                <div class="mb-2">
                    <label for="eGift" class="form-label">eGift</label>
                    <input type="text" id="eGift"></input>
                    {/* true false */}
                </div>
                <div class="mb-2">
                    <label for="message" class="form-label">Message</label>
                    <input type="text" id="message"></input>
                </div>
            </form>
            <button
                type="submit"
                className="button is-link"
                onClick={() => handleSubmit()}
            >
                Make a transaction
            </button>
        </>
    )
}

export default AddTransaction;
