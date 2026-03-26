# La Table D'Antibes Website

Status: Planning  
Version: 0.3  
Last updated: 2026-03-26

## Purpose

This document is the current source of truth for the restaurant website project.
It tracks what has already been agreed, what is still open, and what we are deliberately postponing.

## Project Goal

Build a modern, sleek, responsive restaurant website for La Table D'Antibes.

The site should:

- work well on desktop, tablet, and mobile
- be coded cleanly from scratch
- support multilingual expansion
- include the usual restaurant information and a proper text-based menu
- be easy to maintain over time

## Scope Separation

For now, we are separating:

- website build and launch setup
- SEO / "referencement"

SEO will be discussed later as its own topic.

## Agreed So Far

### Current Delivery Approach

The first implementation pass should already look like the real website, but use placeholder content.

This first pass should:

- implement the real final structure of the site
- include French and English from the start
- include a working language switcher
- use placeholder text instead of final client copy
- use placeholder image blocks instead of final photography
- be strong enough to show directly to the client

Purpose of this first pass:

- show the client the website structure concretely
- validate layout, hierarchy, visual direction, and UX
- let the client write the final content based on the implemented structure
- let us later replace content and visuals without redesigning the site

Placeholder rules:

- placeholder copy should be intentional and descriptive, not lorem ipsum
- image placeholders should be simple grey rectangles or squares
- each image placeholder should contain a short centered label of 2 to 3 words maximum describing the intended image

Phase separation:

- phase 1: build the full local prototype
- phase 2: replace placeholders with final copy, business info, and visuals
- phase 3: domain, hosting, HTTPS, workspace email, and final launch setup

### Working Time Assumptions

Current planning assumptions for the website phase:

- 6 hours for site design/build/review iteration
- 2 hours for domain / admin / setup work

These numbers intentionally do not include:

- project brief time
- text/menu/business info validation time
- later photo replacement time

### Booking Strategy

Launch booking/contact flow will be simple:

- phone
- WhatsApp
- email

We are not blocking launch on Lightspeed integration.
The site should be designed so that a future Lightspeed booking flow can be added later without redesigning the website.

### Site Content / Structure

The website should include standard restaurant content.
At minimum, we expect:

- homepage
- menu page
- contact / access information

The menu will be written properly as real content, not uploaded as an image.

### Design / Photo Strategy

The site will be designed with image slots defined from the start.

At launch, those slots will use interim placeholder visuals that already match the intended final placements.
This is so that final real photos can later be swapped in without redesigning the layout.

If a section is structurally important but launch content is not ready yet:

- build the section properly
- keep placeholders ready
- temporarily disable or hide the section until the required content exists
- later enable it with drop-in replacement content instead of redesigning the site

Current strong assumption:

- the terrace may be one of the restaurant's strongest selling points

Launch assumption:

- the site will go live when the restaurant is already open
- no "opening soon" messaging is needed in the base version

### Visual / Graphic Brief

Core color direction:

- beige
- terra cotta

Visual style direction:

- hard edges on content blocks
- avoid rounded corners
- premium rather than playful
- airy and easy to use
- sleek
- authentic
- clean
- modern

Restaurant context and vibe reference:

- located in the Vieil Antibes
- in a popular and touristy area
- large terrace
- large interior
- suitable for lunch, dinner, and drinks
- strong summer appeal in sun or shade
- classic French comfort dishes
- wood-fired oven pizzas

Interior atmosphere reference for design inspiration:

- wooden tables
- stone walls
- exposed wood beams
- visible authentic wood-fired oven
- plants
- large bistrot-style wood and brass bar
- mirrors
- authentic materials, but fully refreshed, repainted, and clean

Important note:

- this is design direction for the website experience
- it does not automatically mean this exact wording should appear in the final copy

### Typography Direction

Typography should aim for:

- a modern serif style for headings and premium moments
- a clean, readable companion font for interface text and body copy

Typography goals:

- premium feel
- readability
- elegance without stiffness
- warmth without becoming rustic or kitsch

### Infrastructure / Launch Setup

The launch/setup side includes:

- domain name setup
- email/workspace setup
- HTTPS certificate

HTTPS should be handled via modern hosting so it is not a separate manual engineering project.

### Cookie / Tracking Decision

Current launch decision:

- no cookie banner if we can avoid it cleanly
- no analytics stack at launch unless there is a clear business need later

This implies preferring:

- no advertising trackers
- no third-party marketing scripts
- no embedded social widgets
- no heavy third-party embeds by default
- simple links for phone, WhatsApp, email, maps, and socials

### Collaboration / Execution Rules

Implementation expectation:

- Codex should code the website end to end based on the agreed brief
- the user provides direction, taste, feedback, and later the final assets and content

Decision ownership:

- Codex should make the design and implementation judgments needed to move the project forward
- the user is briefing and validating rather than specifying every design choice

Escalation rule:

- if Codex hits a real blocker or the only workaround is poor quality, Codex should stop and surface the issue clearly instead of forcing a weak solution

Examples of blockers worth surfacing:

- font sourcing issues
- poor-quality technical workaround
- implementation compromise that would hurt the intended design standard

Preview rule:

- once the first version is built, it should be launched locally in the user's browser for review before refinement

## Multilingual Strategy

### Requested Languages

Long-term requested language coverage currently includes:

- French
- English
- Italian
- Dutch
- Spanish
- Russian
- Ukrainian
- some Asian languages (exact locales still to be defined later)

### Initial Launch Languages

Initial launch should start with:

- French
- English

### Technical Approach

The site should be built for multilingual expansion from day one, but without duplicating page code.

Target approach:

- one shared codebase
- one shared template/component system
- one locale/content source per language
- a language switcher for users

This means we should avoid a "Google auto-translate button" as the core strategy.
Instead, we should use a proper multilingual architecture that remains maintainable and SEO-friendly.

Important maintenance principle:

- future design/code changes should happen once
- only language content should vary by locale

Prototype expectation:

- the first coded version should already demonstrate French and English switching so the client can understand the multilingual approach immediately

## Things We Have Not Finalized Yet

- hosting provider
- exact future Asian language locales
- final domain name
- exact menu structure/content model
- SEO strategy and maintenance plan

## Notes

- We are still in discussion mode only.
- No implementation work has started yet.
- This file should be updated whenever a decision becomes firm or is revised.

## Website Plan

This section captures the current recommended structure for the website.
It can still be revised, but it is the current working baseline.

### Positioning

The website should feel premium, clear, and local.
It should help a visitor answer the main questions quickly:

- What kind of restaurant is this?
- Why should I go there?
- What does the place look like?
- What is on the menu?
- Where is it?
- How do I book or contact them?

The website should also support a second layer of goals:

- present the terrace as a major selling point
- work well for tourists and multilingual visitors
- be easy to update without structural redesign

The website should be conceived as mobile-first.

### Conversion Vision

The site should be built around the real mindset of a restaurant visitor.

Most visitors are trying to answer one or more of these questions quickly:

- What kind of place is this?
- Does it look good enough to choose?
- What can I eat or drink there?
- Where is it?
- Is it open?
- How do I contact or book now?

For this project, conversion means:

- phone taps
- WhatsApp taps
- email taps
- menu views
- directions / map clicks
- future reservation actions

Core conversion rule:

- make the user want to go there, then make acting on that desire take one tap

Design implications:

- mobile-first by default
- practical information visible early
- menu reachable in one tap
- terrace surfaced early as a differentiator
- no friction-heavy booking flow at launch
- no clutter from too many equal-priority CTAs
- no slow decorative patterns that delay action

### Navigation

Recommended main navigation:

- Menu
- Gallery
- About
- Contact

Notes:

- the logo can link to Home
- Home does not need to appear as an explicit nav item unless we decide otherwise

Primary CTA in header:

- Reserve / Contact

Language switcher:

- visible in header or utility area on all pages

### Sitemap / Page Count

Recommended launch structure:

- Home
- Menu
- Gallery
- About
- Contact
- Legal notice / privacy page

Possible later additions only if needed:

- News / Events
- Gift cards
- Private dining / group bookings
- Careers

### Global Elements

Recommended global elements across the site:

- sticky header
- language switcher
- primary CTA in header
- strong footer with address, hours, contact links, socials, and legal links
- mobile-first action access for key tasks

Recommended mobile quick actions:

- Call
- WhatsApp
- Directions
- Menu or Contact / Reserve depending on final UI balance

### Page Goals

#### Home

Purpose:

- communicate the atmosphere fast
- present the terrace and overall concept
- drive visitors toward menu, contact, and reservation/contact actions

Recommended sections:

- hero section
- practical information strip
- short positioning statement
- terrace highlight
- signature food / cuisine preview
- menu preview
- atmosphere / gallery preview
- about preview
- booking / contact CTA block
- map / access preview

Detailed home section mapping:

1. Hero
   - terrace-first image
   - restaurant name
   - short value proposition
   - primary CTA
   - secondary CTA
2. Practical info strip
   - address
   - opening hours
   - phone
   - quick access to directions
3. Terrace block
   - visual focus on outdoor experience
   - short supporting copy
4. Cuisine / menu teaser
   - short description of food identity
   - CTA to full menu
5. Atmosphere block
   - interior / detail / ambience visuals
6. Story teaser
   - short founder/family/concept angle
   - CTA to About page
7. Contact / access block
   - map access
   - contact methods
   - final CTA

#### Menu

Purpose:

- present the food clearly in text form
- let users browse easily on mobile
- support multilingual translation properly

Recommended sections:

- page intro
- lunch / dinner / brunch / drinks split as applicable
- category navigation or anchor links
- detailed dish listings
- allergens / dietary indicators if applicable
- prices
- notes such as seasonal changes or market availability

Menu data should ideally be structured so it can be updated cleanly without rewriting layouts.

Menu page rules:

- mobile readability is critical
- category anchors should reduce scrolling friction
- dish names, descriptions, and prices should be easy to scan
- avoid turning the page into a PDF clone

#### Gallery

Purpose:

- sell the place visually
- show terrace, ambience, dishes, and details

Recommended sections:

- terrace
- dining room / ambience
- food highlights
- detail shots

At launch, this page can use interim imagery that mirrors the final shot list.

Gallery page goal:

- create desire and reassure visitors about atmosphere and quality

#### About

Purpose:

- give personality and credibility
- explain the restaurant story without becoming too long

Recommended sections:

- concept / identity
- founder or family angle
- cuisine philosophy
- local / seasonal / quality angle if real
- short practical hospitality promise

About page goal:

- add personality and trust without becoming long or self-important

#### Contact

Purpose:

- remove friction for booking and arrival
- centralize all practical information

Recommended sections:

- phone
- WhatsApp
- email
- address
- opening hours
- map
- parking / access notes if relevant
- social links
- booking CTA

Contact page rules:

- should remove as much friction as possible
- should feel practical before decorative
- should be especially strong on mobile

### Homepage Hierarchy

Strong recommendation for homepage order:

1. Hero with terrace-first visual emphasis
2. Quick statement of concept and cuisine
3. Key practical details
4. Terrace highlight
5. Menu teaser
6. Atmosphere / gallery teaser
7. About / story teaser
8. Contact / map / booking CTA

### Image Strategy

Image slots should be planned now so replacements are simple later.

Recommended key image groups:

- hero / terrace
- secondary ambience image
- interior image
- food close-ups
- detail / material / table setting image
- founder or chef portrait if available

Prototype image rule:

- image slots should be represented by neutral grey placeholder blocks labeled with the intended subject matter

### Multilingual Content Strategy

The website structure should stay identical across languages.
Only locale content should change.

This means:

- one set of page templates
- one shared design system
- localized text and metadata per language
- language switcher linking to equivalent localized pages

Prototype rule:

- the first version should visibly demonstrate this multilingual system in both French and English

### What To Avoid

Avoid:

- too many pages at launch
- PDF menu as the main menu experience
- auto-translate as the core multilingual strategy
- generic stock-restaurant layout
- long walls of text
- hiding practical info
- overcomplicated booking flows at launch
- a homepage that looks beautiful but delays contact action
- embedded tools that create legal/performance friction without strong business value
- placeholder content that is too vague to guide the client on what belongs in each section

### Recommended Launch Scope

For a strong first version, the recommended launch scope is:

- 5 main content pages
- 1 legal page
- simple booking/contact CTA system
- multilingual foundation
- image-driven but not image-dependent design
- terrace-led storytelling

### Cookie / Tracking Direction

Current preferred direction:

- keep the launch site lean enough to avoid a cookie consent banner if possible

This means preferring:

- no advertising trackers
- no social media tracking widgets
- no heavy third-party embeds by default
- privacy-friendly analytics only if configured in a consent-exempt compliant way, or no analytics at launch
- simple outbound links for phone, WhatsApp, email, maps, and social profiles where possible

Important note:

- if we later add tools that drop non-essential cookies or third-party traceurs, we will need proper consent handling
