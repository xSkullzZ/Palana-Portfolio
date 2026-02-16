import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";

const PlasmicHost = lazy(() => import("./Plasmic-host"));
const MyBeppe = lazy(() => import("./components/MyBeppe"));
const Versy = lazy(() => import("./components/Versy"));

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hashId = window.location.hash ? decodeURIComponent(window.location.hash.slice(1)) : "";

    const scrollToTop = () => window.scrollTo(0, 0);
    const scrollToHash = () => {
      if (!hashId) return;
      const target = document.getElementById(hashId);
      if (target) target.scrollIntoView({ behavior: "auto", block: "start" });
    };
    const tryScrollToHash = () => {
      if (!hashId) return;
      let attempts = 0;
      const maxAttempts = 24;
      const tick = () => {
        const target = document.getElementById(hashId);
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
        attempts += 1;
        if (attempts < maxAttempts) window.setTimeout(tick, 80);
      };
      tick();
    };

    const t1 = window.setTimeout(() => {
      if (hashId) tryScrollToHash();
      else scrollToTop();
    }, 0);
    const t2 = window.setTimeout(() => {
      if (hashId) scrollToHash();
      else scrollToTop();
    }, 120);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/plasmic-host"
        element={
          <Suspense fallback={null}>
            <PlasmicHost />
          </Suspense>
        }
      />
      <Route
        path="/project/my-beppe"
        element={
          <Suspense fallback={null}>
            <MyBeppe />
          </Suspense>
        }
      />
      <Route
        path="/project/versy"
        element={
          <Suspense fallback={null}>
            <Versy />
          </Suspense>
        }
      />
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
