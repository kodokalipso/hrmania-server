export class NotFound extends Error {
  constructor(msg = 'UNKNOWN') {
    super(`${msg} do not exist`);
  }
}
