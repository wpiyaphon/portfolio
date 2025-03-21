import React from "react"

// ----------------------------------------------------------------------

type SectionColorVariants = "blue" | "purple" | "orange"

type SectionDividerProps = {
  number: number
  title: string
  subtitle?: string
  color?: SectionColorVariants
}

const TITLE_GRADIENT_COLORS: Record<
  SectionColorVariants,
  { from: string, to: string }
> = {
  blue: { from: "from-[#0069d2]", to: "to-[#00e5ff]" },
  orange: { from: "from-[#d44b36]", to: "to-[#d09d1d]" },
  purple: { from: "from-[#8e339c]", to: "to-[#e90681]" },
}

// ----------------------------------------------------------------------

export default function SectionDivider({
  color = "blue",
  number,
  subtitle,
  title,
}: SectionDividerProps) {
  return (
    <div className="grid grid-flow-row gap-8 text-center justify-center mb-36">
      <div>
        <div
          className={`vertical-section-line from-transparent ${TITLE_GRADIENT_COLORS[color].to}`}
        />
        <div
          className={`relative bg-gradient-to-r ${TITLE_GRADIENT_COLORS[color].from} ${TITLE_GRADIENT_COLORS[color].to} rounded-full bg-gray-400 w-16 h-16 mx-auto mt-[-20px] z-10 flex items-center text-center`}
        >
          <p className="text-black text-2xl w-full">{number}</p>
        </div>
      </div>
      <h2
        className={`mx-auto font-bold text-transparent bg-clip-text bg-gradient-to-r ${TITLE_GRADIENT_COLORS[color].from} ${TITLE_GRADIENT_COLORS[color].to}`}
      >
        {title}
      </h2>
      {subtitle && <h6 className=" text-gray-400 max-w-5xl ">{subtitle}</h6>}
    </div>
  )
}
