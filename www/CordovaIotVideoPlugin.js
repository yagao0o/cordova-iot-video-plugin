var exec = require('cordova/exec');

var CordovaIotVideoPlugin = {
    coolMethod: function (arg0, success, error) {
        exec(success, error, 'CordovaIotVideoPlugin', 'coolMethod', [arg0]);
    },
    initClient: function (configJson, success, error) {
        exec(success, error, 'CordovaIotVideoPlugin', 'initClient', [configJson]);
    },
    joinRoom: function (accessToken, roomId, userId, success, error) {
        exec(success, error, 'CordovaIotVideoPlugin', 'joinRoom', [accessToken, roomId, userId]);
    }
}
module.exports = CordovaIotVideoPlugin;