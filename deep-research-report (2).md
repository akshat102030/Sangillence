# AI Synergy Hackathon 2026 — Developer-Ready Landing Page Specification

## Executive summary

The recommended implementation is a **single-page, mobile-first Next.js landing page** with a dark navy technical-grid visual system, cyan/purple neon accents, the official ABV-IIITM identity, Sangillence branding, and the **user-supplied ABV-IIITM campus/banner artwork as the visual source of truth**. The uploaded source is **2048 × 682 px**; the building in that artwork should be cropped/resized for responsive layouts, **never AI-regenerated or replaced**.

The conversion hierarchy should remain intentionally simple:

**Understand the challenge → see the opportunity → trust the organizers → understand the rounds → register.**

The primary CTA throughout the page should therefore be **Register Now**, with **View Rulebook / Explore Challenge** as the secondary action. Avoid competing CTAs above the fold.

ABV-IIITM's official website confirms that it is an autonomous Institute of National Importance founded in 1997 under what is now the Ministry of Education; its official address is Morena Link Road, Gwalior, Madhya Pradesh 474015. The institute also publishes downloadable PNG and PDF versions of its logo, so those files should be used rather than recreating the identity from screenshots. citeturn19view1turn19view2turn19view0

Sangillence's current public site already identifies **AI Synergy 2026**, includes sections for Tracks, Agenda, Prizes, Rules and FAQ, and currently displays a ₹500 registration callout with food included. The current page also describes a prize pool without consistently publishing the amount. citeturn18search4 A separate current Sangillence search snapshot states that prize amounts are subject to sponsor confirmation and mentions free access to its upcoming AI learning platform for participants. Accordingly, the organizer-requested **₹1,00,000 prize pool should be treated as a launch-blocking verification item until sponsorship/organizer approval is formally confirmed**. citeturn12search0

The same confirmation rule should apply to specific **PPI collaboration, research internships, startup meetings and exact accommodation conditions**: they can be built into the page now, but the production deployment should not remove their `VERIFY` flags until the corresponding partners approve the wording.

| Item | Proposed public copy | Research status before launch |
|---|---|---|
| Event | AI Synergy Hackathon 2026 | Confirmed by Sangillence site citeturn18search4 |
| Offline dates | 29–30 October 2026 | Organizer/user-provided artwork; **verify final schedule** |
| Venue | ABV-IIITM Gwalior | Institute/location verified citeturn19view1turn19view2 |
| Prize pool | ₹1,00,000 | **VERIFY — current Sangillence information indicates sponsor confirmation dependency** citeturn12search0 |
| Registration fee | `{{REGISTRATION_FEE}}` | Current Sangillence page displays ₹500, food included; verify before hard-coding citeturn18search4 |
| PPI opportunities | With Placement Cell, ABV-IIITM Gwalior | Organizer-provided; **partner confirmation required** |
| Research internships | Research internship opportunities | Organizer-provided; terms **unspecified** |
| Startup networking | Meet founders/startups/ecosystem partners | Organizer-provided; partner list **unspecified** |
| Overnight stay | Overnight stay at ABV-IIITM during hackathon | Organizer-provided; allocation/eligibility **unspecified** |
| Travel reimbursement | Do not advertise | **Unspecified** |
| Certificates | Participation + winner recognition | Organizer-provided |
| Prize/certificate release | Within 30 days after event, subject to verification | Organizer-provided |
| Sangillence learning access | Free access to upcoming AI learning platform | Currently stated by Sangillence citeturn12search0 |
| Exact prize split | `{{PRIZE_BREAKUP}}` | **Unspecified** |
| Top-performer additional benefit | `{{TOP_PERFORMER_BENEFIT}}` | **Unspecified** |

## Research validation and launch decisions

The ABV-IIITM branding should be taken from the institute's official brand asset. Its logo page explicitly provides the mark in **PNG and PDF formats** and explains the official dark-blue identity. citeturn19view0 The Sangillence mark should likewise be obtained from the official Sangillence property rather than manually traced; Sangillence's pages visibly use both the ABV-IIITM and Sangillence identities, although an official standalone vector-download endpoint was not located in the accessible source material. citeturn18search3

For the website architecture, **Next.js App Router + Tailwind CSS + Framer Motion + Vercel** is appropriate. Next.js currently supports static metadata objects, generated metadata, file-based favicons, Open Graph images, `robots.txt`, and `sitemap.xml`; those capabilities fit the SEO/social-sharing requirements of a campaign landing page. citeturn20view0turn20view1 Vercel documents zero-configuration Next.js deployment and automatically creates Preview deployments from non-production branches and pull requests, which is particularly useful for organizer review before publication. citeturn19view3turn20view4

For conversion, the site should use a **single dominant registration goal**, repeat that CTA after high-intent sections such as Perks and Round Flow, and put proof/clarity near the first CTA: date, venue, prize status, team size, offline-round destination, and institutional branding. Do not use false countdowns or fabricated scarcity; a countdown should only appear when `{{REGISTRATION_DEADLINE}}` is officially fixed.

The proposed content hierarchy is:

`Navbar → Hero → Trust strip → Perks → Why Different → Themes → Round Flow → Evaluation → Submission → Eligibility → FAQ → Sponsors/Partners → Final CTA → Footer`

The primary hero should use **live HTML text over/next to the supplied campus image**, rather than baking the essential information only into a banner. W3C explicitly recommends actual text rather than images of text where possible because text in images scales and adapts less effectively. citeturn15view0

## Ready-to-paste landing page Markdown

The following is the master content file. `{{VARIABLES}}` are deliberate deployment placeholders. `VERIFY` comments are internal and should be resolved before production.

```md
---
title: "AI Synergy Hackathon 2026 | ABV-IIITM Gwalior"
description: "Investigate real-world cases, reason with AI, build adaptable solutions, and compete at AI Synergy Hackathon 2026 at ABV-IIITM Gwalior."
siteName: "AI Synergy Hackathon 2026"
language: "en-IN"
canonical: "{{CANONICAL_URL}}"
ogImage: "/assets/og/ai-synergy-2026-og-1200x630.jpg"
twitterImage: "/assets/og/ai-synergy-2026-og-1200x630.jpg"
keywords:
  - AI Synergy Hackathon 2026
  - AI Hackathon India
  - ABV-IIITM Gwalior
  - IIITM Gwalior Hackathon
  - Human AI Collaboration
  - Artificial Intelligence Hackathon
  - Student Hackathon 2026
  - Sangillence
tags:
  - AI
  - Hackathon
  - Human-AI Synergy
  - Innovation
  - Students
  - ABV-IIITM
  - Sangillence

event:
  name: "AI Synergy Hackathon 2026"
  dates: "29–30 October 2026"
  venue: "ABV-IIITM Gwalior"
  venueCity: "Gwalior, Madhya Pradesh"
  registrationUrl: "{{REGISTER_URL}}"
  rulebookUrl: "{{RULEBOOK_URL}}"
  unstopUrl: "{{UNSTOP_URL}}"
  registrationDeadline: "{{REGISTRATION_DEADLINE}}"
  registrationFee: "{{REGISTRATION_FEE}}"
  prizePool: "₹1,00,000"
  prizeStatus: "{{PRIZE_POOL_STATUS}}"

organizer:
  contactEmail: "{{CONTACT_EMAIL}}"
  contactPhone: "{{CONTACT_PHONE}}"

verification:
  prizePool: "VERIFY before production"
  ppiPartnership: "VERIFY before production"
  researchInternships: "VERIFY terms before production"
  startupPartners: "VERIFY names before production"
  overnightStayTerms: "VERIFY eligibility and allocation before production"
  travelReimbursement: "UNSPECIFIED"
  prizeBreakup: "UNSPECIFIED"
  topPerformerBenefit: "UNSPECIFIED"
---

<!--
AI SYNERGY 2026 — MASTER LANDING PAGE CONTENT

DESIGN SYSTEM
Background: dark navy / slate-950
Grid: low-opacity cyan grid
Primary accent: electric cyan
Secondary accent: violet/purple
Prize accent: amber/gold
Text: white/slate-50
Muted text: slate-300/400

PRIMARY CTA: Register Now
SECONDARY CTA: Explore the Challenge / View Rulebook

CRITICAL ASSET RULE:
Use the supplied ABV-IIITM campus/banner source.
DO NOT AI-generate, reconstruct or replace the campus building.
Crop/resize from the supplied artwork only.

PRODUCTION GATES:
- Confirm ₹1,00,000 prize sponsorship before publishing as guaranteed.
- Confirm exact PPI wording with Placement Cell.
- Confirm research internship provider/criteria.
- Confirm startup partners.
- Confirm overnight-stay eligibility/capacity.
- Confirm final rules/team eligibility.
-->


<!-- COMPONENT: Navbar -->

# AI Synergy Hackathon 2026

**ABV-IIITM Gwalior × Sangillence**

Navigation:

- About
- Themes
- Rounds
- Evaluation
- Perks
- FAQ

[View Rulebook]({{RULEBOOK_URL}})
[Register Now]({{REGISTER_URL}})


<!-- COMPONENT: Hero -->

## Think with AI. Build beyond it.

**AI Synergy Hackathon 2026**

Investigate real-world cases. Discover the problem worth solving.  
Think alongside AI, challenge its suggestions, verify evidence, and turn your reasoning into a solution that can survive the real world.

**29–30 October 2026**  
**ABV-IIITM Gwalior**  
**₹1,00,000 Prize Pool***  
**Human–AI Problem Solving • Live Building • Adaptation • Demonstration**

[Register Now]({{REGISTER_URL}})
[Explore the Challenge](#why-ai-synergy)

> *Prize pool publication is subject to final organizer/sponsor confirmation before production launch.

![ABV-IIITM Gwalior campus and AI Synergy Hackathon 2026 visual](/assets/hero/ai-synergy-hero-campus-1920x557.webp)

<picture>
  <source
    media="(max-width: 767px)"
    srcset="/assets/hero/ai-synergy-hero-campus-700x400.webp"
  />
  <img
    src="/assets/hero/ai-synergy-hero-campus-1920x557.webp"
    alt="ABV-IIITM Gwalior campus featured for AI Synergy Hackathon 2026"
    width="1920"
    height="557"
  />
</picture>

**Short trust strip**

`7 AI Themes` · `2–4 Member Teams*` · `Online Elimination` · `On-Campus Build Round`

*Final eligibility/team rules should match the published rulebook.


<!-- COMPONENT: PerksAndPrizes -->

## More than a hackathon. An opportunity to build what comes next.

### ₹1,00,000 Prize Pool

Compete for a total prize pool worth **₹1,00,000**, subject to final organizer/sponsor confirmation.

**Prize breakdown:** {{PRIZE_BREAKUP}}

### PPI Opportunities

Top-performing and eligible participants may receive **Pre-Placement Interview opportunities in collaboration with the Placement Cell, ABV-IIITM Gwalior**, subject to the final eligibility and partner criteria.

> A PPI is an interview opportunity and does not constitute a guaranteed job or internship offer.

### Research Internship Opportunities

Standout participants may be considered for **research internship opportunities** with participating research groups or partners.

**Research internship terms:** {{RESEARCH_INTERNSHIP_TERMS}}

### Meet Startups & Builders

Connect with **startup founders, innovators, mentors and ecosystem participants** during the on-campus hackathon.

**Confirmed startup partners:** {{STARTUP_PARTNERS}}

### Overnight Hackathon Experience

Shortlisted teams participating in the offline round can experience an **overnight stay at ABV-IIITM Gwalior during the hackathon**, subject to allocation, institute rules and final accommodation guidelines.

**Stay policy:** {{OVERNIGHT_STAY_TERMS}}

### Top Performer Recognition

Exceptional participants may receive additional **Top Performer recognition and opportunities**.

**Confirmed benefit:** {{TOP_PERFORMER_BENEFIT}}

### Certificates

Eligible participants will receive **participation certificates**, with separate winner/finalist recognition where applicable.

Certificates and prizes are targeted for release **within 30 days after the conclusion of the event**, subject to result verification and required formalities.

### Participant Learning Perk

{{SANGILLENCE_PLATFORM_ACCESS_COPY}}

**Prize one-liner**

> **Compete for a ₹1,00,000 prize pool alongside PPI opportunities, research exposure, startup networking, certificates and an immersive on-campus hackathon experience at ABV-IIITM Gwalior.**

[Register for AI Synergy]({{REGISTER_URL}})


<!-- COMPONENT: WhyDifferent -->

## Why AI Synergy is different {#why-ai-synergy}

This is **not another “build an AI app” hackathon**.

AI Synergy begins before coding.

Most challenges tell you the problem and ask for a solution. Here, teams are expected to investigate an ambiguous real-world situation, decide **what the actual problem is**, use evidence to challenge assumptions, work with AI critically, and justify why their chosen solution deserves to exist.

### Case first

Teams start with a **case or situation**, not a pre-packaged technical problem statement.

### Human judgment stays in the loop

AI can research, critique, compare, simulate and suggest.  
The team remains responsible for **verification, judgment, trade-offs and final decisions**.

### Your reasoning is part of the submission

AI conversation logs and a decision trail help judges understand **how your thinking evolved**, not just what appeared on the final slide.

### You must adapt

During the offline round, organizers introduce **new evidence or a constraint** that challenges your original assumptions.

Strong teams do not merely defend their first idea.  
They know **when and why to change it**.

**The journey**

`Case → Investigation → Problem Discovery → AI Collaboration → Decision → Solution → Build → Twist → Adapt → Demonstrate`


<!-- COMPONENT: Themes -->

## Seven tracks. Real problems. Open possibilities.

### AI for All

Build AI that improves **accessibility, inclusion, learning, productivity or everyday participation**, especially for people and communities often left out by technology.

### AI in Agriculture

Explore challenges across **farm decision support, crop intelligence, supply chains, market access, resource efficiency and farmer-facing services**.

### AI in Healthcare

Investigate responsible applications across **health access, workflow support, prevention, monitoring, information systems and patient or provider assistance**.

> Teams must clearly state that prototypes are not substitutes for professional medical diagnosis unless appropriately validated and approved.

### AI in Tourism

Design intelligent experiences for **discovery, travel planning, heritage, local economies, accessibility, visitor management and sustainable tourism**.

### AI for Energy & Environment

Address problems involving **energy efficiency, climate resilience, pollution, waste, natural resources, environmental monitoring and sustainability**.

### AI in Sports

Use AI for **performance insight, accessibility, grassroots participation, fan experiences, event operations, training or sports analytics**.

### AI in Governance

Explore responsible AI for **public-service access, citizen information, administrative workflows, transparency, grievance handling and decision support**.

> AI-generated governance outputs should remain auditable and should not replace accountable human decision-makers in high-impact contexts.


<!-- COMPONENT: RoundFlow -->

## From investigation to implementation

### Round 1 — Case Investigation & Problem Selection

**Format:** Online elimination round

Your goal is not simply to propose an AI product.

Your team must show that it can:

1. understand the case;
2. identify stakeholders;
3. investigate evidence;
4. formulate more than one possible problem;
5. challenge assumptions;
6. use AI to explore and critique alternatives;
7. select and justify the most meaningful problem;
8. propose a feasible solution;
9. define what should be built next.

#### Round 1 deliverables

**Case Investigation / Problem-Solution Brief**

Include:

- selected case/theme;
- context and stakeholders;
- evidence gathered;
- assumptions and uncertainties;
- candidate problem statements;
- comparison of alternatives;
- selected problem and justification;
- proposed solution;
- feasibility and limitations.

**Solution Presentation**

Show:

- case understanding;
- final problem statement;
- alternative directions considered;
- proposed solution;
- user/stakeholder workflow;
- role of AI;
- role of humans;
- implementation feasibility;
- risks and safeguards;
- what you plan to build during the offline round.

**Genuine AI Conversation Logs / Share Links**

Submit authentic task-related interactions with the AI tools used.

These logs should show meaningful:

- investigation;
- exploration;
- criticism;
- correction;
- comparison;
- verification;
- decision support.

Prompt quantity, expensive subscriptions or the name of the AI model do **not** determine quality.

**AI Decision Trail**

For major decisions, record:

| Decision | Initial view | AI contribution | Evidence checked | Accepted/rejected | Final reasoning |
|---|---|---|---|---|---|
| Example | {{INITIAL_VIEW}} | {{AI_SUGGESTION}} | {{EVIDENCE}} | {{DECISION}} | {{RATIONALE}} |

**Basic SRS / Implementation Plan**

Include:

- target users;
- inputs;
- outputs;
- system workflow;
- functional requirements;
- AI responsibilities;
- human responsibilities;
- external dependencies;
- constraints;
- failure handling;
- acceptance criteria;
- version-one exclusions.

**References**

List relevant:

- reports;
- datasets;
- research papers;
- websites;
- APIs;
- standards;
- open-source assets.

**Team Contribution Declaration**

State who contributed to:

- investigation;
- AI interactions;
- analysis;
- SRS;
- design;
- development;
- presentation;
- testing.

**Optional technical feasibility proof**

Teams may additionally provide:

- GitHub repository;
- notebook;
- API experiment;
- wireframe;
- prototype;
- architecture diagram;
- pseudocode;
- dataset exploration.

A complete production-ready application is **not required in Round 1**.

[Read Full Rules]({{RULEBOOK_URL}})


### Offline Round — Build, Adapt & Demonstrate

**Venue:** ABV-IIITM Gwalior

Shortlisted teams advance to the on-campus build round.

The goal is to prove that your team can convert its Round 1 reasoning into **working execution**.

#### Build

Develop a functional slice of the proposed solution.

Teams may use appropriate:

- AI models;
- APIs;
- software frameworks;
- open-source libraries;
- datasets;
- no-code/low-code tooling;

provided external resources and pre-existing work are declared where required.

#### Checkpoint

Teams demonstrate progress and document the state of the solution before the adaptation challenge.

#### The Twist

At a common announced point, organizers introduce **new evidence or a new constraint**.

Examples may include:

- changed stakeholder requirements;
- budget reduction;
- policy limitation;
- unavailable data;
- conflicting evidence;
- new user behaviour;
- infrastructure limitations;
- privacy/safety requirements;
- failure conditions.

#### Adapt

Teams must decide whether the new information changes:

- the problem definition;
- system design;
- workflow;
- model choice;
- user experience;
- evaluation strategy;
- safeguards;
- scope.

#### Adaptation Note

Document:

- what you previously assumed;
- what changed;
- what remained valid;
- what you rejected;
- what you changed;
- why you changed it;
- how you tested the revised approach.

#### Prototype Freeze

Submit the final runnable artifact with:

- source/repository or export;
- run instructions;
- updated implementation notes;
- updated SRS/change log;
- Stage 2 AI interaction evidence;
- tests;
- known limitations;
- contributor details.

#### Live Demo & Defence

The final demonstration should show:

1. the normal workflow;
2. at least one adverse/failure case;
3. handling of missing or conflicting information;
4. how the new constraint affected the product;
5. what AI contributed;
6. what humans decided;
7. what was actually tested.

The Q&A is part of the evaluation.


<!-- COMPONENT: Evaluation -->

## How teams are evaluated

### Round 1 Evaluation — 100 Points

| Criterion | Weight | What judges should look for |
|---|---:|---|
| Problem Diagnosis & Selection | 25% | Depth of case understanding, competing problem statements, stakeholder relevance, justification of final problem |
| Evidence & Investigation Quality | 20% | Source quality, verification, assumptions, uncertainty handling and whether evidence changes reasoning |
| Human–AI Collaboration | 25% | Purposeful AI use for exploration, critique, verification and decisions rather than superficial prompt generation |
| Solution / SRS Quality | 20% | Feasibility, workflow clarity, requirements, AI/human responsibilities, implementation scope and acceptance criteria |
| Context, Ethics & Accountability | 10% | Privacy, fairness, inclusion, risks, safeguards, constraints and accountable human oversight |

### Offline Round Evaluation — 100 Points

| Criterion | Weight | What judges should look for |
|---|---:|---|
| Execution / Working Prototype | 30% | Whether the core workflow works and meaningfully addresses the selected problem |
| Adaptation to New Constraint | 20% | Quality of reasoning and implementation after the common twist/new evidence |
| AI Orchestration / Human–AI Synergy | 20% | Effective division of work between people, models, tools and system components |
| Evaluation, Testing & Safeguards | 20% | Tests, failure cases, robustness, limitations, safety and evidence that the team evaluated its own claims |
| Communication & Team Ownership | 10% | Clear live explanation, contributor ownership, technical understanding and ability to defend decisions |

### Recommended judge scoring mechanics

For each criterion, assign a raw **1–5 score**:

- **1 — Weak:** little evidence; major gaps
- **2 — Developing:** partial evidence; significant weaknesses
- **3 — Competent:** requirements substantially met
- **4 — Strong:** well supported and thoughtfully executed
- **5 — Exceptional:** rigorous, differentiated and highly convincing

Recommended calculation:

`Weighted score = (raw score ÷ 5) × criterion weight`

### Final ranking

**Recommended formula:**  
`30% Round 1 + 70% Offline Round`

Use the published rulebook as the final authority if the scoring formula changes.


<!-- COMPONENT: SubmissionChecklist -->

## Round 1 submission checklist

Before submitting, confirm that your team has:

- [ ] selected a case/theme;
- [ ] submitted the Problem-Solution Brief;
- [ ] uploaded the presentation;
- [ ] provided genuine AI logs/share links;
- [ ] completed the AI Decision Trail;
- [ ] completed the basic SRS/implementation plan;
- [ ] included sources/references;
- [ ] included the Team Contribution Declaration;
- [ ] removed secrets and unnecessary personal information from AI logs;
- [ ] checked that all shared links are accessible to judges;
- [ ] optionally provided GitHub/prototype/technical proof.

### Suggested Unstop submission fields

| Field | Type | Required |
|---|---|---|
| Problem-Solution Brief | PDF upload | Yes |
| Solution Presentation | PDF/PPT upload | Yes |
| AI Chat Logs / Share Links | URL or file | Yes |
| AI Decision Trail + Basic SRS | PDF upload | Yes |
| GitHub / Prototype / Technical Proof | URL | Optional |
| References + Team Contribution Declaration | PDF upload | Yes |
| Team declaration / consent checkbox | Checkbox | Yes |

> Final file-size limits, accepted formats and naming conventions: {{UNSTOP_UPLOAD_RULES}}


<!-- COMPONENT: Eligibility -->

## Who can participate?

<!-- VERIFY AGAINST FINAL RULEBOOK BEFORE PRODUCTION -->

AI Synergy is intended for **undergraduate and postgraduate students across disciplines**.

### Working team rules

- Team size: **2–4 members**
- UG and PG students may participate
- Cross-college teams are allowed
- Interdisciplinary teams are encouraged
- Prior professional AI experience is not required

### What matters more than your stack

You do not need the most expensive AI subscription.

You need to demonstrate:

- curiosity;
- investigation;
- evidence;
- critical reasoning;
- collaboration;
- implementation ability;
- accountability.

**Final eligibility is governed by the official rulebook and registration conditions.**

[Check Eligibility & Register]({{REGISTER_URL}})


<!-- COMPONENT: FAQ -->

## Frequently asked questions

### What is AI Synergy Hackathon 2026?

AI Synergy is a case-first Human–AI problem-solving hackathon. Teams investigate a situation, determine what problem is worth solving, collaborate critically with AI, propose a solution and, if shortlisted, build and adapt that solution during the on-campus round.

### Do we receive a fixed problem statement?

The challenge is designed around cases/themes rather than a completely pre-defined engineering specification. Teams are expected to investigate and justify their own problem selection.

### Can we use ChatGPT, Gemini, Claude or other AI tools?

Yes. Teams may use appropriate AI tools/models subject to the event rules and the terms of those services.

Evaluation focuses on **how intelligently and responsibly AI is used**, not on model brand, number of prompts or subscription price.

### Is a complete application required in Round 1?

No. Round 1 focuses on investigation, problem selection, evidence, Human–AI reasoning, solution quality and implementation planning.

A prototype or technical proof can strengthen feasibility where appropriate.

### What should AI logs contain?

Submit authentic interactions that materially contributed to your work: investigation, alternatives, critique, corrections, verification and important decisions.

Do not submit irrelevant conversations purely to increase prompt count.

### Can we edit AI logs before submitting them?

You may redact sensitive information, credentials and unnecessary personal data, but should not alter the substance in a way that misrepresents the team's actual Human–AI process.

### What happens in the offline round?

Shortlisted teams build a working solution at ABV-IIITM Gwalior. During the round, organizers introduce new evidence or a constraint. Teams must evaluate the change, adapt where necessary, test the revised approach and demonstrate it live.

### Is the ₹1,00,000 prize pool guaranteed?

{{PRIZE_CONFIRMATION_FAQ}}

<!-- Recommended until formal sponsor sign-off:
"The announced ₹1,00,000 prize pool is subject to final organizer/sponsor confirmation. The website will be updated if prize terms change."
-->

### What are PPI opportunities?

Eligible top-performing participants may be considered for Pre-Placement Interview opportunities under the final collaboration terms.

A PPI opportunity is not a guarantee of employment.

### Are research internships guaranteed?

{{RESEARCH_INTERNSHIP_FAQ}}

Recommended wording:
"Research internship opportunities are subject to partner requirements, participant performance, availability and final selection criteria."

### Will accommodation be provided?

Shortlisted offline participants are expected to receive an overnight-stay arrangement at ABV-IIITM Gwalior during the hackathon, subject to final accommodation rules, capacity and eligibility.

Detailed check-in, allocation and campus-stay instructions will be communicated separately.

### Is travel reimbursement included?

**Travel reimbursement is currently unspecified.**

Do not make travel bookings based on an assumption of reimbursement unless organizers publish a separate policy.

### Will participation certificates be provided?

Yes, eligible participants will receive participation certificates. Winner/finalist recognition may be issued separately.

The target release timeline for prizes and certificates is **within 30 days after the event**, subject to verification and required formalities.

### Is there a registration fee?

**Registration fee:** {{REGISTRATION_FEE}}

Please rely on the final registration page for the applicable fee, inclusions and payment terms.

### Where can we read the complete rules?

[View the Official Rulebook]({{RULEBOOK_URL}})


<!-- COMPONENT: Partners -->

## Presented with the AI Synergy ecosystem

<!-- Do not label an organization "Sponsor", "Hiring Partner",
"Internship Partner" or "Placement Partner" without written confirmation. -->

### Institutional / Venue Branding

![ABV-IIITM Gwalior](/assets/logos/abv-iiitm-logo.png)

### Initiative / Organizer Branding

![Sangillence](/assets/logos/sangillence-logo.svg)

### Sponsors

{{SPONSOR_LOGOS}}

### Startup / Ecosystem Partners

{{STARTUP_PARTNER_LOGOS}}

### Research Partners

{{RESEARCH_PARTNER_LOGOS}}

### Placement / Career Collaboration

{{PLACEMENT_COLLABORATION_LOGOS}}


<!-- COMPONENT: FinalCTA -->

## Find the problem worth solving. Then prove your solution can survive reality.

You will not be judged only on what AI generated.

You will be judged on:

**what you investigated, what you questioned, what you verified, what you rejected, what you decided, what you built — and how you adapted.**

**AI Synergy Hackathon 2026**  
**29–30 October 2026 · ABV-IIITM Gwalior**

[Register Now]({{REGISTER_URL}})
[Read the Rulebook]({{RULEBOOK_URL}})


<!-- COMPONENT: Footer -->

### AI Synergy Hackathon 2026

**ABV-IIITM Gwalior × Sangillence**

Event contact: {{CONTACT_EMAIL}}  
Contact number: {{CONTACT_PHONE}}

[Register]({{REGISTER_URL}})
[Rulebook]({{RULEBOOK_URL}})
[Unstop]({{UNSTOP_URL}})
[Privacy Notice]({{PRIVACY_URL}})
[Terms & Rules]({{TERMS_URL}})
[Accessibility]({{ACCESSIBILITY_URL}})

**Venue**

Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior  
Morena Link Road, Gwalior, Madhya Pradesh — 474015

© 2026 {{COPYRIGHT_OWNER}}. All rights reserved.

<!--
FOOTER LEGAL NOTE:
Use official organization role wording.
ABV-IIITM logo/identity must be used in accordance with institute permission/brand rules.
Do not imply ABV-IIITM sponsorship, hiring commitment or prize guarantee unless formally approved.
-->


<!-- SEO / SOCIAL CONTENT -->

SEO title:
AI Synergy Hackathon 2026 | ABV-IIITM Gwalior

SEO description:
Investigate real-world cases, reason with AI, build adaptable solutions, and compete at AI Synergy Hackathon 2026 at ABV-IIITM Gwalior.

Suggested Open Graph title:
AI Synergy Hackathon 2026 — Think with AI. Build beyond it.

Suggested Open Graph description:
A case-first Human–AI hackathon where teams investigate, reason, build, adapt and demonstrate at ABV-IIITM Gwalior.

Suggested OG image:
/assets/og/ai-synergy-2026-og-1200x630.jpg

Suggested structured-data type:
Event

Structured-data placeholders:
- name: AI Synergy Hackathon 2026
- startDate: {{EVENT_START_ISO}}
- endDate: {{EVENT_END_ISO}}
- eventAttendanceMode: OfflineEventAttendanceMode
- location.name: ABV-IIITM Gwalior
- location.address: {{VENUE_STRUCTURED_ADDRESS}}
- image: {{OG_IMAGE_ABSOLUTE_URL}}
- description: {{SEO_DESCRIPTION}}
- offers.url: {{REGISTER_URL}}
- offers.price: {{REGISTRATION_FEE_NUMERIC}}
- offers.priceCurrency: INR
- organizer.name: {{ORGANIZER_NAME}}
- organizer.url: {{ORGANIZER_URL}}
```

The metadata section above maps cleanly to Next.js's current Metadata API; Next.js can also use root-level `opengraph-image` and `twitter-image` files plus `robots.txt` and `sitemap.xml`. citeturn20view0turn20view1

## Asset inventory

The uploaded image was inspected directly and is **2048 × 682 px, RGBA**. It should be retained as the archival source file. Because its aspect ratio is approximately 3:1, deriving a 1920 × 557 version requires a modest crop rather than distortion. The 700 × 400 mobile image requires a much stronger crop, so the campus building—not the existing embedded event text—should be the focal area.

| Filename | Source / purpose | Recommended resolution | Format | Alt text / accessibility treatment |
|---|---|---:|---|---|
| `ai-synergy-source-banner.png` | **Original user-provided artwork; master source. Never overwrite.** | **2048 × 682 existing** | PNG | Archival; normally not rendered directly |
| `ai-synergy-hero-campus-1920x557.webp` | Primary desktop hero using the **same supplied building** | **1920 × 557** | WebP/AVIF | `ABV-IIITM Gwalior campus featured for AI Synergy Hackathon 2026` |
| `ai-synergy-hero-campus-700x400.webp` | Mobile/tablet crop from same supplied source | **700 × 400** | WebP/AVIF | Same semantic alt text |
| `ai-synergy-hero-combined-1920x557.webp` | Full composite/event-banner derivative | **1920 × 557** | WebP | If all information is repeated in HTML, use `alt=""` |
| `ai-synergy-hero-combined-1920x557.png` | High-quality share/download version if required | **1920 × 557** | PNG | Same treatment as combined asset |
| `ai-synergy-2026-og-1200x630.jpg` | Open Graph / LinkedIn / WhatsApp sharing | **1200 × 630** | JPG | Not normally exposed as content image |
| `abv-iiitm-logo.png` | Official institute logo | Preserve official master; render around 260–360 px wide as needed | PNG | `ABV-IIITM Gwalior` |
| `abv-iiitm-logo.pdf` | Archival / print identity | Official source | PDF | Not rendered in webpage |
| `sangillence-logo.svg` | Sangillence identity | Vector preferred | SVG | `Sangillence` |
| `sangillence-logo.png` | Raster fallback | ≥800 px wide transparent source | PNG/WebP | `Sangillence` |
| `icon-ai-for-all.svg` | Track icon | 64 × 64 source artboard | SVG | Decorative if track text is adjacent: `alt=""` |
| `icon-agriculture.svg` | Track icon | 64 × 64 | SVG | Decorative |
| `icon-healthcare.svg` | Track icon | 64 × 64 | SVG | Decorative |
| `icon-tourism.svg` | Track icon | 64 × 64 | SVG | Decorative |
| `icon-energy-environment.svg` | Track icon | 64 × 64 | SVG | Decorative |
| `icon-sports.svg` | Track icon | 64 × 64 | SVG | Decorative |
| `icon-governance.svg` | Track icon | 64 × 64 | SVG | Decorative |
| `icon-prize.svg` | Prize card | 48–64 px | SVG | Decorative when label exists |
| `icon-ppi.svg` | PPI card | 48–64 px | SVG | Decorative |
| `icon-research.svg` | Research internship card | 48–64 px | SVG | Decorative |
| `icon-startup.svg` | Startup/networking card | 48–64 px | SVG | Decorative |
| `icon-stay.svg` | Overnight stay card | 48–64 px | SVG | Decorative |
| `grid-bg.svg` | Subtle technical grid | Tile around 64 × 64 | SVG/CSS | CSS background; `aria-hidden` |
| `noise-texture.webp` | Very subtle texture | 512 × 512 tile | WebP | Decorative |
| `favicon.ico` | Browser icon | Multi-resolution | ICO | N/A |
| `icon.png` | Next.js metadata icon | 512 × 512 | PNG | N/A |
| `apple-icon.png` | Apple touch icon | 180 × 180 | PNG | N/A |
| `manifest-icon-192.png` | PWA/manifest | 192 × 192 | PNG | N/A |
| `manifest-icon-512.png` | PWA/manifest | 512 × 512 | PNG | N/A |

The **ABV-IIITM logo should come directly from the institute's official logo page**, which explicitly publishes PNG and PDF downloads; avoid extracting the mark from the uploaded banner. citeturn19view0 The institute's official site also includes a gallery that can be used as a source of additional campus photography if later required, though the user-supplied building image remains the required primary hero. citeturn19view2

For Sangillence, use its existing official-site logo asset where legally/technically available; an independently documented SVG brand-download page was not found, so **do not invent or redraw the logo**. Sangillence's official content visibly pairs its identity with ABV-IIITM branding. citeturn18search3

For image SEO, descriptive filenames and useful alt text are preferable to generic names such as `image1.jpg`; Google explicitly recommends descriptive filenames and alt text, which also benefits users who cannot see the image. citeturn14search19

## Component and conversion specification

The page should be implemented with reusable components even though it is a single route. This preserves maintainability while keeping the participant experience frictionless.

| Component | Function | Suggested Tailwind direction | Framer Motion hint |
|---|---|---|---|
| `Navbar` | Persistent navigation + Register CTA | `sticky top-0 z-50 border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur-xl` | Fade from `y:-8`; no repeated animation |
| `Hero` | Value proposition + critical facts + first conversion | `relative isolate overflow-hidden bg-slate-950 pt-24 pb-16 lg:pt-32` | Stagger eyebrow → H1 → copy → CTAs; image fade/scale 1.02→1 |
| `GridBackdrop` | Technical navy grid | CSS linear/radial gradients, `pointer-events-none absolute inset-0` | Static or extremely slow opacity only |
| `TrustStrip` | Date/venue/tracks/format | `border-y border-white/10 bg-white/[0.025]` | Small upward reveal |
| `PerksGrid` | Strong conversion proof | `grid md:grid-cols-2 xl:grid-cols-3 gap-4` | Stagger cards once in viewport |
| `WhyDifferent` | Explain case-first differentiator | `max-w-5xl` with highlighted process rail | Animate process nodes sequentially |
| `ThemesGrid` | Seven challenge tracks | `grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` | Card reveal; no excessive hover movement |
| `RoundFlow` | Explain online → offline experience | Desktop timeline / mobile vertical stack | Animate timeline progress when visible |
| `TwistCard` | Make adaptation mechanic memorable | `border-violet-400/30 bg-violet-500/[0.06]` | Brief glow pulse once, not continuous |
| `EvaluationTables` | Transparency and trust | Responsive scroll wrapper; sticky first column optional | Simple fade only |
| `SubmissionChecklist` | Reduce submission errors | `rounded-2xl border border-cyan-400/15` | No animation needed |
| `Eligibility` | Remove uncertainty | Compact cards/chips | Fade |
| `FAQAccordion` | Objection handling | `<details>` or accessible Radix/shadcn Accordion | Height transition; respect reduced motion |
| `PartnerStrip` | Institutional trust | Logos with consistent visual height | Gentle fade, **not** infinite marquee |
| `FinalCTA` | Last conversion moment | Cyan radial glow over navy surface | Short scale/fade |
| `Footer` | Contact/legal/navigation | `border-t border-white/10 bg-slate-950` | None |

A representative section shell:

```tsx
<section className="relative overflow-hidden py-20 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```

Recommended site-level visual tokens:

```css
:root {
  --bg: #020617;
  --surface: #071426;
  --surface-elevated: #0b1730;
  --cyan: #22d3ee;
  --blue: #3b82f6;
  --violet: #a855f7;
  --amber: #f59e0b;
  --text: #f8fafc;
  --muted: #cbd5e1;
}
```

The grid should be visible but subordinate:

```tsx
<div
  aria-hidden="true"
  className="
    pointer-events-none absolute inset-0
    [background-image:linear-gradient(to_right,rgba(34,211,238,.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,.055)_1px,transparent_1px)]
    [background-size:48px_48px]
    [mask-image:linear-gradient(to_bottom,black,transparent)]
  "
/>
```

The primary CTA treatment:

```tsx
className="
  inline-flex min-h-12 items-center justify-center rounded-xl
  bg-cyan-300 px-6 py-3 font-semibold text-slate-950
  shadow-[0_0_30px_rgba(34,211,238,.22)]
  transition hover:bg-cyan-200
  focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-cyan-300
  focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950
"
```

Use **one primary conversion action** in the navigation and hero. Repeat registration after Perks, Eligibility and at the page end. Secondary links such as the rulebook should visually remain secondary.

Recommended conversion-event taxonomy:

```txt
page_view
hero_register_click
nav_register_click
perks_register_click
eligibility_register_click
final_register_click
rulebook_click
unstop_click
theme_view
round1_expand
offline_round_expand
faq_open
contact_click
```

Do not track AI-log content, uploaded submission contents, names, phone numbers or email addresses as analytics event properties.

For motion, use `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, amount: 0.2 }}`, short 0.35–0.6 second transitions, and `useReducedMotion()` to remove translation/parallax for users who prefer reduced motion. W3C specifically advises supporting motion preferences and eliminating unnecessary interaction-driven animation because motion can cause distraction or physical discomfort. citeturn19view8

The page should also avoid animated logo marquees, constant neon flashing, rapidly changing gradients or heavy parallax. A still, premium technical aesthetic will load faster and make the institutional branding feel more credible.

## Copy variants

The default campaign direction should remain **“Think with AI. Build beyond it.”** It communicates the central proposition without positioning AI as a substitute for the participant.

| Use | Variant | Copy |
|---|---|---|
| Hero — recommended | Short | **Think with AI. Build beyond it.** |
| Hero | Alternative | **Don’t just solve the problem. Discover the one worth solving.** |
| Hero | Alternative | **Investigate. Reason. Build. Adapt.** |
| Hero | Technical | **From ambiguity to evidence. From reasoning to execution.** |
| Hero | Human–AI | **AI can suggest. You decide what deserves to be built.** |
| Hero long | Long | **Investigate real-world cases, uncover the problem that matters, work critically with AI, and build a solution that can adapt when reality changes.** |
| Hero long | More competitive | **Start with an ambiguous case—not a ready-made problem statement. Investigate it, challenge AI, defend your decisions, build your solution, and prove it under changing conditions.** |
| Primary CTA | Recommended | **Register Now** |
| Primary CTA | Variant | **Join AI Synergy 2026** |
| Primary CTA | Variant | **Enter the Hackathon** |
| Primary CTA | Variant | **Register Your Team** |
| Secondary CTA | Recommended | **Explore the Challenge** |
| Secondary CTA | Variant | **See How It Works** |
| Secondary CTA | Rules-focused | **View Rulebook** |
| Perks CTA | Recommended | **Compete at ABV-IIITM Gwalior** |
| Final CTA | Recommended | **Take Your Idea from Reasoning to Reality** |
| Final CTA | Short | **Build What Matters** |

For a concise promotional hero:

> **AI SYNERGY HACKATHON 2026**  
> **Think with AI. Build beyond it.**  
> Investigate real-world cases, discover the problem worth solving, and turn Human–AI reasoning into a solution that can survive changing conditions.  
> **29–30 October 2026 · ABV-IIITM Gwalior**  
> **₹1,00,000 Prize Pool\***  
> **Register Now · Explore the Challenge**

For a longer storytelling hero:

> **What happens when AI gives you an answer—but the answer is not enough?**  
> AI Synergy is a case-first hackathon where teams investigate ambiguous situations, compare competing problems, verify evidence, challenge AI-generated reasoning, and decide what deserves to be built. Shortlisted teams then bring their solution to ABV-IIITM Gwalior, build it, face a new constraint, adapt, test and defend the final result live.

For the Perks section, the strongest one-line conversion copy is:

> **Compete for a ₹1,00,000 prize pool alongside PPI opportunities, research exposure, startup networking, certificates and an immersive overnight on-campus hackathon experience at ABV-IIITM Gwalior.**

Until the prize and career partnerships are formally signed off, production can dynamically substitute a safer version:

> **Compete for prizes and recognition while gaining access to career, research, startup-networking and on-campus opportunities at ABV-IIITM Gwalior.**

That fallback is especially important because the current Sangillence public page confirms AI Synergy and a prize pool, but currently available Sangillence material does not independently establish all of the organizer-requested perk terms or a fixed ₹1,00,000 amount. citeturn18search4turn12search0

## Accessibility, privacy and deployment checklist

**Accessibility.** The visual treatment can be neon without becoming inaccessible. WCAG 2.2 Level AA requires normal text to maintain at least **4.5:1 contrast** against its background and large text at least **3:1**; meaningful non-text controls and graphical cues should reach **3:1** against adjacent colors. citeturn15view0turn19view6 Every keyboard-operable control also needs a visible focus state. citeturn19view7

The implementation checklist should therefore be:

- Use one semantic `<h1>`, followed by a logical heading hierarchy.
- Provide `nav`, `main`, `section`, `aside` where appropriate, and `footer` landmarks.
- Add a first-focus **Skip to main content** link.
- Keep body text high-contrast white/slate; do not use cyan/purple glow as the only source of legibility.
- Maintain at least 4.5:1 body-text contrast and 3:1 meaningful UI/graphic contrast. citeturn15view0turn19view6
- Make keyboard focus clearly visible on links, buttons, accordions and form controls. citeturn19view7
- Use neon color to reinforce state, never as the sole state indicator.
- Do not put essential event information only inside the supplied banner image; reproduce date, venue, prize and CTA as HTML text. W3C recommends text rather than images of text where practicable. citeturn15view0
- Set decorative grid, particles and glows to `aria-hidden="true"`.
- Give logos concise accessible names when linked.
- Use `alt=""` for decorative icons where an adjacent heading already supplies the same information.
- Use a meaningful alt description for the campus image.
- Make mobile touch targets comfortably large; an internal **44 × 44 px minimum design target** is sensible.
- Support `prefers-reduced-motion` and disable non-essential translation, parallax and auto-motion. citeturn19view8
- Never use flashing neon effects.
- Test at 200% zoom, keyboard-only, mobile landscape/portrait and with a screen reader.
- Run Lighthouse plus an accessibility checker such as axe, followed by manual keyboard testing.

**Participant-data and AI-log privacy.** This deserves more attention than a normal hackathon registration form because authentic AI logs can accidentally expose email addresses, phone numbers, IDs, private prompts, confidential project information or data about third parties.

India's Digital Personal Data Protection Act states that consent, where it is the processing basis, should be free, specific, informed, unconditional and unambiguous, with a clear affirmative action and limited to data necessary for the specified purpose; it also provides for withdrawal of consent. citeturn20view6 The Act additionally requires appropriate technical/organizational measures and reasonable security safeguards for personal data. citeturn20view7 The 2025 DPDP Rules have a **phased commencement**, with some provisions effective from publication, Rule 4 after one year, and a substantial group of rules after eighteen months, so legal implementation should be reviewed against the provisions actually in force at launch rather than assuming the full rule set is already operational. citeturn17view0

The site's privacy workflow should therefore include:

- Publish a plain-language privacy notice **before** registration opens.
- Identify who controls participant data and provide a privacy/contact address.
- State separately why data is collected for **registration, judging, certificates, prizes, PPI/research opportunities, event communication and public showcase**.
- Avoid bundling optional marketing consent with mandatory competition consent.
- Collect only fields genuinely required for the event.
- Do not ask participants for AI-account passwords, session cookies, API keys or full account exports.
- Tell participants to **redact secrets, API tokens, personal IDs, phone numbers, home addresses and unnecessary third-party personal data** from AI logs before submission.
- Treat AI share links as potentially public; provide a PDF/export upload alternative wherever feasible.
- Require authentic logs, but explicitly allow privacy-preserving redaction that does not alter the substantive reasoning.
- Maintain separate consent for **judging access** and **public showcase/publication** of chats, prototypes, photos or videos.
- Do not use AI logs for unrelated model training, marketing or promotional content without an appropriate separate basis/permission.
- Restrict raw submission access to authorized organizers and judges.
- Remove judge access after the judging/appeal window.
- Establish a written retention schedule for registrations, judging records, AI logs, identity documents and financial/prize records rather than keeping everything indefinitely.
- Establish a deletion/withdrawal/contact process.
- Keep an incident/breach response procedure.
- List major third-party processors used for registration, forms, file storage, email and analytics in the privacy notice.
- Define a protocol for participants under the applicable age threshold if minors can participate.
- Avoid uploading sensitive participant information to external AI tools for judging unless the privacy/contractual basis has been assessed.
- Use role-based permissions and MFA for organizer accounts.

The GDPR checklist should additionally cover lawful basis, transparency, purpose limitation, data minimisation, storage limitation, participant rights, processor arrangements, international transfers where relevant, and documentation of consent where consent is relied upon; the authoritative text remains the EU General Data Protection Regulation. citeturn15view4 Applicability to the event should be determined from the actual participant/data-processing context rather than assumed solely because the website is accessible globally.

**Deployment.** Vercel currently supports a straightforward Next.js deployment flow; non-production branches and pull requests create Preview deployments, while production can remain isolated until approval. citeturn19view3turn20view4 Recommended steps:

- [ ] Create a Next.js App Router project with TypeScript.
- [ ] Install Tailwind CSS and Framer Motion/Motion.
- [ ] Place the master MD/MDX content under `content/ai-synergy-2026.md`.
- [ ] Store optimized public assets under `/public/assets/`.
- [ ] Preserve the supplied 2048 × 682 source artwork separately from generated derivatives.
- [ ] Use `next/image` for rendered campus/logos where appropriate.
- [ ] Implement the Metadata API in `app/layout.tsx`.
- [ ] Add `app/opengraph-image.jpg`, favicon/icon assets, `robots.ts` and `sitemap.ts`; current Next.js supports these metadata conventions directly. citeturn20view0turn20view1
- [ ] Create Git branches such as `main` and `staging`.
- [ ] Connect the repository to Vercel.
- [ ] Use Preview deployment URLs for organizer, Placement Cell and partner sign-off before merging. Vercel automatically provides preview deployments for non-production branches/PRs. citeturn20view4
- [ ] Configure a custom domain only after content/branding approval.
- [ ] Keep staging/preview registration submissions pointed to test endpoints, not the production participant database.
- [ ] Verify every CTA and share link on desktop and mobile.
- [ ] Test external Unstop registration flow in an incognito session.
- [ ] Confirm the final registration deadline, fee and food inclusions.
- [ ] Confirm prize-pool status and prize breakup.
- [ ] Obtain written approval for PPI wording.
- [ ] Confirm internship and startup partners before showing logos.
- [ ] Confirm overnight-stay eligibility and campus rules.
- [ ] Remove or resolve every `VERIFY`, `TBD` and `{{PLACEHOLDER}}`.
- [ ] Set staging to `noindex`.
- [ ] Verify canonical URL and social previews.
- [ ] Run performance/accessibility tests.
- [ ] Perform a final organizer/legal/privacy review.
- [ ] Promote production only after sign-off.

Recommended environment variables:

```bash
# Public configuration
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_REGISTER_URL=
NEXT_PUBLIC_UNSTOP_URL=
NEXT_PUBLIC_RULEBOOK_URL=
NEXT_PUBLIC_EVENT_START_ISO=
NEXT_PUBLIC_EVENT_END_ISO=
NEXT_PUBLIC_REGISTRATION_DEADLINE=
NEXT_PUBLIC_PRIZE_POOL_STATUS=
NEXT_PUBLIC_ANALYTICS_ENABLED=false

# Server-only form / registration integration
REGISTRATION_PROVIDER_ENDPOINT=
REGISTRATION_PROVIDER_API_KEY=
REGISTRATION_WEBHOOK_SECRET=

# Email / notifications
EVENT_CONTACT_EMAIL=
EMAIL_PROVIDER_API_KEY=
EMAIL_FROM_ADDRESS=

# Database, only if collecting registration data directly
DATABASE_URL=

# Anti-spam, if using Turnstile/reCAPTCHA-equivalent
NEXT_PUBLIC_CAPTCHA_SITE_KEY=
CAPTCHA_SECRET_KEY=

# Optional CMS
CMS_API_URL=
CMS_API_TOKEN=
```

Only genuinely public values should use the `NEXT_PUBLIC_` prefix. Sensitive credentials should remain server-side and inside Vercel's environment-variable system; Vercel explicitly warns against putting API keys, passwords, tokens or database credentials into public/default environment-variable values. citeturn20view5

For environment separation:

```txt
Local
  ↓
Preview / staging
  - test registration endpoint
  - non-production analytics
  - noindex
  ↓
Production
  - official registration URL
  - approved perks/prize copy
  - production analytics
  - indexed
```

Vercel supports separate deployment environments and branch-specific Preview behavior, making this review workflow practical. citeturn20view4

For analytics, Vercel's current Web Analytics integration can be enabled from the project dashboard and added to a Next.js layout with its Analytics component; Vercel also provides Speed Insights/Core Web Vitals monitoring. citeturn20view2turn20view3 Analytics should only be enabled after the privacy notice and any required consent mechanism have been reviewed.

Finally, the strongest production gate is not technical but factual: **do not deploy a fixed ₹1,00,000 prize guarantee, Placement Cell PPI promise, named research internship, startup partner logo or guaranteed accommodation condition until the responsible organization has approved that exact wording**. The website can be fully engineered around those perks now, while keeping them content-controlled so each claim can be activated immediately after confirmation.