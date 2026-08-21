"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Message = { role: "user" | "morrow"; text: string };

const starterPrompts = ["Help me untangle an idea", "Turn these notes into a plan", "Give me a fresh perspective"];

export default function ChatShell() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((current) => [...current, { role: "user", text }, { role: "morrow", text: "I’m with you. Let’s make this feel a little clearer, one piece at a time." }]);
    setInput("");
  }

  return (
    <main className="flex min-h-screen bg-[var(--background)] text-[var(--night)]">
      <aside className="hidden w-72 shrink-0 flex-col border-r border-[var(--line)] bg-[#f8faf8] p-6 lg:flex"><Link href="/" className="text-xl font-semibold tracking-[-0.04em]">morrow<span className="text-[var(--coral)]">.</span></Link><div className="mt-14"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">Workspace</p><div className="rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-sm">New conversation <span className="float-right text-[var(--coral)]">+</span></div></div><div className="mt-auto border-t border-[var(--line)] pt-5 text-xs leading-5 text-[var(--ink-muted)]">Your conversations are private to this browser.<br /><span className="text-[var(--night)]">A quiet corner for good work.</span></div></aside>
      <section className="flex min-h-screen flex-1 flex-col"><header className="flex items-center justify-between border-b border-[var(--line)] px-5 py-5 sm:px-10"><Link href="/" className="text-lg font-semibold tracking-[-0.04em] lg:hidden">morrow<span className="text-[var(--coral)]">.</span></Link><div className="hidden text-sm text-[var(--ink-muted)] lg:block">Untitled conversation</div><div className="ml-auto flex items-center gap-4 text-xs text-[var(--ink-muted)]"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#65ad7d]" />Ready when you are</span><Link href="/" aria-label="Return home" className="text-lg text-[var(--night)]">×</Link></div></header>
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 py-10 sm:px-10 sm:py-16">{messages.length === 0 ? <div className="flex flex-1 flex-col justify-center"><p className="mb-5 text-sm font-medium text-[var(--coral)]">Good morning.</p><h1 className="max-w-lg text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl">What&apos;s on<br />your mind?</h1><p className="mt-6 max-w-sm text-base leading-7 text-[var(--ink-muted)]">Start wherever feels natural. There&apos;s no wrong way into a conversation.</p><div className="mt-12 grid gap-3 sm:grid-cols-3">{starterPrompts.map((prompt) => <button key={prompt} type="button" onClick={() => setInput(prompt)} className="min-h-24 rounded-2xl border border-[var(--line)] bg-white p-4 text-left text-sm leading-5 transition-colors hover:border-[var(--coral)] hover:bg-[#fff8f6]">{prompt}<span className="mt-4 block text-lg text-[var(--coral)]">↗</span></button>)}</div></div> : <div className="flex flex-1 flex-col justify-end gap-6 pb-10">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={message.role === "user" ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[var(--night)] px-5 py-4 text-sm leading-6 text-white" : "max-w-[85%] rounded-2xl rounded-bl-sm bg-[#f0f7f1] px-5 py-4 text-sm leading-6"}>{message.text}</div>)}</div>}
          <form onSubmit={sendMessage} className="mt-10 rounded-2xl border border-[var(--line)] bg-[#fbfaf6] p-2 shadow-[0_12px_40px_rgba(23,43,42,0.06)]"><div className="flex items-end gap-3"><textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }} placeholder="Write what you&apos;re thinking..." rows={2} className="min-h-14 flex-1 resize-none bg-transparent px-3 py-3 text-sm outline-none placeholder:text-[#98a19d]" /><button type="submit" aria-label="Send message" className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--coral)] text-xl text-white transition-transform hover:-translate-y-0.5">↗</button></div><p className="px-3 pb-2 text-[11px] text-[#98a19d]">Morrow can make mistakes. Your judgment stays in the room.</p></form>
        </div>
      </section>
    </main>
  );
}