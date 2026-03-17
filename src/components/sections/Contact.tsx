import { contact } from '@mock/contact';

function Contact() {
  const { heading, description, email, cta } = contact;

  return (
    <section id="contact" className="border-t border-border-subtle py-16">
      <div className="mx-auto flex max-w-[900px] flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-syne text-[28px] font-extrabold leading-tight text-text-primary sm:text-[30px]">
            {heading}
          </h2>
          <p className="mt-2 font-dm-sans text-[14px] text-text-secondary">
            {description}
          </p>
          <p className="mt-3 font-dm-sans text-[12px] text-text-secondary">
            → {email}
          </p>
        </div>

        <a
          href={`mailto:${email}`}
          className="w-full rounded-sm bg-text-primary px-6 py-3 text-center font-dm-mono text-[11px] font-medium text-canvas transition-opacity hover:opacity-90 sm:w-auto"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}

export default Contact;
