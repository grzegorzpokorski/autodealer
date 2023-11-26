import { LinkAsButton } from "@/components/blocks/LinkAsButton/LinkAsButton";
import { Slider } from "@/components/blocks/Slider/Slider";
import { ShadowBox } from "@/components/blocks/ShadowBox/ShadowBox";
import { PricesList } from "@/components/blocks/PricesList/PricesList";
import { FeaturesTable } from "@/components/blocks/FeaturesTable/FeaturesTable";
import type { OfferContentFragment } from "@/generated/graphql";
import { getPlaiceholderImage } from "@/lib/plaiceholderImage";

type Props = {
  offer: OfferContentFragment;
};

export const SingleOffer = async ({ offer }: Props) => {
  const images = await Promise.all(
    offer.gallery.map(async (image) => {
      const { base64 } = await getPlaiceholderImage(image.thumbnail);
      return {
        ...image,
        plaiceholder: base64,
      };
    }),
  );

  return (
    <article className="grid grid-cols-12 gap-3 md:gap-6 py-8">
      {images.length > 0 && (
        <div className="col-span-12">
          <Slider images={images} />
        </div>
      )}
      <div className="col-span-12 md:col-span-7 flex flex-col gap-3 md:gap-6 order-2 md:order-1">
        <ShadowBox variant="white">
          <div className="prose max-w-none flex flex-col gap-4">
            <ShadowBox.Header as="h1" id="title">
              {offer.title}
            </ShadowBox.Header>
            <section aria-labelledby="parametry">
              <ShadowBox.Header as="h2" id="parametry" hidden>
                Parametry
              </ShadowBox.Header>
              {offer.features && <FeaturesTable features={offer.features} />}
            </section>
          </div>
        </ShadowBox>
        {offer.description && (
          <ShadowBox variant="white">
            <section className="flex flex-col gap-4" aria-labelledby="opis">
              <ShadowBox.Header as="h2" id="opis">
                Opis samochodu
              </ShadowBox.Header>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: offer.description?.html,
                }}
              />
            </section>
          </ShadowBox>
        )}
      </div>
      <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-6 order-1 md:order-2">
        <div className="sticky top-6">
          <ShadowBox variant="primary-dark">
            <section
              className="flex flex-col gap-8"
              aria-labelledby="cena-i-kontakt"
            >
              <ShadowBox.Header as="h2" id="cena-i-kontakt" hidden>
                Cena, dane kontakowe
              </ShadowBox.Header>
              <PricesList invoice={offer.invoice} price={offer.price} />
              <div className="flex flex-row flex-wrap justify-center gap-2">
                {offer.sold ? (
                  <p className="inline-flex border-2 text-center items-center justify-center gap-1.5 bg-white text-gray-800 border-white px-5 py-2 text-base font-bold rounded flex-1 transition-colors motion-reduce:transition-none">
                    sprzedany
                  </p>
                ) : (
                  <LinkAsButton
                    href="tel:+48123456789"
                    linkStyle="contact"
                    aria-label="Zadźwoń: +48123456789"
                  >
                    <span className="font-bold">Zadźwoń: </span>
                    +48 123 456 789
                  </LinkAsButton>
                )}
              </div>
            </section>
          </ShadowBox>
        </div>
      </div>
    </article>
  );
};
