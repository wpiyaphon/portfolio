"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"

// ----------------------------------------------------------------------

type TypingTextProps = {
  desktopText: string
  mobileText: string
  tabletText: string
}

// ----------------------------------------------------------------------

export default function TypingText({ desktopText, mobileText, tabletText }: TypingTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const desktopTexts = desktopText.split("\\n")
  const tabletTexts = tabletText.split("\\n")
  const mobileTexts = mobileText.split("\\n")

  return (
    <div ref={ref} className="flex flex-col gap-2 max-w-max mx-auto">
      {desktopTexts.map((text, index) => (
        <div className="max-w-max mx-auto hidden lg:block" key={text}>
          <h6
            className={`${isInView && "animate-typing"} opacity-0 overflow-hidden whitespace-nowrap ${index === 0
              ? "delay-0"
              : index === 1
                ? "delay-[2000ms]"
                : index === 2
                  ? "delay-[4000ms]"
                  : index === 3 ? "delay-[6000ms]" : ""
            }`}
          >
            {text}
          </h6>
        </div>
      ))}
      {tabletTexts.map((text, index) => {
        return (
          <div className="max-w-max mx-auto hidden md:block lg:hidden" key={text}>
            <h6
              className={`${isInView && "animate-typing"} opacity-0 overflow-hidden whitespace-nowrap ${index === 0
                ? "delay-0"
                : index === 1
                  ? "delay-[2000ms]"
                  : index === 2
                    ? "delay-[4000ms]"
                    : index === 3 ? "delay-[6000ms]" : ""
              }`}
            >
              {text}
            </h6>
          </div>
        )
      })}
      {mobileTexts.map((text, index) => {
        return (
          <div className="max-w-max mx-auto block md:hidden" key={text}>
            <h6
              className={`${isInView && "animate-typing"} opacity-0 overflow-hidden whitespace-nowrap ${index === 0
                ? "delay-0"
                : index === 1
                  ? "delay-[2000ms]"
                  : index === 2
                    ? "delay-[4000ms]"
                    : index === 3 ? "delay-[6000ms]" : ""
              }`}
            >
              {text}
            </h6>
          </div>
        )
      })}
    </div>
  )
}
