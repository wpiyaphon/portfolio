import Image from "next/image"
import React from "react"
import { Badge } from "./ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

// ----------------------------------------------------------------------

type RoadmapProps = {
  items: { description: string, id: number, image: string, subtitle: string, title: string, caption: string }[]
}

// ----------------------------------------------------------------------

export default function Roadmap({ items }: RoadmapProps) {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[1px] md:translate-x-[-50%] h-full bg-gray-300 bg-opacity-60 " />
      <div className="block space-y-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col items-start gap-4 ${index % 2 === 0 ? "md:flex-row" : " md:flex-row-reverse"} `}
          >
            {/* -- Icon -- */}
            <div
              id="icon"
              className="absolute md:left-1/2 left-[-8px] top-[calc(50%-32px)] md:top-8 bottom-0 w-12 h-16 flex items-center md:translate-x-[-50%] bg-background rounded-full p-2 z-30 shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={32}
                height={32}
                className="invert"
              />
              <div
                className={`absolute p-2 z-20 hidden md:block ${index % 2 === 0 ? "md:left-16" : "md:-left-32"}`}
              >
                <p className="text-gray-400 text-sm text-nowrap">
                  {item.caption}
                </p>
              </div>
            </div>

            {/* -- Card -- */}
            <Card
              className={`md:w-[45%] w-[calc(100%-40px)] ml-10 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
            >
              <CardHeader className="text-start">
                <Badge variant="secondary" className="md:hidden w-fit">
                  {item.caption}
                </Badge>
                <CardTitle className="text-2xl flex justify-between gap-2">
                  {item.title}
                </CardTitle>

                <CardDescription>{item.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-start whitespace-pre-line">
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
