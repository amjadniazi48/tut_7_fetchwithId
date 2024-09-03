import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import CarouselComp from "@/components/CarouselComp";
import BlogComp from "@/components/BlogComp";
import TeamComp from "@/components/TeamComp";

import AchievementComp from "@/components/AchievementComp";
import IntroComp from "@/components/IntroComp";
import HeroComp from "@/components/HeroComp";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
    <div className='col bg-body-tertiary'>
      <div class="card mb-3 shadow-sm " >
        <div class="row g-0">
          <div class="col-md-6">
            <CarouselComp />
          </div>
          <div class="col-md-6 mt-5">
            <HeroComp />
          </div>
        </div>
      </div>
    </div>
    <div class="container marketing">
      <IntroComp />
      <hr class="featurette-divider" />
      <BlogComp />
      <TeamComp />
      <hr class="featurette-divider" />
      <AchievementComp />
      <hr class="featurette-divider" />

    </div>
  </main>
    
  );
}
