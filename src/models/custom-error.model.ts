export class CustomError {
  message!: string;
  code!: number;
  additionalInfo!: any;

  constructor(message: string, code: number = 500, additionalInfo: any = {}) {
    this.message = message;
    this.code = code;
    this.additionalInfo = additionalInfo;
  }
}
