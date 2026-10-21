import { useState } from "react";
import ScrollExpand from "./components/ScrollExpand";
import Chapter01 from "./components/Chapter01";

const App = () => {
  const [showChapter01, setShowChapter01] = useState(false);

  return (
    <main className="w-full overflow-x-clip bg-[#100e0c]">
      <ScrollExpand
        src="src/assets/images/1st_img.jpg"
        alt="Wedding celebration"
        title=""
        scrollHint="Scroll to begin ↓"
        useWindowScroll
        onComplete={() => setShowChapter01(true)}
      >
        <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center text-[#F8F1E5]">
          <p className="mb-6 text-xl text-[#D6B978]">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#E6D4C0]">
            A Celebration of Love
          </p>

          <h2 className="font-serif text-4xl tracking-wide sm:text-5xl md:text-7xl">
            Salman <span className="text-[#D6B978]">&</span> Ziya
          </h2>

          <p className="max-w-sm p-4 font-serif text-base leading-relaxed text-[#F8F1E5]/90 sm:text-lg">
            One beautiful beginning.
            <br />A lifetime of duas.
          </p>

          <p className="mt-8 text-sm tracking-[0.25em] text-[#D6B978]">
            20 · 10 · 2025
          </p>
        </div>
      </ScrollExpand>

      {showChapter01 && (
        <section className="relative min-h-screen w-full bg-white">
          <Chapter01 />
        </section>
      )}
    </main>
  );
};

export default App;
