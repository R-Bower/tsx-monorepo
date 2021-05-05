import { has, reduce } from "rambda";
import { css } from "styled-components";
import { background, border, color, compose, layout, position, shadow, space, } from "styled-system";
import customProps from "./custom-props";
import stylePropsList from "./style-props-list";
export const sharedSystemProps = css `
  ${compose(background, border, color, layout, position, shadow, space)};
  ${customProps};
`;
/*
 * Some react components forward every single prop to the dom.  If the prop
 * isn't a standard prop (like all of our style-props), it will generate an
 * error in the console.  Since v5.1.0, styled-components now provides the
 * ability to prevent specific props from being passed to the DOM.  This
 * function converts the string list of style props to a map for O(1) lookup.
 */
const excludedProps = reduce((acc, current) => ({
    ...acc,
    [current]: true,
}), {}, stylePropsList);
export const shouldForwardProp = (prop) => !has(prop, excludedProps);
//# sourceMappingURL=shared.js.map