import * as React from 'react';
import * as ReactDom from 'react-dom';

// import React = require('react');
// import ReactDom = require('react-dom');

import { Home } from "./components/Home";

ReactDom.render(<Home name="Michael" age={27} />, document.getElementById('app'));