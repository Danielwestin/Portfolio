import { useEffect } from "react";
import { IntroAnimation } from "../../../library/animation";

export default function IntroScreen() {
  useEffect(() => {
    IntroAnimation();
  }, []);
  return (
    <main className="introScreen-wrapper">
      <div className="introScreen-wrapper__column"></div>
      <div className="introScreen-wrapper__column"></div>
      <div className="introScreen-wrapper__column"></div>
      <h1 data-text="I'm Daniel." className="introScreen-wrapper--h1">
        Hi.
      </h1>
    </main>
  );
}
