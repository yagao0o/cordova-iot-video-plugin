package cordova.iot.video.plugin;

import android.util.Log;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import com.google.gson.Gson;

import cn.rongcloud.sealclass.model.ReceiveMessage;
import cn.rongcloud.sealclass.ui.IncomingCallActivity;
import cn.rongcloud.sealclass.utils.ServerConfig;
import cn.rongcloud.sealclass.utils.ZZSKitClient;

/**
 * This class echoes a string called from JavaScript.
 */
public class CordovaIotVideoPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            Log.d("cordova-iot-plugin", "==========================coolMethod");
            this.coolMethod("Got message Success, received message is '" + message + "'.", callbackContext);
            return true;
        }
        else if (action.equals("initClient")) {
            String configJson = args.getString(0);
            String accessToken = args.getString(1);
            Log.d("cordova-iot-plugin", "==========================initClient");
            Log.d("cordova-iot-plugin", configJson);
            Log.d("cordova-iot-plugin", accessToken);
            Log.d("cordova-iot-plugin", "==========================initClient");
            try {
                Gson gson = new Gson();
                ServerConfig serverConfig = gson.fromJson(configJson, ServerConfig.class);
                ZZSKitClient.init(this.cordova.getActivity().getApplicationContext(), serverConfig, accessToken); 
            } catch (Exception e) {
                e.printStackTrace();
            }
            callbackContext.success("初始化成功");
            return true;
        }
        else if (action.equals("joinRoom")) {
            String accessToken = args.getString(0);
            String roomId = args.getString(1);
            Log.d("cordova-iot-plugin", "==========================joinRoom");
            Log.d("cordova-iot-plugin", accessToken);
            Log.d("cordova-iot-plugin", roomId);
            Log.d("cordova-iot-plugin", "==========================joinRoom");
            ZZSKitClient.joinRoom(this.cordova.getActivity().getApplicationContext(), accessToken, roomId);
            callbackContext.success("加入房间成功");
            return true;
        }
        else if (action.equals("changeRoom")) {
            String message = args.getString(0);
            Log.d("cordova-iot-plugin", "==========================changeRoom");
            Log.d("cordova-iot-plugin", message);
            Log.d("cordova-iot-plugin", "==========================changeRoom");
            try {
                Gson gson = new Gson();
                ReceiveMessage receiveMessage = gson.fromJson(message, ReceiveMessage.class);
                IncomingCallActivity.start(this.cordova.getActivity().getApplicationContext(), receiveMessage);
            } catch (Exception e) {
                e.printStackTrace();
            }

            callbackContext.success("跳转房间成功");
            return true;
        }
        else if (action.equals("videoLogout")) {
            Log.d("cordova-iot-plugin", "==========================videoLogout");
            Log.d("cordova-iot-plugin", "==========================videoLogout");
            ZZSKitClient.initLogout();
            callbackContext.success("用户已退出登录");
            return true;
        } if (action.equals("initDisconnet")) {
            Log.d("cordova-iot-plugin", "==========================initDisconnet");
            Log.d("cordova-iot-plugin", "==========================initDisconnet");
            ZZSKitClient.initDisconnet(this.cordova.getActivity().getApplicationContext());
            callbackContext.success("initDisconnet用户退出应用成功");
            return true;
        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
