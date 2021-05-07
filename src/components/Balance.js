import React, { Component } from 'react';
import axios from "axios";

class Balance extends Component {

    postTransaction = async () => {
        try {
            axios.post(
            "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", JSON.stringify({
                custID: 15,
                accountKey: "owg0o82i-kaqt-7qfx-wrz6-2v0m8ey6tio"
            }));

            fetch(transactionAPI, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-API-Key": "Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO",
                }
            })
                .then((response) => response.json())
                    console.log(response)
                };
                
        } catch (e) {
            console.error(e.message);
        }
    };

    state = {
        availableBal: 10000
      };

    checkBalance(){
        return //for ID value, return availableBal amount in API.
    }  

    afterTransaction = () => {
        this.setState({amount: this.state.amount - 1});
    };
//deduct amount after transaction has been made

    render() { 
        return (
            <div>
                <span>
                    <h2>Current Account Available Balance: {this.state.availableBal} </h2>
                </span>
            </div>
          );
    }


}
 
export default Balance;