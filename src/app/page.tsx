/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { Github, LinkedIn, X } from "@/lib/Icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto pt-14 pb-14 flex flex-col gap-4 justify-center px-5">
      <section id="about" className="space-y-5 text-pretty w-full">
        <h1 className="font-semibold text-2xl mb-10">
          {"< "}hi, i'm armaan{" />"}
        </h1>
        <p className="text-pretty">
          Full stack developer who loves building cool stuff. I enjoy good
          coffee, watching movies, and making digital art. Always excited to
          learn new tech and start fun projects. More{" "}
          <Link
            href={"/about"}
            className="underline underline-offset-2 text-sky-400"
          >
            about me.
          </Link>
        </p>
        <p className="">
          here's my{" "}
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href={
              "https://drive.google.com/file/d/1uvlR32EBNqfeGb-QSRDtA1Dex7kNaSG4/view?usp=sharing"
            }
            className="underline underline-offset-2 text-sky-400"
          >
            resume.
          </Link>
        </p>
      </section>

      <section
        id="socials"
        className="flex flex-row items-center justify-start gap-8 mt-2 border-b pb-8"
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/armaanx/"}
        >
          <Github className="h-6 w-6 fill-foreground/95 hover:fill-white hover:scale-[1.2] transition-all" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.linkedin.com/in/armaanx"}
        >
          <LinkedIn className="h-6 w-6 fill-foreground/95 hover:fill-white hover:scale-[1.2] transition-all" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.x.com/armaanmishra131/"}
        >
          <X className="h-6 w-6 fill-foreground/95 hover:fill-white hover:scale-[1.2] transition-all" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"mailto:armaanmishra48@gmail.com"}
        >
          <Mail className="h-[24px] w-[24px] text-foreground/95 hover:text-white hover:scale-[1.2] transition-all" />
        </Link>
      </section>

      <section id="projects" className="text-pretty mt-8 w-full space-y-4">
        <h2 className="text-xl font-bold">Projects</h2>
        <ul className="space-y-5 text-pretty list-disc px-6 md:px-12">
          <li>
            <div>
              <Link
                href={"/projects/grainify"}
                className="font-semibold tracking-wide inline-block mr-2 text-sky-400 underline underline-offset-2"
              >
                Grainify
              </Link>
              <p className="text-[15px] mt-1 inline">
                - A web based photo editor that lets you add vintage effects to
                your photos.
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                href={"/projects/spotify-music-cards"}
                className="font-semibold tracking-wide inline-block mr-2 text-sky-400 underline underline-offset-2"
              >
                Spotify Music Cards
              </Link>
              <p className="text-[15px] mt-1 inline">
                - A tool that generates beautiful cards for your Spotify top
                tracks and artists.
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                href={"/projects/passprotect"}
                className="font-semibold tracking-wide inline-block mr-2 text-sky-400 underline underline-offset-2"
              >
                PassProtect
              </Link>
              <p className="text-[15px] mt-1 inline">
                - A cloud based password manager that lets you add/delete/edit
                passwords securely using 256 bit AES encryption.
              </p>
            </div>
          </li>
          <li>
            <div>
              <Link
                href={"/projects/cat-albums"}
                className="font-semibold tracking-wide inline-block mr-2 text-sky-400 underline underline-offset-2"
              >
                Cat Albums
              </Link>
              <p className="text-[15px] mt-1 inline">
                - A silly little tool that lets you generate a cat holding your
                favorite album covers.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
