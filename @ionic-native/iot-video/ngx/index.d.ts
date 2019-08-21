import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Iot Video
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { IotVideo } from '@ionic-native/iot-video';
 *
 *
 * constructor(private iotVideo: IotVideo) { }
 *
 * ...
 *
 *
 * this.iotVideo.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class IotVideo extends IonicNativePlugin {
    /**
     * This function does something
     * @param testMessage {string} 测试message
     * @return {Promise<string>} 测试message返回
     */
    coolMethod(testMessage: string): Promise<string>;
    /**
     * 初始化视频服务配置
     * @param configJson {string} 视频服务配置项目, 参考 cordova-iot-video-plugin 中说明
     * @return {Promise<any>} 返回初始化结果
     */
    initClient(configJson: string): Promise<string>;
    /**
     * 连接作战室
     * @param accessToken {string} 用户登录token
     * @param roomId {string} 房间号
     * @param userId {string} 用户Id
     * @return {Promise<any>} 返回连接结果
     */
    joinRoom(accessToken: string, roomId: string, userId: string): Promise<any>;
}
