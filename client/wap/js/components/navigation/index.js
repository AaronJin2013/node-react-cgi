import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link,IndexLink  } from 'react-router';
import { Row,Col} from 'elemental';

import './index.scss';

export class Navigation extends React.Component<any, any> {
    render() {
        return (
            <div className="navigation">
                <Row>
                    <Col basis="25%">
                        <IndexLink className="home"
                            to="/" activeClassName="active">
                                <span>首页</span>
                        </IndexLink>
                    </Col>
                    <Col basis="25%">
                        <Link className="order"
                              to="/order/" activeClassName="active">
                            <span>订单</span>
                        </Link>
                    </Col>
                    <Col basis="25%">
                        <Link className="coupon"
                              to="/coupon/" activeClassName="active">
                            <span>优惠券</span>
                        </Link>
                    </Col>
                    <Col basis="25%">
                        <Link className="account"
                              to="/account/" activeClassName="active">
                            <span>我</span>
                        </Link>
                    </Col>
                </Row>
                {this.props.children}
            </div>
        );
    }
}