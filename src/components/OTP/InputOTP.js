import OtpInput from "react-otp-input";
import { useState ,useRef} from "react";
import Button from '@mui/material/Button';
// import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";
const InputOTP = (props) => {
    const [otp, setOtp] = useState("");
    const handlChange = (otp) => {
        setOtp(otp);
        props.setuserOtpParents(otp)
    }
    const handleConfirmSubmit = () => {
        props.handleSubmit();
    }
    const childRef = useRef();
    const handlClear = () => {
        childRef.current.restTimer();
    }
    return (
        <div className="input-otp-container">
            <div className="title"> Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handlChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-customize"}
            />
            <div className="timer">
                {/* <CountDown
                setisDisable={props.setisDisable} /> */}
                <CountDownAnimation
                    setisDisable={props.setisDisable}
                    ref={childRef}
                    
                />
            </div>
            <div className="action">
                <Button className="clear" onClick={() => handlClear()} variant="contained" disabled={!props.isDisable} >Clear</Button>
                <Button className="confirm" variant="contained" disabled={props.isDisable}
                    onClick={() => handleConfirmSubmit()}>Confirm</Button>
            </div>
        </div>
    )
};

export default InputOTP;