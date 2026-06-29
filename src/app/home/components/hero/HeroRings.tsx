const fluidRingTop =
  "clamp(242px, calc(283.26px - 2.865vw), 272px)";

const fluidOuterRingSize =
  "clamp(607px, calc(452.73px + 39.255vw), 1018px)";

export function HeroRings() {
  return (
    <div
      aria-hidden="true"
      className={[
        "absolute left-1/2 z-0",
        "flex -translate-x-1/2",
        "items-center justify-center",
        "rounded-full",
        "bg-[#6600EB]/20 opacity-70",
      ].join(" ")}
      style={{
        top: fluidRingTop,
        width: fluidOuterRingSize,
        height: fluidOuterRingSize,
      }}
    >
      <div
        className={[
          "flex size-[78.524%]",
          "items-center justify-center",
          "rounded-full bg-[#6600EB]/40",
        ].join(" ")}
      >
        <div
          className={[
            "flex size-[72.653%]",
            "items-center justify-center",
            "rounded-full bg-[#6600EB]/60",
          ].join(" ")}
        >
          <div
            className={[
              "size-[62.351%]",
              "rounded-full bg-[#6600EB]/80",
            ].join(" ")}
          />
        </div>
      </div>
    </div>
  );
}
