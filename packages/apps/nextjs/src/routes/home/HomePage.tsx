import React from "react"

import {TruncatedText} from "@rb/react-components"
import {Box} from "@rb/react-primitives"

import {pagePaddingX, pagePaddingY} from "~components/page/config"

export default function HomePage(): JSX.Element {
  return (
    <Box height={500} width={500} {...pagePaddingX} {...pagePaddingY}>
      <TruncatedText as={"h3"} maxLines={["2"]}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </TruncatedText>
    </Box>
  )
}
