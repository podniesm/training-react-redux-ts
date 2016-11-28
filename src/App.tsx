import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouteProps, Router } from "react-router";
import Home from "./pages/Home";

const appElement = document.getElementById("content");
const app = (
    <Home />
);
ReactDOM.render(app, appElement);
