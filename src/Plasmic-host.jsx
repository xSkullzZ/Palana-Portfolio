import * as React from "react";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import ParticleHero from "./components/ParticleHero";
import ProjectReveal from "./components/ProjectReveal";
import HeroTopography from "./components/HeroTopography";


registerComponent(ParticleHero, {
    name: "ParticleHero",
    importPath: "./components/ParticleHero",
    props: {
        children: { type: "slot" },
    },
});

registerComponent(ProjectReveal, {
    name: "ProjectReveal",
    importPath: "./components/ProjectReveal",
    props: {
        children: { type: "slot" },
    }
});

registerComponent(HeroTopography, {
    name: "HeroTopography",
    importPath: "./components/HeroTopography",
    props: {
        className: "string",
    },
});

export default function PlasmicHost() {
    return <PlasmicCanvasHost />;
}
