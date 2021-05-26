import React from "react"

import {MDXRemote} from "next-mdx-remote"
import {serialize} from "next-mdx-remote/serialize"

import MDXPageWrapper from "~components/mdx/MDXPageWrapper"

const mdx = `## This text is truncated.

# Counter
<State initialState={{ count: 0 }}>

<Observe>
  {({ setState }) => (
    <button onClick={() => setState(s => ({ count: s.count + 1 }))}>
      Click me
    </button>
  )}
</Observe>

<Observe>
  { ({ count }) => (\`The button has been clicked \${count} times\`) }
</Observe>

<Box px={2} py={1} border={"solid 2px"} borderColor={"border.default"} width={200}>
  <TruncatedText as={"p"} maxLines={1}>
    this text is truncated but extends beyond the max lines
  </TruncatedText>
</Box>

</State>
`

export default function TestPage({source}): JSX.Element {
  return (
    <MDXPageWrapper>
      <MDXRemote {...source} />
    </MDXPageWrapper>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const mdxSource = await serialize(mdx)
  return {props: {source: mdxSource}}
}
