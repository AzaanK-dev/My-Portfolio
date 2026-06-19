import { useEffect, useRef, useState } from "react";

// ── auto-play sequence ────────────────────────────────────────────────────────
const autoCommands = [
    { command: "who", output: ["Azaan Mehtab Khan — Developer"] },
    { command: "skills", output: ["React · Node.js · Express · MongoDB · Django"] },
    { command: "status", output: ["Available for Internships, Freelance & Full-time Roles"] },
    { command: "help", output: ['TYPE A COMMAND: about, skills, projects, contact, secret, clear'] },
];

// ── all commands the user can run ─────────────────────────────────────────────
const COMMANDS = {
    help: () => [
        "┌─ Available Commands ──────────────────────────┐",
        "│  about      Who is Azaan?                     │",
        "│  skills     Tech stack breakdown              │",
        "│  projects   Shipped projects                  │",
        "│  exp        Work experience                   │",
        "│  contact    Get in touch                      │",
        "│  status     Availability                      │",
        "│  secret         ???                           │",
        "│  clear      Clear the terminal                │",
        "└───────────────────────────────────────────────┘",
    ],
    about: () => [
        "Name    : Azaan Mehtab Khan",
        "Role    : Full Stack Developer",
        "Based   : Karachi, Pakistan",
        "Focus   : Building fast, scalable & beautiful apps",
        "Vibe    : Breaking bugs since day one ☕",
    ],
    skills: () => [
        "── Frontend ──────────────────────────",
        "  React.js · Next.js · Tailwind · HTML · CSS ",
        "── Backend ───────────────────────────",
        "  Node.js · Express.js · Django ",
        "── Database ──────────────────────────",
        "  MongoDB · SQLite · Firebase ",
        "── Programming ─────────────────────────────",
        "  Javascript · Python · C++ · Java · Typescript",
    ],
    projects: () => [
        "┌─ Projects ─────────────────────────── count: 8 ─┐",
        "│  01  SkillNest       — Profile builder          │",
        "│  02  ShopHub         — E-commerce platform      │",
        "│  03  Echoplay        — Youtube-style backend    │",
        "│  04  Aerocasta       — Weather dashboard        │",
        "│  05  Blogzaan        — Blogs website            │",
        "│  06  Java Banking    — Console app              │",
        "└─────────────────────────────────────────────────┘",
    ],
    exp: () => [
        "── Work Experience ───────────────────",
        "  🟣  Frontend Developer @ Naxasware",
        "      2026 – Present · Internship · Hybrid",
        "",
        "  🔵  Backend AI Intern @ Flyrank AI",
        "      2026 – Present · Internship · Remote",
    ],
    contact: () => [
        "── Let's Connect ─────────────────────",
        "  Email    : azaanmehtabk@gmail.com",
        "  GitHub   : github.com/AzaanK-dev",
        "  LinkedIn : linkedin.com/in/azaan-mehtab-khan-556a86369/",
        "",
        "  Or scroll down and hit the contact form 👇",
    ],
    status: () => [
        "  Open to Work",
        "  Freelance  →  Available Now",
        "  Full-time, Internships  →  Open to Offers",
        "  Remote / Hybrid preferred",
    ],
    secret: () => [
        "  💻 SYSTEM MESSAGE: CLASSIFIED ACCESS DENIED 💻",
        "\n",
        "  💀 You really thought I’d drop secrets here???",
        "  🤡 ERROR 404: Brain cells not found in request",
        "  🧠 Hint: There were never any secrets to begin with",
        "\n",
        "  🔍 Scanning user intentions...",
        "  📉 Result: 0% seriousness, 100% curiosity",
        "\n",
        "  DEV STATUS:",
        "  - 😴 Sleep:       ❌ not installed",
        "  - ☕ Chai:        ☑️ running at 300%",
        "  - 🐛 Bugs:        ☑️☑️☑️☑️ (they reproduce)",
        "  - 💡 Motivation:  ⚠️ deprecated",
        "\n",
        "  Type 'matrix' if you dare...",
    ],
    matrix: () => "__MATRIX__",
    clear: () => "__CLEAR__",
};

// matrix rain characters
const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

function MatrixRain({ onDone }) {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const cols = Math.floor(canvas.width / 14);
        const drops = Array(cols).fill(1);
        const interval = setInterval(() => {
            ctx.fillStyle = "rgba(12,7,24,0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#a855f7";
            ctx.font = "13px JetBrains Mono, monospace";
            drops.forEach((y, i) => {
                const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
                ctx.fillText(char, i * 14, y * 14);
                if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        }, 40);
        const timeout = setTimeout(() => { clearInterval(interval); onDone(); }, 4000);
        return () => { clearInterval(interval); clearTimeout(timeout); };
    }, [onDone]);
    return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
}

// ── component ─────────────────────────────────────────────────────────────────
export default function InteractiveTerminal() {
    const [lines, setLines] = useState([]);   // { type: 'cmd'|'out'|'err', text }
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [histIdx, setHistIdx] = useState(-1);
    const autoPlayed = useRef(false);
    const [autoDone, setAutoDone] = useState(false);

    const [matrix, setMatrix] = useState(false);
    const bodyRef = useRef(null);
    const inputRef = useRef(null);

    // scroll to bottom whenever lines change
    useEffect(() => {
        if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, [lines, matrix]);

    // auto-play sequence on mount
    useEffect(() => {
        if (autoPlayed.current) return;
        autoPlayed.current = true;

        let delay = 600;
        autoCommands.forEach(({ command, output }) => {
            // type command char by char
            for (let i = 1; i <= command.length; i++) {
                const partial = command.slice(0, i);
                setTimeout(() => {
                    setLines(prev => {
                        const next = prev.filter(l => l.type !== "__typing__");
                        return [...next, { type: "__typing__", text: partial }];
                    });
                }, delay);
                delay += 80;
            }
            // commit + show output
            delay += 400;
            setTimeout(() => {
                setLines(prev => {
                    const next = prev.filter(l => l.type !== "__typing__");
                    const cmdLine = { type: "cmd", text: command };
                    const outLines = output.map(t => ({ type: "out", text: t }));
                    return [...next, cmdLine, ...outLines, { type: "gap" }];
                });
            }, delay);
            delay += 900;
        });
        setTimeout(() => {
            setAutoDone(true);
        }, delay + 100);
    }, []);

    const runCommand = (raw) => {
        const cmd = raw.trim().toLowerCase();
        if (!cmd) return;

        setHistory(h => [cmd, ...h]);
        setHistIdx(-1);

        if (cmd === "clear") {
            setLines([]);
            setMatrix(false);
            return;
        }
        if (cmd === "matrix") {
            setLines(prev => [...prev, { type: "cmd", text: cmd }]);
            setMatrix(true);
            return;
        }

        const fn = COMMANDS[cmd];
        const output = fn ? fn() : null;

        if (output === "__CLEAR__") { setLines([]); return; }

        const outLines = fn
            ? (Array.isArray(output) ? output : [output]).map(t => ({ type: "out", text: t }))
            : [{ type: "err", text: `command not found: ${cmd} — type 'help' for options` }];

        setLines(prev => [
            ...prev,
            { type: "cmd", text: cmd },
            ...outLines,
            { type: "gap" },
        ]);
    };

    const handleKey = (e) => {
        if (e.key === "Enter") {
            runCommand(input);
            setInput("");
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            const idx = Math.min(histIdx + 1, history.length - 1);
            setHistIdx(idx);
            setInput(history[idx] ?? "");
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const idx = Math.max(histIdx - 1, -1);
            setHistIdx(idx);
            setInput(idx === -1 ? "" : history[idx]);
        }
    };

    return (
        <div
            onClick={() => inputRef.current?.focus()}
            style={{
                width: "100%",
                height: "100%",
                minHeight: "360px",
                maxHeight: "490px",
                background: "#0c0718",
                border: "1px solid #7c3aed",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 0 40px rgba(124,58,237,0.3)",
                fontFamily: "'JetBrains Mono', monospace",
                display: "flex",
                flexDirection: "column",
                cursor: "text",
            }}
        >
            {/* header */}
            <div style={{
                height: "45px", display: "flex", alignItems: "center",
                gap: "8px", padding: "0 16px", background: "#130b24", flexShrink: 0,
                justifyContent: "space-between",
            }}>
                <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56", display: "block" }} />
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e", display: "block" }} />
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f", display: "block" }} />
                </div>
                <span style={{ color: "#6b21a8", fontSize: "12px", letterSpacing: "0.05em" }}>azaan@portfolio ~ </span>
                <span style={{ width: 60 }} />

                <span style={{
                    fontSize: "11px",
                    color: "#a855f7",
                    letterSpacing: "0.05em",
                    transition: "opacity 0.6s ease",
                    animation: autoDone ? "blink 1.4s ease-in-out infinite" : "none",
                }}>
                    ▸ type a command
                </span>
            </div>

            {/* body */}
            <div
                ref={bodyRef}
                style={{
                    flex: 1, overflowY: "auto", padding: "18px 20px",
                    scrollbarWidth: "thin", scrollbarColor: "#3b0764 transparent",
                }}
            >
                {matrix ? (
                    <MatrixRain onDone={() => {
                        setMatrix(false);
                        setLines(prev => [...prev, { type: "out", text: "Matrix exited. Welcome back." }, { type: "gap" }]);
                    }} />
                ) : (
                    <>
                        {lines.map((line, i) => {
                            if (line.type === "gap") return <div key={i} style={{ height: "6px" }} />;
                            if (line.type === "__typing__") return (
                                <p key={i} style={{ margin: 0, color: "#fff", fontSize: "13px", lineHeight: "1.7" }}>
                                    <span style={{ color: "#a855f7" }}>$ </span>{line.text}
                                    <span style={{ color: "#a855f7", animation: "blink 1s infinite" }}>▌</span>
                                </p>
                            );
                            if (line.type === "cmd") return (
                                <p key={i} style={{ margin: 0, color: "#fff", fontSize: "13px", lineHeight: "1.7" }}>
                                    <span style={{ color: "#a855f7" }}>$ </span>{line.text}
                                </p>
                            );
                            if (line.type === "err") return (
                                <p key={i} style={{ margin: 0, color: "#f87171", fontSize: "13px", lineHeight: "1.7", paddingLeft: "18px" }}>
                                    ✗ {line.text}
                                </p>
                            );
                            return (
                                // <p key={i} style={{ margin: 0, color: "#bdbdbd", fontSize: "13px", lineHeight: "1.7", paddingLeft: "18px", whiteSpace: "pre" }}>
                                //     {line.text}
                                // </p>
                                <pre
                                    key={i}
                                    style={{
                                        margin: 0,
                                        color: "#bdbdbd",
                                        fontSize: "13px",
                                        lineHeight: "1.6",
                                        paddingLeft: "18px",
                                        fontFamily: "'JetBrains Mono', monospace",
                                        whiteSpace: "pre-wrap",
                                    }}
                                >
                                    {line.text}
                                </pre>
                            );
                        })}

                        {/* live input line */}
                        {/* <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                            <span style={{ color: "#a855f7", fontSize: "13px", marginRight: "8px", flexShrink: 0 }}>$</span>
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKey}
                                autoComplete="off"
                                spellCheck={false}
                                style={{
                                    background: "transparent", border: "none", outline: "none",
                                    color: "#fff", fontSize: "13px", fontFamily: "inherit",
                                    flex: 1, caretColor: "#a855f7",
                                }}
                            />
                        </div> */}


                        <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>

                            <span style={{ color: "#a855f7", fontSize: "13px", marginRight: "8px", flexShrink: 0 }}>
                                $
                            </span>

                            <div style={{ position: "relative", flex: 1 }}>

                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={handleKey}
                                    autoComplete="off"
                                    spellCheck={false}
                                    autoFocus={autoDone}   // 👈 important
                                    style={{
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                        color: "#fff",
                                        fontSize: "13px",
                                        fontFamily: "inherit",
                                        width: "100%",
                                        caretColor: "#a855f7",
                                    }}
                                />

                                {/* 👇 BLINKING CURSOR ONLY AFTER AUTO PLAY */}
                                {autoDone && input.length === 0 && (
                                    <span
                                        style={{
                                            position: "absolute",
                                            left: "2px",
                                            top: "0px",
                                            color: "#a855f7",
                                            fontSize: "14px",
                                            animation: "blink 1s infinite",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        ▌
                                    </span>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

            <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        div::-webkit-scrollbar { width: 4px; }
        div::-webkit-scrollbar-thumb { background: #3b0764; border-radius: 4px; }
      `}</style>
        </div>
    );
}