/* eslint-disable react/no-unescaped-entities */
import { skillIcons } from "@/lib/skill-names";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section id="image" className="mt-8 w-full aspect-[1330/497] relative">
        <Image
          priority
          src={"/me_.jpg"}
          fill
          alt="Me"
          className=" object-cover w-full h-full rounded-lg"
        />
      </section>
      <section className="text-pretty mt-5 w-full space-y-2">
        <h1 className="font-bold text-2xl">About Me</h1>
        <p className="text-pretty text-[15px]">
          Hey, I'm Armaan Mishra, a software engineer based in India. Coding and
          technology have been my passions since childhood.
        </p>

        <p className="text-pretty text-[15px]">
          My primary tech stack includes Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-pretty text-[15px]">
          Apart from coding, I enjoy enjoy watching movies, anime and music.
        </p>
        <p className="text-pretty text-[15px] pb-3">
          I'm always seeking new challenges and opportunities to grow. If you're
          interested in collaborating, feel free to reach out.
        </p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"mailto:armaanmishra48@gmail.com"}
          className="text-sm font-semibold tracking-wide"
        >
          mail:{" "}
          <span className="text-sky-500 hover:text-sky-400 underline underline-offset-2">
            armaanmishra48@gmail.com
          </span>
        </Link>
      </section>
      <section id="skills" className="space-y-3 text-pretty mt-5 w-full">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-row flex-wrap items-center justify-start gap-2 max-w-prose text-foreground/90 text-[15px]">
          {skillIcons.map((skill) => (
            <p key={skill.name}>{skill.name}</p>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
