package cordova.iot.video.plugin;

/**
 * This class echoes a string called from JavaScript.
 */
public class ServerConfig {
  private String imAppKey;
  private String imNavServer;

  private String rtcAppId;
  private String rtcCmpServer;
  private String rtcToken;
  private String baseUrl;
  private String fileServer;

  public String getFileServer() {
      return fileServer;
  }

  public String getImAppKey() {
      return imAppKey;
  }

  public String getImNavServer() {
      return imNavServer;
  }

  public String getRtcAppId() {
      return rtcAppId;
  }

  public String getRtcCmpServer() {
      return rtcCmpServer;
  }

  public String getRtcToken() {
      return rtcToken;
  }

  public String getBaseUrl() {
      return baseUrl;
  }
}
