"use client"

import React, { useState } from 'react';
import {
  Truck,
  Phone,
  Mail,
  ChevronDown,
  Package,
  MapPin,
  Clock,
  ShieldCheck,
  HelpCircle,
  MessageSquare,
  Bike,
  User,
} from 'lucide-react';
import Link from 'next/link';

type App = 'customer' | 'agent';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: Record<App, FAQItem[]> = {
  customer: [
    {
      q: "How do I send a parcel with ZamPost Express?",
      a: "You can send a parcel in two ways: request a pick-up directly from the app and have your parcel collected from your location, or walk into any ZamPost branch and create your delivery digitally through the app.",
    },
    {
      q: "What delivery options are available?",
      a: "ZamPost Express offers same-day delivery for urgent documents and parcels, and next-day delivery for affordable shipments routed through ZamPost's branch network across Lusaka.",
    },
    {
      q: "How does proof of delivery work?",
      a: "Every delivery is confirmed with a secure OTP (one-time password) sent to the recipient. The recipient must provide this code to the delivery agent to complete the handover — ensuring only the right person receives your parcel.",
    },
    {
      q: "Can I track my parcel in real time?",
      a: "Yes. Once your order is placed, you can track your parcel's status in real time through the ZamPost Express app. You will receive status updates at each stage of the delivery.",
    },
    {
      q: "What types of items can I send?",
      a: "ZamPost Express is designed for documents, gifts, and everyday parcels. Items must comply with ZamPost's standard prohibited items policy. If you are unsure, contact our customer care team before placing an order.",
    },
    {
      q: "How do I cancel or modify an order?",
      a: "You can cancel an order before a rider is assigned through the app. Once a rider has been dispatched, please contact our customer care team immediately on +260 955 007 678.",
    },
    {
      q: "What payment methods are supported?",
      a: "ZamPost Express supports mobile money and other digital payment methods available in the app at checkout. Payment is required to confirm your order.",
    },
  ],
  agent: [
    {
      q: "How do I get started as a ZeeMove Courier agent?",
      a: "Download the ZeeMove Courier app, complete the registration process, and submit the required identity documents. Once verified, you will be able to accept delivery jobs assigned through the platform.",
    },
    {
      q: "How are delivery jobs assigned to me?",
      a: "Jobs are assigned based on your location and availability. You will only have access to your currently assigned job — other orders and customer information are not visible to you.",
    },
    {
      q: "How do I confirm a delivery is complete?",
      a: "Ask the recipient for their OTP code. Enter it in the ZeeMove Courier app to mark the delivery as complete. A timestamped digital record is created automatically.",
    },
    {
      q: "What do I do in an emergency or safety incident?",
      a: "Use the SOS button in the app to escalate directly to the ZeeMove operations desk. This connects you to support immediately. Always prioritise your safety.",
    },
    {
      q: "How and when do I get paid?",
      a: "Earnings are calculated based on completed deliveries. For payment schedule and payout details, contact the ZeeMove operations team via the support number.",
    },
    {
      q: "What happens if I cannot complete a delivery?",
      a: "If you are unable to deliver a parcel (e.g. recipient unavailable, address issues), contact the operations desk immediately through the app or via the support line so the order can be managed appropriately.",
    },
  ],
};

const AccordionItem: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4 text-sm md:text-base">{item.q}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-blue-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4">
          {item.a}
        </div>
      )}
    </div>
  );
};

export default function SupportPage() {
  const [activeApp, setActiveApp] = useState<App>('customer');

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
            <Link href="/marketing" className="hover:text-blue-600 transition-colors">About the Apps</Link>
            <Link href="/support" className="text-blue-600">Support</Link>
            <Link href="/" className="hover:text-blue-600 transition-colors">Privacy Notice</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-white/20 p-4 rounded-2xl mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">How can we help?</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Get support for ZamPost Express or ZeeMove Courier. Our team is here to help with orders, deliveries, and account questions.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <a
            href="tel:+260955007678"
            className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-400 hover:shadow-xl transition-all"
          >
            <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl inline-flex mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Call Customer Care</h3>
            <p className="text-slate-500 text-sm mb-4">Available for order and delivery support</p>
            <span className="text-2xl font-black text-blue-600">+260 955 007 678</span>
          </a>

          <a
            href="mailto:support@zampost.co.zm"
            className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-400 hover:shadow-xl transition-all"
          >
            <div className="bg-indigo-50 text-indigo-600 p-3 rounded-2xl inline-flex mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Email Support</h3>
            <p className="text-slate-500 text-sm mb-4">For non-urgent queries and documentation</p>
            <span className="text-lg font-bold text-indigo-600 underline underline-offset-4">support@zampost.co.zm</span>
          </a>
        </div>

        {/* App Selector */}
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <MessageSquare className="text-blue-600" size={24} /> Frequently Asked Questions
          </h2>
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setActiveApp('customer')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeApp === 'customer'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <User size={16} /> ZamPost Express
            </button>
            <button
              onClick={() => setActiveApp('agent')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeApp === 'agent'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Bike size={16} /> ZeeMove Courier
            </button>
          </div>

          <div className="space-y-3">
            {faqs[activeApp].map((item, idx) => (
              <AccordionItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* Quick Info Strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: <Package size={20} />, title: "Pick-up & Drop-off", desc: "Request from your location or walk into a ZamPost branch" },
            { icon: <Clock size={20} />, title: "Same-day & Next-day", desc: "Choose the delivery speed that suits your needs" },
            { icon: <MapPin size={20} />, title: "Real-time Tracking", desc: "Follow your parcel every step of the way" },
            { icon: <ShieldCheck size={20} />, title: "OTP Proof of Delivery", desc: "Secure handover confirmed with a one-time code" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="text-blue-600 mb-3">{item.icon}</div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Still Need Help CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-3">Still need help?</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Our customer care team is ready to assist with any order, tracking, or account issue. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+260955007678"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone size={18} /> +260 955 007 678
              </a>
              <a
                href="mailto:support@zampost.co.zm"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail size={18} /> support@zampost.co.zm
              </a>
            </div>
          </div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
          <p>&copy; 2026 IHM Southern Africa</p>
          <div className="flex gap-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">Privacy Notice</Link>
            <Link href="/marketing" className="hover:text-blue-600 transition-colors">About the Apps</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
