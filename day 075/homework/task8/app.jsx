// 9) JSX-ის გარეშე, React.createElement-ის გამოყენებით შექმენით <h1> სათაური ტექსტით "Hello without JSX". კომენტარებში ახსენით განსხვავება JSX-სა და React.createElement-ს შორის

import React from "react";

export default function NoJSX() {
    return React.createElement(
        "h1",
        null,
        "Hello without JSX"
    );
}