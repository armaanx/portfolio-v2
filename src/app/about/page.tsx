import { skillIcons } from "@/lib/skill-names";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto pt-14 pb-14 flex flex-col gap-4 justify-center px-5 ">
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
};

export default Page;
