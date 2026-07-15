import { useState, useEffect } from "react";
import Envelope from "./components/Envelope";
import Letter from "./components/Letter";
import ReasonCards from "./components/ReasonCards";
import ForgiveButton from "./components/ForgiveButton";
import Petals from "./components/Petals";

// ── EDIT THESE ────────────────────────────────────────────────
const HER_NAME = "Bhumiiiiii";
const YOUR_NAME = "Nishad";
const MESSAGE = `Hey Bhoomi,

Mujhe pata hai ki maine aaj jo kiya, woh galat tha. Main uske liye dil se mafi maag ta  hoon. Mujhe aisa bilkul nahi karna chahiye tha, aur main apni galti poori tarah maanta hoon.

Main bilkul nahi chahta ki meri is galti ki wajah se hum dono ke beech durawa aa jaye ya hum baat karna band kar dein. Aur sabse zyada main yeh nahi chahta ki tere dil mein mere liye koi buri memory na reh jaye ya tu mujhe judge kare.
Main bas itna chahta hoon ki hum dono jo bhi karein, saath mein karein. Hum ek dusre ko samjhein, support karein, aur ek dusre ko grow karte hue dekhein. Mujhe pata hai ki tu apni life mein successful hona chahti hai, aur main hamesha chahta hoon ki tu apne har sapne ko poora kare.

Ek baat aur... Jab tu chali gayi na, tab se main bas yahi soch raha tha ki maine yeh kya kar diya. Mujhe itna bura lag raha tha ki main apne Bhagwan se bhi nazar nahi mila paa raha tha. 

Please mujhe maaf kar dena, agar ho sake. Aur haan... yahi mera tareeka hai maafi maangne ka. ❤️
Sorry, Bhoomi.

**From your Nishuu... and who knows? ❤️**
`;
// ──────────────────────────────────────────────────────────────

export default function App() {
  const [letterVisible, setLetterVisible] = useState(false);

  useEffect(() => {
    if (letterVisible) {
      const timer = setTimeout(() => {
        const element = document.getElementById("letter-section");
        if (element) {
          const rect = element.getBoundingClientRect();
          const targetY = Math.max(0, rect.top + window.scrollY - 32); // scroll with a 32px gap
          const startY = window.scrollY;
          const difference = targetY - startY;
          const duration = 1400; // 1.4 seconds for a slow, premium transition
          let startTime = null;

          const animateScroll = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing: easeInOutCubic
            const ease = progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startY + difference * ease);

            if (progress < 1) {
              window.requestAnimationFrame(animateScroll);
            }
          };

          window.requestAnimationFrame(animateScroll);
        }
      }, 150); // slight delay to sync with the letter's slide-up animation
      return () => clearTimeout(timer);
    }
  }, [letterVisible]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Petals />
      <main className="relative z-10 flex flex-col items-center gap-24 sm:gap-32 px-4 py-16 sm:py-24">
        <section className="flex flex-col items-center text-center gap-6 pt-8">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm opacity-60">
            a small apology
          </p>
          <h1
            className="font-display text-4xl sm:text-6xl"
            style={{ color: "var(--wine)" }}
          >
            I'm sorry, {HER_NAME}.
          </h1>
          <Envelope
            herName={HER_NAME}
            onOpened={() => setLetterVisible(true)}
          />
        </section>

        <section id="letter-section" className="w-full">
          <Letter
            herName={HER_NAME}
            yourName={YOUR_NAME}
            message={MESSAGE}
            visible={letterVisible}
          />
        </section>

        {letterVisible && (
          <section className="w-full">
            <ReasonCards />
          </section>
        )}

        {letterVisible && (
          <section className="w-full">
            <ForgiveButton yourName={YOUR_NAME} />
          </section>
        )}
      </main>

      <footer className="relative z-10 text-center pb-10 text-xs opacity-50">
        made with a lot of love, and a little bit of code
      </footer>
    </div>
  );
}
