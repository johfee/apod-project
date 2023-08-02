import { Handlers, PageProps } from "$fresh/server.ts";
import { APOD } from "../utils/apod.ts";
import Layout from "../components/Layout.tsx";
import Navbar from "../components/Navbar.tsx";
import IconCopyright from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/copyright.tsx";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

const HOMEPAGE = Deno.env.get("HOMEPAGE");

export const handler: Handlers<APOD | null> = {
  async GET(_, ctx) {
    const resp = await fetch(
      `${HOMEPAGE}`,
    );
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const image: APOD = await resp.json();
    return ctx.render(image);
  },
};

export default function APODPage({ data }: PageProps<APOD>) {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="/all.css" />
        <title>APOD | Today's picture</title>
      </Head>
      <Navbar active="/apod" />

      <div class="flex pb-2 items-center gap-2">
        <div class="lg:text-lg md:text-md">Astronomy Picture of the Day:</div>
        <div class="text-[#319795] lg:text-lg md:text-md underline">
          {data.date}
        </div>
      </div>
      <div class="font-bold italic text-2xl mb-2">{data.title}</div>
      <div>
        {data.copyright == null ? <p></p> : (
          <p>
            <div class="font-bold italic text-2xl">{data.title}</div>
            <div class="flex gap-2 font-normal not-italic pb-2">
              <div>Copyright</div>
              <IconCopyright class="w-4 h-4" />
              <div class="underline italic">{data.copyright}</div>
            </div>
          </p>
        )}
      </div>
      <img
        class="rounded-xl mb-4 mx-auto"
        src={data.url}
        alt={`Image of ${data.title}`}
      />
      <hr />
      <div class="text-lg mt-4">
        The explanation of the Astronomy Picture of the Day -
        <span class="italic font-bold text-[#319795]">{` ${data.title}`}</span>
      </div>
      <div class="my-4 bg-[#f5f0e8] p-4 rounded-md shadow-md leading-relaxed">
        {data.explanation}
      </div>
      <hr />
      <Footer children />
    </Layout>
  );
}
