import Link from "next/link";

const rituals = [
  { number: "01", title: "Untangle the messy bit", text: "Turn a half-formed thought into a clear next step." },
  { number: "02", title: "Make something sharper", text: "Bring a draft, a question, or a blank page. Leave with momentum." },
  { number: "03", title: "Keep the good stuff", text: "Your work stays yours, with a quiet place to return to it." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/" className="text-xl font-semibold tracking-[-0.04em] text-[var(--night)]">morrow<span className="text-[var(--coral)]">.</span></Link>
        <div className="flex items-center gap-6 text-sm text-[var(--ink-muted)]"><a href="#how-it-works" className="hidden transition-colors hover:text-[var(--night)] sm:block">How it works</a><Link href="/chat" className="rounded-full bg-[var(--night)] px-5 py-2.5 font-medium text-white transition-transform hover:-translate-y-0.5">Open workspace</Link></div>
      </nav>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-32 lg:pt-24">
        <div className="relative z-10 max-w-2xl"><p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--coral)]"><span className="h-2 w-2 rounded-full bg-[var(--coral)]" />An AI workspace for humans</p><h1 className="max-w-xl text-6xl font-semibold leading-[0.96] tracking-[-0.07em] text-[var(--night)] sm:text-8xl">Think better.<br /><span className="text-[var(--coral)]">Make more.</span></h1><p className="mt-8 max-w-md text-lg leading-8 text-[var(--ink-muted)]">Morrow gives your ideas room to breathe. A calm, capable companion for the work that matters to you.</p><div className="mt-10 flex flex-wrap items-center gap-5"><Link href="/chat" className="rounded-full bg-[var(--coral)] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(239,118,95,0.24)] transition-transform hover:-translate-y-1">Start a conversation <span className="ml-2">↗</span></Link><span className="text-sm text-[var(--ink-muted)]">No account needed to begin</span></div></div>
        <div className="relative mx-auto aspect-square w-full max-w-[31rem]"><div className="absolute inset-[8%] rotate-6 rounded-[2.5rem] bg-[var(--mint)]" /><div className="absolute inset-0 rounded-[2.5rem] border border-[var(--line)] bg-white p-5 shadow-[0_25px_70px_rgba(23,43,42,0.12)] sm:p-8"><div className="flex items-center justify-between border-b border-[#d5d8d0] pb-5"><span className="text-sm font-semibold text-[var(--night)]">today&apos;s thought</span><span className="text-xs text-[var(--ink-muted)]">09:42</span></div><div className="flex h-[calc(100%-3.5rem)] flex-col justify-between py-8"><div><p className="mb-5 text-sm text-[var(--ink-muted)]">You said</p><p className="max-w-xs text-3xl font-medium leading-tight tracking-[-0.05em] text-[var(--night)]">“I want to start, but I keep waiting for the perfect plan.”</p></div><div className="ml-auto max-w-xs rounded-2xl rounded-br-sm bg-[var(--night)] p-5 text-sm leading-6 text-[#e8eee9]">Maybe the plan is just the first small proof that you can begin. Let&apos;s find it.</div></div></div><div className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--line)] bg-white px-5 py-4 shadow-lg sm:-left-12"><p className="text-xs text-[var(--ink-muted)]">a little progress</p><p className="mt-1 text-lg font-semibold text-[var(--night)]">is still progress <span className="text-[var(--coral)]">↗</span></p></div></div>
      </section>

      <section id="how-it-works" className="border-t border-[var(--line)] bg-[#f8faf8] px-6 py-20 lg:px-10 lg:py-24"><div className="mx-auto max-w-7xl"><div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--night)]">A softer place to<br /><span className="text-[var(--coral)]">get things done.</span></h2><p className="max-w-xs text-sm leading-6 text-[var(--ink-muted)]">Bring the unfinished, the uncertain, and the almost-there. Morrow meets you where you are.</p></div><div className="grid border-t border-[var(--line)] md:grid-cols-3">{rituals.map((ritual) => <article key={ritual.number} className="border-b border-[var(--line)] py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><p className="mb-12 text-xs font-semibold text-[var(--coral)]">{ritual.number}</p><h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--night)]">{ritual.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[var(--ink-muted)]">{ritual.text}</p></article>)}</div></div></section>
    </main>
  );
}
