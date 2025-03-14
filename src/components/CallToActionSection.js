import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CallToActionSection = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.from(ctaRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="cta-section" ref={ctaRef}>
      <h2>Start Learning with Nailib Today!</h2>
      <p>Get instant access to high-quality IB study videos and boost your performance.</p>
      <div className="cta-buttons">
        <button className="cta-primary">Try for Free</button>
        <button className="cta-secondary">Learn More</button>
      </div>
    </section>
  );
};

export default CallToActionSection;
