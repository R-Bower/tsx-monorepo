import React from "react"
/**
 * Extract a component's props
 *
 * Source: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase#wrappingmirroring-a-component
 *
 * @example ComponentProps<typeof MyComponent>
 */
export type ComponentProps<T> = T extends React.ComponentType<infer Props>
  ? // eslint-disable-next-line @typescript-eslint/ban-types
    Props extends object
    ? Props
    : never
  : never

export type ComponentPropsWithRef<
  T extends React.ElementType
> = T extends React.ComponentClass<infer P>
  ? React.PropsWithoutRef<P> & React.RefAttributes<InstanceType<T>>
  : React.PropsWithRef<ComponentProps<T>>
