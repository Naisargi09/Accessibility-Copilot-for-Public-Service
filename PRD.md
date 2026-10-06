# Product Requirements Document (PRD)
## Project: Accessibility Copilot for Public Services

### 1. Product Overview
The **Accessibility Copilot for Public Services** is an accessibility assistant web platform. It features voice interaction, simplified workflow guidance, multilingual text switching, high-readability controls, a form validation helper, and dynamic speech synthesis. 

### 2. Functional Requirements
* **FR-01: Bilingual Support (English & Hindi)**
  * A language toggle is available at the header.
  * Clicking it dynamically switches all labels, headers, buttons, form texts, and speech narrations between English and Hindi.
  * Accessibility screen reader readings will shift to Hindi accents or English accents accordingly.
* **FR-02: Voice Navigation & Web Speech API**
  * Employs local browser `webkitSpeechRecognition` to interpret commands.
  * Permitted commands:
    * `"scroll down"` / `"scroll up"` - scroll page content.
    * `"open home"`, `"open challenge"`, `"open services"`, `"open form"`, `"open chatbot"`, `"open report"` - navigate to anchor links.
    * `"switch to English"` / `"switch to Hindi"` / `"Hindi change"` - toggle language.
    * `"high contrast"` / `"normal contrast"` - toggle high contrast mode.
    * `"read page"` / `"read instructions"` - trigger read-aloud of current section details.
    * `"speak details"` - tell user what they are hovering/focusing on.
  * A command panel with clickable buttons allows testing voice features when microphone inputs are blocked or absent.
* **FR-03: Keyboard Accessibility & Screen Reader Friendly**
  * Every control is navigable via `Tab` and executable via `Enter` / `Space`.
  * Visible focus rings (5px outline, high contrast color) exist for all buttons and inputs.
  * Skip-to-content links allow keyboard users to bypass headers.
* **FR-04: Smart Form Assistant**
  * A simplified government application form (Pension / Disability Certificate application).
  * Guides users through input fields step-by-step.
  * Triggers text-to-speech feedback detailing what to enter (e.g. *"Field 1: Please enter your Full Name. Click here to read detailed instructions"*).
  * Validates missing inputs and outlines them in warning colors.
  * Displays a visual and spoken "Review & Confirmation" modal before submission.
* **FR-05: Live Assistant (Service Chatbot)**
  * A speech-enabled chatbot offering helpful information on 6 public services:
    1. **Pension:** Qualifications for old age, widow, and disability pensions.
    2. **Income Certificate:** Criteria, document list, and validity details.
    3. **Disability Certificate:** Eligibility thresholds, UDID card process, and medical test steps.
    4. **Scholarship:** Student criteria, income certificates, and institutional listings.
    5. **Health Insurance:** Premium details, eligibility cards, and network hospitals.
    6. **Ration Card:** BPL/APL cards, family lists, and local distribution centers.
  * Standard voice options allow speech output of answers.
* **FR-06: Accessibility Summary Report**
  * Dynamic tracker listening to citizen actions during the session.
  * Captures: Language selections, contrast modes, text adjustments, voice commands used, forms completed, services explored.
  * Allows downloading a print-ready report in the local language, containing recommended next steps.

### 3. User Experience & UI Design
* **Header:** Title (Accessibility Copilot), menu link anchors, contrast/text controllers, and English/Hindi language toggle.
* **Hero Panel:** Clear value proposition, statistics counters, and "Try Live Demo" buttons.
* **Challenge & Profiles:** Demonstrates the target user needs visually.
* **Feature Grid:** Illustrates the direct benefits.
* **Interactive Sandbox:** Provides microphone activations, visual animations of voice waves, and simulation controls.
* **Color Scheme:** Primary Deep Blue (#0052CC), Accent Teal (#14B8A6), Warning Amber (#F59E0B), and neutral slate base.
