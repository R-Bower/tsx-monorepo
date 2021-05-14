import React from "react"
import {MediaContextProviderProps} from "@artsy/fresnel/dist/Media"
import {Interactions} from "@artsy/fresnel/dist/Interactions"
import {BreakpointKey} from "@artsy/fresnel"

type bp = "xxs" | "xs" | "sm" | "md" | "lg" | "xl"

type between = [bp, bp]

interface IMediaProps {
  at?: bp
  lessThan?: bp
  greaterThan?: bp
  greaterThanOrEqual?: bp
  between?: [bp, bp]
}

declare const Media: React.FC<IMediaProps>
declare const MediaContextProvider: React.ComponentType<MediaContextProviderProps<
  BreakpointKey | Interactions
>>
