import { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss"
const OTP = () => {
    const [orgOtpParents, setorgOtpParents] = useState("");
    const [userOtpParents, setuserOtpParents] = useState("");
    const [isDisable, setisDisable] = useState(false);
    const handleSubmit = () => {
        if (+orgOtpParents === +userOtpParents) {
            alert("Correct")
        } else {
            alert("Incorrect ")
        }
    }
    return (
        <div className="otp-parents-container">
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