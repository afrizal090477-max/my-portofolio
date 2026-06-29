export function HeroRings() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-1/2 z-0 flex -translate-x-1/2 items-center justify-center rounded-full bg-[#6600EB]/20 opacity-70"
      style={{
        top: fluidStyles.ringTop,
        width: fluidStyles.outerRingSize,
        height: fluidStyles.outerRingSize,
      }}
    >
      <div className="flex size-[78.524%] items-center justify-center rounded-full bg-[#6600EB]/40">
        <div className="flex size-[72.653%] items-center justify-center rounded-full bg-[#6600EB]/60">
          <div className="size-[62.351%] rounded-full bg-[#6600EB]/80" />
        </div>
      </div>
    </div>
  );
}

const fluidStyles = {
  ringTop: "clamp(242px, calc(283.26px - 2.865vw), 272px)",
  outerRingSize: "clamp(607px, calc(452.73px + 39.255vw), 1018px)",
};