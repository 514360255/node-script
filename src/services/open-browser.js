
// 浏览器配置
const browser = require('../config/config').browser;

// 打开浏览器
const open = require('open');

open(browser.filePath, browser.browserType);
