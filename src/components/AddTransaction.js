import React, { useState } from "react";
import axios from "axios";

function AddTransaction() {
  const initialFormData = Object.freeze({
    custID: 0,
    accountKey: "",
    payeeID: 0,
    amount: 0,
    eGift: false,
    message: "",
  });

  const [formData, setFormData] = useState(initialFormData);

  // const [formStatusType, setFormStatusType] = useState("");

  // const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = () => {
    const data = { ...formData };
    console.log(data);

    const postTransaction = async () => {
      try {
        const transactionAPI =
          "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add";

        fetch(transactionAPI, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-API-Key": "Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO"
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json); // output from API
          });
      } catch (e) {
        console.error(e.message);
      }
    };

    postTransaction();
  };

  return (
    <>
      <h1>Make a Transaction</h1>
      <div>
        <div className="form-group">
          <label htmlFor="custID">Customer ID</label>
          <input
            type="text"
            className="form-control"
            name="custID"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountKey">Account Key</label>
          <input
            type="text"
            className="form-control"
            name="accountKey"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="payeeID">Payee ID</label>
          <input
            type="text"
            className="form-control"
            name="payeeID"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            name="amount"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eGift">eGift</label>
          <input
            type="text"
            className="form-control"
            name="eGift"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            className="form-control"
            name="message"
            placeholder=""
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success"
          onClick={() => handleSubmit()}
        >
          Make a transaction
        </button>
      </div>
    </>
  );
}

export default AddTransaction;