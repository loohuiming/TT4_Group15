import React, { useState } from 'react';
import axios from 'axios';

function AddTransaction() {
    const initialFormData = Object.freeze({
        "custID": 0,
        "accountKey": "",
        "payeeID": 0,
        "amount": 0,
        "eGift": false,
        "message": "",
    })

    const [formData, setFormData] = useState(initialFormData);

    // const [formStatusType, setFormStatusType] = useState("");

    // const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value.trim(),
        });
        console.log(formData)
    };

    const handleSubmit = () => {
        const data = {...formData};
        console.log(data)
        // useEffect(() => {
        //     async function postTransaction() {
        //         let transactionAPI = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add'
        //         axios.defaults.headers.common = {
        //             "X-API-Key": "Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO",
        //         };
        //         axios.post(transactionAPI, {
        //             data
        //         }).then(function (response) {
        //             console.log(response)
        //         }).catch(function (error) {
        //             console.log(error);
        //         });
        //     }
        // }
    }

    return (
        <>
            <h1>Make a Transaction</h1>
            <form>
                <div class="mb-3">
                    <label for="custID" class="form-label">Customer ID</label>
                    <input type="text" id="custID" name="custID"></input>
                </div>
                <div class="mb-3">
                    <label for="accountKey" class="form-label">Account Key</label>
                    <input type="text" id="accountKey" name="accountKey"></input>
                </div>
                <div class="mb-2">
                    <label for="payeeID" class="form-label">Payee ID</label>
                    <input type="text" id="payeeID" name="payeeID"></input>
                </div>
                <div class="mb-2">
                    <label for="amount" class="form-label">Amount</label>
                    <input type="text" id="amount" name="amount"></input>
                </div>
                <div class="mb-2">
                    <label for="eGift" class="form-label">eGift</label>
                    <input type="text" id="eGift" name="eGift"></input>
                    {/* true false */}
                </div>
                <div class="mb-2">
                    <label for="message" class="form-label">Message</label>
                    <input type="text" id="message" name="message"></input>
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
