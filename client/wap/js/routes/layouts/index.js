import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import * as Components from '../../components';

export class View extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div>

                    {this.props.children}
                </div>
                <Components.Navigation />
            </div>
        );
    }
}