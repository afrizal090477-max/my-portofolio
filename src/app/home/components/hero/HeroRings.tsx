export function HeroRings() {
  return (
    <div
      aria-hidden="true"
      className={[
        "absolute left-1/2 top-[272px] z-0",
        "flex size-[607px] -translate-x-1/2 items-center justify-center",
        "rounded-full bg-[#6600EB]/20 opacity-70",
        "desktop:top-[242px] desktop:size-[1018px]",
      ].join(" ")}
    >
      <div
        className={[
          "flex size-[476.64px] items-center justify-center",
          "rounded-full bg-[#6600EB]/40",
          "desktop:size-[799.37px]",
        ].join(" ")}
      >
        <div
          className={[
            "flex size-[346.28px] items-center justify-center",
            "rounded-full bg-[#6600EB]/60",
            "desktop:size-[580.74px]",
          ].join(" ")}
        >
          <div
            className={[
              "size-[215.91px] rounded-full bg-[#6600EB]/80",
              "desktop:size-[362.11px]",
            ].join(" ")}
          />
        </div>
      </div>
    </div>
  );
}