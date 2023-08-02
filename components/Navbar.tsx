import IconPlanet from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/planet.tsx";

type Props = {
  active: string;
};

export default function Navbar({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Today's picture", href: "/apod" },
    { name: "Random Picture", href: "/random" },
  ];

  return (
    <div class="border-b-1 w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row items-center justify-center gap-4 mb-6 bg-[#f4ede4] rounded-xl shadow-md">
      <div class="flex items-center flex-1">
        <a href="/" class="flex items-center group">
          <IconPlanet
            class="group-hover:rotate-[-45deg] transition-all duration-500 ease-in-out"
            aria-hidden="true"
          />
          <div class="text-2xl ml-2 font-bold">
            APOD Project
          </div>
        </a>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li class="text-center">
            <a
              href={menu.href}
              class={"py-1 border-gray-500 hover:text-[#319795] md:text-sm lg:text-md text-xs" +
                (menu.href === active
                  ? " font-bold border-b-2 text-[#2c7a7b]"
                  : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
