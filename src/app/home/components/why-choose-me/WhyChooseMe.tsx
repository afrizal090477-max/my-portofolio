import { WhyChooseMeTable } from "./WhyChooseMeTable";
import { Container } from "@/components/layouts/container";
import { whyChooseMeData } from "@/constant/why-choose-me-data";

export default function WhyChooseMe() {
  return (
    <section className="bg-[#F5F5F5] py-10 md:py-[80px]">
      <Container>
        <h2 className="mb-8 text-center text-[32px] font-bold tracking-[-0.02em] text-[#0A0D12] md:mb-12 md:text-[48px]">
          {whyChooseMeData.title}
        </h2>

        <div className="mx-auto w-full max-w-[1184px] rounded-2xl bg-white p-4 md:p-6">
          <WhyChooseMeTable />
        </div>
      </Container>
    </section>
  );
}