import * as React from 'react'
import { Route, IndexRoute } from 'react-router'

import * as Layout from './layouts'
import * as Home from './home'
//import Users from './user'
//import User from './user/item'
//import * as Shop from './shop'


export const route = [
    {
        path: '/',
        component: Layout.View,
        indexRoute: {component: Home.View},
        childRoutes: [
            {path: 'order', component: Home.View},
            {path: 'coupon', component: Home.View},
            {path: 'account', component: Home.View},
        ],
    }
];
// {Views.Routes(store)}