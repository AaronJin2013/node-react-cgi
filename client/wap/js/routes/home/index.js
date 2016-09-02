import * as React from "react";
import * as ReactDOM from "react-dom";
//import * as fetch from "fetch";
const fetch=window.fetch;

export class View extends React.Component<any, any> {

    componentDidMount() {

    }

    render() {
        return <h1 className="b">
            home in views
        </h1>;
    }
}