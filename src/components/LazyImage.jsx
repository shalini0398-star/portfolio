import { useState } from "react";

// Native lazy loading + explicit size (prevents layout shift) + fade-in when loaded
export default function LazyImage({ src, alt, width, height, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`lazy-img ${loaded ? "loaded" : ""} ${className}`}
    />
  );
}
