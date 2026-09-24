"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import styles from "./ImageCarousel.module.css";

interface Slide {
  src: StaticImageData;
  alt: string;
}

/** Cross-fading image slideshow that advances automatically. */
export function ImageCarousel({ slides, intervalMs = 5000 }: { slides: Slide[]; intervalMs?: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div className={`photo ${styles.carousel}`}>
      {slides.map((slide, i) => (
        <Image
          key={slide.alt}
          src={slide.src}
          alt={slide.alt}
          className={i === active ? styles.visible : styles.hidden}
          aria-hidden={i !== active}
          priority={i === 0}
        />
      ))}
      <div className={styles.dots}>
        {slides.map((slide, i) => (
          <button
            key={slide.alt}
            type="button"
            aria-label={`Bild ${i + 1} anzeigen`}
            aria-current={i === active}
            className={i === active ? styles.dotActive : styles.dot}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
