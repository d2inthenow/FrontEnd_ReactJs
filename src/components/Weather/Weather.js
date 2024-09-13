// import React from "react";
// import axios from "axios";
// // const Weather = () => {
// //     return (
// //         <div> troi hom nay mua</div>
// //     )
// // }
// // export default Weather;
// class Weather extends React.Component {

//     state = {
//         data: []
//     }
//     async componentDidMount() {
//         let response = await axios.get("https://covid-api.com/api/regions");
//         this.setState({
//             data: response.data.data
//         })
//         console.log(response)

//     }
//     render() {
//         return (
//             <div>Weather in :{this.state.data} </div>
//         )
//     }
// }

// export default Weather;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// class Weather extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         };
//         console.log("run constructor >>>>")
//     }
//     async componentDidMount() {
//         console.log("run DidMount>>>>");

//         let response = await axios.get("https://covid-api.com/api/regions");

//         setTimeout(() => {
//             this.setState({
//                 data: response.data.data
//             })
//         }, 3000)

//     }
//     render() {
//         console.log("run render>>>>")
//         return (
//             <div>
//                 <h1>Regions:</h1>
//                 <ul>
//                     {this.state.data.map((region, index) => (
//                         <li key={index}>{region.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
    const [data, setData] = useState([]);
    // Dùng useEffect để gọi API khi component được render
    useEffect(async () => {
        console.log("Run Effect");
        const response = await axios.get("https://covid-api.com/api/regions"); // Gọi API lấy danh sách các region
        setTimeout(() => {
            setData(response.data.data)// Cập nhật state với dữ liệu lấy được
        }, 2000)
    }, []); // useEffect với mảng rỗng để chỉ gọi 1 lần khi component mount
    console.log("Run Render");
    return (
        <div>
            <h1>Regions:</h1>
            <ul>
                {data.map((region, index) => (
                    <li key={index}>{region.iso}</li> // Hiển thị tên của từng region
                ))}
            </ul>
        </div>
    );
};
export default Weather;

