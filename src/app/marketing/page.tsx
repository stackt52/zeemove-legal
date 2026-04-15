import React from 'react';
import {
  Truck,
  Package,
  MapPin,
  Clock,
  ShieldCheck,
  Smartphone,
  Building2,
  Bike,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-200">
              <Truck size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">ZeeMove</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-500">
            <Link href="/marketing" className="text-blue-600">About the Apps</Link>
            <Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link>
            <Link href="/" className="hover:text-blue-600 transition-colors">Privacy Notice</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <Star size={12} /> Powered by ZeeMove
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            ZamPost Express
          </h1>
          <p className="text-2xl md:text-3xl text-blue-200 font-semibold mb-6">
            Send smarter. Deliver with confidence.
          </p>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            ZamPost Express is Zambia's national courier service — bringing ZamPost's trusted branch network together with ZeeMove's digital logistics and mobility platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Support <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+260955007678"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors inline-flex items-center justify-center gap-2 border border-white/20"
            >
              <Phone size={20} /> +260 955 007 678
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Brand Statement */}
        <div className="bg-white rounded-3xl border border-slate-200 p-10 md:p-14 mb-16 text-center shadow-sm">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
            National infrastructure.<br />
            <span className="text-blue-600">Digital innovation.</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            ZamPost Express is a digitally orchestrated courier platform supporting branch-based dispatch and on-demand customer pick-ups, with same-day and next-day delivery. The service combines ZamPost's nationwide infrastructure with ZeeMove's rider and technology platform.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">ZamPost Express</p>
            <h2 className="text-3xl font-black text-slate-900">Key Features</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Package size={24} />,
                title: "On-demand Pick-up",
                desc: "Request a pick-up directly from your phone and have your parcel collected from any location in Lusaka.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: <Building2 size={24} />,
                title: "Branch Dispatch",
                desc: "Walk into any ZamPost branch and create your delivery digitally through the app.",
                color: "bg-indigo-50 text-indigo-600",
              },
              {
                icon: <Clock size={24} />,
                title: "Same-day & Next-day",
                desc: "Choose same-day delivery for urgent items, or next-day delivery for cost-effective shipments through ZamPost's network.",
                color: "bg-amber-50 text-amber-600",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Secure OTP Delivery",
                desc: "Every handover is confirmed with a one-time password — ensuring only the right person receives your parcel.",
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: <MapPin size={24} />,
                title: "Real-time Tracking",
                desc: "Follow your parcel's status live, from pick-up to drop-off, with full visibility at every stage.",
                color: "bg-rose-50 text-rose-600",
              },
              {
                icon: <Smartphone size={24} />,
                title: "Dedicated Customer Support",
                desc: "Customer care and operational support built into the platform, accessible from the Help and Order screens.",
                color: "bg-purple-50 text-purple-600",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-7 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className={`${feature.color} p-3 rounded-2xl inline-flex mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Apps Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">The Platform</p>
            <h2 className="text-3xl font-black text-slate-900">Two Apps, One Platform</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">The ZamPost Express platform operates through two dedicated apps — one for customers, one for delivery agents.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Customer App */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-white/20 p-3 rounded-2xl inline-flex mb-6">
                  <Package size={28} />
                </div>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Customer App</p>
                <h3 className="text-2xl font-black mb-3">ZamPost Express</h3>
                <p className="text-xs text-blue-100 italic mb-5">Powered by ZeeMove</p>
                <ul className="space-y-3">
                  {[
                    "Send parcels with on-demand pick-up",
                    "Walk-in branch dispatch",
                    "Track orders in real time",
                    "OTP-secured delivery confirmation",
                    "Same-day and next-day options",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-blue-50">
                      <CheckCircle2 size={16} className="text-blue-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            </div>

            {/* Agent App */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-white/10 p-3 rounded-2xl inline-flex mb-6">
                  <Bike size={28} />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Delivery Agent App</p>
                <h3 className="text-2xl font-black mb-3">ZeeMove Courier</h3>
                <p className="text-xs text-slate-500 italic mb-5">For ZeeMove delivery agents</p>
                <ul className="space-y-3">
                  {[
                    "Receive and manage assigned deliveries",
                    "Access job details for current orders only",
                    "Confirm delivery via OTP handover",
                    "Built-in SOS button for safety escalation",
                    "Timestamped digital completion records",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Trust & Compliance */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">Trust & Compliance</p>
            <h2 className="text-3xl font-black text-slate-900">Built on Trust</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck size={22} />,
                title: "Data Protection",
                desc: "Personal data is used only for order fulfillment, identity verification, proof of delivery, and customer support. Governed under the Zambian Data Protection Act, 2021.",
                color: "border-emerald-200 bg-emerald-50",
                iconColor: "text-emerald-600",
              },
              {
                icon: <CheckCircle2 size={22} />,
                title: "Proof of Delivery",
                desc: "OTP-based confirmation, digital status capture, and timestamped completion records ensure every delivery is accountable.",
                color: "border-blue-200 bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                icon: <Building2 size={22} />,
                title: "Role-Based Access",
                desc: "Branch users, delivery agents, and admins each have access only to what they need — nothing more.",
                color: "border-indigo-200 bg-indigo-50",
                iconColor: "text-indigo-600",
              },
            ].map((item, idx) => (
              <div key={idx} className={`border rounded-3xl p-7 ${item.color}`}>
                <div className={`${item.iconColor} mb-4`}>{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App Store Listings Info */}
        <div className="bg-white border border-slate-200 rounded-3xl p-10 mb-16">
          <div className="text-center mb-8">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Available On</p>
            <h2 className="text-2xl font-black text-slate-900">Google Play & App Store</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-600">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Google Play</p>
              <p className="font-bold text-slate-900 mb-1">ZamPost Express</p>
              <p className="mb-1 text-slate-500">Category: Business</p>
              <p className="italic leading-relaxed">"Send parcels anywhere in Lusaka with ZamPost's digital Pick & Drop service."</p>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Apple App Store</p>
              <p className="font-bold text-slate-900 mb-1">ZamPost Express</p>
              <p className="mb-1 text-slate-500">Category: Business · Utilities</p>
              <p className="italic leading-relaxed">"Fast, secure parcel delivery with ZamPost—powered by ZeeMove."</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to send?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              From branch to doorstep — send parcels fast with ZamPost Express, powered by ZeeMove for reliable same-day and next-day delivery across Lusaka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Support <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
          <p>&copy; 2026 IHM Southern Africa</p>
          <div className="flex gap-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">Privacy Notice</Link>
            <Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
