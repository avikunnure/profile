import { useState } from "react";
import { 
  Mail,
  MessageCircle, 
} from "lucide-react";

import Reveal from "../components/animations/Reveal"; 
const CONTACT_EMAIL = "";
 
export default function ContactSection() { 
 
  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-1 lg:gap-16">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              LET'S START A CONVERSATION
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Have an idea?
              <span className="block text-indigo-600">
                Let's make it happen.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you have a clear project specification or just an idea
              that needs direction, I'd love to hear about it.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Tell me what you're trying to achieve, what challenges you're
              facing, and how you'd like your business to improve.
            </p>

            <div className="mt-9 space-y-4">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                  <Mail size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Connect with me on Linked In
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <MessageCircle size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    No pressure. Just a conversation.
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    You don't need a perfect specification. An initial
                    overview of the problem is enough.
                  </p>
                </div>
              </div>
            </div>
          </Reveal> 
        </div>
      </div>
    </section>
  );
}