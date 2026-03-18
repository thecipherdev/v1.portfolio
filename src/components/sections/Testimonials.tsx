import MarqueeRow from '@components/common/MarqueeRow';

import type { Recommendationn } from '@/types/testimonials.types';
import { testimonials as testimonialsData } from '@mock/testimonials';

import SectionLabel from '../common/SectionLabel';

interface TestimonialCard {
  card: Recommendationn;
}

function TestimonialCard({ card }: TestimonialCard) {
  return (
    <div className="w-[280px] shrink-0 rounded-lg border border-[rgba(0,0,0,0,0.06)] bg-canvas-elevated p-5">
      <p className="font-dm-sans text-[13px] italic leading-relaxed text-text-secondary line-clamp-5">
        {card.quote}
      </p>
      <div className="mt-4 flex items-center gap-2.5">
        <div
          className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-medium text-canvas-elevated"
          style={{ backgroundColor: card.avatarColor }}
        >
          {card.authorName.charAt(0)}
        </div>
        <div>
          <p className="font-dm-sans font-medium text-text-primary">
            {card.authorName}
          </p>
          <p className="font-dm-mono text-[10px] text-text-tertiary">
            {card.authorRole}, {card.authorCompany}
          </p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const { heading, testimonials } = testimonialsData;

  return (
    <section id="testimonials" className="py-16">
      <div className="mx-auto px-6 max-w-[900px]">
        <SectionLabel label="testimonials" />
        <h2 className="mb-10 font-syne text-2xl font-extrabold text-text-primary sm:text-3xl">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-border-subtle pb-4 max-w-[900px] mx-auto px-6">
        <div className="font-dm-mono text-text-secondary">
          <div className="text-text-tertiary">Recommendations</div>
          <div className="text-text-primary text-2xl">
            {testimonials.length}
          </div>
        </div>

        <div className="font-dm-mono text-text-secondary">
          <div className="text-text-tertiary">Would work again</div>
          <div className="text-text-primary text-2xl">100%</div>
        </div>
      </div>

      <div className="space-y-4 pt-12">
        <MarqueeRow>
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} card={t} />
          ))}
        </MarqueeRow>
      </div>
    </section>
  );
}

export default Testimonials;
