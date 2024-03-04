import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

import * as MyMath from './components/Math';

const component = React.createElement(Counter);

const root = document.querySelector('#root');

ReactDOM.render(component, root);

MyMath.sum();