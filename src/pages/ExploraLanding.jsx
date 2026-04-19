import React, { useEffect, useRef, useState } from 'react';
import './ExploraLanding.css';

const ExploraLanding = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedClass, setExpandedClass] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [typewriterText, setTypewriterText] = useState('web-dev');
  const [stats, setStats] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0, stat5: 0 });
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [showMobileSticky, setShowMobileSticky] = useState(false);

  const statsRef = useRef(null);
  const journeyRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.reveal]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.explora-landing [data-reveal]').forEach((el) => observer.observe(el));
    setTimeout(() => {
      ['hero-label', 'hero-h1', 'hero-type', 'hero-sub', 'hero-actions', 'hero-term'].forEach((id) => {
        setVisibleSections((prev) => new Set([...prev, id]));
      });
    }, 100);
    return () => observer.disconnect();
  }, []);

  // Typewriter
  useEffect(() => {
    const words = ['web-dev', 'ai-ml', 'app-dev', 'cloud', 'cybersecurity', 'data-eng', 'robotics', 'research'];
    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = true;
    let timer;

    const typeLoop = () => {
      const w = words[wordIndex];
      if (!deleting) {
        setTypewriterText(w.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === w.length) {
          deleting = true;
          timer = setTimeout(typeLoop, 1800);
          return;
        }
        timer = setTimeout(typeLoop, 70);
      } else {
        setTypewriterText(w.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(typeLoop, 250);
          return;
        }
        timer = setTimeout(typeLoop, 40);
      }
    };
    timer = setTimeout(typeLoop, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Stats counter
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          const animate = (key, target, duration) => {
            let start = 0;
            const step = target / (duration / 16);
            const t = setInterval(() => {
              start = Math.min(start + step, target);
              setStats((prev) => ({ ...prev, [key]: Math.round(start) }));
              if (start >= target) clearInterval(t);
            }, 16);
          };
          animate('stat1', 20, 900);
          animate('stat2', 7, 700);
          animate('stat3', 6, 600);
          animate('stat4', 12, 800);
          animate('stat5', 1999, 1100);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) statsObserver.observe(statsRef.current);
    return () => statsObserver.disconnect();
  }, [statsAnimated]);

  // Journey timeline + mobile sticky
  useEffect(() => {
    const handleScroll = () => {
      setShowMobileSticky(window.scrollY > 500);
      if (!journeyRef.current) return;
      const items = journeyRef.current.querySelectorAll('.journey-item');
      let visibleCount = 0;
      items.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight * 0.85) {
          visibleCount++;
          item.classList.add('active-step');
        }
      });
      const fill = journeyRef.current.querySelector('.journey-line-fill');
      if (fill) fill.style.height = Math.min((visibleCount / items.length) * 100, 100) + '%';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filterClasses = (domain) => {
    setActiveFilter(domain);
    setExpandedClass(null);
  };
  const toggleClass = (index) => setExpandedClass(expandedClass === index ? null : index);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);
  const isVisible = (id) => visibleSections.has(id);

  const classes = [
    { num: '01', domain: 'webdev', pill: 'web-dev', pillClass: 'domain-webdev', title: 'How the Web Works', desc: 'HTTP, browsers, clients, servers — the real picture.', question: 'If you could build any website right now, what would it do and for whom?' },
    { num: '02', domain: 'webdev', pill: 'web-dev', pillClass: 'domain-webdev', title: 'Building Interfaces', desc: 'HTML, CSS, and the logic of visual layout.', question: 'What interface would you redesign in your daily life — and why does it frustrate you?' },
    { num: '03', domain: 'appdev', pill: 'app-dev', pillClass: 'domain-appdev', title: 'Mobile-First Thinking', desc: 'Why apps are different. Android vs iOS. Product structure.', question: "What app do you wish existed on your phone that doesn't exist yet?" },
    { num: '04', domain: 'appdev', pill: 'app-dev', pillClass: 'domain-appdev', title: 'Building a Simple App', desc: 'Screens, flows, data — a functioning app, step by step.', question: 'If you built a simple app for your college, what problem would it solve?' },
    { num: '05', domain: 'cloud', pill: 'cloud', pillClass: 'domain-cloud', title: 'What is Cloud Computing', desc: 'Servers, storage, infrastructure — what "deploy" means.', question: 'What kind of service would you host on the cloud — and who would use it?' },
    { num: '06', domain: 'cloud', pill: 'cloud', pillClass: 'domain-cloud', title: 'Cloud in Production', desc: 'Real architectures. Real costs. Why companies choose it.', question: 'If you designed a cloud system for 1 lakh users, what would you prioritise first?' },
    { num: '07', domain: 'aiml', pill: 'ai-ml', pillClass: 'domain-aiml', title: 'How Machines Learn', desc: 'Patterns, data, predictions — ML logic without the math barrier.', question: 'What real-world problem would you teach a machine to solve?' },
    { num: '08', domain: 'aiml', pill: 'ai-ml', pillClass: 'domain-aiml', title: 'AI in Real Products', desc: 'Recommendation engines, LLMs — what AI engineers actually build.', question: 'If you built an AI product for Indian students, what would it do?' },
    { num: '09', domain: 'cyber', pill: 'cyber', pillClass: 'domain-cyber', title: 'The Threat Landscape', desc: 'How systems get attacked. How defenders think.', question: 'What system around you do you think is vulnerable — and how would you protect it?' },
    { num: '10', domain: 'cyber', pill: 'cyber', pillClass: 'domain-cyber', title: 'Building Secure Systems', desc: 'Encryption, auth, access control — foundations of secure software.', question: "If you were securing a hospital's patient records, what would your first three steps be?" },
    { num: '11', domain: 'data', pill: 'data', pillClass: 'domain-data', title: 'How Data Flows', desc: 'Databases, pipelines, warehouses — where data lives.', question: "What dataset would you build to understand something you're curious about?" },
    { num: '12', domain: 'data', pill: 'data', pillClass: 'domain-data', title: 'Data at Scale', desc: 'Real data challenges. Data engineers vs analysts vs scientists.', question: 'If you had data from every student in your city, what insight would you want to find?' },
    { num: '13', domain: 'robotics', pill: 'robotics', pillClass: 'domain-robotics', title: 'Machines that Move', desc: 'Sensors, actuators, control systems — robotics as a systems discipline.', question: 'What would you automate in your home, college, or community with a robot?' },
    { num: '14', domain: 'robotics', pill: 'robotics', pillClass: 'domain-robotics', title: 'Robotics + Software', desc: 'Embedded systems, firmware, software meeting hardware.', question: 'Design a robot that solves one problem in Indian agriculture or healthcare. What does it do?' },
    { num: '15', domain: 'research', pill: 'research', pillClass: 'domain-research', title: 'How Research Works', desc: 'Papers, experiments, validation — the rigour behind research.', question: 'What unsolved problem in the world would you most want to research?' },
    { num: '16', domain: 'research', pill: 'research', pillClass: 'domain-research', title: 'Research in Industry', desc: "Labs at companies, research roles that aren't pure academia.", question: 'If you ran a research lab in India, what would be its focus and why?' },
    { num: '17', domain: 'product', pill: 'product', pillClass: 'domain-product', title: 'How Products are Built', desc: 'Idea to shipped. PMs, designers, engineers working together.', question: "Describe a product you use that you'd completely rebuild — and what you'd change first." },
    { num: '18', domain: 'systems', pill: 'systems', pillClass: 'domain-systems', title: 'How Large Systems Work', desc: 'Distributed systems, networking, OS — software plumbing.', question: 'What happens when 10 million users open an app at the same time? Walk through your thinking.' },
    { num: '19', domain: 'explore', pill: 'emerging', pillClass: 'domain-explore', title: 'Emerging Domains', desc: 'Blockchain, AR/VR, quantum — where the frontier is.', question: 'Which emerging technology excites you most — and what would you build with it in 5 years?' },
    { num: '20', domain: 'explore', pill: 'your-day', pillClass: 'domain-explore', title: 'Your Recommendation Day', desc: 'All 20 sessions reviewed. Your written domain match, delivered.', question: 'This is where your recommendation lands. Review it with the program lead, pick your path.', special: true },
  ];

  const faqs = [
    { q: 'Are the classes live or recorded? What if I miss one?', a: "All 20 classes are live and scheduled. Real instructors, real time. If you miss a session, one make-up arrangement per domain block is available. Not a blanket replay policy — we're building accountability, which is the whole point." },
    { q: 'Where are the classes held? Is this online or in-person?', a: 'The May 2026 founding cohort launches as a hybrid — primarily online live classes, with optional in-person meetups for students in and around Gwalior. Students across India are welcome. Group project matching is done regionally where possible.' },
    { q: "What if the domain recommendation doesn't feel right for me?", a: "The recommendation comes with written reasoning — not a black-box score. You review it with the program lead before committing. If after that conversation it still feels wrong, you can pick a runner-up domain. This is built into the process, not an exception." },
    { q: 'Who are the instructors? How do I verify their backgrounds?', a: "Instructors are working professionals and educators with real domain backgrounds. Full names, LinkedIn profiles, and experience summaries are published before the first payment. You will know exactly who's teaching what before you commit a rupee." },
    { q: "How exactly does the refund work if I don't get placed?", a: "Complete all milestones — 20 classes, solo project, group project — and if we can't place you in an internship within 60 days, full ₹1,999 is returned. The agreement is a written document you sign before payment, not a verbal assurance. Timeline and mechanism are specified in it." },
    { q: 'Can I talk to the founder before paying?', a: "Yes — and you should. Email hello@explora.in or WhatsApp to book a 15-minute call. I'd rather answer every question upfront than have a student enrol without full clarity." },
  ];

  const filteredClasses = activeFilter === 'all' ? classes : classes.filter((c) => c.domain === activeFilter);

  const CheckIcon = () => (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
  );
  const CrossIcon = () => (
    <svg width="16" height="16" fill="none" stroke="#FCA5A5" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  );
  const TickOrange = () => (
    <svg width="16" height="16" fill="none" stroke="#FF6B1A" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
  );
  const ShieldIcon = () => (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  );
  const ArrowRight = ({ size = 18 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  );

  return (
    <div className="explora-landing">

      {/* NAV */}
      <nav className="el-nav">
        <div className="el-nav-inner">
          <a href="#" className="el-nav-logo">
            <span className="logo-bracket">[</span>
            ExplorA
            <span className="logo-bracket">]</span>
          </a>
          <ul className="el-nav-links">
            <li><a href="/ai-hackathon" className="el-nav-back">← Home</a></li>
            <li><a href="#classes">Syllabus</a></li>
            <li><a href="#how-it-works">Journey</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#reserve" className="el-nav-cta">Reserve seat</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className={`hero-label reveal ${isVisible('hero-label') ? 'visible' : ''}`} data-reveal="hero-label">
              <span className="live-pulse"></span>
              Founding Cohort · May 2026 · Open across India
            </div>
            <h1 className={`reveal ${isVisible('hero-h1') ? 'visible' : ''}`} data-reveal="hero-h1">
              Figure out your IT career in <span className="accent-word">20 live classes</span>.
            </h1>
            <div className={`hero-typewriter-wrap reveal ${isVisible('hero-type') ? 'visible' : ''}`} data-reveal="hero-type">
              <span>Explore</span>
              <span className="typewriter-word">{typewriterText}</span>
            </div>
            <p className={`hero-sub reveal ${isVisible('hero-sub') ? 'visible' : ''}`} data-reveal="hero-sub">
              For Class 12 pass-outs and first-year college students. Attend 20 live sessions across 7+ IT domains, get a personalised domain recommendation with written reasoning, then follow a roadmap all the way to a real internship.<br /><br />
              <strong>₹1,999 upfront. Guaranteed internship — or full refund.</strong>
            </p>
            <div className={`hero-actions reveal ${isVisible('hero-actions') ? 'visible' : ''}`} data-reveal="hero-actions">
              <a href="#classes" className="btn-primary">
                See the 20-class plan
                <ArrowRight />
              </a>
              <a href="#reserve" className="btn-secondary">Reserve your seat</a>
            </div>
            <div className={`hero-terminal reveal ${isVisible('hero-term') ? 'visible' : ''}`} data-reveal="hero-term">
              <div className="terminal-header">
                <div className="terminal-dot td-red"></div>
                <div className="terminal-dot td-yellow"></div>
                <div className="terminal-dot td-green"></div>
                <div className="terminal-title">~/explora/your-path.sh</div>
              </div>
              <div className="terminal-body">
                <div className="term-line"><span className="term-prompt">$</span> <span className="term-cmd">explora --list-domains</span></div>
                <div className="term-out" style={{ marginTop: '6px' }}>
                  {['web-dev','app-dev','ai-ml','cloud','cyber','robotics','data','research'].map(d => (
                    <span key={d} className="term-domain">{d}</span>
                  ))}
                </div>
                <div className="term-line" style={{ marginTop: '14px' }}><span className="term-prompt">$</span> <span className="term-cmd">explora --find-my-fit</span></div>
                <div className="term-out">
                  <span style={{ color: '#6B6E7A' }}>// analysing your 20-class answers…</span><br />
                  <span className="term-accent">→ match: ai-ml (87%)</span><br />
                  <span style={{ color: '#6B6E7A' }}>// runner-ups: research (72%), data (68%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats" ref={statsRef}>
        <div className="stats-inner">
          <div className="stat-block reveal" data-reveal="stat1">
            <div className="stat-num">{stats.stat1}</div>
            <div className="stat-label">Live domain classes</div>
          </div>
          <div className="stat-block reveal" data-reveal="stat2">
            <div className="stat-num">{stats.stat2}<span className="plus">+</span></div>
            <div className="stat-label">IT domains explored</div>
          </div>
          <div className="stat-block reveal" data-reveal="stat3">
            <div className="stat-num">{stats.stat3}–{stats.stat4}</div>
            <div className="stat-label">Months to internship</div>
          </div>
          <div className="stat-block reveal" data-reveal="stat4">
            <div className="stat-num">₹{stats.stat5.toLocaleString('en-IN')}</div>
            <div className="stat-label">Refunded if not placed</div>
          </div>
        </div>
      </section>

      {/* WHAT IS EXPLORA */}
      <section className="section">
        <div className="container">
          <div className="reveal" data-reveal="what-header">
            <div className="section-tag">// what this is</div>
            <h2 className="section-heading">Stop guessing your path.<br />Find it through real work.</h2>
          </div>
          <div className="what-grid">
            <div className="reveal" data-reveal="what-left">
              <p className="what-statement">
                You attend <strong>20 live classes</strong> across IT domains. After each, a short questionnaire captures how you think and what you'd actually want to build. When the 20 are done, you get a domain recommendation with written reasoning — not a black-box quiz result.
              </p>
              <p className="what-statement" style={{ marginTop: '18px', color: '#A8ACB8', fontSize: '1rem' }}>
                Then a roadmap. A solo project. A cross-domain group build. A real internship. If you complete everything and we can't place you, full refund. In writing, before you pay a rupee.
              </p>
            </div>
            <ul className="what-bullets">
              <li className="what-bullet reveal" data-reveal="wb1">
                <div className="bullet-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                  <div className="bullet-title">20 live scheduled classes</div>
                  <div className="bullet-desc">Real instructors. Real schedule. Not recorded, not self-paced. You show up or you don't progress.</div>
                </div>
              </li>
              <li className="what-bullet reveal" data-reveal="wb2">
                <div className="bullet-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>
                </div>
                <div>
                  <div className="bullet-title">200+ data points, one clear fit</div>
                  <div className="bullet-desc">Your domain recommendation is built from how you actually engaged across all 20 sessions — not a 5-minute personality test.</div>
                </div>
              </li>
              <li className="what-bullet reveal" data-reveal="wb3">
                <div className="bullet-icon">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <div>
                  <div className="bullet-title">Solo project + cross-domain build</div>
                  <div className="bullet-desc">Build the thing you said you'd build in class. Then ship something real with peers from other domains.</div>
                </div>
              </li>
              <li className="what-bullet reveal" data-reveal="wb4">
                <div className="bullet-icon"><ShieldIcon /></div>
                <div>
                  <div className="bullet-title">Internship or 100% refund</div>
                  <div className="bullet-desc">Complete everything — placement within 60 days. If we can't place you, you get every rupee back. Written agreement before payment.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 20 CLASSES */}
      <section className="section" id="classes">
        <div className="container">
          <div className="reveal" data-reveal="classes-header">
            <div className="section-tag">// the syllabus</div>
            <h2 className="section-heading">All 20 classes. Click any one to see what you'll actually answer.</h2>
            <p className="section-body">Each class runs 60–90 minutes live. After each one: 8–10 psychometric questions and one intuitive question — <em>"if you could build something in this domain, what would you build?"</em></p>
          </div>
          <div className="classes-filter reveal" data-reveal="classes-filter">
            {[
              { key: 'all', label: 'All 20' },
              { key: 'webdev', label: 'Web' },
              { key: 'aiml', label: 'AI/ML' },
              { key: 'appdev', label: 'App' },
              { key: 'cloud', label: 'Cloud' },
              { key: 'cyber', label: 'Cyber' },
              { key: 'data', label: 'Data' },
              { key: 'robotics', label: 'Robotics' },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
                onClick={() => filterClasses(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="classes-grid reveal" data-reveal="classes-grid">
            {filteredClasses.map((cls, idx) => (
              <div
                key={cls.num}
                className={`class-cell ${expandedClass === idx ? 'expanded' : ''} ${cls.special ? 'class-special' : ''}`}
                onClick={() => toggleClass(idx)}
              >
                <div className="class-num">Class_{cls.num}</div>
                <div className={`class-domain-pill ${cls.pillClass}`}>{cls.pill}</div>
                <div className="class-title">{cls.title}</div>
                <div className="class-desc">{cls.desc}</div>
                <div className="class-expand">
                  <div className="class-question">{cls.question}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDATION FLOW */}
      <section className="section" id="how-recommendation">
        <div className="container">
          <div className="reveal" data-reveal="rec-header">
            <div className="section-tag">// the mechanism</div>
            <h2 className="section-heading">How your domain recommendation is <span style={{ color: '#FF6B1A' }}>actually</span> determined.</h2>
            <p className="section-body">Not a quiz. Not "AI said so." A 200-point pattern built across 20 sessions — with reasoning you can read and question.</p>
          </div>
          <div className="recommendation-grid">
            <div className="rec-step reveal" data-reveal="rec1">
              <div className="rec-step-num">1</div>
              <div className="rec-step-title">You attend 20 classes</div>
              <p className="rec-step-body">Each one ends with 8–10 psychometric questions + one intuitive build question. Your 200+ answers are saved — not compressed into a score.</p>
            </div>
            <div className="rec-step reveal" data-reveal="rec2">
              <div className="rec-step-num">2</div>
              <div className="rec-step-title">Your answers build a pattern</div>
              <p className="rec-step-body">Which domains you engage with, what problems excite you, what you keep wanting to build. This corpus maps you across all 7+ domains.</p>
            </div>
            <div className="rec-step reveal" data-reveal="rec3">
              <div className="rec-step-num">3</div>
              <div className="rec-step-title">Recommendation with reasoning</div>
              <p className="rec-step-body">A written report: your top domain, specific answers that led there, and two runner-ups. Review with the program lead before committing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="reveal" data-reveal="journey-header">
            <div className="section-tag">// the full journey</div>
            <h2 className="section-heading">From Day 1 to internship.<br />Every step mapped.</h2>
            <p className="section-body">6–12 months of structured progression. Every milestone timestamped. You always know exactly where you are and what's next.</p>
          </div>
          <div className="journey-timeline" ref={journeyRef}>
            <div className="journey-line"><div className="journey-line-fill"></div></div>
            {[
              { phase: 'Phase_01 · Weeks 1–10', title: 'Attend all 20 live domain classes', desc: 'Weekly scheduled sessions with experienced instructors. After each class, complete the questionnaire and answer the intuitive build question. This is where the data builds.', tags: [{ label: 'Weeks 1–10', cls: 'tag-time' }, { label: 'Foundation', cls: 'tag-milestone' }] },
              { phase: 'Phase_02 · Week 11', title: 'Receive your domain recommendation', desc: 'Written report with your top domain, why the pattern led there, two runner-ups. Discuss it with the program lead. Choose. Begin focused depth.', tags: [{ label: 'Week 11', cls: 'tag-time' }, { label: 'Key decision', cls: 'tag-key' }] },
              { phase: 'Phase_03 · Months 3–6', title: 'Follow your structured roadmap', desc: 'Week-by-week plan with standard milestones plus a personal addon track you design. Every milestone timestamped when complete.', tags: [{ label: 'Months 3–6', cls: 'tag-time' }, { label: 'Roadmap', cls: 'tag-milestone' }] },
              { phase: 'Phase_04 · Months 5–7', title: 'Ship your solo project', desc: "The thing you said you'd build in class — now real, now yours. Two months to plan, build, and ship. The centrepiece of your portfolio.", tags: [{ label: 'Months 5–7', cls: 'tag-time' }, { label: 'Portfolio', cls: 'tag-milestone' }] },
              { phase: 'Phase_05 · Months 7–9', title: 'Cross-domain group build', desc: 'Matched with students from other domains. Different skills, one shared project. Two months. Demonstrates collaboration — what employers want beyond technical skill.', tags: [{ label: 'Months 7–9', cls: 'tag-time' }, { label: 'Team build', cls: 'tag-milestone' }] },
              { phase: 'Phase_06 · Months 9–12', title: 'Guaranteed internship placement', desc: "Complete everything — placement with a startup or research group within 60 days of finishing. If we can't place you within 60 days, full ₹1,999 refunded.", tags: [{ label: 'Months 9–12', cls: 'tag-time' }, { label: 'Guaranteed or refunded', cls: 'tag-key' }] },
            ].map((step, i) => (
              <div className="journey-item" key={i}>
                <div className="journey-dot"></div>
                <div className="journey-step-tag">{step.phase}</div>
                <div className="journey-title">{step.title}</div>
                <p className="journey-desc">{step.desc}</p>
                {step.tags.map((t) => (
                  <span key={t.label} className={`journey-tag ${t.cls}`}>{t.label}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="reveal" data-reveal="pricing-header">
            <div className="section-tag">// pricing</div>
            <h2 className="section-heading">One price. One guarantee.<br />No tiers. No upsells.</h2>
          </div>
          <div className="pricing-wrap">
            <div className="pricing-card reveal" data-reveal="pricing-card">
              <div className="pricing-amount"><span className="rupee">₹</span>1,999</div>
              <div className="pricing-period">One-time, upfront. No renewals. No EMI traps.</div>
              <div className="pricing-guarantee">
                <div className="pricing-guarantee-title">
                  <ShieldIcon />
                  Internship guarantee in writing
                </div>
                <p className="pricing-guarantee-body">Complete the program → placement within 60 days. If we can't place you, full ₹1,999 refunded. Agreement signed before your first payment.</p>
              </div>
              <ul className="pricing-includes">
                {[
                  '20 live domain classes with real instructors',
                  'Written domain recommendation report',
                  '6–12 month structured roadmap',
                  'Solo project + portfolio support',
                  'Cross-domain group project',
                  'Guaranteed internship or 100% refund',
                ].map((item) => (
                  <li key={item}><CheckIcon />{item}</li>
                ))}
              </ul>
              <a href="#reserve" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Reserve your founding seat
                <ArrowRight />
              </a>
            </div>
            <div className="compare-block reveal" data-reveal="compare">
              <div className="compare-title">How ExplorA compares</div>
              {[
                { label: 'Class format', them: 'Recorded video', us: 'Live, scheduled' },
                { label: 'Domain decision', them: 'Pick blindly', us: 'Guided after 20 classes' },
                { label: 'Career output', them: 'Certificate', us: 'Internship + portfolio' },
                { label: 'Risk if it fails', them: 'Your loss', us: 'Full refund' },
                { label: 'Duration', them: 'Weeks (shallow)', us: '6–12 months (real depth)' },
                { label: "Who it's for", them: 'Already-decided', us: 'Exploring students' },
              ].map((row) => (
                <div className="compare-row" key={row.label}>
                  <span className="compare-label">{row.label}</span>
                  <span className="compare-them">{row.them}</span>
                  <span className="compare-us">{row.us}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section">
        <div className="container">
          <div className="reveal" data-reveal="for-header">
            <div className="section-tag">// right fit</div>
            <h2 className="section-heading">This is for some students. Not all.</h2>
            <p className="section-body">We'd rather tell you this isn't right than take your money and under-deliver. Read both sides.</p>
          </div>
          <div className="for-grid">
            <div className="for-card reveal" data-reveal="for-yes">
              <div className="for-card-header">
                <span className="for-badge badge-yes">✓ for you if</span>
              </div>
              <ul className="for-list">
                {[
                  "You're Class 12 pass-out or in first-year college and genuinely unsure which IT direction fits you",
                  'You can commit 4–6 hours per week for 6–12 months including live classes',
                  'You want to ship something real — not watch videos and collect a certificate',
                  "You're tired of guessing which IT career fits you and want real signal",
                ].map((item) => (
                  <li key={item}><TickOrange />{item}</li>
                ))}
              </ul>
            </div>
            <div className="for-card reveal" data-reveal="for-no">
              <div className="for-card-header">
                <span className="for-badge badge-no">✗ not for you if</span>
              </div>
              <ul className="for-list">
                {[
                  'You need a short certificate to add to a resume in a few weeks',
                  'You need pre-recorded on-demand content to watch any time',
                  "You've already chosen your domain and want only deep specialisation",
                  "You can't commit to attending scheduled live sessions",
                ].map((item) => (
                  <li key={item}><CrossIcon />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section">
        <div className="container">
          <div className="reveal" data-reveal="founder-header">
            <div className="section-tag">// the founder</div>
            <h2 className="section-heading">Who's running this — and why it matters.</h2>
          </div>
          <div className="founder-card reveal" data-reveal="founder-card">
            <div className="founder-avatar">E</div>
            <div>
              <div className="founder-name">[Your Name]</div>
              <div className="founder-role">FOUNDER · EXPLORA</div>
              <p className="founder-bio">
                [Your 2–3 sentence background — education, what you've studied or built, why you started ExplorA. Be specific. Students are reading this to decide if you're real and know what you're doing.] Running the founding cohort personally.
              </p>
              <div className="founder-direct">
                Every student in the founding cohort has my direct contact. Questions before you pay?{' '}
                <a href="mailto:hello@explora.in">Email me</a> or{' '}
                <a href="tel:+91XXXXXXXXXX">WhatsApp</a>. I answer personally.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="reveal" data-reveal="faq-header">
            <div className="section-tag">// FAQ</div>
            <h2 className="section-heading">What students actually ask.</h2>
          </div>
          <div className="faq-list reveal" data-reveal="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  <div className="faq-icon">
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-section" id="reserve">
        <div className="final-cta-bg"></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="seats-badge reveal" data-reveal="cta-badge">
            <span className="live-pulse"></span>
            Founding Cohort · May 2026 · Limited seats
          </div>
          <h2 className="reveal" data-reveal="cta-h2">Figure out your IT career.<br /><span>For real this time.</span></h2>
          <p className="reveal" data-reveal="cta-p">Reserve your seat for the founding cohort. Pay only after a call with the founder and after signing the written guarantee.</p>
          <div className="final-actions reveal" data-reveal="cta-actions">
            <a href="mailto:hello@explora.in?subject=Reserve a seat - May 2026" className="btn-primary">
              Reserve your seat
              <ArrowRight />
            </a>
            <a href="mailto:hello@explora.in?subject=15-min call - ExplorA" className="btn-secondary">Book a 15-min call</a>
          </div>
          <div className="guarantee-note reveal" data-reveal="cta-note">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Pay only after signing the written refund guarantee
          </div>
        </div>
      </section>

      {/* MOBILE STICKY */}
      {showMobileSticky && (
        <div className="mobile-sticky">
          <a href="#reserve" className="btn-primary">Reserve your seat → May 2026</a>
        </div>
      )}

      {/* FOOTER */}
      <footer className="el-footer">
        <div className="el-footer-logo">
          <span className="logo-bracket">[</span>
          ExplorA
          <span className="logo-bracket">]</span>
        </div>
        <p>
          A Sangillence initiative · Gwalior, India<br />
          <a href="mailto:hello@explora.in">hello@explora.in</a>
          {' · '}
          <a href="/home">Back to Sangillence</a>
        </p>
      </footer>

    </div>
  );
};

export default ExploraLanding;