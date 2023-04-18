import { Container } from "@/components/atoms/Container/Container";

export const SectionWithCounters = () => {
  return (
    <section aria-labelledby="" className="-mt-8">
      <Container>
        <h2 className="sr-only">Kilka naszych zalet</h2>
        <ul className="list-none flex flex-col lg:flex-row text-center md:text-start text-white">
          <li className="flex-1 bg-primary-dark">
            <article className="p-8 flex flex-col lg:flex-row gap-4 items-center min-h-full">
              <span className="font-bold text-5xl">21</span>
              <p className="text-xl">lat doświadczenia w branży</p>
            </article>
          </li>
          <li className="flex-1 bg-primary">
            <article className="p-8 flex flex-col lg:flex-row gap-4 items-center min-h-full">
              <span className="font-bold text-5xl">+480</span>
              <p className="text-xl">zadowolonych klientów</p>
            </article>
          </li>
          <li className="flex-1 bg-primary-light">
            <article className="p-8 flex flex-col lg:flex-row gap-4 items-center min-h-full">
              <span className="font-bold text-5xl">24</span>
              <p className="text-xl">
                nawet do 24 miesięcy dodatkowej gwarancji
              </p>
            </article>
          </li>
        </ul>
      </Container>
    </section>
  );
};
