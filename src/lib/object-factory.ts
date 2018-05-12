import { AppEnv, Env, Side, SrvEnv, Where } from ".";

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
