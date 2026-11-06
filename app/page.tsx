'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, CalendarDays, Check, ChevronDown, CreditCard, MapPin, Menu, Play, Quote, Sparkles, Ticket, X } from 'lucide-react'

const targetDate = new Date('2026-12-12T09:00:00+05:30').getTime()

const schedule = [
  { time: '09:00', type: 'Doors open', title: 'Coffee, connections & check-in', color: 'lime' },
  { time: '10:00', type: 'Keynote', title: 'Build what matters', color: 'coral' },
  { time: '11:15', type: 'Panel', title: 'The new shape of work', color: 'blue' },
  { time: '13:00', type: 'Break', title: 'Lunch, live music & makers market', color: 'yellow' },
  { time: '15:00', type: 'Workshop', title: 'From spark to shipped', color: 'purple' },
]

const speakers = [
  { name: 'Maya Patel', role: 'Ideas & community', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=85' },
  { name: 'Jon Bell', role: 'Creative practice', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85' },
  { name: 'Aisha Okafor', role: 'Product & making', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85' },
]

function Countdown() {
  const [left, setLeft] = useState(0)
  useEffect(() => {
    const updateCountdown = () => setLeft(Math.max(0, targetDate - Date.now()))
    updateCountdown()
    const timer = window.setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])
  const parts = left > 0 ? { days: Math.floor(left / 86400000), hours: Math.floor(left / 3600000) % 24, minutes: Math.floor(left / 60000) % 60, seconds: Math.floor(left / 1000) % 60 } : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return <div className="countdown" aria-label="Countdown to the event"><p className="eyebrow">Counting down to the big day</p><div className="count-grid">{Object.entries(parts).map(([label, value]) => <div className="count-cell" key={label}><strong suppressHydrationWarning>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [active, setActive] = useState('All')
  const filters = ['All', 'Talks', 'Workshops', 'Music']
  const filteredSchedule = useMemo(() => active === 'All' ? schedule : schedule.filter(item => active === 'Talks' ? ['Keynote', 'Panel'].includes(item.type) : active === 'Workshops' ? item.type === 'Workshop' : item.type === 'Break'), [active])

  return <main data-theme={darkMode ? 'dark' : 'light'}>
    <nav className="nav"><a className="brand" href="#top"><span className="brand-mark">E</span> evently<span className="brand-dot">.</span></a><div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a><a href="#speakers" onClick={() => setMenuOpen(false)}>Speakers</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></div><div className="nav-actions"><button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">{darkMode ? 'Light' : 'Dark'} mode</button><a className="text-link" href="#tickets">Get tickets <ArrowUpRight size={15} /></a><button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></nav>

    <section className="hero" id="top"><div className="hero-copy"><div className="eyebrow-pill"><span className="pulse-dot" /> Bhubaneswar · 12 DEC 2026</div><h1>Make room for <em>better</em> ideas.</h1><p className="hero-sub">A one-day gathering for people who care about what they&apos;re making, who they&apos;re making it with, and what comes next.</p><div className="hero-buttons"><a className="button button-dark" href="#tickets">Reserve your seat <ArrowUpRight size={17} /></a><a className="watch-link" href="#experience"><span className="play-icon"><Play size={13} fill="currentColor" /></span> What is evently?</a></div><div className="hero-meta"><span><CalendarDays size={16} /> Sat, 12 December 2026</span><span><MapPin size={16} /> Bhubaneswar, India</span></div></div><div className="hero-art"><div className="sun-disc" /><div className="art-label label-one">IDEAS<br /><b>IN MOTION</b></div><div className="art-label label-two">01 / 05</div><div className="shape shape-back" /><div className="shape shape-main"><span>e</span></div><div className="shape shape-front" /><div className="hero-caption"><span>One day.<br />Many directions.</span><ArrowUpRight size={21} /></div></div></section>

    <section className="ticker"><div><Sparkles size={17} /> <span>GOOD ENERGY</span></div><div><span>CURIOUS PEOPLE</span> <Sparkles size={17} /></div><div><span>REAL CONVERSATIONS</span> <Sparkles size={17} /></div><div><span>FRESH PERSPECTIVES</span> <Sparkles size={17} /></div></section>

    <section className="count-section"><div><p className="eyebrow">Don&apos;t just save the date</p><h2>Come see what happens<br /><em>when people show up.</em></h2></div><Countdown /></section>

    <section className="experience section" id="experience"><div className="section-head"><div><p className="eyebrow">A little bit of everything</p><h2>Built for your<br /><em>next chapter.</em></h2></div><p className="section-intro">Evently is a day to step out of the feed and into the room. Hear bold thoughts, make something with your hands, and leave with a fuller sense of what&apos;s possible.</p></div><div className="feature-grid"><article className="feature feature-large"><div className="feature-number">01</div><div><h3>Ideas with<br />some edge.</h3><p>Big questions. No panel-speak.</p></div><ArrowUpRight /></article><article className="feature feature-photo"><img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85" alt="Friends laughing together outdoors" /><div className="photo-overlay">Bring your<br /><em>whole self.</em></div></article><article className="feature feature-yellow"><div className="feature-number">02</div><h3>Make a<br />little noise.</h3><p>Live music, good food, and room to move.</p><span className="scribble">✳</span></article><article className="feature feature-dark"><div className="feature-number">03</div><h3>Leave with<br /><em>momentum.</em></h3><p>New people. New questions. New next steps.</p><ArrowUpRight /></article></div></section>

    <section className="schedule section" id="schedule"><div className="section-head"><div><p className="eyebrow">The day, in colour</p><h2>Find your<br /><em>moment.</em></h2></div><div className="filter-row">{filters.map(filter => <button className={active === filter ? 'active' : ''} key={filter} onClick={() => setActive(filter)}>{filter}</button>)}</div></div><div className="schedule-list">{filteredSchedule.map(item => <div className="schedule-row" key={item.time}><time>{item.time}</time><span className={`schedule-marker ${item.color}`} /><div><span className="schedule-type">{item.type}</span><h3>{item.title}</h3></div><ChevronDown className="row-chevron" size={18} /></div>)}</div><a href="#tickets" className="outline-button">See the full schedule <ArrowUpRight size={17} /></a></section>

    <section className="speakers section" id="speakers"><div className="section-head"><div><p className="eyebrow">People worth listening to</p><h2>Meet the<br /><em>voices.</em></h2></div><p className="section-intro">Three perspectives to get you thinking. A room full of the rest.</p></div><div className="speaker-grid">{speakers.map(speaker => <article className="speaker" key={speaker.name}><div className="speaker-image"><img src={speaker.image} alt={speaker.name} /><span>↗</span></div><h3>{speaker.name}</h3><p>{speaker.role}</p></article>)}</div></section>

    <section className="reviews section" id="reviews"><div className="section-head"><div><p className="eyebrow">Words from the room</p><h2>Worth showing<br /><em>up for.</em></h2></div><p className="section-intro">No gatekeeping, no prerequisites. Just a good day with people who are curious.</p></div><div className="review-grid"><article><Quote size={28} /><p>“The rare event that leaves you with more energy than you arrived with.”</p><strong>Riya · 2025 attendee</strong></article><article><Quote size={28} /><p>“Thoughtful ideas, excellent food, and a schedule that respects your attention.”</p><strong>Arjun · 2025 attendee</strong></article><article><Quote size={28} /><p>“I came alone and left with a notebook full of next steps.”</p><strong>Neha · 2025 attendee</strong></article></div></section>

    <section className="tickets" id="tickets"><div className="ticket-copy"><p className="eyebrow">Your future self will thank you</p><h2>Ready to<br /><em>show up?</em></h2><p>One ticket gets you into every talk, workshop, meal, and conversation. Come curious.</p><div className="ticket-details"><span><Ticket size={18} /> General admission</span><strong>FREE <small>always</small></strong></div><button className="button button-light" onClick={() => setCheckoutOpen(true)}>Claim your free ticket <ArrowUpRight size={17} /></button></div><div className="ticket-card"><div className="ticket-top"><span>EVENTLY / 2026</span><span>ADMIT ONE</span></div><div className="ticket-orb">e</div><div className="ticket-bottom"><div><span>12 DEC</span><strong>Bhubaneswar</strong></div><div className="barcode">▌▌▌▌▌ ▌▌▌ ▌▌▌▌</div></div></div></section>

    <section className="newsletter" id="faq"><div><p className="eyebrow">Keep in touch</p><h2>Good things, occasionally.</h2></div><form onSubmit={e => { e.preventDefault(); if (email) setJoined(true) }}>{joined ? <p className="joined"><Check size={18} /> You&apos;re on the list. See you there.</p> : <div className="email-form"><input id="email-signup" type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} aria-label="Email address" /><button type="submit"><ArrowUpRight size={20} /></button></div>}</form></section>
    {checkoutOpen && <div className="checkout-backdrop" role="dialog" aria-modal="true" aria-labelledby="checkout-title"><div className="checkout-modal"><button className="close-checkout" onClick={() => setCheckoutOpen(false)} aria-label="Close checkout"><X /></button>{paymentComplete ? <div className="payment-success"><Check size={38} /><p className="eyebrow">You&apos;re in</p><h2>Free ticket claimed.</h2><p>Your confirmation is ready. We&apos;ll see you in Bhubaneswar.</p><button className="button button-dark" onClick={() => setCheckoutOpen(false)}>Back to event</button></div> : <><p className="eyebrow">Demo checkout · ₹0</p><h2 id="checkout-title">Claim your free ticket.</h2><p className="checkout-note">No payment required. This demo gateway shows the complete ticket flow without charging anyone.</p><label>Full name<input required placeholder="Your name" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><button className="button button-dark checkout-submit" onClick={() => setPaymentComplete(true)}><CreditCard size={17} /> Continue to demo payment</button><small>Secure demo flow · No real card details are collected</small></>}</div></div>}
    <footer><a className="brand" href="#top"><span className="brand-mark">E</span> evently<span className="brand-dot">.</span></a><p>Made for people who show up.</p><div><a href="#experience">Instagram</a><a href="#schedule">Contact</a><a href="#top">Back to top ↑</a></div></footer>
  </main>
}
