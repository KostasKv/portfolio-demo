import "./globals.css";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { body } from "./page.module.css";

const Satoshi = localFont({ src: "./Satoshi-Variable.ttf" });

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Designer/Dev Portfolio",
  description: "Portfolio demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <meta charset="UTF-8" /> */}
        {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        {/* <link rel="stylesheet" href="./style.css" /> */}

        {/* <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" /> */}

        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"
          integrity="sha512-cOH8ndwGgPo+K7pTvMrqYbmI8u8k6Sho3js0gOqVWTmQMlLIi6TbqGWRTpf1ga8ci9H3iPsvDLr4X7xwhC/+DQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"></script> */}

        {/* imagesLoaded event */}
        {/* <script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js"></script> */}

        {/* Masonry layout */}
        {/* <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script> */}

        {/* <script src="./script.js" type="module"></script> */}
      </head>
      <body className={Satoshi.className}>{children}</body>
    </html>
  );
}
