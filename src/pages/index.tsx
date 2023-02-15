import { Inter } from "@next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Landing from "../components/Landing";
import Section2 from "../components/Section2";
import Section3 from "../components/section3/Section3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="">
      <Landing />
    </main>
  );
}
