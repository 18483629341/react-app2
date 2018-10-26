
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from "./common/routes";
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
//含有路由的项目首先引入的是路由
ReactDOM.render(
	<div>
	{routes}
	</div>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();//缓存功能