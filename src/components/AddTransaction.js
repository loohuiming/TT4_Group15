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
    
    // const layout = {
    //     labelCol: {
    //       span: 4,
    //     },
    //     wrapperCol: {
    //       span: 8,
    //     },
    //   };
    
    // const tailLayout = {
    //     wrapperCol: {
    //       offset: 4,
    //       span: 8,
    //     },
    //   };

    const [formData, setFormData] = useState("");

    // const [formStatusType, setFormStatusType] = useState("");

    // const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {

        setFormData({
    
          ...formData,
    
    
        });
    };

    return (
        <>
            <h1>Make a Transaction</h1>
            {/* <Form
                {...layout}
                onFinish={handleAddTransaction}
            >
                <Form.Item
                    label="Customer ID"
                    name="custID"
                    rules={[
                        {
                            required: true,
                            message: 'Please input customer ID!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Account Key"
                    name="accountKey"
                    rules={[
                        {
                            required: true,
                            message: 'Please input account key!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    {...tailLayout}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form> */}
            <form>
                <div class="mb-3">
                    <label for="custID" class="form-label">Customer ID</label>
                    <input type="text" id="custID"></input>
                </div>
                <div class="mb-3">
                    <label for="custID" class="form-label">Customer ID</label>
                    <input type="text" id="custID"></input>
                </div>
            </form>
        </>
    )
}

export default AddTransaction;
