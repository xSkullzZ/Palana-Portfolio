import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";

const PlasmicHost = lazy(() => import("./Plasmic-host"));
const MyBeppe = lazy(() => import("./components/MyBeppe"));
const Versy = lazy(() => import("./components/Versy"));

export default function App() {
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
