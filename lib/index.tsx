import React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon';

ReactDom.render(
    <div>
        <Icon name="wechat"/>
        <Icon name="QQ"/>
        <Icon name="alipay"/>
    </div>
    , document.querySelector("#root"))