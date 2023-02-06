import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App"
import localStoreUtil from './utils/localStorageUtil';
import memoryUtil from "./utils/memoryUtil"
// 读取local中的数据保存到 内存中
const user = localStoreUtil.getUser()
memoryUtil.user = user

const root = createRoot(document.querySelector("#root"))
root.render(<App />)