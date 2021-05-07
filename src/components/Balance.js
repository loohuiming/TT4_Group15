import React, { Component } from 'react';
import axios from "axios";
import { TabContainer } from 'react-bootstrap';

class Balance extends Component {

    state = {
        accountName: 15,
        accountNumber: 123456789,
        availableBal: 10000
      };

    // checkBalance(){
    //     return //for ID value, return availableBal amount in API.
    // }  

    // afterTransaction = () => {
    //     this.setState({amount: this.state.amount - 1});
    // };
    
//deduct amount after transaction has been made

    render() { 
        return (
            <div>
                <span>
                    <h2>Account Name:{this.state.accountName}</h2>
                    <h2>Account Number:{this.state.accountNumber}</h2>
                    <h2>Current Account Available Balance: {this.state.availableBal} </h2>
                </span>
            </div>
          );
    }

}
 
export default Balance;