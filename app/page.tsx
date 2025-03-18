import TitleLine from "@/components/title-line"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

// ----------------------------------------------------------------------

const ICON_SIZE = 48

const EXPERIENCES = [
  {
    description: `Designed UX/UI and developed the frontend for side projects, including an educational management system and a bakery online shopping system with a payment gateway.`,
    id: 1,
    image: "/html.svg",
    subtitle: "Side Projects",
    title: "Frontend Developer",
    year: "2023 - 2024",
  },
  {
    description: `Develop web applications using TypeScript, React, and Next.js, ensuring efficient architecture and workflows.\n
    Involved in setting up CI/CD pipelines with Bitbucket and deploying applications to Azure, and contributing through peer reviews, knowledge sharing, and Agile collaboration.`,
    id: 2,
    image: "/html.svg",
    subtitle: "Greenmoons (Permanent)",
    title: "Software Developer",
    year: "2024 - Present",
  },
  {
    description: "During my free time, I'm learning Nest.js and design patterns to build a strong foundation in backend development as I want to expand my knowledge and skills to become a full stack developer.",
    id: 3,
    image: "/html.svg",
    subtitle: "Self-taught",
    title: "Learning Backend",
    year: "Ongoing",
  },
]
// ----------------------------------------------------------------------

export default function Home() {
  return (
    <div className="p-8 font-[family-name:var(--font-geist-sans)]">
      {/* -- Hero -- */}
      <section className="flex items-center justify-center min-h-screen pb-20 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <h1 className="text-center">
            Experienced web developer
            <br />
            specializing in
            {" "}
            <span className="text-transparent bg-gradient-to-tr from-[#008DD2] to-[#01B2EB] bg-clip-text">React</span>
          </h1>
          <h6 className="text-center text-gray-400 max-w-2xl">
            I have strong foundation in HTML, CSS, and TypeScript, and I am skilled in
            creating interactive and visually appealing web applications.
          </h6>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-sm border border-solid border-transparent font-semibold transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-[145px]"
              href="https://www.linkedin.com/in/piyaphon-wu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedIn.svg"
                alt="LinkedIn"
                width={18}
                height={18}
              />
              LinkedIn
            </a>
            <a
              className="rounded-sm border bg-[#0077d2] font-semibold text-white border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#0066d2] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-[145px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </main>
      </section>

      {/* -- About -- */}
      <section className=" pb-20 sm:p-20 text-center">
        <h6 className="text-gray-400 mb-8 tracking-widest">EXPLORE ABOUT ME</h6>
        <TitleLine number={1} title="About" subtitle="I am a web developer with a passion for creating beautiful and functional web applications. I am a quick learner and I am always looking for new challenges." />

        <h6 className="text-gray-400 text-center tracking-widest mb-8">EXPERIENCE WITH</h6>
        <div className="flex justify-center gap-8 dark:invert flex-wrap">
          <Image src="/html.svg" alt="HTML" width={ICON_SIZE} height={ICON_SIZE} />
          <Image src="/css.svg" alt="CSS" width={ICON_SIZE} height={ICON_SIZE} />
          <Image className="rounded-sm scale-90" src="/typescript.svg" alt="TypeScript" width={ICON_SIZE} height={ICON_SIZE} />
          <Image src="/tailwind-css.svg" alt="Tailwind CSS" width={ICON_SIZE} height={ICON_SIZE} />
          <Image src="/react.svg" alt="React" width={ICON_SIZE} height={ICON_SIZE} />
          <Image src="/next-js.svg" alt="Next.js" width={ICON_SIZE} height={ICON_SIZE} />
        </div>
      </section>

      {/* -- Work Experience -- */}
      <section className=" pb-20 sm:p-20 text-center">
        <TitleLine number={2} title="My Experience" color="orange" />

        <div className="max-w-7xl mx-auto relative">
          <div
            className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[1px] md:translate-x-[-50%] h-full bg-gray-300 bg-opacity-60 "
          />
          <div className="block space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <div key={experience.id} className={`relative flex flex-col items-start gap-4 ${index % 2 === 0 ? "md:flex-row" : " md:flex-row-reverse"} `}>
                {/* -- Icon -- */}
                <div id="icon" className="dark:invert absolute md:left-1/2 left-[-8px] top-[calc(50%-32px)] md:top-8 bottom-0 w-12 h-16 flex items-center md:translate-x-[-50%] bg-white rounded-full p-2 z-20">
                  <Image src={experience.image} alt={experience.title} width={32} height={32} className="opacity-60" />
                  <div className={`absolute p-2 z-20 hidden md:block ${index % 2 === 0 ? "md:left-16" : "md:-left-32"}`}>
                    <p className="text-gray-400 text-sm text-nowrap">{experience.year}</p>
                  </div>
                </div>

                {/* -- Card -- */}
                <Card
                  className={`md:w-[45%] w-[calc(100%-40px)] ml-10 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                >
                  <CardHeader className="text-start">
                    <Badge variant="secondary" className="md:hidden w-fit">{experience.year}</Badge>
                    <CardTitle className="text-2xl flex justify-between gap-2">
                      {experience.title}
                    </CardTitle>

                    <CardDescription>{experience.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-start whitespace-pre-line">
                    <p className="text-muted-foreground mb-4">{experience.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

  )
}
