import React, { Component } from 'react';


class Balance extends Component {
    state = {
        amount: 1000
      };

    afterTransaction = () => {
        this.setState({amount: this.state.amount - 1});
    };
//deduct amount after transaction has been made

    render() { 
        return (
            <div>
                <span>
                    <p>Current Account Balance: {this.state.amount} </p>
                </span>
            </div>
          );
    }
}
 
export default Balance;