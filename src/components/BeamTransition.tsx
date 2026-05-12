import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Sweeps a lighthouse beam across the screen on every route change. */
export function BeamTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [key, setKey] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setKey((k) => k + 1);
    setShow(true);
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!show) return null;
  return <div key={key} className="beam-overlay" aria-hidden="true" />;
}
