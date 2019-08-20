# cordova-iot-video-plugin
中移物联网视频插件

# 安装

cordova plugin add https://github.com/yagao0o/cordova-iot-video-plugin

# 卸载

cordova plugin remove cordova-iot-video-plugin

# 使用方法

插件声明了一个全局的 ``CordovaIotVideoPlugin`` 对象。

CordovaIotVideoPlugin.coolMethod
=================

测试插件是否安装正常，返回一段话，包含传过去的值。

    CordovaIotVideoPlugin.coolMethod(content, successCallback, errorCallback);

CordovaIotVideoPlugin.initClient
=================

初始化客户端，调用视频组件前，需要初始化客户端信息，请首先调用。

    CordovaIotVideoPlugin.initClient(configJson, successCallback, errorCallback);

configJson为JSON格式的字符串，建议使用JSON.stringfy(config),例如：
```Javascript
const config = {
  imAppKey: '你的AppKey',
  imNavServer: 'https://ip:port',
  rtcAppId: '',
  rtcCmpServer: '',
  rtcToken: '',
  baseUrl: 'https://ip:port',
  fileServer: 'https://ip:port'
};
CordovaIotVideoPlugin.initClient(
  JSON.stringify(config),
  success => {
    console.log(success);
  },
  error => {
    console.log(error);
  }
);
```


CordovaIotVideoPlugin.joinRoom
=================

进入作战室

    CordovaIotVideoPlugin.joinRoom(accessToken, roomId, userId, successCallback, errorCallback);

参数说明：
- accessToken: 当前用户的accessToken
- roomId: 房间号
- userId: 当前用户Id