"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  Building2,
  ClipboardList,
  Lock,
  Share2,
  Calendar,
  UserCheck,
  Mail,
  ChevronUp,
  Truck,
  MapPin,
  Smartphone,
  RefreshCw,
  Users,
  FileText,
  Info,
} from 'lucide-react';

type SectionId =
  | 'introduction'
  | 'controller'
  | 'data-collected'
  | 'how-we-use'
  | 'sharing'
  | 'retention'
  | 'security'
  | 'your-rights'
  | 'children'
  | 'changes'
  | 'contact'
  | 'relationship';

interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'introduction', label: 'Introduction', icon: <Info size={16} /> },
  { id: 'controller', label: 'Data Controller', icon: <Building2 size={16} /> },
  { id: 'data-collected', label: 'Information We Collect', icon: <ClipboardList size={16} /> },
  { id: 'how-we-use', label: 'How We Use Your Data', icon: <Smartphone size={16} /> },
  { id: 'sharing', label: 'Sharing of Information', icon: <Share2 size={16} /> },
  { id: 'retention', label: 'Data Retention', icon: <Calendar size={16} /> },
  { id: 'security', label: 'Data Security', icon: <Lock size={16} /> },
  { id: 'your-rights', label: 'Your Rights', icon: <UserCheck size={16} /> },
  { id: 'children', label: "Children's Privacy", icon: <Users size={16} /> },
  { id: 'changes', label: 'Changes to This Notice', icon: <RefreshCw size={16} /> },
  { id: 'contact', label: 'Contact Us', icon: <Mail size={16} /> },
  { id: 'relationship', label: 'ZeeMove Platform', icon: <FileText size={16} /> },
];

export default function ZamPostPrivacyPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('introduction');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = [
        'introduction', 'controller', 'data-collected', 'how-we-use',
        'sharing', 'retention', 'security', 'your-rights', 'children',
        'changes', 'contact', 'relationship',
      ];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
            <Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link>
            <Link href="/" className="hover:text-blue-600 transition-colors">Privacy Notice</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center bg-white/20 p-4 rounded-2xl mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            Privacy Notice
          </h1>
          <p className="text-blue-100 text-lg font-semibold mb-2">ZamPost Express</p>
          <p className="text-blue-200 text-sm">Last Updated: 23rd April 2026</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10">

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">Contents</p>
              <nav className="space-y-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span className={activeSection === item.id ? 'text-blue-600' : 'text-slate-400'}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 space-y-10">

            {/* 1. Introduction */}
            <section id="introduction" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 text-blue-600 p-2 rounded-xl"><Info size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">1. Introduction</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  ZamPost Express is a customer-facing mobile application that enables users to request
                  delivery and logistics services, including parcel pickup and drop-off.
                </p>
                <p>
                  The ZamPost Express application is operated by <strong className="text-slate-900">IHM Southern Africa</strong>{' '}
                  ("we", "us", or "our") and forms part of the ZeeMove digital mobility and logistics platform.
                </p>
                <p>
                  This Privacy Notice explains how we collect, use, disclose, and protect your personal data
                  when you use the ZamPost Express mobile application ("App").
                </p>
              </div>
            </section>

            {/* 2. Data Controller */}
            <section id="controller" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl"><Building2 size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">2. Who is Responsible for Your Data</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                The data controller responsible for your personal data is:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-2 text-sm">
                <p className="font-bold text-slate-900 text-base">IHM Southern Africa</p>
                <p className="text-slate-600">699/100 Quantum Office Park, Platinum Road, Ibex Hill, Lusaka</p>
                <p className="text-slate-600">
                  Email:{' '}
                  <a href="mailto:helpdesk@tusobd.com" className="text-blue-600 hover:underline">
                    helpdesk@tusobd.com
                  </a>
                </p>
              </div>
            </section>

            {/* 3. Information We Collect */}
            <section id="data-collected" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-50 text-green-600 p-2 rounded-xl"><ClipboardList size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">3. Information We Collect</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                We collect only the data necessary to provide our services.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">3.1 Information You Provide</h3>
                  <ul className="space-y-2">
                    {['Name', 'Phone number', 'Email address (if applicable)', 'Delivery details (pickup and drop-off addresses, parcel information)'].map(item => (
                      <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <MapPin size={16} className="text-blue-500" /> 3.2 Location Data
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    ZamPost Express may access your device location <strong>only while you are actively using the App</strong>.
                    This includes:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Determining your pickup location',
                      'Helping you select delivery addresses',
                      'Improving delivery accuracy',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                    ZamPost Express does <strong>not</strong> collect or access location data in the background
                    when the App is closed or not in use.
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Smartphone size={16} className="text-blue-500" /> 3.3 Usage Data
                  </h3>
                  <ul className="space-y-2">
                    {['App interactions', 'Order history', 'Device and log information (for diagnostics and performance)'].map(item => (
                      <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. How We Use Your Information */}
            <section id="how-we-use" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 text-blue-600 p-2 rounded-xl"><Smartphone size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">4. How We Use Your Information</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">We use your data to:</p>
              <ul className="space-y-3">
                {[
                  'Process and fulfill delivery requests',
                  'Connect you with riders and delivery partners',
                  'Provide real-time updates on your delivery (while the App is in use)',
                  'Communicate with you regarding your orders',
                  'Improve the functionality and reliability of the App',
                  'Ensure safety, prevent fraud, and comply with legal obligations',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Sharing of Information */}
            <section id="sharing" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-50 text-purple-600 p-2 rounded-xl"><Share2 size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">5. Sharing of Information</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">We may share your information with:</p>
              <div className="space-y-5">
                {[
                  {
                    title: '5.1 Delivery Partners (Riders)',
                    items: ['Name', 'Pickup and delivery locations', 'Contact details (limited to what is necessary)'],
                  },
                  {
                    title: '5.2 Service Providers',
                    items: ['Payment processing', 'Cloud hosting and infrastructure', 'Analytics and system monitoring'],
                    prefix: 'Third-party providers who support:',
                  },
                  {
                    title: '5.3 Legal and Regulatory Authorities',
                    items: ['Where required to comply with applicable laws or legal processes.'],
                  },
                ].map(group => (
                  <div key={group.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                    <h3 className="font-bold text-slate-900 mb-2 text-sm">{group.title}</h3>
                    {group.prefix && <p className="text-slate-600 text-sm mb-2">{group.prefix}</p>}
                    <ul className="space-y-1.5">
                      {group.items.map(item => (
                        <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800 font-semibold">
                We do not sell your personal data.
              </div>
            </section>

            {/* 6. Data Retention */}
            <section id="retention" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-50 text-orange-600 p-2 rounded-xl"><Calendar size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">6. Data Retention</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We retain your data only for as long as necessary to:
              </p>
              <ul className="space-y-3">
                {[
                  'Provide our services',
                  'Comply with legal and regulatory obligations',
                  'Resolve disputes and enforce agreements',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 7. Data Security */}
            <section id="security" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-50 text-red-600 p-2 rounded-xl"><Lock size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">7. Data Security</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data
                against unauthorized access, loss, misuse, or alteration.
              </p>
            </section>

            {/* 8. Your Rights */}
            <section id="your-rights" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-50 text-teal-600 p-2 rounded-xl"><UserCheck size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">8. Your Rights</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Depending on applicable laws, you may have the right to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Access your personal data',
                  'Request correction of inaccurate data',
                  'Request deletion of your data',
                  'Object to or restrict certain processing activities',
                ].map(right => (
                  <div key={right} className="flex items-start gap-3 bg-teal-50 border border-teal-100 rounded-xl p-4 text-sm text-teal-900">
                    <UserCheck size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                    {right}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-600 text-sm">
                To exercise your rights, please contact us using the details in{' '}
                <button onClick={() => scrollTo('contact')} className="text-blue-600 hover:underline font-semibold">
                  Section 11
                </button>.
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section id="children" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink-50 text-pink-600 p-2 rounded-xl"><Users size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">9. Children's Privacy</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                ZamPost Express is not intended for use by individuals under the age of 18. We do not
                knowingly collect personal data from children.
              </p>
            </section>

            {/* 10. Changes to This Notice */}
            <section id="changes" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-slate-100 text-slate-600 p-2 rounded-xl"><RefreshCw size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">10. Changes to This Privacy Notice</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Notice from time to time. Any changes will be posted on this
                page with an updated effective date.
              </p>
            </section>

            {/* 11. Contact Us */}
            <section id="contact" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 text-blue-600 p-2 rounded-xl"><Mail size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">11. Contact Us</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                If you have any questions about this Privacy Notice or how your data is handled, please contact:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail size={16} className="text-blue-500 flex-shrink-0" />
                  <span>
                    Email:{' '}
                    <a href="mailto:helpdesk@tusobd.com" className="text-blue-600 hover:underline font-semibold">
                      helpdesk@tusobd.com
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>699/100 Quantum Office Park, Platinum Road, Ibex Hill, Lusaka</span>
                </div>
              </div>
            </section>

            {/* 12. Relationship with ZeeMove Platform */}
            <section id="relationship" className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl"><FileText size={20} /></div>
                <h2 className="text-xl font-black text-slate-900">12. Relationship with ZeeMove Platform</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                ZamPost Express operates as part of the broader ZeeMove platform, which provides digital
                infrastructure for mobility and logistics services.
              </p>
              <p className="text-slate-600 leading-relaxed">
                While shared infrastructure may be used, this Privacy Notice applies specifically to the
                ZamPost Express customer application and its data processing activities.
              </p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors"
                >
                  <Shield size={16} /> View ZeeMove Platform Privacy Notice
                </Link>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl shadow-lg shadow-blue-200 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 px-4 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
          <p>&copy; 2026 IHM Southern Africa</p>
          <div className="flex gap-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">ZeeMove Privacy Notice</Link>
            <Link href="/marketing" className="hover:text-blue-600 transition-colors">About the Apps</Link>
            <Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
