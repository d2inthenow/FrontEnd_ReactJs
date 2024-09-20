import { useState } from "react";
import Button from '@mui/material/Button';
const GenerateOTP = (props) => {
    const [org, setOrg] = useState("");
    const handleClick = () => {
        const otp = Math.floor(100000 + Math.random() * 900000)
        setOrg(otp)
        props.setorgOtpParents(otp)
    }
    return (
        <div className="generate-input-container">
            <Button variant="contained" onClick={() => handleClick()}>Generate OTP</Button>
            <div className="UR-OTP">YOUR OTP: {org}</div>
        </div>
    )

};

export default GenerateOTP;