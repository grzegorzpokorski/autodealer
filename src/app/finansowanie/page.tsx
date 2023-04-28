import { ContentPage } from "@/components/pages/ContentPage/ContentPage";

export const metadata = {
  title: "finansowanie",
};

export default function Page() {
  return (
    <ContentPage
      title="Finansowanie"
      subtitle="Firma AutoDealer oferuje kompleksową obsługę finansowania zakupionych pojazdów w firmie jak i z własnego źródła zarówno w kredycie jak i leasingu."
      content={
        <>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            pariatur, doloribus perspiciatis similique aspernatur commodi,
            dolorem amet dolorum, vel, esse molestias minus exercitationem sit
            placeat ea dolores asperiores repellat corrupti!
          </p>
          <h2>Wspołpracujemny tylko z najlepszymi.</h2>
          <p>
            Pellentesque lorem libero, ultricies nec orci sed, ultrices laoreet
            orci. Phasellus enim odio, euismod eu cursus sit amet, porta sed
            metus. Maecenas sit amet tempus elit, vitae pulvinar nisl. Nunc
            accumsan elementum suscipit. Vivamus urna libero, rhoncus in neque
            congue, feugiat pretium mi. Vivamus sit amet massa elit. Mauris
            ultricies dictum ligula at tincidunt. Ut euismod metus mauris,
            elementum scelerisque turpis gravida at. Aenean tincidunt feugiat
            justo ac egestas.
          </p>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipisicing, elit.
            Consequatur accusantium optio aut omnis excepturi aspernatur fuga
            sequi quae vel, illo, ipsum sapiente, alias voluptate cupiditate
            reiciendis doloremque sint veritatis fugit.
          </blockquote>
          <p>
            Ut commodo laoreet dolor, eget vehicula ex euismod eu. Etiam a orci
            vel nibh pharetra sollicitudin vel a nulla. Quisque id blandit quam.
            Donec quis maximus augue. Quisque ut elit commodo, consectetur orci
            ut, rhoncus odio.
          </p>
        </>
      }
    />
  );
}
