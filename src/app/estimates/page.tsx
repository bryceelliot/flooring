import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import EstimateForm from "@/components/EstimateForm";
import { CheckCircle2, Phone, Clock, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Estimate",
  description:
    "Get a free flooring estimate from Kelowna Flooring Superstore. We measure your space and provide a detailed quote — no obligation. Call (250) 860-7847.",
};

const steps = [
  { icon: Phone, title: "Contact Us", desc: "Call or fill out our form to schedule your free estimate." },
  { icon: Ruler, title: "We Measure", desc: "Our expert visits your home and measures every room precisely." },
  { icon: Clock, title: "Get Your Quote", desc: "Receive a detailed, transparent quote — usually within 24 hours." },
  { icon: CheckCircle2, title: "You Decide", desc: "No pressure. Take your time and choose when you're ready." },
];

export default function EstimatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-dark overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 40% 50%, rgba(49,50,144,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              No Obligation
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight">
              Free In-Home<br />
              <span className="text-accent">Estimate</span>
            </h1>
            <p className="text-white/60 text-lg mt-5 max-w-xl leading-relaxed">
              We come to you, measure every room, and provide a detailed transparent
              quote — completely free and with no pressure or obligation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">How It Works</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-4">
                    <s.icon size={24} className="text-white" />
                  </div>
                  <div className="text-white/40 text-xs font-bold tracking-widest mb-1">
                    STEP {i + 1}
                  </div>
                  <h3 className="text-white font-bold mb-2">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <AnimateOnScroll direction="right">
            <h2 className="text-4xl font-black text-charcoal leading-tight mb-5">
              Request Your Free Estimate
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Fill out the form and one of our flooring specialists will contact
              you to schedule a convenient time to visit your home or project site.
            </p>
            <div className="space-y-4">
              {[
                "Free — no cost, no obligation",
                "We come to you at a time that works for you",
                "Accurate room measurements by our experts",
                "Detailed quote including materials & installation",
                "Residential & commercial projects welcome",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-white rounded-2xl border border-gray-200">
              <p className="text-sm font-semibold text-charcoal mb-1">Prefer to call?</p>
              <a
                href="tel:2508607847"
                className="text-primary font-black text-xl hover:text-accent transition-colors"
              >
                (250) 860-7847
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.15}>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <EstimateForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
