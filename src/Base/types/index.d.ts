/**
 * здесь лежат helper типы
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type $Values<T extends Record<string, unknown>> = T[keyof T];
export type Optional<T> = T | undefined; // ?
export type Nullable<T = any> = T | null;
export type Nullish<T> = Optional<T> | Nullable<T>;
export type VoidPromise = Promise<void>;
export type VoidablePromise<T> = Promise<void | T>;
export type NullablePromise<T = any> = Promise<T | null>;
export type NullableArrayPromise<T = any> = Promise<T[] | null>;
export type NullablePromisesArray<T = any> = Array<Promise<T | null>>;
export type OrPromise<T> = Promise<T> | T;
export type ArgsVoidFunction<T> = (...args: T[]) => void;
