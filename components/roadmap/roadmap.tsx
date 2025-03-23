import React from "react"

import RoadmapCard from "./roadmap-card"

// ----------------------------------------------------------------------

type RoadmapProps = {
  items: {
    description: string
    id: number
    image: string
    subtitle: string
    title: string
    caption: string
  }[]
}

// ----------------------------------------------------------------------

export default function Roadmap({ items }: RoadmapProps) {
  return (
    <div className="max-w-7xl mx-auto relative">
      {/* -- Divider -- */}
      <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[0.5px] md:translate-x-[-50%] h-full bg-gray-300 bg-opacity-60 " />

      <div className="block space-y-12">
        {items.map((item, index) => (
          <RoadmapCard
            key={item.id}
            {...item}
            position={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  )
}
