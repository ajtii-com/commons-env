import { Env } from "./env";
import { Side } from "./side";
import { AppEnv, SrvEnv, Where } from "./types";

export class ObjectFactory {
  public newEnv(srvEnv: SrvEnv, appEnv: AppEnv) {
    const env = new Env();
    env.init(srvEnv, appEnv);
    return env;
  }

  public newSide(side: Where) {
    const s = new Side();
    s.init(side);
    return s;
  }
}
