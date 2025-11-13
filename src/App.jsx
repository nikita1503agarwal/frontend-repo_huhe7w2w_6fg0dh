import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { Camera, Video, Globe, Sparkles, Mail, Phone, Play } from 'lucide-react'

function Nav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
              <Camera className="w-5 h-5" />
            </span>
            <span className="font-semibold tracking-tight text-gray-900 group-hover:text-gray-700">YourName Studio</span>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollTo('services')} className="text-gray-700 hover:text-gray-900">Services</button>
            <button onClick={() => scrollTo('work')} className="text-gray-700 hover:text-gray-900">Work</button>
            <button onClick={() => scrollTo('testimonials')} className="text-gray-700 hover:text-gray-900">Testimonials</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-gray-900">Contact</button>
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800">Book Now</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => scrollTo('contact')}>
            <Phone className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-xs font-medium text-gray-700 ring-1 ring-black/5 mb-5">
            <Sparkles className="w-4 h-4 text-indigo-600" /> Elevate your brand with cinematic storytelling
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Video, Marketing, and Web that capture attention and convert
          </h1>
          <p className="mt-6 text-gray-700 text-lg sm:text-xl leading-relaxed">
            I help founders and local businesses stand out with scroll-stopping videos, performance-driven campaigns, and high-converting websites. End-to-end creative, strategy, and build.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 shadow">
              Book a free consult
            </a>
            <a href="#work" onClick={(e)=>{e.preventDefault();document.getElementById('work')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/80 backdrop-blur text-gray-900 ring-1 ring-gray-200 hover:bg-white">
              See my work
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:flex gap-6 items-center text-gray-600/80 text-sm">
            <div className="flex items-center gap-2"><Video className="w-4 h-4"/> 4K shooting</div>
            <div className="flex items-center gap-2"><Globe className="w-4 h-4"/> SEO-friendly sites</div>
            <div className="flex items-center gap-2"><Camera className="w-4 h-4"/> Brand visuals</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      icon: <Video className="w-6 h-6 text-indigo-600" />, 
      title: 'Shooting & Editing',
      desc: 'Cinematic ads, product demos, and social-first content crafted to stop the scroll and tell your story.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />, 
      title: 'Performance Marketing',
      desc: 'Creative + media strategy for Meta, TikTok, and YouTube. Landing pages and analytics baked in.'
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />, 
      title: 'Websites that Convert',
      desc: 'Fast, responsive sites with compelling copy, SEO foundations, and clear funnels.'
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What I Do</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">A tight, effective stack to grow your brand through compelling visuals and clear messaging.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const videos = [
    { title: 'Product Launch Reel', tag: 'Ad', thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Founder Story', tag: 'Brand', thumb: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Restaurant Promo', tag: 'Social', thumb: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="relative py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">A peek at recent shoots and builds. Full portfolio available on request.</p>
          </div>
          <a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800">
            <Play className="w-4 h-4"/> Get a custom concept
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm">
              <img src={v.thumb} alt={v.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 p-4 text-white">
                <span className="text-xs px-2 py-1 bg-white/20 rounded-full backdrop-blur">{v.tag}</span>
                <h3 className="mt-2 text-lg font-semibold">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { quote: 'Brought our product to life. The video ads cut our CPA by 32%.', name: 'Alex, DTC Founder' },
    { quote: 'Clean site, clear message, and it converts. Exactly what we needed.', name: 'Maya, Local Business Owner' },
    { quote: 'From concept to shoot to launch, it was seamless.', name: 'Jordan, Agency Partner' },
  ]
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Kind Words</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t,i)=> (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <p className="text-gray-800">“{t.quote}”</p>
              <p className="mt-4 text-sm font-medium text-gray-500">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s make something standout</h2>
            <p className="mt-4 text-gray-600">Share what you’re building and the outcomes you want. I’ll reply within 24 hours with ideas, timelines, and investment.</p>
            <div className="mt-8 space-y-3 text-gray-700">
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-indigo-600"/> you@yourstudio.com</div>
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-indigo-600"/> +1 (555) 000-0000</div>
            </div>
          </div>

          <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">What do you need?</label>
                <select className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Video production</option>
                  <option>Marketing strategy</option>
                  <option>New website</option>
                  <option>Bundle (video + web + ads)</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell me about your brand, goals, and timeline..." />
              </div>
            </div>
            <button className="mt-6 w-full inline-flex justify-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800">Send inquiry</button>
            <p className="mt-3 text-xs text-gray-500">By submitting, you agree to be contacted about your project. No spam—ever.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} YourName Studio — Video, Marketing, Web</footer>
    </div>
  )
}
