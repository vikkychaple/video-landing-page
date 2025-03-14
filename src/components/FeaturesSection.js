
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaVideo, FaBook, FaUsers, FaClock } from "react-icons/fa";

const features = [
  { id: 1, icon: <FaVideo />, title: "High-Quality Video Content", description: "Engaging and well-explained IB course videos." },
  { id: 2, icon: <FaBook />, title: "Comprehensive IB Resources", description: "Access past papers, question banks, and expert guides." },
  { id: 3, icon: <FaUsers />, title: "Expert Instructors", description: "Learn from top IB educators and professionals." },
  { id: 4, icon: <FaClock />, title: "Flexible Learning", description: "Watch anytime, anywhere at your own pace." },
];

const FeaturesSection = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    gsap.from(featureRefs.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="features">
      <h2 className="features-title">Why Choose Nailib Videos?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={feature.id} ref={(el) => (featureRefs.current[index] = el)} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
