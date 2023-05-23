import { Nullable, Nullish } from '../types';
import { isNil } from '@nestjs/common/utils/shared.utils';

class ContractExeption extends Error {
  constructor(msg?: string) {
    super(`ERROR DURING CONTRACT LIFECYCLE \n ${msg ?? 'UNDEFINED MESSAGE'}`);
  }
}

export class LayerContract<T = unknown> {
  protected statusCode = 1;
  protected statusDescription: Nullish<string>;
  protected payload: T;
  protected process: Nullable<boolean> = null;

  protected static SUCCESS_CODE = 0;

  public setSuccess(payload) {
    if (isNil(this.process)) {
      throw new ContractExeption('ALREADY SET');
    }
    this.payload = payload;
    this.statusCode = LayerContract.SUCCESS_CODE;
    this.process = true;
  }

  public setFailed(code = 1, description?: Nullish<string>) {
    if (isNil(this.process)) {
      throw new ContractExeption('ALREADY SET');
    }
    this.statusCode = code;
    this.statusDescription = description;
    this.process = false;
  }

  public getCode() {
    return this.statusCode;
  }

  public getDescription() {
    return this.statusDescription;
  }

  public getInfo() {
    return { code: this.statusCode, description: this.statusDescription };
  }

  public getPayload() {
    if (!isNil(this.process)) {
      throw new ContractExeption('PAYLOAD');
    }
    return this.payload;
  }
}
