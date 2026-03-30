import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroSection from "@/components/HeroSection";
import ShowroomGallery from "@/components/ShowroomGallery";
import BrandPartners from "@/components/BrandPartners";
import VideoGallery from "@/components/VideoGallery";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Phone, ArrowRight, CheckCircle2, Star, Ruler, Package, Wrench, Award, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Kelowna Flooring Superstore | In-Stock Flooring For Life",
  description:
    "Kelowna's premier flooring store. Kelowna showroom with in-stock laminate, hardwood, carpet, vinyl plank, tile & more. Expert installation. Free estimates. Call (250) 860-7847.",
};

const flooring = [
  { name: "Laminate", href: "/flooring/laminate", gradient: "from-amber-800 to-yellow-900", icon: "🪵" },
  { name: "Hardwood", href: "/flooring/hardwood", gradient: "from-stone-700 to-amber-900", icon: "🌳" },
  { name: "Carpet", href: "/flooring/carpet", gradient: "from-violet-800 to-purple-900", icon: "🏡" },
  { name: "Vinyl Plank", href: "/flooring/vinyl-plank", gradient: "from-teal-700 to-cyan-900", icon: "💧" },
  { name: "Linoleum Sheet", href: "/flooring/linoleum-sheet", gradient: "from-emerald-800 to-green-900", icon: "🌿" },
  { name: "Tile", href: "/flooring/tile", gradient: "from-slate-600 to-gray-900", icon: "⬛" },
  { name: "Commercial", href: "/flooring/commercial", gradient: "from-gray-700 to-slate-900", icon: "🏢" },
  { name: "Area Rugs", href: "/flooring/area-rugs", gradient: "from-rose-800 to-pink-900", icon: "🎨" },
];

const whyUs = [
  {
    icon: Package,
    title: "In-Stock Selection",
    description:
      "Our Kelowna showroom is packed with in-stock flooring ready to go home with you today — no waiting, no back-orders.",
  },
  {
    icon: Ruler,
    title: "Free Estimates",
    description:
      "We come to you. Our experts measure your space and provide a detailed, no-obligation quote — completely free.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description:
      "Our skilled installation crews have decades of experience. We handle removal, prep, and a flawless install every time.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "We stand behind every product we sell and every floor we install. Your satisfaction is our commitment.",
  },
];

const testimonials = [
  {
    name: "Rob Hutchings",
    location: "Google Review",
    rating: 5,
    text: "We recently purchased carpet for three rooms in our house through Kelowna Flooring Superstore. From the minute we entered their showroom, the whole experience was seamless and pleasant. Both Selina and Shaun were extremely helpful and knowledgeable about their products, and offered very efficient response and delivery times. When it came to installation, Cory was punctual, cordial, helpful, and excellent at his job. We couldn't be more pleased with the entire experience, and would highly recommend them!",
  },
  {
    name: "Jenni I.",
    location: "Google Review",
    rating: 5,
    text: "We had a fantastic experience with Kelowna Flooring Superstore. Shaun and Selina were incredibly helpful when we were choosing our flooring. They were knowledgeable, patient, and really went out of their way to work with our timeline, which we appreciated so much. The installation was done by Jessie and Clarke, and they truly went above and beyond. Their workmanship was excellent, they were professional and respectful in our home, and the finished result looks amazing. We are already planning to use them again for our upstairs flooring in the next few months and would highly recommend Kelowna Flooring Superstore to anyone looking for great service and quality work.",
  },
  {
    name: "Thomas",
    location: "Google Local Guide",
    rating: 5,
    text: "From start to finish, the entire carpet installation experience was seamless. The team was incredibly responsive at every step, from helping me choose the right product to coordinating the installation. A special shout-out to Cory, the installer — professional, efficient, and clearly skilled at what he does. The workmanship is excellent, and the whole process felt easy and well-managed. Highly recommend.",
  },
];

const stats = [
  { value: "5★", unit: "", label: "Google Rated" },
  { value: "8+", unit: "", label: "Flooring Types" },
  { value: "30+", unit: "yrs", label: "Experience" },
  { value: "100%", unit: "", label: "Satisfaction" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Animated Stats bar */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimateOnScroll delay={0} className="text-center">
            <div className="text-4xl font-black text-white">
              <AnimatedCounter to={5} suffix="★" />
            </div>
            <div className="text-white/60 text-sm font-medium mt-1">Google Rated</div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.08} className="text-center">
            <div className="text-4xl font-black text-white">
              <AnimatedCounter to={8} suffix="+" />
            </div>
            <div className="text-white/60 text-sm font-medium mt-1">Flooring Types</div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.16} className="text-center">
            <div className="text-4xl font-black text-white">
              <AnimatedCounter to={30} suffix="+" />
            </div>
            <div className="text-white/60 text-sm font-medium mt-1">Years Experience</div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.24} className="text-center">
            <div className="text-4xl font-black text-white">
              <AnimatedCounter to={100} suffix="%" />
            </div>
            <div className="text-white/60 text-sm font-medium mt-1">Satisfaction</div>
          </AnimateOnScroll>
        </div>
      </section>

      <BrandPartners />

      {/* Flooring categories */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Our Collection</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              Every Type of Flooring,
              <span className="gradient-text"> In Stock</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              From cozy carpet to stunning hardwood — browse our complete range of
              flooring options available in our Kelowna showroom.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {flooring.map((f, i) => (
              <AnimateOnScroll key={f.name} delay={i * 0.06}>
                <Link
                  href={f.href}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${f.gradient} p-6 min-h-[160px] flex flex-col justify-between card-hover`}
                >
                  <span className="text-3xl">{f.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {f.name}
                    </h3>
                    <div className="flex items-center gap-1 text-white/60 text-sm mt-1 group-hover:text-accent transition-colors">
                      <span>Explore</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-2xl" />
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <Link href="/flooring" className="btn-primary text-sm">
              View All Flooring Types <ArrowRight size={16} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="right">
              <span className="section-label mb-4">Why Choose Us</span>
              <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4 leading-tight">
                The Okanagan&apos;s Most Trusted
                <span className="gradient-text"> Flooring Store</span>
              </h2>
              <p className="text-gray-500 text-lg mt-5 leading-relaxed">
                For over 30 years, Kelowna Flooring Superstore has been the go-to
                destination for homeowners and contractors across the Central Okanagan
                who want quality flooring at competitive prices — backed by expert
                service.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Locally owned and operated",
                  "Massive in-stock inventory — no waiting",
                  "Professional measurement & installation",
                  "Free, no-obligation estimates",
                  "Residential & commercial projects",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary text-sm">
                  Our Story <ArrowRight size={16} />
                </Link>
                <a href="tel:2508607847" className="btn-outline text-sm !text-charcoal !border-gray-200 hover:!border-primary">
                  <Phone size={16} className="text-primary" /> (250) 860-7847
                </a>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 0.1}>
                  <div className="bg-light rounded-2xl p-6 card-hover">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In-stock spotlight */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-accent/15 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-accent/25 mb-4">
              In Stock Now
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
              Ready to Ship <span className="text-accent">Today</span>
            </h2>
            <p className="text-white/50 text-lg mt-3 max-w-xl mx-auto">
              No waiting. No back-orders. These popular styles are in our showroom right now.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "In Stock",
                title: "Vinyl Plank",
                desc: "Waterproof, scratch-resistant, and beautiful. Perfect for any room.",
                imgSrc: "https://www.kelownaflooringsuperstore.com/media/website_designs/3/vinyl-stock-112016.webp",
                href: "/flooring/vinyl-plank",
              },
              {
                label: "Sale",
                title: "Carpet",
                desc: "Soft, warm, and stain-resistant options from top brands.",
                imgSrc: "https://www.kelownaflooringsuperstore.com/media/website_designs/3/olivia-room.webp",
                href: "/flooring/carpet",
                badge: "On Sale",
              },
              {
                label: "In Stock",
                title: "Laminate",
                desc: "Real wood look at a fraction of the price. Wide range of styles.",
                imgSrc: "https://www.kelownaflooringsuperstore.com/media/website_designs/3/laminatenov2016.webp",
                href: "/flooring/laminate",
              },
            ].map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <Link
                  href={p.href}
                  className="group block bg-white/5 border border-white/8 rounded-2xl overflow-hidden card-hover"
                >
                  <div className="relative h-52 bg-charcoal overflow-hidden">
                    <Image
                      src={p.imgSrc}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    {p.badge && (
                      <span className="absolute top-3 right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold text-lg">{p.title}</h3>
                    <p className="text-white/50 text-sm mt-1 leading-relaxed">{p.desc}</p>
                    <div className="flex items-center gap-1.5 text-accent text-sm font-semibold mt-3 group-hover:gap-2.5 transition-all">
                      Shop Now <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="section-label mb-4">Our Showroom</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              See It In Person
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Come explore our Kelowna showroom and see the full selection for yourself.
            </p>
          </AnimateOnScroll>
          <ShowroomGallery />
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Watch &amp; Explore
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
              Take a Virtual Tour
            </h2>
            <p className="text-white/50 text-lg mt-3 max-w-xl mx-auto">
              Browse our showroom from home. Click any clip to watch full-screen.
            </p>
          </AnimateOnScroll>
          <VideoGallery />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">Real Reviews</span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal mt-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-500 text-base mt-3">
              Verified Google reviews from real Kelowna customers.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 card-hover h-full flex flex-col shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-charcoal text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.location}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <a
              href="https://share.google/PuQ3CuaKFDmxceU8t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-charcoal hover:text-primary font-semibold px-6 py-3 rounded-xl text-sm transition-all card-hover"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Read All Google Reviews
              <ExternalLink size={14} />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)",
          }}
        />
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/70 text-lg mt-4 leading-relaxed">
            Visit our Kelowna showroom or book a free in-home estimate.
            Our flooring experts are ready to help you find the perfect floor.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1">
              Get Free Estimate
            </Link>
            <a
              href="tel:2508607847"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all"
            >
              <Phone size={18} /> (250) 860-7847
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
