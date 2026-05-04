import { useState, useEffect } from "react";

export default function Localstoragee(key, initalValue) {
    const saved = JSON.parse(localStorage.getItem(key) || "")
    if (!saved) {
        return initalValue
    }
    return saved
    
}
