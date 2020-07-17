import React from 'react';
import Home from "../containers/home";
import {   renderToString } from "react-dom/server";//把一个组件变成一个字符串
let express = require('express');
let app = express();
app.get('/', (_req, res) => {
    let html=renderToString(<Home/>)
    res.send(`<html>
        <body>
        <title>珠峰</title>
            <div id="root">${html}</div>
        </body>
    </html>`)
})
app.listen(8000, () => {
    console.log(`Server started on port`);
});
/**
 * 
 * 服务端渲染：页面的内容是有服务器产生的，直接生成
 * 客户端渲染：页面的内容由于浏览器运行js脚本而渲染到页面上的
 * 
 * 
 * 
 * 
 * 
 */