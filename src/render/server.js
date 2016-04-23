"use strict";

import React from 'react';
import Page from "./Page.jsx";
import {renderToStaticMarkup} from "react-dom/server";


module.exports = function render(props) {
    return `<!DOCTYPE html>
    ${renderToStaticMarkup(<Page {...props}/>)}
    `
};
