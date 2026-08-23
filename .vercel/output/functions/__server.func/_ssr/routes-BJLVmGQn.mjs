import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, c as FolderOpen, d as Check, f as ArrowUp, h as ArrowDownRight, i as Search, l as FileText, m as ArrowRight, o as Mail, p as ArrowUpRight, r as ShieldAlert, s as Globe, t as X, u as Copy } from "../_libs/lucide-react.mjs";
import { a as site, i as projects, n as capabilities, o as stats, r as nav, s as steps } from "./router-oTAGgjZz.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BJLVmGQn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function CommandPalette({ open, onOpenChange }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => [
		{
			id: "work",
			label: "Jump to work",
			hint: "Section",
			icon: FolderOpen,
			run: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
		},
		{
			id: "inbox",
			label: "Inbox Autopilot — live",
			hint: "Open",
			icon: ArrowUpRight,
			run: () => window.open("https://inbox-autopilot-rosy.vercel.app", "_blank", "noopener")
		},
		{
			id: "tyoma",
			label: "Tyoma — live",
			hint: "Open",
			icon: ArrowUpRight,
			run: () => window.open("https://tyoma.site", "_blank", "noopener")
		},
		{
			id: "mail",
			label: `Write ${site.email}`,
			hint: "Mail",
			icon: Mail,
			run: () => {
				window.location.href = `mailto:${site.email}`;
			}
		},
		{
			id: "copy",
			label: "Copy email",
			hint: "Clipboard",
			icon: Copy,
			run: () => {
				navigator.clipboard.writeText(site.email);
			}
		}
	], []).filter((a) => `${a.label} ${a.hint}`.toLowerCase().includes(query.toLowerCase().trim()));
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		setQuery("");
		setActive(0);
		const onKey = (e) => {
			if (e.key === "Escape") onOpenChange(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onOpenChange]);
	(0, import_react.useEffect)(() => {
		setActive(0);
	}, [query]);
	if (!open) return null;
	function go(action) {
		onOpenChange(false);
		action.run();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-bg/70 px-4 pt-24",
		onClick: () => onOpenChange(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-label": "Command palette",
			className: "w-full max-w-lg overflow-hidden rounded-xl bg-surface shadow-hairline",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-faint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: query,
					onChange: (e) => setQuery(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "ArrowDown") {
							e.preventDefault();
							setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
						} else if (e.key === "ArrowUp") {
							e.preventDefault();
							setActive((i) => Math.max(i - 1, 0));
						} else if (e.key === "Enter" && filtered[active]) {
							e.preventDefault();
							go(filtered[active]);
						}
					},
					placeholder: "Jump, open, copy…",
					className: "h-12 w-full bg-transparent text-sm text-fg outline-none placeholder:text-faint"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "max-h-72 overflow-y-auto p-2",
				children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-3 py-6 text-sm text-muted",
					children: "Nothing matches."
				}) : filtered.map((action, i) => {
					const Icon = action.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onMouseEnter: () => setActive(i),
						onClick: () => go(action),
						className: cn("flex w-full min-h-11 items-center gap-3 rounded-md px-3 text-left text-sm transition-colors duration-150", i === active ? "bg-surface-2 text-fg" : "text-muted"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1",
								children: action.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-faint",
								children: action.hint
							})
						]
					}) }, action.id);
				})
			})]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none disabled:pointer-events-none disabled:opacity-40 transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg shadow-glow hover:opacity-90",
			outline: "bg-transparent text-fg shadow-hairline hover:shadow-hairline-hover hover:bg-surface hover:text-primary",
			ghost: "bg-transparent text-fg hover:bg-surface",
			link: "bg-transparent text-fg underline-offset-4 hover:underline px-0"
		},
		size: {
			md: "h-11 px-5 text-sm rounded-md",
			lg: "h-12 px-6 text-sm rounded-lg",
			sm: "h-9 px-3.5 text-xs rounded-sm",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const inView = el.getBoundingClientRect().top < window.innerHeight - 32;
		if (reduced || inView) {
			el.classList.add("is-in");
			return;
		}
		el.classList.add("will-reveal");
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				el.classList.add("is-in");
				io.disconnect();
			}
		}, {
			threshold: .1,
			rootMargin: "0px 0px -10% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", className),
		style: delay ? { transitionDelay: `${delay}ms` } : void 0,
		children
	});
}
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copy() {
		try {
			await navigator.clipboard.writeText(site.email);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-20 border-t border-border py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm tracking-wide text-primary",
					children: [
						site.name,
						" · founder of ",
						site.studio
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-6xl",
					children: "I am looking for a team that ships AI products — not slide decks."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-muted",
					children: "Agentic workflows, extraction, grounded assistants, the unglamorous parts that have to work on Monday. If that is the job, write."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mt-10 flex flex-col gap-4 sm:flex-row sm:items-center",
				delay: 80,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${site.email}?subject=Hello%20Davit`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), site.email]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					size: "lg",
					onClick: copy,
					children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Copied" : "Copy email"]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				site.name,
				" · ",
				site.studio
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex flex-wrap gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://inbox-autopilot-rosy.vercel.app",
						target: "_blank",
						rel: "noreferrer",
						className: "hover:text-primary",
						children: "Inbox Autopilot"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://tyoma.site",
						target: "_blank",
						rel: "noreferrer",
						className: "hover:text-primary",
						children: "Tyoma"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${site.email}`,
						className: "hover:text-primary",
						children: "Email"
					})
				]
			})]
		})
	});
}
function CursorLayer() {
	const dot = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const fine = window.matchMedia("(pointer: fine)").matches;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const wide = window.matchMedia("(min-width: 1024px)").matches;
		if (!fine || reduced || !wide) return;
		document.body.classList.add("has-custom-cursor");
		const d = dot.current;
		const r = ring.current;
		if (!d || !r) return;
		let x = 0;
		let y = 0;
		let rx = 0;
		let ry = 0;
		let hover = false;
		let raf = 0;
		let running = true;
		let seen = false;
		const onMove = (e) => {
			x = e.clientX;
			y = e.clientY;
			seen = true;
			d.style.opacity = "1";
			const t = e.target;
			hover = Boolean(t?.closest("a, button, [data-cursor='hover']"));
			d.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
		};
		const loop = () => {
			if (!running) return;
			if (seen) {
				rx += (x - rx) * .16;
				ry += (y - ry) * .16;
				const s = hover ? 1.65 : 1;
				r.style.opacity = hover ? "0.9" : "0.4";
				r.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${s})`;
			}
			raf = requestAnimationFrame(loop);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		raf = requestAnimationFrame(loop);
		return () => {
			running = false;
			cancelAnimationFrame(raf);
			window.removeEventListener("pointermove", onMove);
			document.body.classList.remove("has-custom-cursor");
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-50 hidden lg:block",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: dot,
			className: "absolute top-0 left-0 size-1.5 rounded-full bg-primary opacity-0 will-change-transform"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: ring,
			className: "absolute top-0 left-0 size-8 rounded-full border border-primary/70 opacity-0 will-change-transform"
		})]
	});
}
function mulberry32(seed) {
	return () => {
		let t = seed += 1831565813;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
var rng = mulberry32(21);
var FIELD_NODES = Array.from({ length: 44 }, () => ({
	x: rng() * 100,
	y: rng() * 100
}));
var LINK_PCT = .17;
var FIELD_EDGES = [];
for (let i = 0; i < FIELD_NODES.length; i++) for (let j = i + 1; j < FIELD_NODES.length; j++) {
	const dx = (FIELD_NODES[i].x - FIELD_NODES[j].x) / 100;
	const dy = (FIELD_NODES[i].y - FIELD_NODES[j].y) / 100;
	if (dx * dx + dy * dy < LINK_PCT * LINK_PCT) FIELD_EDGES.push([i, j]);
}
var SSR_W = 1440;
var SSR_H = 900;
function FieldCanvas() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const svg = ref.current;
		if (!svg) return;
		const root = svg;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const mouse = {
			x: 0,
			y: 0,
			tx: 0,
			ty: 0,
			has: false
		};
		const circles = Array.from(svg.querySelectorAll("circle"));
		const lines = Array.from(svg.querySelectorAll("line"));
		const nodes = FIELD_NODES.map((n, i) => ({
			fx: n.x,
			fy: n.y,
			x: n.x / 100 * SSR_W,
			y: n.y / 100 * SSR_H,
			ox: n.x / 100 * SSR_W,
			oy: n.y / 100 * SSR_H,
			vx: 0,
			vy: 0,
			phase: i * .47,
			el: circles[i] ?? null
		}));
		const edges = FIELD_EDGES.map((pair, i) => ({
			a: pair[0],
			b: pair[1],
			el: lines[i] ?? null
		}));
		let w = SSR_W;
		let h = SSR_H;
		let lastW = 0;
		let lastH = 0;
		let raf = 0;
		let running = true;
		let visible = true;
		let resizeTimer = 0;
		function layout() {
			const parent = root.parentElement;
			if (!parent) return;
			const nw = parent.clientWidth;
			const nh = parent.clientHeight;
			if (nw < 8 || nh < 8) return;
			if (Math.abs(nw - lastW) < 16 && Math.abs(nh - lastH) < 16) return;
			lastW = nw;
			lastH = nh;
			w = nw;
			h = nh;
			root.setAttribute("viewBox", `0 0 ${w} ${h}`);
			const radius = Math.max(2.3, Math.min(3.4, w / 420));
			for (const n of nodes) {
				n.ox = n.fx / 100 * w;
				n.oy = n.fy / 100 * h;
				n.x = n.ox;
				n.y = n.oy;
				n.vx = 0;
				n.vy = 0;
				n.el?.setAttribute("r", radius.toFixed(2));
				n.el?.setAttribute("cx", n.x.toFixed(2));
				n.el?.setAttribute("cy", n.y.toFixed(2));
			}
			for (const e of edges) {
				const a = nodes[e.a];
				const b = nodes[e.b];
				e.el?.setAttribute("x1", a.x.toFixed(2));
				e.el?.setAttribute("y1", a.y.toFixed(2));
				e.el?.setAttribute("x2", b.x.toFixed(2));
				e.el?.setAttribute("y2", b.y.toFixed(2));
			}
		}
		function frame(now) {
			if (!running || !visible) return;
			mouse.x += (mouse.tx - mouse.x) * .12;
			mouse.y += (mouse.ty - mouse.y) * .12;
			const link = Math.hypot(w, h) * .12;
			for (const n of nodes) {
				n.vx += Math.sin(now * 7e-4 + n.phase) * .035;
				n.vy += Math.cos(now * 55e-5 + n.phase) * .028;
				if (mouse.has) {
					const dx = n.x - mouse.x;
					const dy = n.y - mouse.y;
					const f = 22e3 / (dx * dx + dy * dy + 1400);
					n.vx += dx * f * 5e-4;
					n.vy += dy * f * 5e-4;
				}
				n.vx += (n.ox - n.x) * .018;
				n.vy += (n.oy - n.y) * .018;
				n.vx *= .9;
				n.vy *= .9;
				n.x += n.vx;
				n.y += n.vy;
				n.el?.setAttribute("cx", n.x.toFixed(1));
				n.el?.setAttribute("cy", n.y.toFixed(1));
			}
			for (const e of edges) {
				const a = nodes[e.a];
				const b = nodes[e.b];
				const d = Math.hypot(a.x - b.x, a.y - b.y);
				e.el?.setAttribute("x1", a.x.toFixed(1));
				e.el?.setAttribute("y1", a.y.toFixed(1));
				e.el?.setAttribute("x2", b.x.toFixed(1));
				e.el?.setAttribute("y2", b.y.toFixed(1));
				const alpha = Math.max(0, (1 - d / link) * .72);
				e.el?.setAttribute("stroke", `rgba(61,255,208,${alpha.toFixed(2)})`);
			}
			if (!reduced) raf = requestAnimationFrame(frame);
		}
		layout();
		const parent = root.parentElement;
		const onMove = (e) => {
			const r = root.getBoundingClientRect();
			if (r.width === 0) return;
			mouse.tx = (e.clientX - r.left) / r.width * w;
			mouse.ty = (e.clientY - r.top) / r.height * h;
			mouse.has = true;
		};
		const onLeave = () => {
			mouse.has = false;
		};
		parent?.addEventListener("pointermove", onMove, { passive: true });
		parent?.addEventListener("pointerleave", onLeave);
		const ro = new ResizeObserver(() => {
			window.clearTimeout(resizeTimer);
			resizeTimer = window.setTimeout(layout, 140);
		});
		if (parent) ro.observe(parent);
		const io = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			if (visible && !reduced && running) {
				cancelAnimationFrame(raf);
				raf = requestAnimationFrame(frame);
			} else cancelAnimationFrame(raf);
		});
		io.observe(root);
		const onVis = () => {
			if (document.hidden) cancelAnimationFrame(raf);
			else if (!reduced && visible && running) raf = requestAnimationFrame(frame);
		};
		document.addEventListener("visibilitychange", onVis);
		if (!reduced) raf = requestAnimationFrame(frame);
		return () => {
			running = false;
			cancelAnimationFrame(raf);
			window.clearTimeout(resizeTimer);
			ro.disconnect();
			io.disconnect();
			parent?.removeEventListener("pointermove", onMove);
			parent?.removeEventListener("pointerleave", onLeave);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref,
		className: "pointer-events-none absolute inset-0 size-full",
		viewBox: `0 0 ${SSR_W} ${SSR_H}`,
		preserveAspectRatio: "xMidYMid slice",
		"aria-hidden": true,
		children: [FIELD_EDGES.map(([a, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: FIELD_NODES[a].x / 100 * SSR_W,
			y1: FIELD_NODES[a].y / 100 * SSR_H,
			x2: FIELD_NODES[b].x / 100 * SSR_W,
			y2: FIELD_NODES[b].y / 100 * SSR_H,
			stroke: "rgba(61,255,208,0.5)",
			strokeWidth: "1.4"
		}, `e-${i}`)), FIELD_NODES.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: n.x / 100 * SSR_W,
			cy: n.y / 100 * SSR_H,
			r: "2.8",
			fill: "#3dffd0"
		}, `n-${i}`))]
	});
}
var UPPER = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghjkmnopqrstuvwxyz";
function glyph(ch) {
	const set = ch !== ch.toLowerCase() ? UPPER : LOWER;
	return set[Math.random() * set.length | 0];
}
function ScrambleLine({ text, delay = 0, className }) {
	const [tick, setTick] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		let timer = 0;
		let running = true;
		let last = -1;
		const duration = 720 + text.replace(/\s/g, "").length * 42;
		const kick = () => {
			if (!running) return;
			const start = performance.now();
			const loop = (now) => {
				if (!running) return;
				const elapsed = now - start;
				const frame = elapsed / 30 | 0;
				if (frame !== last) {
					last = frame;
					setTick(frame);
				}
				if (elapsed < duration) raf = requestAnimationFrame(loop);
				else setTick(null);
			};
			raf = requestAnimationFrame(loop);
		};
		(async () => {
			try {
				await Promise.race([document.fonts.ready, new Promise((resolve) => window.setTimeout(resolve, 350))]);
			} catch {}
			if (!running) return;
			timer = window.setTimeout(kick, delay);
		})();
		return () => {
			running = false;
			window.clearTimeout(timer);
			cancelAnimationFrame(raf);
		};
	}, [text, delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("block max-w-full whitespace-nowrap", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: text
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			children: text.split("").map((ch, i) => {
				if (ch === " ") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-[0.28em]" }, i);
				const lockAt = 6 + i * 1.2;
				const locked = tick === null || tick > lockAt;
				const shown = locked ? ch : glyph(ch);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative inline-block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "invisible",
						children: ch
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute inset-0 overflow-hidden whitespace-nowrap text-center", !locked && "scramble-hot"),
						children: shown
					})]
				}, i);
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-dvh flex-col justify-end overflow-hidden pt-24 pb-10 sm:pb-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-vignette" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-6xl px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-rise mb-10 flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: site.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs tracking-wide text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary pulse-neon" }),
								"Founder of ",
								site.studio
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero-title max-w-5xl min-w-0 text-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrambleLine, { text: "I learned AI" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrambleLine, {
								text: "the only way",
								delay: 140,
								className: "italic text-primary hero-italic"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrambleLine, {
								text: "that counts.",
								delay: 280
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-rise-late mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "max-w-md text-base leading-relaxed text-muted sm:text-lg",
							children: [
								"Two systems in production, built at ",
								site.studio,
								". Inbox Autopilot turns email into actions. Tyoma reads a website, then talks. I am looking for a role where that continues."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "w-full sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#work",
									children: ["See the work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "w-full sm:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									children: "Get in touch"
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "hero-rise-late mt-16 grid grid-cols-3 gap-3 border-t border-border pt-6 sm:mt-20 sm:gap-8",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "kicker text-faint",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-2 font-display text-3xl leading-none tracking-tight text-fg sm:text-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 font-sans text-xs tracking-wide text-muted sm:text-sm",
								children: s.unit
							})]
						})] }, s.label))
					})
				]
			})
		]
	});
}
function Nav({ onCommand }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200 ease-out", scrolled || open ? "bg-bg/90 shadow-hairline" : "bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#work",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg",
				children: "Skip to work"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex min-w-0 items-center gap-3",
						"data-cursor": "hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-8 shrink-0 items-center justify-center rounded-sm bg-primary text-sm font-medium text-primary-fg shadow-glow",
							children: "D"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 flex-col leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm font-medium tracking-wide",
								children: site.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-xs tracking-wide text-muted",
								children: site.studio
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 md:flex",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "text-sm text-muted transition-colors duration-150 hover:text-primary",
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-3 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onCommand,
							className: "h-9 rounded-sm px-3 text-xs tracking-wide text-muted shadow-hairline transition-[color,box-shadow] duration-150 hover:text-primary hover:shadow-hairline-hover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2",
								children: "Search"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "text-faint",
								children: "⌘K"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-xs tracking-wide text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex size-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-primary pulse-neon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative size-1.5 rounded-full bg-primary" })]
							}), "Available"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "md:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-bg md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col px-5 py-6",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "flex min-h-12 items-center font-display text-3xl italic text-primary",
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						onClick: () => setOpen(false),
						className: "mt-6 flex min-h-12 items-center text-sm text-muted",
						children: "Available for roles"
					})]
				})
			}) : null
		]
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "scroll-mt-20 border-t border-border py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Process"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl",
					children: "How the work gets made."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2",
					children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 60,
						className: "bg-surface p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-primary",
								children: step.range
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl tracking-tight",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: step.body
							})
						]
					}, step.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "What I actually do"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2",
					children: capabilities.map((cap, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 50,
						className: "group bg-surface p-6 transition-colors duration-200 hover:bg-surface-2 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl tracking-tight",
							children: cap.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: cap.body
						})]
					}, cap.title))
				})
			]
		})
	});
}
function ScrollProgress() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const p = max > 0 ? window.scrollY / max : 0;
			el.style.transform = `scaleX(${p})`;
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "h-0.5 origin-left bg-primary shadow-glow",
			style: { transform: "scaleX(0)" }
		})
	});
}
var emails = [
	{
		id: "e1",
		from: "billing@northwind.io",
		subject: "Invoice INV-4821 — $2,400.00",
		preview: "Please find attached invoice for March retainers. Due 12 Apr.",
		kind: "invoice"
	},
	{
		id: "e2",
		from: "sarah@harbor.studio",
		subject: "Question about onboarding",
		preview: "We signed last week and I am not sure where to upload the first batch.",
		kind: "inquiry"
	},
	{
		id: "e3",
		from: "ops@vendor.co",
		subject: "Re: shipment delay??",
		preview: "The pallet never arrived and your team said it left on Tuesday.",
		kind: "review"
	}
];
var stages = [
	"Reading",
	"Classifying",
	"Acting"
];
function Result({ kind }) {
	if (kind === "invoice") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 text-xs tracking-wide text-muted uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }), "Extracted fields"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "grid grid-cols-2 gap-x-4 gap-y-2 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-faint",
					children: "Vendor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Northwind IO" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-faint",
					children: "Amount"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "tabular-nums",
					children: "$2,400.00"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-faint",
					children: "Invoice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "INV-4821" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-faint",
					children: "Due"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "12 Apr 2026" })] })
			]
		})]
	});
	if (kind === "inquiry") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-xs tracking-wide text-muted uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), "Draft reply"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg/90",
				children: "Hi Sarah — welcome. You can upload the first batch from Settings → Sources. If the folder is empty, grant drive access once and retry. I can walk you through it on a 15-minute call this week."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-faint",
				children: "Ready to send · awaiting approval"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-xs tracking-wide text-muted uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-3.5" }), "Escalated"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg/90",
				children: "Conflicting claims about a missing shipment. Tone is heated. No invoice or tracking number in-thread — a human should own the reply."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-faint",
				children: "Queued for ops · SLA 4h"
			})
		]
	});
}
function InboxDemo() {
	const [active, setActive] = (0, import_react.useState)("e1");
	const [stage, setStage] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const email = emails.find((e) => e.id === active) ?? emails[0];
	(0, import_react.useEffect)(() => {
		setStage(0);
		setDone(false);
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setStage(2);
			setDone(true);
			return;
		}
		const t1 = window.setTimeout(() => setStage(1), 420);
		const t2 = window.setTimeout(() => setStage(2), 900);
		const t3 = window.setTimeout(() => setDone(true), 1320);
		return () => {
			window.clearTimeout(t1);
			window.clearTimeout(t2);
			window.clearTimeout(t3);
		};
	}, [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl bg-surface shadow-hairline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Live demo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-faint",
				children: "Click a message"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border",
				children: emails.map((item) => {
					const on = item.id === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActive(item.id),
						className: cn("grid w-full min-h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 px-4 py-4 text-left transition-colors duration-150", on ? "bg-surface-2" : "hover:bg-surface-2/60"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-1.5 size-1.5 shrink-0 rounded-full", on ? "bg-primary" : "bg-faint") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm text-fg",
										children: item.from
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block truncate text-sm text-fg/90",
										children: item.subject
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block truncate text-xs text-muted",
										children: item.preview
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full px-2 py-1 text-xs tracking-wide text-faint uppercase shadow-hairline",
								children: item.kind
							})
						]
					}) }, item.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-56 flex-col border-t border-border p-4 md:border-t-0 md:border-l",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mb-5 flex flex-wrap items-center gap-2 text-xs tracking-wide uppercase",
					children: stages.map((label, i) => {
						const on = i <= stage;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-faint" }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: on ? "text-fg" : "text-faint",
									children: label
								}),
								on && (i < stage || done) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-fg" }) : null
							]
						}, label);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex-1 rounded-lg bg-bg p-4 shadow-hairline transition-opacity duration-200", done ? "opacity-100" : "opacity-40"),
					children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, { kind: email.kind }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Working…"
					})
				})]
			})]
		})]
	});
}
var targets = [
	{
		host: "this page",
		label: "this page",
		log: [
			"Fetch /",
			"Read hero + case studies",
			"Index 2 live products",
			"Ready"
		],
		prompts: ["Who built this?", "What can you ship?"],
		replies: {
			"Who built this?": "Davit Simonyan, founder of Arag Agency. Two live products — Inbox Autopilot and Tyoma. Looking for a team that ships.",
			"What can you ship?": "Agentic mail workflows, extraction, site-grounded assistants, multilingual product. Not a notebook. A URL."
		}
	},
	{
		host: "stripe.com",
		label: "stripe.com",
		log: [
			"Fetch stripe.com",
			"Parse product surfaces",
			"Ground payments context",
			"Ready"
		],
		prompts: ["What does Stripe do?", "Who is it for?"],
		replies: {
			"What does Stripe do?": "Stripe is financial infrastructure for the internet — payments, billing, and money movement for products that need to charge a customer.",
			"Who is it for?": "Builders: startups, platforms, and enterprises that want to accept payments without becoming a bank."
		}
	},
	{
		host: "notion.so",
		label: "notion.so",
		log: [
			"Fetch notion.so",
			"Extract workspace narrative",
			"Index docs + wiki claims",
			"Ready"
		],
		prompts: ["What is Notion?", "Give me a one-liner"],
		replies: {
			"What is Notion?": "Notion is a connected workspace — docs, wikis, and projects in one place, used as a company brain more than a single note app.",
			"Give me a one-liner": "Your team’s wiki, docs, and tasks, finally in the same room."
		}
	}
];
function TyomaDemo() {
	const [host, setHost] = (0, import_react.useState)("this page");
	const [phase, setPhase] = (0, import_react.useState)("scan");
	const [logIndex, setLogIndex] = (0, import_react.useState)(0);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [typing, setTyping] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)("");
	const scroller = (0, import_react.useRef)(null);
	const target = (0, import_react.useMemo)(() => targets.find((t) => t.host === host) ?? targets[0], [host]);
	(0, import_react.useEffect)(() => {
		if (phase !== "scan") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setLogIndex(target.log.length);
			setPhase("ready");
			return;
		}
		setLogIndex(0);
		let i = 0;
		const id = window.setInterval(() => {
			i += 1;
			setLogIndex(i);
			if (i >= target.log.length) {
				window.clearInterval(id);
				setPhase("ready");
			}
		}, 380);
		return () => window.clearInterval(id);
	}, [phase, target]);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({
			top: scroller.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, typing]);
	function scan(next = host) {
		setHost(next);
		setMessages([]);
		setTyping(false);
		setPhase("scan");
		setLogIndex(0);
	}
	function ask(q) {
		const question = q.trim();
		if (!question || phase !== "ready" || typing) return;
		const answer = target.replies[question] ?? "I only have a local slice of this demo. Open the live product to scan any URL.";
		setDraft("");
		setMessages((m) => [...m, {
			role: "user",
			text: question
		}]);
		setTyping(true);
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		window.setTimeout(() => {
			setTyping(false);
			setMessages((m) => [...m, {
				role: "assistant",
				text: answer
			}]);
		}, reduced ? 0 : 700);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl bg-surface shadow-hairline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Live demo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-faint",
				children: "Scan, then ask"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative min-h-11 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: host,
							onChange: (e) => setHost(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") scan(host);
							},
							className: "h-11 w-full rounded-md bg-bg pr-3 pl-10 text-sm text-fg shadow-hairline placeholder:text-faint",
							placeholder: "Paste a URL",
							"aria-label": "Website URL",
							autoComplete: "off",
							spellCheck: false,
							suppressHydrationWarning: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: () => scan(host),
						className: "h-11",
						children: "Scan"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: targets.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => scan(t.host),
						className: cn("h-9 rounded-full px-3 text-xs tracking-wide shadow-hairline transition-[background-color,color] duration-150", host === t.host && phase !== "idle" ? "bg-primary text-primary-fg" : "text-muted hover:text-fg"),
						children: t.label
					}, t.host))
				}),
				phase === "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-8 text-sm text-muted",
					children: "Pick a site. The assistant reads it first — then you talk."
				}) : null,
				phase === "scan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "min-h-40 space-y-2 py-4 font-sans text-sm",
					children: target.log.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex items-center gap-2 transition-opacity duration-200", i < logIndex ? "text-fg" : "text-faint"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-faint",
							children: ["0", i + 1]
						}), line]
					}, line))
				}) : null,
				phase === "ready" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-bg shadow-hairline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: scroller,
							className: "flex max-h-64 flex-col gap-3 overflow-y-auto p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-faint",
									children: ["Grounded on ", target.label]
								}),
								messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("max-w-[90%] rounded-md px-3 py-2 text-sm leading-relaxed", m.role === "user" ? "self-end bg-surface-2 text-fg" : "self-start text-fg/90"),
									children: m.text
								}, `${m.role}-${i}`)),
								typing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: "Thinking…"
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 border-t border-border px-3 py-2",
							children: target.prompts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => ask(p),
								className: "h-8 rounded-full px-3 text-xs text-muted shadow-hairline transition-colors duration-150 hover:text-fg",
								children: p
							}, p))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "flex gap-2 border-t border-border p-3",
							onSubmit: (e) => {
								e.preventDefault();
								ask(draft);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								className: "h-11 min-w-0 flex-1 rounded-md bg-surface px-3 text-sm text-fg shadow-hairline placeholder:text-faint",
								placeholder: "Ask the site",
								"aria-label": "Ask the site",
								autoComplete: "off",
								spellCheck: false,
								suppressHydrationWarning: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "icon",
								"aria-label": "Send",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
							})]
						})
					]
				}) : null
			]
		})]
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-20 border-t border-border py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Selected work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-xl font-display text-4xl tracking-tight text-fg sm:text-5xl",
				children: "Not a tutorial dump. Production URLs."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 space-y-28",
				children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					id: project.id,
					className: "scroll-mt-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-12 lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "min-w-0 lg:col-span-5 lg:sticky lg:top-28 lg:self-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "kicker text-primary",
									children: project.index
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-3xl tracking-tight sm:text-4xl",
									children: project.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-xl italic text-primary",
									children: project.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm leading-relaxed text-muted sm:text-base",
									children: project.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2",
									children: project.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm text-fg/90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary" }), point]
									}, point))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: project.href,
											target: "_blank",
											rel: "noreferrer",
											children: ["Open live", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs tracking-wide text-muted",
										children: [
											project.status,
											" · ",
											project.year
										]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "min-w-0 lg:col-span-7",
							delay: 80,
							children: project.id === "inbox" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InboxDemo, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TyomaDemo, {})
						})]
					})
				}, project.id))
			})]
		})
	});
}
function HomePage() {
	const [cmd, setCmd] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const meta = e.metaKey || e.ctrlKey;
			const target = e.target;
			const typing = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;
			if (meta && e.key.toLowerCase() === "k" || e.key === "/" && !typing && !meta) {
				e.preventDefault();
				setCmd((v) => !v);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-x-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorLayer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { onCommand: () => setCmd(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {
				open: cmd,
				onOpenChange: setCmd
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };
