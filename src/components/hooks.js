import { useState } from "react";

export function useFormInput(initialValue){
const[value,setValue]=useState("");
    function handelOnChange(e){
        setValue(e.target.value);
    }
    return {
        value,
        onChange:handelOnChange
    }
}