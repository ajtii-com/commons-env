import { Where } from ".";

export class Side {
  // tslint because of !
  // tslint:disable-next-line:variable-name member-access member-ordering
  private _side!: Where;

  public init(side: Where) {
    this._side = side;
  }

  public get name() {
    return this._side;
  }

  public get isClient() {
    return this._side === "client";
  }

  public get isSrv() {
    return this._side === "server";
  }
}
