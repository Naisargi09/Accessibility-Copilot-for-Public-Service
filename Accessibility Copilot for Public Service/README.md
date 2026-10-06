# Accessibility Copilot for Public Services

Accessibility Copilot is a premium, modern, and fully responsive digital assistant website designed for public services. It enables senior citizens, visually impaired users, individuals with disabilities, and low digital literacy users to navigate and complete government applications independently.

---

## 🚀 Key Features

* **Bilingual Engine:** Complete, layout-preserving localization for **English and Hindi**.
* **Voice Navigation:** Dynamic control of page actions via voice commands using the native browser Web Speech API.
* **Interactive Voice Panel:** An on-screen voice-command helper to simulate mic instructions for testing.
* **Visual Adaptations:** Toggles for **High Contrast Mode**, **Text Resizing (A+/A/A-)**, and **Dyslexia-Friendly Fonts**.
* **Smart Form Assistant:** Step-by-step guidance on complex forms (e.g., Pension, Disability Certificate) with audio explanations and validation.
* **Live Service Assistant:** Audio-enabled chatbot guidance covering six major public services.
* **Dynamic Accessibility Report:** Track session activities, features utilized, and export/print a custom summary of next steps.

---

## 🛠️ Project Structure

```text
Accessibility_Copilot/
├── frontend/
│   ├── index.html   # Main interface containing semantic grids & content panels
│   ├── style.css    # Premium CSS design, animations, high-contrast & dyslexia variables
│   └── script.js    # Logic for translations, speech synthesis, recognition, and chatbot
├── documents/
│   ├── BRD.md       # Business Requirements Document
│   ├── PRD.md       # Product Requirements Document
│   ├── SRS.md       # Software Requirements Specification
│   └── ADR.md       # Architecture Decision Record
└── README.md        # Project guide and operation instructions
```

---

## 🎙️ Supported Voice Commands

To control the site using your voice (activate the Microphone button first), speak clearly:
* **Navigation:** `"scroll down"` / `"scroll up"` / `"go to top"` / `"scroll bottom"`
* **Page Anchors:** `"open home"` / `"open challenge"` / `"open services"` / `"open form"` / `"open chatbot"` / `"open report"`
* **Language Toggle:** `"switch to Hindi"` / `"switch to English"` / `"Hindi change"`
* **Visual Modes:** `"high contrast"` / `"normal contrast"`
* **Auditory Reading:** `"read page"` / `"read instructions"` / `"stop reading"`

*Note: If mic permissions are blocked or unsupported by the browser, you can simulate these inputs directly by clicking the corresponding chips in the **Interactive Voice Sandbox** panel.*

---

## 💻 How to Run Locally

Since this application is built with vanilla web technologies, it runs without any complex compiling or installation:

1. Clone or download this project.
2. Open `frontend/index.html` in any modern web browser (Google Chrome or Microsoft Edge recommended for full Web Speech API compatibility).
3. Alternatively, run a local development server for testing:
   ```bash
   npx live-server frontend
   # or
   npx serve frontend
   ```
