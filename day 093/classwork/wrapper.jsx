import React, {useState, createContext, Component} from "react";
export const nameContext = createContext()

export default function Wrapper(){
    return (
        <nameContext.Provider>

        </nameContext.Provider>
    )
}