import { system } from "styled-system";
import { pixelSizeTransformer } from "./transformers";
export const customProps = {
    appearance: true,
    boxDecorationBreak: true,
    boxSizing: true,
    clip: true,
    cursor: true,
    fill: {
        property: "fill",
        scale: "colors",
    },
    height: {
        property: "height",
        transform: pixelSizeTransformer,
    },
    listStyle: true,
    listStyleType: true,
    maxWidth: {
        property: "maxWidth",
        transform: pixelSizeTransformer,
    },
    objectFit: true,
    outline: true,
    pointerEvents: true,
    textDecoration: true,
    textOverflow: true,
    textShadow: true,
    textTransform: true,
    transform: true,
    transition: true,
    userDrag: true,
    userSelect: true,
    whiteSpace: true,
    willChange: true,
    wordBreak: true,
};
export default system(customProps);
//# sourceMappingURL=custom-props.js.map