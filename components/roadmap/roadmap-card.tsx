"use client"

import type { Variants } from "framer-motion"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import React, { useRef } from "react"
import { Badge } from "../ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

// ----------------------------------------------------------------------

type RoadmapCardProps = {
  position: "left" | "right"
  description: string
  id: number
  image: string
  subtitle: string
  title: string
  caption: string
}

const CARD_VARIANT: Variants = {
  "hidden-left": {
    opacity: 0,
    x: -52,
  },
  "hidden-right": {
    opacity: 0,
    x: 52,
  },
  "visible": {
    display: "block",
    opacity: 1,
    transition: {
      bounce: 0.5,
      duration: 1,
      ease: "easeIn",
      type: "spring",
    },
    x: 0,
  },
}

const CAPTION_VARIANT: Variants = {
  "hidden-left": {
    opacity: 0,
    x: -52,
  },
  "hidden-right": {
    opacity: 0,
    x: 52,
  },
  "visible": {
    opacity: 1,
    transition: {
      bounce: 0.5,
      duration: 1,
      ease: "easeIn",
      type: "spring",
    },
    x: 0,
  },
}

const ICON_VARIANT: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "linear",
      type: "spring",
    },
  },
}

// ----------------------------------------------------------------------

export default function RoadmapCard({
  caption,
  description,
  image,
  position,
  subtitle,
  title,
}: RoadmapCardProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.8, once: true })

  const cardAnimationState = inView ? "visible" : `hidden-${position}`
  const captionAnimationState = inView ? "visible" : `hidden-${position}`
  const iconAnimationState = inView ? "visible" : "hidden"

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-start gap-4 ${
        position === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* -- Icon -- */}
      <motion.div
        className="absolute md:left-1/2 left-[-8px] top-[calc(50%-32px)] md:top-8 bottom-0 w-12 h-16 flex items-center md:translate-x-[-50%] bg-background rounded-full p-2 z-30 shadow-lg"
        variants={ICON_VARIANT}
        animate={iconAnimationState}
      >
        <Image
          src={image}
          alt={title}
          width={32}
          height={32}
          className="invert"
        />

        {/* -- Caption -- */}
        <motion.div
          variants={CAPTION_VARIANT}
          animate={captionAnimationState}
          className={`absolute p-2 z-20 hidden md:block ${
            position === "left" ? "md:left-16" : "md:-left-36"
          }`}
        >
          <p className="text-gray-400 text-base text-nowrap">{caption}</p>
        </motion.div>
      </motion.div>

      {/* -- Card -- */}
      <motion.div
        variants={CARD_VARIANT}
        animate={cardAnimationState}
        className={`md:w-[45%] w-[calc(100%-20px)] ml-10 hidden md:ml-0 ${
          position === "left" ? "md:mr-8" : "md:ml-8"
        }`}
      >
        <Card>
          <CardHeader className="text-start">
            <Badge variant="secondary" className="md:hidden w-fit">
              {caption}
            </Badge>
            <CardTitle className="text-2xl flex justify-between gap-2">
              {title}
            </CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="text-start whitespace-pre-line">
            <p className="text-muted-foreground mb-4">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
