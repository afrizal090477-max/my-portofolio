'use client';

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
      className="relative w-full overflow-x-clip bg-white"
      style={{ height: fluidStyles.heroHeight }}
    >
      <div
        className="absolute inset-x-0 top-0 overflow-hidden bg-purple-950"
        style={{ height: fluidStyles.purpleHeight }}
      >
        <HeroRings />
        <h1
          id="hero-title"
          className="absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-center font-extrabold leading-[1.3] tracking-[-0.02em] text-gray-25 top-[clamp(100px,10vw,144px)] text-[clamp(34px,10.42vw,150px)]"
        >
          {HERO_NAME}
        </h1>
        <div
          className="absolute left-1/2 z-30 -translate-x-1/2"
          style={{
            top: fluidStyles.photoTop,
            width: fluidStyles.photoSize,
            height: fluidStyles.photoSize,
            marginLeft: fluidStyles.photoOffset,
          }}
        >
          <Image
            src="/images/hero/photoku.png"
            alt="Afrizal Yakub"
            width={763}
            height={763}
            loading="eager"
            priority
            sizes="(min-width: 1440px) 763px, (min-width: 393px) calc(296.75px + 32.38vw), 400px"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="absolute left-1/2 top-0 h-full w-full max-w-[1440px] -translate-x-1/2">
          <div
            className="absolute z-20 rotate-[6.73deg] min-[1200px]:rotate-[4deg] desktop:rotate-[3.15deg]"
            style={{
              left: fluidStyles.ratingLeft,
              top: fluidStyles.ratingTop,
              width: fluidStyles.ratingWidth,
              height: fluidStyles.ratingHeight,
            }}
          >
            <HeroStatCard
              variant="rating"
              value={heroStats.rating.value}
              description={heroStats.rating.description}
            />
          </div>

          <div
            className="absolute z-20 rotate-[-10.09deg] min-[1200px]:rotate-[-5deg] desktop:rotate-[-3.24deg]"
            style={{
              left: fluidStyles.roleLeft,
              top: fluidStyles.roleTop,
              width: fluidStyles.roleWidth,
              height: fluidStyles.roleHeight,
            }}
          >
            <HeroStatCard
              variant="role"
              title={heroStats.role.title}
              subtitle={heroStats.role.subtitle}
            />
          </div>

          <div
            className="absolute z-20 rotate-[5.31deg]"
            style={{
              right: fluidStyles.clientsRight,
              top: fluidStyles.clientsTop,
              width: fluidStyles.clientsWidth,
              height: fluidStyles.clientsHeight,
            }}
          >
            <HeroStatCard
              variant="clients"
              value={heroStats.clients.value}
              title={heroStats.clients.title}
              avatars={heroAvatars}
            />
          </div>

        </div>
      </div>

      <HeroMarquee />
    </section>
  );
}

const fluidStyles = {
  heroHeight: "clamp(792px, calc(704.17px + 22.35vw), 1026px)",
  purpleHeight: "clamp(701px, calc(631.56px + 17.67vw), 886px)",
  photoSize: "clamp(390px, calc(296.75px + 32.38vw), 763px)",
  photoTop: "clamp(200px, calc(315.53px - 8.02vw), 284px)",
  photoOffset: "clamp(-33.5px, calc(2.26px - 2.48vw), -7.5px)",
  
  ratingLeft: "clamp(56px, calc(-17.086px + 22.9226vw), 313px)",
  ratingTop: "clamp(180px, calc(105.0487px + 20.3438vw), 398px)",
  ratingWidth: "clamp(132px, calc(122.9799px + 5.3486vw), 200px)",
  ratingHeight: "clamp(128px, calc(114.9799px + 5.3486vw), 192px)",
  
  roleLeft: "clamp(-16px, calc(-84.9398px + 21.6132vw), 226.29px)",
  roleTop: "clamp(472px, calc(418.6539px + 16.6275vw), 658.09px)",
  roleWidth: "clamp(150px, calc(122.0831px + 11.1748vw), 283px)",
  roleHeight: "clamp(78px, calc(70.9914px + 2.2923vw), 104px)",
  
  clientsRight: "clamp(-40px, calc(-146.5253px + 30.4136vw), 291.43px)",
  clientsTop: "clamp(434px, calc(394.2823px + 12.3964vw), 572.79px)",
  clientsWidth: "clamp(138px, calc(125.4785px + 5.7307vw), 208px)",
  clientsHeight: "clamp(128px, calc(114.9799px + 5.3486vw), 192px)",
};