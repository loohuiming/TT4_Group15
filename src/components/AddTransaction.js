import React, { useState,  } from "react";

function AddTransaction() {
    const initialFormData = Object.freeze({
        custID: 15,
        accountKey: "owg0o82i-kaqt-7qfx-wrz6-2v0m8ey6tio",
        payeeID: 0,
        amount: 0,
        eGift: false,
        message: "",
    });

    const [formData, setFormData] = useState(initialFormData);
    const [formStatusType, setFormStatusType] = useState("");
    const notificationIsHidden = formStatusType !== "" ? "" : "d-none";
    const notificationClass = `${formStatusType} ${notificationIsHidden}`

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
        console.log(formData);
    };

    // const getAccountBalance = async () => {
    //     const data = {custID: 15, accountKey: "owg0o82i-kaqt-7qfx-wrz6-2v0m8ey6tio"}
    //     try {
    //         const accountDetailsAPI =
    //             "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts";

    //         fetch(accountDetailsAPI, {
    //             method: "POST",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //                 "X-API-Key": "Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO",
    //             },
    //             body: JSON.stringify(data),
    //         })
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 console.log(response)
    //             });
    //     } catch (e) {
    //         console.error(e.message);
    //     }
    // };

    const handleSubmit = () => {
        const data = { ...formData };
        data.custID = parseInt(data.custID);
        data.payeeID = parseInt(data.payeeID);
        data.amount = parseInt(data.amount);
        data.eGift = data.eGift === "true";

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
                        "X-API-Key": "Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO",
                    },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json())
                    .then((json) => {
                        if (json?.statusCode) {
                            setFormStatusType("alert alert-danger");
                        } else {
                            setFormStatusType("alert alert-success");
                        }
                    });
            } catch (e) {
                console.error(e.message);
            }
        };

        postTransaction();
    };

    return (
        <>
            <h1>Transfer to Payee</h1>
            <div className={notificationClass}>alert message</div>
            <div>  
                <div class="card text-white bg-dark">
                    <div class="card-body">
                        <p>TRANSFERRING FROM</p> 
                        <p><label>Customer ID: </label>{initialFormData.custID}</p>
                        <p><label>Account Key: </label>{initialFormData.accountKey}</p>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="payeeID">Payee ID</label>
                    <input
                        type="number"
                        className="form-control"
                        name="payeeID"
                        placeholder=""
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Payee Gets</label>
                    <input
                        type="number"
                        className="form-control"
                        name="amount"
                        placeholder=""
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eGift">eGift</label>

                    <select className="form-select" name="eGift" onChange={handleChange}>
                        <option value="false" defaultValue>No</option>
                        <option value="true">Yes</option>
                    </select>
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

                <br />

                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => handleSubmit()}
                >
                    Confirm Transaction
                </button>
            </div>
        </>
    );
}

export default AddTransaction;