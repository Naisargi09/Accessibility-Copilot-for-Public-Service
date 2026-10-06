# Architectural Decision Record (ADR)
## Project: Accessibility Copilot for Public Services

### ADR-001: Core Web Architecture (HTML5, Vanilla CSS3, Vanilla ES6 JavaScript)
* **Status:** Approved.
* **Context:** The application is an accessibility-focused public service portal. It must load instantly, be highly compatible with various assistive technologies, and be easily deployable in low-bandwidth municipal environments.
* **Decision:** We use pure HTML5, vanilla CSS3, and ES6 JavaScript. No framework overhead (like React, Angular, or Vue) is introduced.
* **Consequences:** 
  * Near-zero page load times.
  * Easy integration with any hosting system (Vercel, Netlify, Github Pages, or local servers).
  * Simplifies parsing by browser-integrated screen-readers (which read static HTML tags far more reliably than dynamic virtual DOM modifications).

### ADR-002: Styling Architecture & Vanilla CSS
* **Status:** Approved.
* **Context:** The design requires premium aesthetics (glassmorphism, interactive animations, clean typography), responsive layouts, and customizable visual profiles (High Contrast, Dyslexic Fonts, and scalable font sizes).
* **Decision:** We use vanilla CSS with standard CSS custom properties (variables) representing the UI color tokens. Tailwind CSS is avoided to maximize raw styling flexibility and keep file sizes compact.
* **Consequences:**
  * Theme switching (Light vs. High Contrast) is accomplished simply by toggling an HTML attribute (e.g. `data-theme="high-contrast"`) and overriding the CSS variable values.
  * Base text scales are configured with relative units (`rem`), letting us shift the root font-size to scale all typography cleanly.

### ADR-003: Speech Processing & Interaction (Web Speech API)
* **Status:** Approved.
* **Context:** Hands-free interaction and auditory read-outs are critical accessibility features.
* **Decision:** We utilize the native browser `webkitSpeechRecognition` (for Speech-to-Text) and the `SpeechSynthesis` interface (for Text-to-Speech). No cloud AI API keys (like Google Cloud Speech or OpenAI) are used.
* **Consequences:**
  * Complete privacy: No voice or data is transmitted off the citizen's device.
  * 100% Free: Operating costs are zero.
  * Native Hindi support: The browser's native speech synthesis handles Hindi accents dynamically if the local device has Hindi vocal files installed.
  * Resilience: A visual "Voice simulator panel" is included to mimic speech inputs, ensuring all features are fully reviewable on systems with locked mic inputs.
