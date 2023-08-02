import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 shadow-sm rounded-xl text-white"
      style="background-image: url('/gallery/w.png');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">
          Astronomic Picture of the Day
        </h1>
        <p class="text-xl max-w-lg text-white">
          Discover the cosmos through an enchanting gallery of astronomic
          pictures.
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-2">
        <a
          href="/apod"
          class="block mt-4 transition-colors cursor-pointer inline-flex items-center group text-[#319795] bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          Explore{" "}
        </a>
        <a
          href="https://github.com/johfee/apod-project"
          class="block mt-4 transition-colors text-[#319795] cursor-pointer inline-flex items-center group px-4 py-2 bg-white px-8 py-2 rounded-md"
        >
          View on GitHub{" "}
          <IconChevronRight
            class="inline-block w-5 h-5 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
