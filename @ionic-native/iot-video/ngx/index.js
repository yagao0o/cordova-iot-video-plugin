var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IotVideo = /** @class */ (function (_super) {
    __extends(IotVideo, _super);
    function IotVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IotVideo.prototype.coolMethod = function (testMessage) { return cordova(this, "coolMethod", {}, arguments); };
    IotVideo.prototype.initClient = function (configJson) { return cordova(this, "initClient", {}, arguments); };
    IotVideo.prototype.joinRoom = function (accessToken, roomId, userId) { return cordova(this, "joinRoom", {}, arguments); };
    IotVideo.pluginName = "cordova-iot-video-plugin";
    IotVideo.plugin = "cordova-iot-video-plugin";
    IotVideo.pluginRef = "CordovaIotVideoPlugin";
    IotVideo.repo = "https://github.com/yagao0o/cordova-iot-video-plugin";
    IotVideo.install = "cordova plugin remove cordova-iot-video-plugin";
    IotVideo.installVariables = [];
    IotVideo.platforms = ["Android"];
    IotVideo = __decorate([
        Injectable()
    ], IotVideo);
    return IotVideo;
}(IonicNativePlugin));
export { IotVideo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvdC12aWRlby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBa0M5Riw0QkFBaUI7Ozs7SUFRN0MsNkJBQVUsYUFBQyxXQUFtQjtJQVU5Qiw2QkFBVSxhQUFDLFVBQWtCO0lBWTdCLDJCQUFRLGFBQUMsV0FBbUIsRUFBRSxNQUFjLEVBQUUsTUFBYzs7Ozs7Ozs7SUE5QmpELFFBQVE7UUFEcEIsVUFBVSxFQUFFO09BQ0EsUUFBUTttQkE5Q3JCO0VBOEM4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIElvdCBWaWRlb1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW90VmlkZW8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2lvdC12aWRlbyc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW90VmlkZW86IElvdFZpZGVvKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5pb3RWaWRlby5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2NvcmRvdmEtaW90LXZpZGVvLXBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtaW90LXZpZGVvLXBsdWdpbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdDb3Jkb3ZhSW90VmlkZW9QbHVnaW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20veWFnYW8wby9jb3Jkb3ZhLWlvdC12aWRlby1wbHVnaW4nLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICdjb3Jkb3ZhIHBsdWdpbiByZW1vdmUgY29yZG92YS1pb3QtdmlkZW8tcGx1Z2luJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJb3RWaWRlbyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gdGVzdE1lc3NhZ2Uge3N0cmluZ30g5rWL6K+VbWVzc2FnZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IOa1i+ivlW1lc3NhZ2Xov5Tlm55cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29vbE1ldGhvZCh0ZXN0TWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIOWIneWni+WMluinhumikeacjeWKoemFjee9rlxuICAgKiBAcGFyYW0gY29uZmlnSnNvbiB7c3RyaW5nfSDop4bpopHmnI3liqHphY3nva7pobnnm64sIOWPguiAgyBjb3Jkb3ZhLWlvdC12aWRlby1wbHVnaW4g5Lit6K+05piOXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0g6L+U5Zue5Yid5aeL5YyW57uT5p6cXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXRDbGllbnQoY29uZmlnSnNvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIOi/nuaOpeS9nOaImOWupFxuICAgKiBAcGFyYW0gYWNjZXNzVG9rZW4ge3N0cmluZ30g55So5oi355m75b2VdG9rZW5cbiAgICogQHBhcmFtIHJvb21JZCB7c3RyaW5nfSDmiL/pl7Tlj7dcbiAgICogQHBhcmFtIHVzZXJJZCB7c3RyaW5nfSDnlKjmiLdJZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IOi/lOWbnui/nuaOpee7k+aenFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBqb2luUm9vbShhY2Nlc3NUb2tlbjogc3RyaW5nLCByb29tSWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==