import { ComponentChildren } from "preact";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconPlanet from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/planet.tsx";
type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  const menus = [
    {
      title: "Documentation",
      children: [
        {
          name: "View on GitHub",
          href: "https://github.com/johfee/apod-project",
        },
        { name: "NASA Open APIs", href: "https://api.nasa.gov/" },
        { name: "APOD API", href: "https://github.com/nasa/apod-api" },
        { name: "My port of API", href: "https://github.com/johfee/apod-api" },
        {
          name: "NASA APOD Official",
          href: "https://apod.nasa.gov/apod/astropix.html",
        },
      ],
    },
    {
      title: "Links",
      children: [
        { name: "GitHub", href: "https://github.com/johfee" },
        {
          name: "NASA Socials",
          href: "https://www.nasa.gov/connect/social/index.html",
        },
        { name: "Made with Fresh Framework", href: "https://fresh.deno.dev" },
      ],
    },
  ];

  return (
    <div class=" flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm rounded-xl shadow-sm bg-[#f3f8ed] mt-4">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <IconPlanet class="inline-block" aria-hidden="true" />
          <div class="font-bold text-2xl">
            APOD Project
          </div>
        </div>
        <div class="text-gray-500 italic">
          Stunning celestial snapshots.
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Developed by Filip Humbal<br />
          Open Source on GitHub
        </div>

        <a
          href="https://github.com/johfee"
          class="inline-block hover:text-black"
          aria-label="GitHub"
        >
          <BrandGithub aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
