"use strict";
import React, {Component} from "react";
import {Form, loader, ValueManager, loaderFactory} from "Subschema";
import subschemaExpressExample from "../src/index";

loader.addLoader(subschemaExpressExample);

//schema
var schema = {
    "schema": {
        "title": {
            "type": "Select",
            "options": [
                "Mr",
                "Mrs",
                "Ms"
            ]
        },
        "name": {
            "type": "Text",
            "validators": [
                "required"
            ]
        },
        "age": {
            "type": "Number"
        }
    },
    "fieldsets": [
        {
            "legend": "Name",
            "fields": "title, name, age",
            "buttons": [
                {
                    "label": "Cancel",
                    "action": "cancel",
                    "type": "reset",
                    "buttonClass": "btn"
                },
                {
                    "label": "Submit",
                    "action": "submit",
                    "buttonClass": "btn btn-primary"
                }
            ]
        }
    ]
};
var value = {};

//setupTxt


export default class App extends Component {
    render() {
        return <div>
            <h3>Subschema express-example</h3>
            <p></p>
            <Form schema={schema} value={value}/>
        </div>
    }
}