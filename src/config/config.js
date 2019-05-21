
// 系统进程
const config = {
    filePath: 'F:/project/node-script/src/index.js',
    description: '开机自动加载到服务',
    name: 'node-script'
};

// 自动打开页面及浏览器
const browser = {
    filePath: 'F:/project/node-script/src/index.html',
    browserType: 'chrome'
};

// 导出配置
module.exports = {
    config,
    browser
};
