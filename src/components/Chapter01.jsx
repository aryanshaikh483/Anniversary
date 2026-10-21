import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const slides = [
  {
    image: "src/assets/images/chp1_img1.jpg",
    alt: "The beginning of the wedding story",
    eyebrow: "A day to remember",
    title: "A Beautiful Beginning",
    description: "Some days become memories before they even end.",
  },
  {
    image: "src/assets/images/chp1_img2.jpg",
    alt: "The couple sharing a special moment",
    eyebrow: "Two hearts, one journey",
    title: "A Moment, Forever",
    description: "In a world full of fleeting moments, some stay with us forever.",
  },
  {
    image: "src/assets/images/chp1_img3.jpg",
    alt: "The details that made the wedding special",
    eyebrow: "Every detail tells a story",
    title: "The Beauty Between Moments",
    description: "The little things, the quiet glances, the memories no photograph can fully capture.",
  },
  {
    image: "src/assets/images/chp1_img4.jpg",
    alt: "The joy of the wedding celebration",
    eyebrow: "A celebration of love",
    title: "Surrounded by Love",
    description: "Countless blessings, and a day filled with happiness.",
  },
  {
    image: "src/assets/images/chp1_img5.jpg",
    alt: "A tender moment between the couple",
    eyebrow: "Beyond the photographs",
    title: "A Promise Without End",
    description: "Not just a moment to cherish, but a promise to carry into every tomorrow.",
  },
  {
    image: "src/assets/images/chp1_img6.jpg",
    alt: "The beginning of a shared future",
    title: "Wishing you both a very happy anniversary!",
    description: "May your love grow stronger with every passing year.",
  },
];

const Chapter01 = () => {
  return (
    <section className="bg-[#100e0c] px-4 py-24 text-[#F8F1E5] sm:px-8">
      <header className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#D6B978]">
          Chapter One
        </p>

        <h2 className="font-serif text-4xl sm:text-6xl">
          The Beginning
        </h2>

        <p className="mt-5 text-sm leading-7 text-[#F8F1E5]/65 sm:text-base">
          Every beautiful story begins with a moment worth remembering.
        </p>
      </header>

      <ScrollStack
        useWindowScroll
        itemDistance={100}
        itemStackDistance={24}
        stackPosition="15%"
        baseScale={0.9}
        itemScale={0.04}
        dimAmount={0.12}
        blurAmount={0}
        className="mx-auto max-w-5xl"
      >
        {slides.map((slide, index) => (
          <ScrollStackItem
            key={slide.image}
            itemClassName="!h-[65vh] !overflow-hidden !rounded-[24px] !p-0 !bg-[#201a14]"
          >
            <article className="group relative h-full w-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#D6B978] sm:text-xs">
                  {slide.eyebrow}
                </p>

                <h3 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-5xl md:text-6xl">
                  {slide.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  {slide.description}
                </p>
              </div>
            </article>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      <footer className="mx-auto mt-16 max-w-2xl text-center">
        <div className="mx-auto mb-6 h-px w-16 bg-[#D6B978]/60" />

        <p className="font-serif text-xl italic text-[#D6B978] sm:text-2xl">
          The story is only just beginning.
        </p>

        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#F8F1E5]/45">
          With love, always
        </p>
      </footer>
    </section>
  );
};

export default Chapter01;