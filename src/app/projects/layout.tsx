import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-2xl mx-auto pt-10 pb-10 flex flex-col justify-center px-5">
      <Link
        href={"/"}
        className="text-xs flex flex-row items-center justify-start text-muted-foreground hover:text-white"
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Back
      </Link>
      {children}
    </div>
  );
};

export default ProjectsLayout;
