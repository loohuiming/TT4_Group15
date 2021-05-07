import React from 'react';
import axios from "axios";
//import {custID, accountKey} from "./components/Login.js";

class ViewTransaction extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     custID: custID,
        //     accountKey: accountKey,
        //     xapikey: "Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO",
        // }
    }

    // getData(){
    //     axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',this.state)
    //     .then(response => {
    //         this.setState({
    //             data: response.data})
    //     })
    //     }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>CustomerID</td>
                        <td>Paid to CustomerID</td>
                        <td>On Date</td>
                        <td>Amount</td>
                    </tr>
                    
                </table>
            </div>
        )
    }
}

export default ViewTransaction