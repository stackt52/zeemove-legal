"use client"

import React, {useState, useEffect, ReactNode} from 'react';
import Link from 'next/link';
import {
  Shield,
  Building2,
  ClipboardList,
  Lock,
  Share2,
  Globe,
  Calendar,
  UserCheck,
  Mail,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  Truck,
  CreditCard,
  MapPin,
  Mic,
  Camera,
  Search,
  Smartphone,
  History,
  Info,
  Users,
  MessageSquare,
  FileText,
  RefreshCw, PhoneIcon
} from 'lucide-react';

// Type definitions for the navigation sections
type SectionId =
  'purpose'
  | 'controller'
  | 'data-processing'
  | 'mandatory-consent'
  | 'safety'
  | 'security'
  | 'sharing'
  | 'transfers'
  | 'retention'
  | 'rights'
  | 'updates'
  | 'contact';

interface NavItem {
  id: SectionId;
  label: string;
  icon: ReactNode;
}

interface DataRow {
  icon: ReactNode;
  data: string;
  purpose: string;
  basis: string;
  color: string;
}

interface RightInfo {
  title: string;
  desc: string;
  code?: string;
}

const Content: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('purpose');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const sections: SectionId[] = ['purpose', 'controller', 'data-processing', 'mandatory-consent', 'safety', 'security', 'sharing', 'transfers', 'retention', 'rights', 'updates', 'contact'];

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });

      if (current) setActiveSection(current);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {id: 'purpose', label: 'Purpose', icon: <Shield size={18}/>},
    {id: 'controller', label: 'Data Controller', icon: <Building2 size={18}/>},
    {id: 'data-processing', label: 'Data Activities', icon: <ClipboardList size={18}/>},
    {id: 'mandatory-consent', label: 'Mandatory & Consent', icon: <CheckCircle2 size={18}/>},
    {id: 'safety', label: 'Safety Features', icon: <Lock size={18}/>},
    {id: 'security', label: 'Data Security', icon: <Lock size={18}/>},
    {id: 'sharing', label: 'Data Sharing', icon: <Share2 size={18}/>},
    {id: 'transfers', label: 'Cross-Border', icon: <Globe size={18}/>},
    {id: 'retention', label: 'Data Retention', icon: <Calendar size={18}/>},
    {id: 'rights', label: 'Your Rights', icon: <UserCheck size={18}/>},
    {id: 'updates', label: 'Updates', icon: <RefreshCw size={18}/>},
    {id: 'contact', label: 'Contact Us', icon: <Mail size={18}/>},
  ];

  const scrollTo = (id: SectionId): void => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const processingData: DataRow[] = [
    {
      icon: <UserCheck size={14}/>,
      data: "Name/Pseudonym, Phone Number",
      purpose: "Registration, identification, communication, payment processing",
      basis: "Contract",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      icon: <MapPin size={14}/>,
      data: "Destination/Delivery Addresses",
      purpose: "Show local services, fulfill orders, quick selection",
      basis: "Contract",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      icon: <Info size={14}/>,
      data: "Customer Preferences",
      purpose: "Fulfill orders according to preferences",
      basis: "Contract",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      icon: <CreditCard size={14}/>,
      data: "Card, E-wallet, Mobile Money Details",
      purpose: "Process payments",
      basis: "Contract",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      icon: <Camera size={14}/>,
      data: "Your Image",
      purpose: "Driver safety, account holder verification (night orders), identity confirmation",
      basis: "Consent",
      color: "bg-purple-50 text-purple-700"
    },
    {
      icon: <Mic size={14}/>,
      data: "Voice Recording",
      purpose: "Safety incidents, law enforcement evidence, customer support quality",
      basis: "Legit Interest / Public Interest",
      color: "bg-blue-50 text-blue-700"
    },
    {
      icon: <Mail size={14}/>,
      data: "Email Address",
      purpose: "Service info, support, marketing/offers (with consent)",
      basis: "Contract / Consent",
      color: "bg-amber-50 text-amber-700"
    },
    {
      icon: <Users size={14}/>,
      data: "User's Contacts",
      purpose: "Order taxi for another, share itinerary",
      basis: "Consent",
      color: "bg-purple-50 text-purple-700"
    },
    {
      icon: <MessageSquare size={14}/>,
      data: "Feedback, Ratings, Reviews",
      purpose: "Improve services, publish business reviews",
      basis: "Legit Interest / Consent",
      color: "bg-blue-50 text-blue-700"
    },
    {
      icon: <Smartphone size={14}/>,
      data: "IP, Device ID, OS, Browser Details",
      purpose: "Secure access, IT security, fraud prevention",
      basis: "Legitimate Interest",
      color: "bg-blue-50 text-blue-700"
    },
    {
      icon: <MapPin size={14}/>,
      data: "Geolocation Data",
      purpose: "Assign drivers, check availability, sharing (with consent)",
      basis: "Contract / Consent",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      icon: <Search size={14}/>,
      data: "Advertising ID, Search History",
      purpose: "Targeted ads, relevant offers, app improvement",
      basis: "Consent / Legit Interest",
      color: "bg-amber-50 text-amber-700"
    },
    {
      icon: <History size={14}/>,
      data: "Order Details & History",
      purpose: "Order history, repeat features, fraud prevention",
      basis: "Contract / Legit Interest",
      color: "bg-emerald-50 text-emerald-700"
    },
  ];

  const zeeMovePayData: DataRow[] = [
    {
      icon: <FileText size={14}/>,
      data: "ID Photo/Scan, National ID Details",
      purpose: "Registration, AML/KYC verifications, fraud prevention",
      basis: "Contract / Legal Obligation",
      color: "bg-rose-50 text-rose-700"
    },
    {
      icon: <Info size={14}/>,
      data: "Residential Address, Proof of Address, DOB",
      purpose: "Registration, AML/KYC verifications",
      basis: "Contract / Legal Obligation",
      color: "bg-rose-50 text-rose-700"
    },
    {
      icon: <History size={14}/>,
      data: "Transaction History, Balance, Fees",
      purpose: "Electronic funds transfer, bill payments, statement generation",
      basis: "Contract",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      icon: <AlertTriangle size={14}/>,
      data: "Suspicious Transaction Data",
      purpose: "Detect & report suspicious activity to regulators",
      basis: "Legal Obligation",
      color: "bg-rose-50 text-rose-700"
    },
  ];

  const userRights: RightInfo[] = [
    {
      title: "Right of Access",
      desc: "Confirmation of held data, purposes, categories, and recipients.",
      code: "Sec. 54"
    },
    {
      title: "Right to Correction",
      desc: "Rectify inaccurate, misleading, outdated, or incomplete data.",
      code: "Sec. 56"
    },
    {
      title: "Right to Erasure",
      desc: "Request deletion when data is no longer necessary or processed unlawfully.",
      code: "Sec. 57"
    },
    {
      title: "Right to Restriction",
      desc: "Limit processing if accuracy is contested or processing is unlawful.",
      code: "Sec. 57"
    },
    {
      title: "Right to Data Portability",
      desc: "Receive data in a structured, machine-readable format.",
      code: "Sec. 58"
    },
    {
      title: "Right to Object",
      desc: "Object to processing for legitimate interests or direct marketing.",
      code: "Sec. 59"
    },
    {
      title: "Right to Withdraw Consent",
      desc: "Withdraw consent at any time for consent-based processing.",
      code: "Sec. 59"
    },
    {
      title: "Right regarding Automated Decisions",
      desc: "Not to be subject to decisions based solely on automated processing/profiling.",
      code: "Sec. 59"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-200">
              <Truck size={24}/>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">ZeeMove</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-500">
            <Link href="/marketing" className="hover:text-blue-600 transition-colors">About the Apps</Link>
            <Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link>
            <span className="text-xs text-slate-400 uppercase tracking-widest">Last Updated: January 2026</span>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          <aside className="lg:w-72 hidden lg:block sticky top-28 self-start">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                      : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-900'
                  }`}
                >
                  <span
                    className={`${activeSection === item.id ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'} mr-3`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 md:p-12">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                Privacy Notice
              </h1>

              <section id="purpose" className="scroll-mt-28 mb-16">
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  ZeeMove provides mobile and web-based applications offering a wide range of services, including
                  ride-hailing, food and package delivery, e-commerce, and fintech services.
                </p>
                <div
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm">
                  <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                    <Shield className="mr-2 text-blue-600" size={20}/> Purpose
                  </h2>
                  <div className="space-y-4 text-blue-800 leading-relaxed">
                    <p className="italic">
                      You entrust us with your personal data, and we take this responsibility seriously. We are
                      committed to protecting your privacy, and to being transparent about how we handle your
                      information.
                    </p>
                    <p>
                      This Privacy Notice explains what personal data we collect, how and why we use and share it, as
                      well as the rights you have as a data subject.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="mb-16 border-slate-100"/>

              <section id="controller" className="scroll-mt-28 mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Building2 className="text-blue-600 mr-3"/> Who Is Processing Your Personal Data?
                </h3>
                <div className="space-y-6 text-slate-600 text-lg">
                  <p>
                    <strong className="text-slate-900 underline underline-offset-4 decoration-blue-200">Data
                      Controller:</strong> <strong className="text-slate-900">ZeeMove</strong> is a Zambian-based
                    digital mobility delivery platform operated by <strong className="text-slate-900">IHM</strong>. IHM
                    is the data controller responsible for determining the purposes and means of processing personal
                    data of users in Zambia.
                  </p>
                  <p className="text-sm border-l-2 border-slate-200 pl-4 py-1">
                    Where ZeeMove jointly determines purposes with third parties (e.g., payment or verification
                    partners), they may act as joint or independent controllers. ZeeMove remains the primary contact
                    point unless otherwise communicated.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">Authentication and Third-Party Access</h4>
                    <p className="text-sm">ZeeMove may use third-party authentication or identity services for secure
                      access. These services process personal data in accordance with their own privacy notices and
                      applicable law.</p>
                  </div>
                </div>
              </section>

              <section id="data-processing" className="scroll-mt-28 mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <ClipboardList className="text-blue-600 mr-3"/> What Personal Data Is Processed, How, and Why?
                </h3>
                <p className="text-slate-500 mb-8 text-sm uppercase font-semibold tracking-wider">General ZeeMove
                  Services</p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-12">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50 text-left">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Categories of
                        data
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Purposes</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Legal Bases
                      </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                    {processingData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-400">{row.icon}</span>
                            <span className="text-sm font-semibold text-slate-900 leading-tight">{row.data}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600 leading-relaxed">{row.purpose}</td>
                        <td className="px-6 py-5">
                            <span
                              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${row.color}`}>
                              {row.basis}
                            </span>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-500 mb-8 text-sm uppercase font-semibold tracking-wider">For ZeeMove Pay Users
                  Only</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50 text-left">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Categories of
                        data
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Purposes</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Legal Bases
                      </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                    {zeeMovePayData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-400">{row.icon}</span>
                            <span className="text-sm font-semibold text-slate-900 leading-tight">{row.data}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600 leading-relaxed">{row.purpose}</td>
                        <td className="px-6 py-5">
                            <span
                              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${row.color}`}>
                              {row.basis}
                            </span>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="mandatory-consent" className="scroll-mt-28 mb-16">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-rose-50 rounded-3xl border border-rose-100">
                    <h4 className="text-xl font-bold text-rose-900 mb-4 flex items-center">
                      <AlertTriangle className="mr-3 text-rose-600" size={24}/> Mandatory Data
                    </h4>
                    <p className="text-rose-800 leading-relaxed">
                      Certain personal data is mandatory to create and use a ZeeMove account, including <strong>name or
                      pseudonym, phone number, and location data</strong> required to place an order or accept a
                      delivery. Failure to provide mandatory data may result in inability to access core platform
                      features.
                    </p>
                  </div>
                  <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                    <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
                      <CheckCircle2 className="mr-3 text-indigo-600" size={24}/> Consent Management
                    </h4>
                    <p className="text-indigo-800 leading-relaxed">
                      Where processing is based on consent, you may <strong>refuse or withdraw consent at any
                      time</strong> without affecting your ability to use core services, subject to functionality
                      limitations. Consent preferences may be managed through the application or by contacting ZeeMove.
                    </p>
                  </div>
                </div>
              </section>

              <section id="safety" className="scroll-mt-28 mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Lock className="text-blue-600 mr-3"/> Safety and Incident Recording
                </h3>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Where enabled, audio, image, or other recording features are safety mechanisms and are <strong>activated
                    only in exceptional circumstances</strong> such as threats, conflicts, or incidents.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed mt-4 font-medium italic">
                    Users will be notified where required by law, and such data is used strictly for security, dispute
                    resolution, and lawful investigations.
                  </p>
                </div>
              </section>

              <section id="security" className="scroll-mt-28 mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Shield className="text-blue-600 mr-3"/> How Is Your Personal Data Protected?
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  ZeeMove implements appropriate technical and organisational security measures to protect personal data
                  against unauthorised access, loss, misuse, alteration, or disclosure. Access is restricted to
                  authorised personnel and service providers on a <strong>need-to-know basis</strong>, subject to
                  confidentiality obligations.
                </p>
              </section>

              <section id="sharing" className="scroll-mt-28 mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <Share2 className="text-blue-600 mr-3"/> Who Do We Share Your Personal Data with?
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-600">We share data with parties involved in service provision:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Partners involved in orders and software solutions",
                      "Payment, E-wallet, and Mobile Money service providers",
                      "Insurance companies",
                      "Electronic payment functionality and AML/KYC partners",
                      "Virtual bank card issuers (where relevant)",
                      "Partners providing loans to ZeeMove Pay users",
                      "Affiliates providing authentication tools",
                      "Infrastructure providers (servers, storage, etc.)",
                      "Affiliates and third parties assisting with support",
                      "Law enforcement & Financial regulators (where legally required)",
                      "Advertising and Analytics service providers"
                    ].map((item, idx) => (
                      <div key={idx}
                           className="flex items-start p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 hover:bg-white hover:shadow-md transition-all">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"/>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="transfers" className="scroll-mt-28 mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Globe className="text-blue-600 mr-3"/> Cross Border Transfers
                </h3>
                <div className="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden shadow-xl">
                  <div className="relative z-10">
                    <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                      Parties we share your data with may be located in different countries. Where personal data is
                      transferred outside Zambia, ZeeMove ensures appropriate safeguards are in place in accordance with
                      the <strong>Data Protection Act, 2021</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        "Standard Contractual Clauses (SCCs)",
                        "Local law assessment of transfer countries",
                        "Authorisation from Data Protection Authority",
                        "Enhanced Tech & Org security measures"
                      ].map((item, idx) => (
                        <div key={idx}
                             className="flex items-center space-x-3 text-sm text-blue-200 bg-white/5 p-4 rounded-xl border border-white/10">
                          <Globe size={16}/>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"/>
                </div>
              </section>

              <section id="retention" className="scroll-mt-28 mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Calendar className="text-blue-600 mr-3"/> Data Retention
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Personal data is retained only for as long as necessary to fulfil the purposes for which it was
                  collected, comply with legal and regulatory requirements, and protect ZeeMove’s lawful interests.
                  Certain data may be retained after account deletion where required by law or for dispute resolution.
                </p>
              </section>

              <section id="rights" className="scroll-mt-28 mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <UserCheck className="text-blue-600 mr-3"/> Your Rights as a Data Subject
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  In accordance with the <strong>Zambian Data Protection Act, No. 3 of 2021</strong>, you are entitled
                  to exercise the following rights:
                </p>
                <div className="grid gap-4">
                  {userRights.map((right, idx) => (
                    <div key={idx}
                         className="group flex items-start p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all text-left">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-slate-900">{right.title}</h4>
                          <span
                            className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-widest">{right.code}</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">{right.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200 flex items-start">
                  <AlertTriangle className="text-amber-600 mt-1 mr-4 flex-shrink-0" size={24}/>
                  <div>
                    <h5 className="font-bold text-amber-900 mb-1">Right to Lodge a Complaint</h5>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      If you believe your rights under the Data Protection Act have been infringed, you have the right
                      to lodge a complaint with the <strong>Office of the Data Protection Commissioner of
                      Zambia</strong> and to seek appropriate legal remedies.
                    </p>
                  </div>
                </div>
              </section>

              <section id="updates" className="scroll-mt-28 mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <RefreshCw className="text-blue-600 mr-3"/> Updates to This Privacy Policy
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  ZeeMove may update this Privacy Policy from time to time. Material changes will be communicated
                  through the application or other appropriate channels to ensure you stay informed about our data
                  practices.
                </p>
              </section>

              <section id="contact"
                       className="scroll-mt-28 bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-200 relative overflow-hidden text-left">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-8">Contact Us</h3>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-white/90 mb-6 leading-relaxed">If you need assistance, you can contact the
                        support team through the mobile phone:</p>

                      <a href="tel:+260762436771" className="hover:text-blue-100 transition-colors decoration-blue-400">
                        <button
                          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold flex items-center hover:bg-blue-50 transition-colors shadow-lg">
                          +260 76 2436771 <PhoneIcon className="ml-2" size={18}/>
                        </button>
                      </a>
                    </div>
                    <div>
                      <p className="text-white/90 mb-2">You can reach out legal team at:</p>
                      <a href="mailto:sdesk@tusobd.com"
                         className="text-2xl font-bold block hover:text-blue-100 transition-colors underline underline-offset-8 decoration-blue-400">
                        sdesk@tusobd.com
                      </a>
                      <p className="mt-4 text-xs text-blue-100 italic opacity-80 leading-relaxed">
                        Please include the <strong>phone number</strong> you used to register to help us identify you
                        promptly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"/>
              </section>

              <footer
                className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <p>&copy; 2026 IHM Southern Africa</p>
                <div className="flex gap-8">
                  <Link href="/marketing" className="hover:text-blue-600 transition-colors">About the Apps</Link>
                  <Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed bottom-8 right-8 flex flex-col gap-3 transition-all duration-300 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <button
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="p-4 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 group"
          aria-label="Back to top"
        >
          <ChevronUp size={20} className="group-hover:-translate-y-0.5 transition-transform"/>
        </button>
      </div>
    </div>
  );
};

export default Content;