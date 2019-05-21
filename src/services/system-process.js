
// 配置文件
const config = require('../config/config').config;
// 系统服务
const nodeWindows = require('node-windows').Service;

const service = new nodeWindows({
    name: config.name,
    description: config.description,
    script: config.filePath
});

service.on('install', () => {
    service.start();
});

service.install();
