/* eslint-disable */

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never

/**
 * Requires TS4.1.
 * Uses string concatenation types to generate types for deeply nested object keys.
 * Recursion limits apply, hence the Prev depth limiter.
 *
 * Note: nested paths deeper than 10 levels aren't supported.
 * Try to keep paths less than 5 for the best performance.
 *
 * The TypeScript compiler may complain.
 *
 * NOTE: Only use this with Objects, not arrays.
 * This will make dotted paths out of non-dottable keys, like {foo: [{"bar-baz": 1}]} might produce foo.0.bar-baz.
 */
export type DeepObjectKeys<T, D extends number = 10> = [D] extends [never]
  ? never
  : // eslint-disable-next-line @typescript-eslint/ban-types
  T extends object
    ? {[K in keyof T]-?: Join<K, DeepObjectKeys<T[K], Prev[D]>>}[keyof T]
    : ""
