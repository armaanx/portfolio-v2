type ProjectDetails = {
  title: string;
  description: string;
  techStack: string;
  links: {
    source: string;
    demo: string;
  };
  images: string[];
};

export const projectDetails: { [key: string]: ProjectDetails } = {
  grainify: {
    title: "Grainify",
    description:
      "Grainify is a web-based photo editor that allows you to add vintage effects to your photos. Initially designed to add grain to images, it has evolved into a comprehensive photo editor. Users can choose between monochrome and colored grain, and have access to over 40 filters that mimic the look of film and disposable cameras. Grainify can process images of any size with excellent performance, making it a versatile tool for adding a touch of nostalgia to your photos. I built this during buildspace nights and weekends s5.",
    techStack: "Next.js, Tailwind CSS, TypeScript, Web Workers",
    links: {
      source: "https://github.com/armaanx/grainify",
      demo: "https://grainify.vercel.app/",
    },
    images: [
      "/grainify1.png",
      "/grainify2.png",
      "/grainify3.png",
      "/grainify4.png",
    ],
  },
  "spotify-music-cards": {
    title: "Spotify Music Cards",
    description:
      "Spotify Music Cards is a tool that displays your top tracks and artists in an aesthetic format. Using the Spotify API, it fetches data and allows users to choose between three time ranges: week, month, and year. After review, Spotify granted an API Quota Extension for this project. Inspired by Receiptify, this was my first project that I built using Next.js.",
    techStack: "Next.js, TypeScript, Tailwind CSS, Next Auth, Spotify Web API",
    links: {
      source: "https://github.com/armaanx/spotify-top-ten",
      demo: "https://music-card-generator.vercel.app/",
    },
    images: ["/smc1.png", "/smc2.png", "/smc3.png"],
  },

  passprotect: {
    title: "PassProtect",
    description:
      "PassProtect is a cloud-based password manager with advanced features and robust encryption. Users can add, delete, and manage their passwords securely. All passwords are encrypted on the client side using 256-bit AES encryption, ensuring maximum security. PassProtect also includes a random password generator that creates strong, random passwords based on user preferences, making it easy to enhance your online security.",
    techStack: "React.js, JavaScript, Firebase",
    links: {
      source: "https://github.com/armaanx/passprotect",
      demo: "https://passprotect.netlify.app/",
    },
    images: ["/pp1.png", "/pp2.png", "/pp3.png"],
  },
  "cat-albums": {
    title: "Cat Albums",
    description:
      "Cat Albums is a whimsical tool that generates images of cats holding your favorite album covers. By utilizing the LastFM API to fetch album data, Cat Albums presents this information in a visually appealing and delightful manner. Inspired by popular websites featuring Kanye West or Chandler Bing holding album covers, I wanted to learn how such sites are built, so I created this tool to bring a touch of fun and creativity to music lovers everywhere.",
    techStack: "Next.js, TypeScript, HTML Canvas, LastFM API",
    links: {
      source: "https://github.com/armaanx/cat-albums-v2",
      demo: "https://cat-albums.vercel.app/",
    },
    images: ["/c1.png", "/c2.png", "/c3.png", "/c4.png"],
  },
};
