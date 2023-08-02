import IconInfoSquareRounded from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/info-square-rounded.tsx"
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";
import IconMoonStars from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/moon-stars.tsx"
import IconHourglass from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/hourglass.tsx"

export default function Features() {
  const featureItems = [
    {
      icon: IconMoonStars,
      description:
      "Experience a new breathtaking astronomical picture every day, showcasing the beauty and wonders of the universe.",
      link: "#",
    },
    {
      icon: IconHourglass,
      description:
      "Embark on a journey through time by randomly discovering historic and awe-inspiring astronomical images published on that specific day.",
      link: "#",
    },
    {
      icon: IconInfoSquareRounded,
      description: "Gain deeper insights into the celestial objects and phenomena with expertly crafted explanations accompanying each astronomical picture.",
    },
  ];

  return (
    <div class="flex flex-col md:flex-row gap-8 bg-[#f3f8ed] p-8 mt-4 rounded-xl shadow-md">
      {featureItems.map((item) => {
        return (
          <div class="flex-1 space-y-2">
            <div class="bg-[#479f9d] inline-block p-3 rounded-xl text-white">
              <item.icon class="w-10 h-10" aria-hidden="true" />
            </div>
            <p class="text-xl">
              {item.description}
            </p>

            {item.link &&
              (
                <a class="block" href={item.link}>
                  <p class="text-[#397473] font-semibold cursor-pointer hover:underline inline-flex items-center group">
                    Read More{" "}
                    <IconChevronRight
                      class="inline-block w-5 h-5 transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                </a>
              )}
          </div>
        );
      })}
    </div>
  );
}
