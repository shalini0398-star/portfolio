import { Suspense, useEffect, useRef, useState } from "react";

// Renders its children (a React.lazy component) only when the section
// is about to scroll into view, so its JS chunk is downloaded on demand.
export default function LazySection({ id, children, minHeight = 420 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) { setShow(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); obs.disconnect(); } },
      { rootMargin: "300px 0px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id={id} ref={ref} style={{ minHeight: show ? undefined : minHeight }}>
      {show && (
        <Suspense fallback={<div className="section-loading" style={{ minHeight }}>Loading…</div>}>
          {children}
        </Suspense>
      )}
    </div>
  );
}
