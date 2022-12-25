import React, { useMemo } from "react";
import { useState } from "react";

interface IhandleChange  {
    handleChange: any
}


const Child: React.FunctionComponent<IhandleChange> = ({ handleChange }) =>  {
    const handleSentValue = (event: any, val: any)  =>  {
      val = 10;
      event.preventDefault();  
      handleChange(val);
    };
  
    return (
        <>{handleSentValue}</>
    );
  };

export default Child;