"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"

// ----------------------------------------------------------------------

type TypingTextProps = {
  text1: string
  text2: string
}

// ----------------------------------------------------------------------

export default function TypingText({ text1, text2 }: TypingTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <h6
        className={`${isInView && "animate-typing"} opacity-0 overflow-hidden whitespace-nowrap`}
      >
        {text1}
      </h6>
      {text2 && (
        <div className="max-w-max mx-auto">
          <h6
            className={`${isInView && "animate-typing [animation-delay:2.5s]"} opacity-0 overflow-hidden whitespace-nowrap`}
          >
            {text2}
          </h6>
        </div>
      )}
    </div>
  )
}
