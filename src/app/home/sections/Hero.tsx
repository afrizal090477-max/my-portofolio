import Image from "next/image";

import { HeroMarquee } from "@/app/home/components/hero/HeroMarquee";
import { HeroRings } from "@/app/home/components/hero/HeroRings";
import { HeroStatCard } from "@/app/home/components/hero/HeroStatCard";
import { HERO_NAME, heroAvatars, heroStats } from "@/constant/hero-data";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className={[
        "relative h-[757px] overflow-hidden bg-white",
        "desktop:h-[1026px]",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-x-0 top-0 h-[701px] overflow-hidden",
          "bg-purple-950",
          "desktop:h-[886px]",
        ].join(" ")}
      >
        <HeroRings />

        <h1
          id="hero-title"
          className={[
            "absolute left-1/2 top-[100px] z-10",
            "-translate-x-1/2 whitespace-nowrap",
            "text-[clamp(40px,10.4vw,150px)] font-extrabold",
            "leading-[1.3] text-gray-25",
            "desktop:top-[144px]",
          ].join(" ")}
        >
          {HERO_NAME}
        </h1>

        <div
          className={[
            "absolute left-1/2 top-[284px] z-20",
            "flex size-[424px] -translate-x-1/2",
            "-ml-[7.5px] items-end justify-center",
            "desktop:top-[200px] desktop:size-[763px]",
            "desktop:-ml-[33.5px]",
          ].join(" ")}
        >
          <Image
            src="/images/hero/photoku.png"
            alt="Afrizal Yakub"
            width={419}
            height={595}
            priority
            sizes="(min-width: 1440px) 763px, 424px"
            className="size-full object-cover object-top"
          />
        </div>

        <div
          className={[
            "absolute left-1/2 top-0 h-full w-[393px]",
            "-translate-x-1/2",
            "desktop:w-full desktop:max-w-[1440px]",
          ].join(" ")}
        >
         <div
  className={[
    "absolute left-[73px] top-[185px] z-20",
    "h-[136px] w-[144px]",
    "[--card-rotate:6.73deg]",
    "desktop:left-[313px] desktop:top-[398px]",
    "desktop:h-[192px] desktop:w-[200px]",
    "desktop:[--card-rotate:3.15deg]",
  ].join(" ")}
>
            <HeroStatCard
              variant="rating"
              value={heroStats.rating.value}
              description={heroStats.rating.description}
              delay={0.1}
            />
          </div>

          <div
  className={[
    "absolute left-0 top-[484px] z-40",
    "h-[80px] w-[166px]",
    "[--card-rotate:-10.09deg]",
    "desktop:left-[226.29px] desktop:top-[658.09px]",
    "desktop:h-[104px] desktop:w-[283px]",
    "desktop:[--card-rotate:-3.24deg]",
  ].join(" ")}
>
            <HeroStatCard
              variant="role"
              title={heroStats.role.title}
              subtitle={heroStats.role.subtitle}
              delay={0.2}
            />
          </div>

          <div
  className={[
    "absolute left-[272px] top-[443px] z-40",
    "h-[136px] w-[148px]",
    "[--card-rotate:5.31deg]",
    "desktop:left-[940.57px] desktop:top-[572.79px]",
    "desktop:h-[192px] desktop:w-[208px]",
  ].join(" ")}
>
            <HeroStatCard
              variant="clients"
              value={heroStats.clients.value}
              title={heroStats.clients.title}
              avatars={heroAvatars}
              delay={0.3}
            />
          </div>
        </div>
      </div>

      <HeroMarquee />
    </section>
  );
}
