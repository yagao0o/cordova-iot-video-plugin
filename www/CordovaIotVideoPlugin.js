var exec = require('cordova/exec');

var CordovaIotVideoPlugin = {
    coolMethod: function (arg0, success, error) {
        exec(success, error, 'CordovaIotVideoPlugin', 'coolMethod', [arg0]);
    },
    initClient: function (configJson, accessToken, success, error) {
        exec(success, error, 'CordovaIotVideoPlugin', 'initClient', [configJson, accessToken]);
    },
    joinRoom: function (accessToken, roomId, success, error) {
        exec(success, error, 'CordovaIotVideoPlugin', 'joinRoom', [accessToken, roomId]);
    },
    changeRoom: function (roomId, roomTitle, success, error) {
        exec(success, error, 'CordovaIotVideoPlugin', 'changeRoom', [roomId, roomTitle]);
    },
    videoLogout: function (success, error) {
        exec(success, error, 'CordovaIotVideoPlugin', 'videoLogout', []);
    },
    initDisconnet: function (success, error) {
        exec(success, error, 'CordovaIotVideoPlugin', 'initDisconnet', []);
    }
}
module.exports = CordovaIotVideoPlugin;