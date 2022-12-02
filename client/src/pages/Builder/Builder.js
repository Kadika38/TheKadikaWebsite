import React, { useState } from "react";
import BuilderStepOne from "./components/BuilderStepOne";

export default function Builder() {
    const [step, setStep] = useState(0);

    //this pages takes the user through the character building process
    //first step, roll stats

    return (
        <div>
            {step === 0 ? (<BuilderStepOne></BuilderStepOne>) : <div></div>}
            
        </div>
    );


    return (
        <div>
            Why is this showing???
        </div>
    );
};