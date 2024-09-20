import { useEffect, useState } from "react";

const CountDown = (props) => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        if (count === 0) {
            props.setisDisable(true);
            return;
        }
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count]);
    return (
        <div>
            {count}
        </div>
    )
}
// import React from "react";
// class CountDown extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 10
//         }
//     }
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             let current = this.state.count;
//             this.setState({
//                 count: current - 1
//             })
//         }, 1000)

//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.count !== prevState.count && this.state.count === 0) {
//             if (this.timer) {
//                 clearInterval(this.timer)
//             }
//         }
//     }
//     render() {
//         return (
//             <div>{this.state.count}</div>
//         )
//     }
// }
export default CountDown;