import { newLogicError } from "@ajtii/commons-error";
import { AppEnv, SrvEnv } from "./types";

export class Env {
  // tslint because of !
  // tslint:disable-next-line:variable-name member-access member-ordering
  private _srvEnv!: SrvEnv;

  // tslint because of !
  // tslint:disable-next-line:variable-name member-access member-ordering
  private _appEnv!: AppEnv;

  public init(srvEnv: SrvEnv, appEnv: AppEnv) {
    if (
      srvEnv !== "development" &&
      srvEnv !== "testing" &&
      srvEnv !== "production"
    ) {
      throw newLogicError(
        "Server environment must be one of these: development, testing or production; %s given",
        srvEnv,
      );
    }

    if (
      appEnv !== "development" &&
      appEnv !== "testing" &&
      appEnv !== "production"
    ) {
      throw newLogicError(
        "App environment must be one of these: development, testing or production; %s given",
        appEnv,
      );
    }

    this._srvEnv = srvEnv;
    this._appEnv = appEnv;
  }

  public get app() {
    return this._appEnv;
  }

  public get isAppInDevOnly() {
    return this._appEnv === "development";
  }

  public get isAppInTest() {
    return this._appEnv === "testing";
  }

  public get isAppInDev() {
    return this.isAppInDevOnly || this.isAppInTest;
  }

  public get isAppInProd() {
    return this._appEnv === "production";
  }

  public get srv() {
    return this._srvEnv;
  }

  public get isDevSrvOnly() {
    return this._srvEnv === "development";
  }

  public get isTestSrv() {
    return this._srvEnv === "testing";
  }

  public get isDevSrv() {
    return this.isDevSrvOnly || this.isTestSrv;
  }

  public get isProdSrv() {
    return this._srvEnv === "production";
  }
}
