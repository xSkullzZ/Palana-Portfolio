import * as React from "react";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import "./plasmic-init";
import ParticleHero from "./components/ParticleHero";
import ImageReveal from "./components/ImageReveal";
import HeroTopography from "./components/HeroTopography";
import AboutHorizontal from "./components/AboutHorizontal";
import AboutHorizontal2 from "./components/AboutHorizontal2";
import SiteHeader from "./components/SiteHeader";
import SkillsSection from "./components/SkillsSection";
import AiSys from "./components/AiSys";
import SiteFooter from "./components/SiteFooter";
import ContactFormCard from "./components/ContactFormCard";

registerComponent(ParticleHero, {
    name: "ParticleHero",
    importPath: "./components/ParticleHero",
    props: {
        children: { type: "slot" },
    },
});

registerComponent(ImageReveal, {
    name: "ImageReveal",
    importPath: "./components/ImageReveal",
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

registerComponent(AboutHorizontal, {
    name: "AboutHorizontal",
    importPath: "./components/AboutHorizontal",
    props: {
        className: "string",
    },
});

registerComponent(AboutHorizontal2, {
    name: "AboutHorizontal2",
    importPath: "./components/AboutHorizontal2",
    props: {
        className: "string",
    },
});

registerComponent(SiteHeader, {
    name: "SiteHeader",
    importPath: "./components/SiteHeader",
    props: {
        className: "string",
    },
});

registerComponent(SkillsSection, {
    name: "SkillsSection",
    importPath: "./components/SkillsSection",
    props: {
        className: "string",
    },
});

registerComponent(AiSys, {
    name: "AiSys",
    importPath: "./components/AiSys",
    props: {
        className: "string",
    },
});

registerComponent(SiteFooter, {
    name: "SiteFooter",
    importPath: "./components/SiteFooter",
    props: {
        className: "string",
    },
});

registerComponent(ContactFormCard, {
    name: "ContactFormCard",
    importPath: "./components/ContactFormCard",
    props: {
        className: "string",
    },
});

export default function PlasmicHost() {
    return <PlasmicCanvasHost />;
}
