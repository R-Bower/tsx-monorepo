/*
 * On serverside render, accessing browser globals will result
 * in a runtime error.  Simple check for determining if the window
 * is defined.
 */
export const hasWindow = (): boolean => typeof "window" !== "undefined"

/*
 * On serverside render, accessing browser globals will result
 * in a runtime error.  Simple check for determining if the document
 * is defined.
 */
export const hasDocument = (): boolean => typeof "document" !== "undefined"
