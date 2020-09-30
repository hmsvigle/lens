import { autoUpdater } from "electron-updater"
import logger from "./logger"

export default class AppUpdater {
  static defaultUpdateIntervalMs = 1000 * 60 * 60 * 24 // once a day

  static checkForUpdates() {
    return autoUpdater.checkForUpdatesAndNotify()
  }

  constructor(protected updateInterval = AppUpdater.defaultUpdateIntervalMs) {
    autoUpdater.logger = logger
  }

  public start() {
    setInterval(AppUpdater.checkForUpdates, this.updateInterval)
    return AppUpdater.checkForUpdates();
  }
}
