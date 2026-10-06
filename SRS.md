# Software Requirement Specification (SRS)
## Project: Accessibility Copilot for Public Services

### 1. Introduction
This document defines the functional and non-functional specifications for the **Accessibility Copilot for Public Services** web application, supporting accessible digital intake for government portals.

### 2. Functional Requirements
* **FR-01: Bilingual UI Engine**
  * Language switching must occur client-side without page refreshes.
  * System must translate all headers, labels, form instructions, buttons, and system voice messages.
* **FR-02: Speech Recognition System (Speech-to-Text)**
  * Utilize `webkitSpeechRecognition` or standard `SpeechRecognition` API.
  * Implement an auxiliary visual simulator tool so that voice controls can be executed via cursor clicks, representing mock voice inputs.
  * Continuous listening is toggleable to prevent feedback loops.
* **FR-03: Speech Synthesis System (Text-to-Speech)**
  * Utilize browser `speechSynthesis` API.
  * Language selection must shift voice locale: `en-US` / `en-GB` for English, and `hi-IN` for Hindi.
  * Incorporate read-aloud buttons next to form instructions and card highlights.
* **FR-04: High Contrast Theme & Layout Adaptations**
  * Light Contrast Theme: Base backgrounds #F8FAFC, surface cards #FFFFFF, primary text #0F172A.
  * High Contrast Theme: Background #000000, text #FFFFFF, accent colors #FFFF00 (Yellow), borders 2px solid white/yellow.
  * Font scaling system: Increase base font-size up to 130% dynamically (`+15%` and `+30%` tiers).
  * Dyslexia-friendly toggle: Switch body fonts to high-readability sans-serif fonts with wide kerning and tracking.
* **FR-05: Dynamic Form Helper**
  * Step-by-step sequential focus on fields.
  * Speak corresponding field helper labels upon focus.
  * Trigger validation errors on empty required fields.
* **FR-06: Interactive Service Chatbot**
  * Handle user requests regarding: Pension, Income, Disability, Scholarship, Insurance, Ration Card.
  * Maintain conversation log client-side, showing responses in bubble layout.
* **FR-07: Accessibility Report Card**
  * Log actions (e.g. "Enabled High Contrast", "Applied Dyslexic Font", "Navigated to Form via Voice").
  * Export report as a clean HTML printing template.

### 3. Non-Functional Requirements
* **Performance:** Maximum loading time under 1.5 seconds on a standard 3G connection. Zero dependency on external runtime libraries (no Tailwind CDN, no React, no jQuery).
* **Browser Compatibility:** Works across Google Chrome, Microsoft Edge, Safari, and Firefox.
* **Security & Privacy:** Strictly zero collection of user data. Form submissions are logged only to the local session data for demo validation.
* **Accessibility Standards:** Conformance to WCAG 2.1 Level AA criteria (e.g., color contrast ratios >= 4.5:1, semantic landmarks, skip-links, focus markers).
* **SEO Quality:** Single `<h1>` tag, structured metadata descriptions, semantic section landmarks.
