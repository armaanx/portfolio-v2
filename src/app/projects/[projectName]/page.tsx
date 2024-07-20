/* eslint-disable @next/next/no-img-element */
"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { projectDetails } from "@/lib/projects";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { CodeXml, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectPage = ({ params }: { params: { projectName: string } }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { projectName } = params;
  const { title, description, techStack, links, images } =
    projectDetails[projectName];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="w-full mt-4 space-y-2 max-w-2xl px-2 md:px-0 flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-3xl font-bold pt-5 w-full">{title}</h1>
      <p className="text-xs text-muted-foreground pb-4 w-full">{techStack}</p>
      <Carousel
        setApi={setApi}
        className="max-w-[350px] md:max-w-2xl"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem className="" key={index}>
              <img
                className="h-full w-full aspect-video object-cover"
                src={image}
                alt=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="hidden md:inline-flex" />
        <CarouselNext className="hidden md:inline-flex" /> */}
      </Carousel>
      <div className="text-center text-xs md:text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
      <p className="text-sm tracking-wide text-pretty pt-3">{description}</p>
      <div className="flex flex-row justify-start items-center gap-3 pt-3">
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          href={links.demo}
          className={cn(
            buttonVariants({ size: "sm", variant: "outline" }),
            "text-xs"
          )}
        >
          Check it out
          <ExternalLink className="w-4 h-4 ml-2" />
        </Link>
        <Link
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          href={links.source}
          className={cn(
            buttonVariants({ size: "sm", variant: "outline" }),
            "text-xs"
          )}
        >
          View source
          <CodeXml className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </main>
  );
};

export default ProjectPage;
