Subschema express-example
===
***DO NOT USE JUST GETTING STARTED***

##Demo
See it in action [here]()

Or run it 

```sh
  git clone 
  cd subschema-express-example
  npm install
  npm run hot &
  open http://localhost:8082
```

##Installation
```sh
 $ npm install subschema-express-example
``

##Usage
```jsx

 import React, {Component} from 'react';
 import Subschema, {loader, Form} from 'Subschema';
 import subschemaExpressExample from 'subschema-express-example';
 
 loader.addLoader(subschemaExpressExample);
 
 //A simple Schema for this demo.
 var schema = {
  "description": "Super basic form, with select and a requied name",
  "schema": {
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
  },
  "data": {
    "title": "Mrs",
    "name": "Johnson"
  },
  "errors": {
    "name": [
      {
        "message": "Name is already taken"
      }
    ]
  }
}
 
 export default class App extends Component {
 
     render() {
         return <div>
             <h3></h3>
             <Form schema={schema}/>
         </div>
     }
 }


  
```

[see](https://github.com/webpack/react-webpack-server-side-example/tree/master/server)
[see](https://github.com/RickWong/react-isomorphic-starterkit)
