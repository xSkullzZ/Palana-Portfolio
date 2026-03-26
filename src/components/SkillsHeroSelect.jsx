import { useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Skills from "./Skills";

// Helper: parallax leggero su mouse
function useParallax(strength = 18) {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const x = useSpring(mx, { stiffness: 120, damping: 20 });
    const y = useSpring(my, { stiffness: 120, damping: 20 });

    function onMove(e) {
        const r = e.currentTarget.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        mx.set(dx * strength);
        my.set(dy * strength);
    }

    function onLeave() {
        mx.set(0);
        my.set(0);
    }

    return { x, y, onMove, onLeave };
}


const ROLES = [
    {
        id: "designer",
        label: "THE DESIGNER",
        sub: ["UI craft", "Design systems", "Prototype → build"],
        accent: "from-cyan-400/25",
        // immagini: metti file tuoi in /public/roles/...
        // bg: "/roles/designer-bg.jpg",
        // fg: "/roles/designer-fg.png",
    },
    {
        id: "manager",
        label: "THE MANAGER",
        sub: ["Roadmaps", "Backlog & delivery", "Dev collaboration"],
        accent: "from-amber-400/25",
    },
    {
        id: "sound",
        label: "THE SOUND DESIGNER",
        sub: ["Sound design", "Music & tools", "Audio UX mindset"],
        accent: "from-violet-400/25",
    },
];

const hudLabels = {
    designer: ["THE DESIGNER", "UI & SYSTEMS"],
    manager: ["THE MANAGER", "PRODUCT LEADERSHIP"],
    sound: ["THE SOUND DESIGNER", "AUDIO & MUSIC"],
};



function RolePanel({ role, active, dimmed, onSelect }) {
    const { x, y, onMove, onLeave } = useParallax(22);

    return (
        <motion.button
            type="button"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            onClick={onSelect}
            className={[
                "relative h-full w-full overflow-hidden border border-white/10",
                "bg-black/40 backdrop-blur-sm",
                "transition-[filter] duration-300",
                dimmed ? "brightness-50" : "brightness-100",
                "flex flex-col justify-between p-6 md:p-8 text-left",
            ].join(" ")}
            style={{ outline: "none" }}
            initial={false}
            animate={{}}
        >
            {/* background cinematic */}
            <div className="absolute inset-0 opacity-80">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-t ${role.accent} to-transparent`} />
                <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_50%)]" />
            </div>

            {/* parallax “character layer” placeholder */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ x, y }}
            >
                {/* sostituisci con <img src=...> quando hai gli asset */}
                <div className="absolute -right-10 bottom-0 h-[80%] w-[60%] opacity-25 [background:radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),transparent_60%)]" />
                <div className="absolute right-6 bottom-6 h-24 w-24 rounded-full border border-white/15 opacity-40" />
            </motion.div>

            {/* top label */}
            <div className="relative z-10">
                <div className="text-xs tracking-[0.35em] text-white/60">CLASS</div>
                <motion.h3
                    className="mt-2 font-bold text-white leading-none tracking-[0.12em]"
                    initial={false}
                    animate={{ fontSize: active ? "2.2rem" : "1.5rem", opacity: active ? 1 : 0.9 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                    {role.label}
                </motion.h3>

                <div className="mt-4 space-y-1">
                    {role.sub.map((t) => (
                        <div key={t} className="text-sm text-white/70">
                            {t}
                        </div>
                    ))}
                </div>
            </div>

            {/* bottom CTA */}
            <div className="relative z-10 flex items-center justify-between">
                <div className="text-xs uppercase tracking-widest text-white/50">
                    {active ? "Selected" : "Select"}
                </div>
                <div className="h-[2px] w-24 bg-white/30 overflow-hidden">
                    <motion.div
                        className="h-full bg-white/70"
                        initial={false}
                        animate={{ scaleX: active ? 1 : 0 }}
                        style={{ transformOrigin: "0 50%" }}
                        transition={{ duration: 0.35 }}
                    />
                </div>
            </div>
        </motion.button>
    );
}

export default function SkillsHeroSelect() {
    const [active, setActive] = useState("designer");

    // “Loadout” mapping (weekend-friendly: semplice)
    const loadout = useMemo(() => {
        if (active === "sound") {
            return {
                title: "Loadout: Sound & Tools",
                hint: "Audio-first craft, plus UX mindset.",
            };
        }
        if (active === "manager") {
            return {
                title: "Loadout: Product Leadership",
                hint: "Delivery, alignment, decision-making with dev teams.",
            };
        }
        return {
            title: "Loadout: UI & Systems",
            hint: "Design systems, interaction, high-polish UI delivery.",
        };
    }, [active]);

    return (
        <section className="w-full h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden">
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-[1.15fr_1fr]">
                {/* LEFT: hero select */}
                <div className="h-full grid grid-rows-3">
                    {ROLES.map((r) => {
                        const isActive = r.id === active;
                        const dimmed = active && !isActive;
                        return (
                            <div key={r.id} className="border-b border-white/10 last:border-b-0">
                                <RolePanel
                                    role={r}
                                    active={isActive}
                                    dimmed={dimmed}
                                    onSelect={() => setActive(r.id)}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* RIGHT HUD – ROLE LABELS */}
                <div className="pointer-events-none absolute top-0 right-0 h-full flex items-center">
                    <div className="relative h-full flex items-center gap-10 pr-4">

                        {/* vertical line */}
                        <div className="hud-line h-[70%]" />

                        {/* labels */}
                        <div className="flex flex-col gap-16">
                            {hudLabels[active].map((label) => (
                                <span
                                    key={label}
                                    className="hud-text text-white/80"
                                    style={{
                                        writingMode: "vertical-rl",
                                        transform: "rotate(180deg)",
                                    }}
                                >
                                    {label}
                                </span>
                            ))}

                        </div>
                    </div>
                </div>


                {/* RIGHT: loadout (riusiamo il tuo Skills.jsx come base) */}
                <div className="h-full overflow-auto p-6 md:p-10">
                    <div className="mb-6">
                        <div className="text-xs tracking-[0.35em] text-white/60 uppercase">Skills</div>
                        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-white">{loadout.title}</h2>
                        <p className="mt-2 text-sm text-white/60">{loadout.hint}</p>
                    </div>

                    {/* Qui, per il weekend, mostriamo tutto (pulito).
              Step 2: filtriamo skillsData per role */}
                    <div className="rounded-xl border border-white/10 bg-white/5">
                        <Skills />
                    </div>

                    {/* Social proof micro (super utile anche qui) */}
                    <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs tracking-widest text-white/50 uppercase">Social proof</div>
                        <div className="mt-2 text-sm text-white/75">
                            “Hybrid product + UI profile: fast iteration, strong system thinking, dev-friendly handoff.”
                        </div>
                        <div className="mt-2 text-xs text-white/40">
                            (Replace with a real quote when you have one.)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
