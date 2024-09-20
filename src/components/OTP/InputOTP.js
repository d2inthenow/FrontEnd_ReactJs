import OtpInput from "react-otp-input";
import { useState } from "react";
import Button from '@mui/material/Button';
import CountDown from "./CountDown";
const InputOTP = (props) => {
    const [otp, setOtp] = useState("");
    const handlChange = (otp) => {
        setOtp(otp);
        props.setuserOtpParents(otp)
    }
    const handleConfirmSubmit = () => {
        props.handleSubmit();
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
            <div className="timer"><CountDown
                setisDisable={props.setisDisable} /></div>
            <div className="action">
                <Button className="clear" variant="contained">Clear</Button>
                <Button className="confirm" variant="contained" disabled={props.isDisable}
                    onClick={() => handleConfirmSubmit()}>Confirm</Button>
            </div>
        </div>
    )
};

export default InputOTP;