import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

/* ---------- Fade In on Scroll ---------- */
export function FadeIn({ children, delay = 0, duration = 800 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(30px)",
    config: { duration },
    delay,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
}

/* ---------- Slide In from Left ---------- */
export function SlideInLeft({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(-50px)",
    config: { tension: 280, friction: 60 },
    delay,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
}

/* ---------- Slide In from Right ---------- */
export function SlideInRight({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(50px)",
    config: { tension: 280, friction: 60 },
    delay,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
}

/* ---------- Scale In ---------- */
export function ScaleIn({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.8)",
    config: { tension: 280, friction: 60 },
    delay,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
}

/* ---------- Stagger Children Animation ---------- */
export function StaggerChildren({ children, staggerDelay = 100 }) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <FadeIn delay={index * staggerDelay}>{child}</FadeIn>
      ))}
    </>
  );
}
