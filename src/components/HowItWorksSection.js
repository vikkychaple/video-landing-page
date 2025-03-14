import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaUserPlus, FaSearch, FaPlayCircle } from "react-icons/fa";

const steps = [
  { id: 1, icon: <FaUserPlus />, title: "Sign Up", description: "Create a free account to access Nailib videos." },
  { id: 2, icon: <FaSearch />, title: "Browse Topics", description: "Explore a wide range of IB subjects and topics." },
  { id: 3, icon: <FaPlayCircle />, title: "Start Learning", description: "Watch videos and improve your understanding." },
];

const HowItWorksSection = () => {
  const stepRefs = useRef([]);

  useEffect(() => {
    gsap.from(stepRefs.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={step.id} ref={(el) => (stepRefs.current[index] = el)} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
