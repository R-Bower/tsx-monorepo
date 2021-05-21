---
title: Box
---

The Box component serves as a wrapper component for most layout related needs. Use Box to set values such as `display`, `width`, `height`, and more. See the LAYOUT section of our [System Props](/system-props) documentation for the full list of available props. In practice, this component is used frequently as a wrapper around other components to achieve Box Model related styling.

## Default example

```jsx live live
<Box>
  Box can be used to create both{' '}
  <Box as="span" color="text.inverse" bg="bg.successInverse">
    inline
  </Box>{' '}
  and
  <Box color="text.inverse" bg="bg.dangerInverse">
    block-level elements,
  </Box>
  <Box color="text.inverse" bg="bg.warningInverse" width={[1, 1, 1 / 2]}>
    elements with fixed or responsive width and height,
  </Box>
  <Box color="text.inverse" bg="bg.infoInverse" p={4} mt={2}>
    and more!
  </Box>
</Box>
```

## System props

Box components get the `COMMON`, `LAYOUT`, and `FLEX` categories of system props. Read our [System Props](/system-props) doc page for a full list of available props.

## Component props

| Prop name | Type   | Default | Description                         |
| :-------- | :----- | :-----: | :---------------------------------- |
| as        | String |  `div`  | sets the HTML tag for the component |
