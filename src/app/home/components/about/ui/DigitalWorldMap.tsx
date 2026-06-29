import Image from "next/image";

import { CountryMarker } from "@/app/home/components/about/ui/CountryMarker";
import { digitalProductsData } from "@/constant/about-data";
import { cn } from "@/lib/utils";

type DigitalWorldMapVariant = "desktop" | "mobile";

type Country = (typeof digitalProductsData.countryMarkers)[number]["country"];

interface DigitalWorldMapProps {
  variant: DigitalWorldMapVariant;
}

const mapFrameClasses: Record<DigitalWorldMapVariant, string> = {
  desktop: cn("left-[30.779%] top-0", "h-[104.051%] w-[83.985%]"),
  mobile: cn("left-[-4.986%] top-[11.062%]", "h-[81.195%] w-[101.108%]"),
};
const markerClasses: Record<DigitalWorldMapVariant, Record<Country, string>> = {
  desktop: {
    germany: "left-[12.165%] top-[32.603%]",
    "united-states": "left-[60.827%] top-[26.034%]",
    indonesia: "left-[67.823%] top-[59.124%]",
  },

  mobile: {
    germany: "left-[54.795%] top-[22.343%]",
    "united-states": "left-[80.822%] top-[43.052%]",
    indonesia: "left-[75.616%] top-[79.564%]",
  },
};

export function DigitalWorldMap({ variant }: DigitalWorldMapProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-0",
        mapFrameClasses[variant],
      )}
    >
      <Image
        src={digitalProductsData.mapImage}
        alt=""
        fill
        priority
        sizes={variant === "desktop" ? "658px" : "365px"}
        className="object-fill opacity-[0.28]"
      />

      {digitalProductsData.countryMarkers.map((marker) => (
        <CountryMarker
          key={marker.country}
          country={marker.country}
          label={marker.label}
          className={cn("z-10", markerClasses[variant][marker.country])}
        />
      ))}
    </div>
  );
}
