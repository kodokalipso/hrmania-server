import { ArgsVoidFunction } from '../types';
export function LogReturnValue(
  loggerFunc: ArgsVoidFunction<unknown> = console.log,
) {
  return (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      const result = originalMethod.apply(this, args);

      result.then((res: unknown) => loggerFunc(res));

      return result;
    };

    return descriptor;
  };
}
