/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { Github, LinkedIn, X } from "@/lib/Icons";
import { skillIcons } from "@/lib/skill-names";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto pt-14 pb-14 flex flex-col gap-4 justify-center px-5">
      <section id="about" className="space-y-10 text-pretty w-full">
        <h1 className="font-semibold text-2xl">
          {"< "}hi, i'm armaan{" />"}
        </h1>
        <p className=" text-pretty">
          Full stack developer who loves building cool stuff. I enjoy good
          coffee, watching movies, and making digital art. Always excited to
          learn new tech and start fun projects. More{" "}
          <Link
            href={"/about"}
            className="underline underline-offset-2 text-blue-400"
          >
            about me.
          </Link>
          <br />
          here's my{" "}
          <Link
            href={"/"}
            className="underline underline-offset-2 text-blue-400"
          >
            resume.
          </Link>
        </p>
      </section>

      <section
        id="socials"
        className="flex flex-row items-center justify-start gap-8 mt-2"
      >
        <Link href={"/"}>
          <Github className="h-6 w-6 fill-foreground/95 hover:fill-white hover:scale-[1.2] transition-all" />
        </Link>
        <Link href={"/"}>
          <LinkedIn className="h-6 w-6 fill-foreground/95 hover:fill-white hover:scale-[1.2] transition-all" />
        </Link>
        <Link href={"/"}>
          <X className="h-6 w-6 fill-foreground/95 hover:fill-white hover:scale-[1.2] transition-all" />
        </Link>
        <Link href={"/"}>
          <Mail className="h-[24px] w-[24px] text-foreground/95 hover:text-white hover:scale-[1.2] transition-all" />
        </Link>
      </section>

      <section id="projects" className="text-pretty mt-8 w-full space-y-4">
        <h2 className="text-xl font-bold">Projects</h2>
        <ul className="space-y-5 text-pretty ">
          <li>
            <div>
              <h3 className="font-semibold tracking-wide inline-block mr-2">
                Grainify -
              </h3>
              <p className="inline-block text-sm italic text-zinc-200">
                Next.js, Tailwind CSS, TypeScript, Web Workers
              </p>
              <p className="text-[15px] mt-1 mb-1">
                A web based photo editor to add vintage effects to your photos.
                Comes with 45 filters and multiple grain options.
              </p>
              <Link href={"/"} className="text-sm mr-3">
                Source
              </Link>
              <Link href={"/"} className="text-sm">
                Preview
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold tracking-wide inline-block mr-2">
                Spotify Music Cards -
              </h3>
              <p className="inline-block text-sm italic text-zinc-200">
                Next.js, Tailwind CSS, TypeScript, Spotify Web API, NextAuth
              </p>
              <p className="text-[15px] mt-1 mb-1">
                A tool that generates beautiful cards for your Spotify top
                tracks and artists.
              </p>
              <Link href={"/"} className="text-sm mr-3">
                Source
              </Link>
              <Link href={"/"} className="text-sm">
                Preview
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold tracking-wide inline-block mr-2">
                PassProtect -
              </h3>
              <p className="inline-block text-sm italic text-zinc-200">
                React.js, JavaScript, Firebase
              </p>
              <p className="text-[15px] mt-1 mb-1">
                A cloud based password manager that lets you add/delete/edit
                passwords securely using 256 bit AES encryption.
              </p>
              <Link href={"/"} className="text-sm mr-3">
                Source
              </Link>
              <Link href={"/"} className="text-sm">
                Preview
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold tracking-wide inline-block mr-2">
                Cat Albums -
              </h3>
              <p className="inline-block text-sm italic text-zinc-200">
                Next.js, TypeScript, HTML Canvas, LastFM API
              </p>
              <p className="text-[15px] mt-1 mb-1">
                A silly little tool that lets you generate a cat holding your
                favorite album covers.
              </p>
              <Link href={"/"} className="text-sm mr-3">
                Source
              </Link>
              <Link href={"/"} className="text-sm">
                Preview
              </Link>
            </div>
          </li>
        </ul>
      </section>

      <section id="skills" className="space-y-5 text-pretty mt-8 w-full">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-row flex-wrap items-center justify-start gap-3 max-w-prose text-foreground/90 text-[15px]">
          {skillIcons.map((skill) => (
            <p key={skill.name}>{skill.name}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
