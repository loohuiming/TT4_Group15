//import React from 'react';
//import axios from "axios";
//import {custID, accountKey} from "./components/Login.js";

//class ViewTransaction extends React.Component{
//    getData(){
//        axios.post(
//           'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',JSON.stringify({
//                custID: 15,
//                accountKey: "owg0o82i-kaqt-7qfx-wrz6-2v0m8ey6tio",
//            }),
//                {headers: {
//                    "x-api-key":"Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO",
//                   'Content-Type':'application/json',
//                    'Accept':"application/json"
//                }}
//            )
//        .then((response) => {
//            sessionStorage.setItem({
//                'data': response.data})
//            return 'data'
//        })
//        }

    // json2Table(json) {
    //     let cols = Object.keys(json[0]);
    //     let headerRow = cols
    //         .map(col => `<th>${col}</th>`)
    //         .join("");
    //     let rows = json
    //         .map(row => {
    //         let tds = cols.map(col => `<td>${row[col]}</td>`).join("");
    //         return `<tr>${tds}</tr>`;
    //         })
    //         .join("");
    //     const table = `
    //         <table>
    //             <thead>
    //                 <tr>${headerRow}</tr>
    //             <thead>
    //             <tbody>
    //                 ${rows}
    //             <tbody>
    //         <table>`;

    //     return table;
    //     }

//    render(){
//        return(
//            <div>
//                {/* <p>{getData()}</p> */}
//            </div>
//        )
//    }
//}

//export default ViewTransaction
