import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Cat1 from "~/media/cat1.jpg?jsx";
import Cat2 from "~/media/cat2.jpg?jsx";

export default component$(() => {
  return (
    <>
      <Cat1 />
      <Cat2 />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
