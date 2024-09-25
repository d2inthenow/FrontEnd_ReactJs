import { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss"
import "./CountDownAnimation"
const OTP = () => {
    const [orgOtpParents, setorgOtpParents] = useState("");
    const [userOtpParents, setuserOtpParents] = useState("");
    const [isDisable, setisDisable] = useState(false);
    const handleSubmit = () => {
        if (!orgOtpParents) {
            alert("Please generate an OTP")
            return;
        }
        if (!userOtpParents) {
            alert("Please enter an OTP")
            return;
        }
        if (+orgOtpParents === +userOtpParents) {
            alert("Correct")
        } else {
            alert("Incorrect ")
        }
    }
    return (
        <div className="otp-parents-container">
            {/* <CountDownAnimation /> */}
            <GenerateOTP
                setorgOtpParents={setorgOtpParents} />
            <InputOTP
                setuserOtpParents={setuserOtpParents}
                handleSubmit={handleSubmit}
                setisDisable={setisDisable}
                isDisable={isDisable}
            />
        </div>

    )
};
export default OTP;