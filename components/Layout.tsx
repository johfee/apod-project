import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/all.css" />
        <link rel="icon" type="image/x-icon" href="/planet.svg"></link>
      </Head>
      <div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 pb-6 bg-[#e6e8d2] shadow-sm py-4">
        {props.children}
      </div>
    </>
  );
}
