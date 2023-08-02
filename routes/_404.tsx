import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <Layout>
        <div class="px-4 py-8 mx-auto bg-whitesmoke">
          <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
            <img
              class="my-6"
              src="/planet.svg"
              width="128"
              height="128"
              alt="APOD Project logo"
            />
            <h1 class="text-4xl font-bold">404 - Page not found</h1>
            <p class="my-4">
              The page you were looking for doesn't exist.
            </p>
            <a href="/" class="underline">Go back home</a>
          </div>
        </div>
      </Layout>
    </>
  );
}
