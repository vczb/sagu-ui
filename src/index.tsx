import React from "react";

export const Hello: React.FC<{text:string}>=({text}) => {
    return (<h1>{text}</h1>)
}