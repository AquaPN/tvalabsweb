"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Rocket,
  Presentation,
  Palette,
  Package,
  Brain,
  DollarSign,
  Users,
  Lightbulb,
  ClipboardList,
  Code2,
  TrendingUp,
  Instagram,
  Linkedin,
} from "lucide-react";

const testimonials = [
  {
    name: "Priya Mehta",
    role: "Founder, Healthly",
    quote:
      "TVA Labs gave my idea the direction and clarity it needed. They’re not just consultants — they’re co-builders.",
  },
  {
    name: "Aarav Shah",
    role: "CTO, EduSpring",
    quote:
      "Their MVP-first approach helped us launch in 2 months. We wouldn't have moved so fast without them.",
  },
  {
    name: "Neha Kapoor",
    role: "Co-Founder, AgriNova",
    quote:
      "Incredible support — from validation to product. TVA Labs truly partners with founders.",
  },
];

const clients = [
  {
    name: "AgriNova",
    logo: "/logos/agrinova.svg",
    tagline: "Smart solutions for modern farming",
  },
  {
    name: "Healthly",
    logo: "/logos/healthly.svg",
    tagline: "Making preventive healthcare accessible",
  },
  {
    name: "EduSpring",
    logo: "/logos/eduspring.svg",
    tagline: "Revolutionizing learning for rural India",
  },
  {
    name: "FinCraft",
    logo: "/logos/fincraft.svg",
    tagline: "Finance tools for Gen Z entrepreneurs",
  },
  {
    name: "GreenByte",
    logo: "/logos/greenbyte.svg",
    tagline: "IoT systems for sustainable living",
  },
];

const founders = [
  {
    name: "Partho Nabar",
    role: "Lead",
    photo: "./partho.png", // Corrected: Directly reference the variable
    bio: "Data.",
  },
  {
    name: "Shreya Gantayat",
    role: "Lead",
    photo: "./shreya.jpg", // Corrected: Directly reference the variable
    bio: "Cyber.",
  },
];

const rocketLogo = "./logo.png"; // or .ico, whichever you prefer

export default function Home() {
  const [loading, setLoading] = useState(true);
  // State for testimonials and clients
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [clientIndex, setClientIndex] = useState(0);

  // State for founders
  const [founderIndex, setFounderIndex] = useState(0); // Renamed for clarity

  useEffect(() => {
    const interval = setInterval(() => {
      // Update testimonial and client
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      setClientIndex((prev) => (prev + 1) % clients.length);

      // Update founder (assuming you want the same 3-second interval for founders)
      setFounderIndex((prev) => (prev + 1) % founders.length);
    }, 3000); // Using 3000ms for both as per your original testimonial/client interval

    return () => clearInterval(interval);
  }, [testimonials.length, clients.length, founders.length]); // Add dependencies

  const currentClient = clients[clientIndex];
  const currentFounder = founders[founderIndex]; // Use founderIndex

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setSubmitted(true);
    form.reset(); // Clear form
  };

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="min-h-screen-custom">
          {/* Navbar */}
          <nav className="navbar">
            <div className="navbar-logo">
              <img
                src={rocketLogo}
                alt="TVA Rocket Logo"
                width={50}
                height={50}
              />
              <span className="navbar-brand">TVA Labs</span>
            </div>
            <ul className="navbar-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* Hero Section */}
          <section className="hero-section">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1 className="hero-title">
                Accelerate Your Startup from Idea to MVP
              </h1>
              <p className="hero-description">
                TVA Labs is your launchpad — turning early-stage ideas into
                investable startups.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="get-started-button"
              >
                Get Started
              </motion.button>
            </motion.div>
          </section>
          {/* What We Do */}
          <section className="what-we-do-section">
            <div className="container">
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                What We Do
              </motion.h2>

              <div className="services-grid">
                {[
                  {
                    name: "MVP Development",
                    Icon: Rocket,
                    description:
                      "Turn your idea into a market-ready product—fast, lean, and investor-friendly.",
                  },
                  {
                    name: "Business Analytics",
                    Icon: Presentation,
                    description:
                      "Make smarter decisions with data-driven insights tailored to your growth stage.",
                  },
                  {
                    name: "Startup Branding",
                    Icon: Palette,
                    description:
                      "Craft a bold, memorable brand that wins hearts and builds trust from day one.",
                  },
                  {
                    name: "Early GTM Support",
                    Icon: Package,
                    description:
                      "Accelerate your go-to-market journey with tested strategies and real traction.",
                  },
                  {
                    name: "Founder Mentoring",
                    Icon: Brain,
                    description:
                      "Get hands-on guidance from founders who've been in your shoes and scaled.",
                  },
                  {
                    name: "Fundraising Guidance",
                    Icon: DollarSign,
                    description:
                      "Raise smart, raise early—with decks, strategy, and VC-backed storytelling.",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="service-card"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <service.Icon className="service-icon" />
                    <h3 className="service-title">{service.name}</h3>
                    <p className="service-description">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Who It's For Section */}
          <section className="who-its-for-section">
            <div className="container">
              <h2 className="section-title">Who It’s For</h2>
              <p className="who-its-for-intro">
                TVA Labs empowers early-stage innovators ready to launch
                meaningful ventures. If you see yourself in one of these groups
                — we’re built for you.
              </p>
              <div className="persona-grid">
                <div className="persona-card">
                  <h3 className="persona-title">Aspiring Founders</h3>
                  <p className="persona-text">
                    You have an idea, ambition, and drive. We help with the
                    rest.
                  </p>
                </div>
                <div className="persona-card">
                  <h3 className="persona-title">University Spin-offs</h3>
                  <p className="persona-text">
                    Bringing academic research and innovation into the real
                    world.
                  </p>
                </div>
                <div className="persona-card">
                  <h3 className="persona-title">First-time Entrepreneurs</h3>
                  <p className="persona-text">
                    No roadmap? No problem. We help you start smart and build
                    fast.
                  </p>
                </div>
                <div className="persona-card">
                  <h3 className="persona-title">Bootstrapped Builders</h3>
                  <p className="persona-text">
                    You're resourceful and relentless — we’ll amplify your
                    momentum.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why TVA Labs Section */}
          <section className="why-tva-section">
            <div className="container">
              <h2 className="section-title">Why TVA Labs?</h2>
              <div className="reasons-grid">
                <div className="reason-card">
                  <Rocket className="reason-icon" />
                  <h3 className="reason-title">Speed to Market</h3>
                  <p className="reason-description">
                    We help you go from idea to MVP in weeks, not months, with
                    hands-on guidance.
                  </p>
                </div>
                <div className="reason-card">
                  <Lightbulb className="reason-icon" />
                  <h3 className="reason-title">Founder-First Approach</h3>
                  <p className="reason-description">
                    Everything we do is designed around empowering you as a
                    founder — from product to pitch.
                  </p>
                </div>
                <div className="reason-card">
                  <Users className="reason-icon" />
                  <h3 className="reason-title">Access to Ecosystem</h3>
                  <p className="reason-description">
                    Tap into our network of mentors, investors, and operators
                    from day one.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="how-it-works-section">
            <div className="container">
              <h2 className="section-title">How It Works</h2>
              <p className="how-it-works-intro">
                Our approach is simple, proven, and built to support you every
                step of the way.
              </p>
              <div className="steps-grid">
                <div className="step-card">
                  <Rocket className="step-icon" />
                  <h3 className="step-title">01. Discovery</h3>
                  <p className="step-text">
                    We start with your idea — refining your vision and market
                    fit.
                  </p>
                </div>
                <div className="step-card">
                  <ClipboardList className="step-icon" />
                  <h3 className="step-title">02. Strategy</h3>
                  <p className="step-text">
                    We co-create a lean plan to validate, build, and launch
                    fast.
                  </p>
                </div>
                <div className="step-card">
                  <Code2 className="step-icon" />
                  <h3 className="step-title">03. Build</h3>
                  <p className="step-text">
                    We help you craft your MVP using modern tools and methods.
                  </p>
                </div>
                <div className="step-card">
                  <TrendingUp className="step-icon" />
                  <h3 className="step-title">04. Launch</h3>
                  <p className="step-text">
                    We support your early traction, feedback, and next moves.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials and Clients Section */}
          <section className="testimonial-client-section">
            <div className="container testimonial-client-grid">
              {/* Testimonials */}
              <div className="testimonial-block">
                <h2 className="section-title">What Our Founders Say</h2>
                <div className="testimonial-card fade">
                  <div className="quote-box">
                    <p className="quote">
                      “{testimonials[testimonialIndex].quote}”
                    </p>
                    <p className="author">
                      — {testimonials[testimonialIndex].name},{" "}
                      <span className="role">
                        {testimonials[testimonialIndex].role}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Clients */}
              <div className="clients-block">
                <h2 className="section-title">Trusted By</h2>
                <div className="client-card fade">
                  <img
                    src={currentClient.logo}
                    alt={currentClient.name}
                    className="client-logo-single"
                  />
                  <h4 className="client-name">{currentClient.name}</h4>
                  <p className="client-tagline">{currentClient.tagline}</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Block */}
          <section className="cta-section">
            <div className="cta-block">
              <h2 className="section-title">Ready to Build With Us?</h2>
              <p className="cta-text">
                Whether you’re just starting or scaling, TVA Labs is your
                co-pilot. Let’s make it real.
              </p>

              <form className="cta-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="cta-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="cta-input"
                  required
                />
                <select name="stage" className="cta-input" required>
                  <option value="">Select Startup Stage</option>
                  <option value="idea">Idea</option>
                  <option value="prototype">Prototype</option>
                  <option value="mvp">MVP</option>
                  <option value="growth">Growth Stage</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us more..."
                  className="cta-input cta-textarea"
                  required
                ></textarea>
                <button type="submit" className="cta-button">
                  Let’s Go 🚀
                </button>
              </form>

              {submitted && (
                <p className="thank-you-message">
                  ✅ Thank you for reaching out! We'll get back to you soon.
                </p>
              )}
            </div>
          </section>

          {/* Founders Section */}
          <section className="meet-founders-section">
            <h2 className="section-title">Meet the Founders</h2>
            <div className="founders-grid">
              {founders.map((founder, idx) => (
                <div className="founder-card" key={idx}>
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="founder-photo"
                  />
                  <h4 className="founder-name">{founder.name}</h4>
                  <p className="founder-role">{founder.role}</p>
                  <p className="founder-bio">{founder.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-container">
              <div className="footer-left">
                <h3 className="footer-brand">TVA Labs</h3>
                <p className="footer-tagline">
                  Turning ideas into investable startups.
                </p>

                <div className="social-icons">
                  <a
                    href="https://www.instagram.com/tvalabs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>

              <div className="footer-right">
                <ul className="footer-links">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">What We Do</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} TVA Labs. All rights reserved.</p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="back-to-top"
              >
                ↑ Back to Top
              </button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
