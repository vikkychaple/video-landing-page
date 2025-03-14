
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(textRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <video autoPlay muted loop className="hero-video">
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content" ref={textRef}>
        <h1>Unlock the Power of IB Learning with Nailib</h1>
        <p>Watch high-quality videos, master IB concepts, and ace your exams.</p>
        <div className="hero-buttons" ref={buttonRef}>
          <button className="hero-primary">Get Started</button>
          <button className="hero-secondary">Watch Demo</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
