import SocialButton from "@/components/custom-button/social-button"
import { Button, Typography } from "@mui/material"
import Image from "next/image"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Typography variant="h3" whiteSpace="pre-line">{`Experienced web developer\nspecializing in ReactJS.`}</Typography>
        <Typography variant="body1" color="textSecondary" whiteSpace="pre-line">{`I have a strong foundation in HTML, CSS, and JavaScript, and I am skilled in creating interactive and\nvisually appealing websites.`}</Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button variant="contained">Contact me</Button>
          <Button variant="contained" color="secondary">Download CV</Button>
          <div className="flex justify-center col-span-2 gap-4 md:justify-start md:col-auto">
            <SocialButton variant="contained" color="secondary" src="/linkedin.png" alt="LinkedIn logo" />
            <SocialButton variant="contained" color="secondary" src="/github.png" alt="GitHub logo" width={16} height={16} />
          </div>
        </div>
      </main>
    </div>
  )
}
