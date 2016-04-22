"use strict";
import React from "react";
import {render} from "react-dom";
import App from "../../public/App.jsx";

export default function clientRender() {
    render(<App/>, document.getElementById('content'));
}