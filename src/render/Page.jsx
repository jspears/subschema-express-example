"use strict";
import React, {Component} from "react";
import {renderToString} from "react-dom/server";
import App from "../../public/App.jsx";

export default class Page extends Component {


    render() {
        const __html = `
        <div id="content">
          ${renderToString(<App {...this.props}/>)}
        </div>
        <script charset="UTF-8" src="${this.props.script}"></script>
        <script>
        setTimeout(function(){
            try {
                subschemaExpressExample(${JSON.stringify(this.props)})
            }catch(e){
                console.log('e', e);
            }
        }, 100);
        </script>
`;
        return (<html>
        <head>
            <title>{this.props.title}</title>
            <link charSet="UTF-8" rel="stylesheet" href={this.props.stylesheet}/>
        </head>
        <body dangerouslySetInnerHTML={{__html}}>
        </body>
        </html>);
    }
}