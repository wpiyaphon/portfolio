import TitleLine from "@/components/title-line"
import Image from "next/image"

const ICON_SIZE = 48

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
        <div className="flex justify-center gap-8 dark:invert">
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
      </section>
    </div>

  )
}
