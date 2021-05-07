import React, { useEffect } from 'react';
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
    const layout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 12,
        },
      };
    
      const tailLayout = {
        wrapperCol: {
          offset: 6,
          span: 12,
        },
      };

      function handleAddTransaction(e){
          console.log(e)
      };
    return (
        <>
            <Form
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

            </Form>
        </>
    )
}

export default AddTransaction;
