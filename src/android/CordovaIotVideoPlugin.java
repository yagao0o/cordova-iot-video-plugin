package cordova.iot.video.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class CordovaIotVideoPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        }
        else if (action.equals("initClient")) {
            String configJson = args.getString(0);
            System.out.println(configJson);
            callbackContext.success("初始化成功");
            return true;
        }
        else if (action.equals("joinRoom")) {
            String accessToken = args.getString(0);
            String roomId = args.getString(1);
            String userId = args.getString(2);
            System.out.println(accessToken);
            System.out.println(roomId);
            System.out.println(userId);
            callbackContext.success("加入房间成功");
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
