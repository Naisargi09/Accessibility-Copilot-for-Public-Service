/* ==========================================================================
   BILINGUAL TRANSLATION DICTIONARY (ENGLISH & HINDI)
   ========================================================================== */

const translations = {
  en: {
    skip_to_content: "Skip to Main Content",
    a11y_controls: "Accessibility Controls:",
    contrast_btn: "High Contrast",
    dyslexia_btn: "Dyslexia Font",
    tts_mute_btn: "Voice Assistant: ON",
    tts_mute_btn_off: "Voice Assistant: OFF",
    logo_title: "Accessibility Copilot",
    nav_home: "Home",
    nav_problem: "Problem",
    nav_solution: "Solution",
    nav_features: "Features",
    nav_demo: "Demo",
    nav_chatbot: "Live Assistant",
    nav_forms: "Apply Now",
    nav_impact: "Impact",
    nav_cta: "Try Live Demo",
    gov_badge_text: "Official Public Digital Service Initiative",
    hero_title: "Making Public Services Accessible for Everyone.",
    hero_subtitle: "Helping citizens—including senior citizens, visually impaired users, persons with disabilities, and people with limited digital literacy—access government services using voice navigation, bilingual support, accessible interfaces, and simplified workflows.",
    hero_cta_demo: "Try Interactive Demo",
    hero_cta_prototype: "Explore Services",
    hero_shortcut_tip: "Quick Keyboard Shortcut: Press S to toggle High Contrast, or hover any card to hear details.",
    visual_card_title: "Active Assistant Portal",
    mic_ready_msg: "Ready for voice commands. Try speaking \"scroll down\".",
    stat_citizens_lbl: "Citizens Served",
    stat_languages_lbl: "English & Hindi Toggles",
    stat_voice_lbl: "Voice Control Enabled",
    stat_a11y_lbl: "Accessibility First Design",
    challenge_title: "The Digital Barriers in Public Portals",
    challenge_subtitle: "Government digital portals are crucial, but millions of citizens are left behind due to technical and interface obstacles.",
    challenge_card1_title: "Complex Navigation",
    challenge_card1_desc: "Overwhelming menus, deep links, and dense jargon make it highly frustrating for basic users to locate necessary certificate templates or guidelines.",
    challenge_card2_title: "Lengthy Forms",
    challenge_card2_desc: "Applying for basic services requires entering repetitive fields with complex definitions and zero immediate feedback on error states.",
    challenge_card3_title: "Visual & Motor Inaccessibility",
    challenge_card3_desc: "Lack of contrast, fixed small fonts, and strict mouse dependence lock out visually impaired citizens and seniors with tremors.",
    speak_desc: "Listen Details",
    who_helps_title: "Who This Portal Empowers",
    who_helps_subtitle: "Designed purposefully to bridge the digital divide for four key groups of citizens.",
    profile_1_name: "Senior Citizens",
    profile_1_need: "Large fonts & Spoken instructions",
    profile_1_desc: "Seniors who find modern flat layouts confusing and struggle to read low-contrast labels without magnification guides.",
    profile_2_name: "Visually Impaired Citizens",
    profile_2_need: "Text Aloud & Full Voice control",
    profile_2_desc: "Blind or partially sighted users who depend on clear screen readings and a fully voice-navigable site outline.",
    profile_3_name: "Motor Impaired Users",
    profile_3_need: "Keyboard loops & Voice triggers",
    profile_3_desc: "Users unable to use a mouse who rely completely on standard keyboard Tab indexes and simple speech actions to scroll or select links.",
    profile_4_name: "Limited Literacy Users",
    profile_4_need: "Native Hindi support & Voice assistance",
    profile_4_desc: "Citizens who cannot write or read complex English instructions but can easily respond to spoken Hindi assistance.",
    scale_title: "National Digital Scale & Reach",
    scale_subtitle: "Building digital solutions in a country of 1.4 billion people requires robust, inclusive interfaces that adapt to every user group.",
    scale_bar1_lbl: "Non-English Speaking Citizens",
    scale_bar2_lbl: "Mobile-Only Government Portals Traffic",
    scale_bar3_lbl: "Senior Citizens Requiring Digital Aid",
    radar_label: "Simultaneous Region Sync",
    features_title: "Key Accessibility Assistant Features",
    features_subtitle: "Four core subsystems engineered to deliver an inclusive, hurdle-free portal experience.",
    feat_1_title: "Interactive Voice Navigation",
    feat_1_desc: "Complete page controls using natural spoken terms. Scroll up or down, jump to navigation links, and open specific forms hands-free.",
    feat_2_title: "Intelligent Text Reading",
    feat_2_desc: "Instant audio narration. Hover over any text block or card, click a reading button, and hear instructions read aloud in English or Hindi.",
    feat_3_title: "Smart Form Assistant",
    feat_3_desc: "Step-by-step guidance on complex forms. Validates input values, highlights errors visually, and guides users using clear spoken guidelines.",
    feat_4_title: "Bilingual Live Assistant",
    feat_4_desc: "Chat-based guidance system answering queries for key certificates. Tap buttons, write questions, or dictate query topics in English/Hindi.",
    demo_title: "Interactive Voice Navigation Sandbox",
    demo_subtitle: "Activate the mic to speak commands, or click the simulation triggers below to test the browser navigation features.",
    mic_status_stopped: "Voice Assistant Stopped",
    mic_status_listening: "Listening for commands...",
    mic_instruction_txt: "Click the microphone to start. Try speaking: \"scroll down\" or \"switch to Hindi\".",
    speech_log_lbl: "Speech Input Log:",
    speech_log_empty: "No commands recognized yet.",
    simulator_title: "Voice Command Simulator",
    simulator_subtitle: "Click any button below to simulate voice commands instantly (ideal for environments without microphone permissions):",
    sim_scroll_down: "\"Scroll Down\"",
    sim_scroll_up: "\"Scroll Up\"",
    sim_switch_hi: "\"Switch to Hindi\"",
    sim_switch_en: "\"Switch to English\"",
    sim_contrast_hi: "\"High Contrast\"",
    sim_contrast_no: "\"Normal Contrast\"",
    sim_open_form: "\"Open Form\"",
    sim_open_chat: "\"Open Chatbot\"",
    sim_open_report: "\"Open Report\"",
    sim_read_page: "\"Read Instructions\"",
    works_title: "Simple Step-by-Step Flow",
    works_subtitle: "How our assistant guides a citizen successfully through public portals.",
    step_1_title: "Language Toggle",
    step_1_desc: "Toggle page headings and audio outputs to your preferred language (English/Hindi).",
    step_2_title: "A11y Setup",
    step_2_desc: "Customize text size, contrast layouts, and reader tools instantly.",
    step_3_title: "Service Choice",
    step_3_desc: "Select a welfare service card or ask the Live Assistant for directions.",
    step_4_title: "Guided Application",
    step_4_desc: "Complete simple forms step-by-step with spoken validation alerts.",
    compare_title: "Standard Government Portals vs. Our Assistant",
    compare_subtitle: "Why an accessibility-first assistant architecture creates a more welcoming portal.",
    comp_col_feature: "Feature Metric",
    comp_col_old: "Traditional Government Portals",
    comp_col_new: "With Accessibility Assistant",
    comp_row1_feat: "Navigation Mode",
    comp_row1_old: "Mouse clicking only, complex directory folders.",
    comp_row1_new: "Voice commanded scrolling, quick anchors, full keyboard tabs.",
    comp_row2_feat: "Language Accommodation",
    comp_row2_old: "Hardcoded English terms with machine translator errors.",
    comp_row2_new: "Vetted layout and audio scripts in native English & Hindi.",
    comp_row3_feat: "Form Entry Assistance",
    comp_row3_old: "Static labels with tiny help indicators and manual checks.",
    comp_row3_new: "Step-by-step reading alerts, highlighting input focus, review summary.",
    comp_row4_feat: "Visual Impairment Aids",
    comp_row4_old: "Requires purchasing expensive computer screen software.",
    comp_row4_new: "Built-in read aloud toggles, high contrast, dyslexia font face.",
    chat_title: "Bilingual Live Service Assistant",
    chat_subtitle: "Select a service option below to initiate a voice-enabled conversational guide to learn details of government portals.",
    chat_service_title: "Select a Public Service:",
    srv_pension: "Old Age & Widow Pension",
    srv_disability: "Disability Certificate (UDID)",
    srv_income: "Income Certificate",
    srv_scholarship: "Student Scholarship Scheme",
    srv_insurance: "Health Insurance (Ayushman)",
    srv_ration: "Ration Card Food Security",
    chat_assistant_title: "Accessibility Assistant",
    chat_status_online: "Online • Voice Reader Enabled",
    chat_welcome_pension: "Welcome! I can guide you through the Old Age & Widow Pension Scheme. You must be at least 60 years of age to apply. Would you like to know the documents needed or the eligibility criteria?",
    sug_eligibility: "What is eligibility?",
    sug_docs: "What documents do I need?",
    sug_apply: "How to apply?",
    chat_input_placeholder: "Type your query or click suggestions...",
    form_title: "Guided Public Service Form Assistant",
    form_subtitle: "Experience our step-by-step form helper. Fields are highlighted dynamically and read aloud with interactive tooltips.",
    form_lbl_name: "1. Full Name of Applicant",
    form_name_placeholder: "Enter full name as on ID card",
    form_err_name: "Please enter your full name.",
    form_lbl_dob: "2. Date of Birth",
    form_err_dob: "Please enter a valid date of birth.",
    form_lbl_srv: "3. Select Government Scheme",
    form_opt_select: "-- Choose a scheme --",
    opt_old_pension: "Old Age Pension Scheme",
    opt_disability: "Disability Certificate Registration",
    opt_income: "Income & Asset Certificate",
    opt_scholarship: "Post-Matric Scholarship",
    opt_insurance: "Health Insurance (Ayushman)",
    opt_ration: "Ration Card Food Security",
    eligibility_title: "Eligibility Status",
    eligibility_not_entered_dob: "Please enter your date of birth to check eligibility.",
    eligibility_not_entered_scheme: "Please select a welfare scheme to check eligibility.",
    eligibility_invalid_dob: "Invalid Date of Birth (future date is not allowed).",
    pension_eligible: "Eligible: Age criteria met (60 years or older).",
    pension_ineligible: "Ineligible: Applicant must be 60 years or older for the Old Age Pension scheme. Current age is {age}.",
    disability_eligible: "Eligible: Suitable for all age groups (minimum 40% physical or mental disability required).",
    income_eligible: "Eligible: Age criteria met (18 years or older).",
    income_ineligible: "Warning: Must be at least 18 years old to apply independently. Parent or guardian must apply on behalf of minors.",
    scholarship_eligible: "Eligible: Age criteria met for Post-Matric Scholarship (typically 15 to 30 years old).",
    scholarship_ineligible_young: "Ineligible: Applicant must be at least 15 years old for Post-Matric Scholarship. Current age is {age}.",
    scholarship_ineligible_old: "Warning: Post-Matric scholarships typically target students under 30 years old. Current age is {age}.",
    insurance_eligible: "Eligible: Suitable for all age groups (available for families listed in SECC-2011/BPL).",
    ration_eligible: "Eligible: Age criteria met for head of household (18 years or older).",
    ration_ineligible: "Ineligible: Applicant must be at least 18 years old to apply as head of household. Current age is {age}.",
    form_err_srv: "Please choose a valid scheme.",
    form_lbl_aadhar: "4. Aadhar Identification Number (12 Digits)",
    form_aadhar_placeholder: "1234 5678 9012",
    form_err_aadhar: "Enter a valid 12-digit Aadhar number.",
    form_btn_prev: "Previous Field",
    form_btn_next: "Next Field",
    form_btn_submit: "Review & Submit",
    helper_badge: "Field Assistant",
    helper_f1_title: "Enter Applicant Name",
    helper_f1_desc: "Type your full legal name as it appears on your official government documents (like Aadhar card or voter card). Avoid using nicknames.",
    form_btn_read: "Read Out Instructions",
    modal_title: "Review Your Entered Details",
    modal_subtitle: "Please confirm the following values before submitting to the portal:",
    modal_cancel: "Go Back & Edit",
    modal_confirm: "Confirm & Submit",
    report_title: "Dynamic Session Accessibility Report",
    report_subtitle: "Logs your assistive choices and interactions. Print this report for local offline government verification steps.",
    rep_status: "Session Status: Completed",
    rep_lang: "Selected Language:",
    rep_features: "Assistive Tools Used:",
    rep_forms: "Completed Applications:",
    rep_steps: "Recommended Next Steps:",
    rep_tool_contrast: "Normal contrast mode",
    rep_tool_contrast_high: "High contrast mode active",
    rep_tool_font: "Standard text scale",
    rep_tool_font_scale: "Expanded text size scale",
    rep_tool_dyslexia: "Dyslexia reader typeface enabled",
    rep_form_none: "No forms submitted in this session.",
    rep_guide_desc: "Visit your local Common Services Center (CSC) with physical copies of your Aadhar card, Age certificate, and Address Proof to complete verification.",
    rep_print: "Print Official Report",
    rep_reset: "Reset Session Log",
    impact_title: "Direct Impact & Outcomes",
    impact_subtitle: "How simplified access drives digital inclusion and administrative efficiency.",
    imp_c1_title: "Error Reduction",
    imp_c1_desc: "Real-time narration and verification alert users immediately to errors, preventing incomplete form rejections.",
    imp_c2_title: "Faster Intake",
    imp_c2_desc: "Voice controls and keyboard loops speed up inputs, cutting average submission times for senior citizens by 300%.",
    imp_c3_title: "Dignified Autonomy",
    imp_c3_desc: "By navigating and filling data independently, visually impaired citizens bypass third-party vulnerability.",
    std_title: "Built to Global Accessibility Standards",
    std_subtitle: "This platform is built with meticulous conformance to web standard practices, passing strict accessibility lint inspections.",
    std_b1: "WCAG 2.1 Level AA",
    std_b2: "WAI-ARIA 1.2 Landmarks",
    std_b3: "Keyboard Tab Loops Vetted",
    std_b4: "Contrast Ratio 4.5:1+",
    footer_desc: "An official-quality accessibility assistant designed to secure fair digital opportunities for all citizens navigating public services.",
    footer_links_title: "Quick Operations",
    footer_shortcuts_title: "Auditory Keyboard Controls",
    kbd_contrast: "Contrast Mode",
    kbd_dyslexia: "Dyslexia Font",
    kbd_read: "Read Under Cursor",
    kbd_mic: "Toggle Voice Assistant",
    copyright_text: "\u00A9 2026 Accessibility Copilot for Public Services. Dedicated to digital inclusivity and citizen autonomy."
  },
  hi: {
    skip_to_content: "मुख्य सामग्री पर जाएं",
    a11y_controls: "पहुंच नियंत्रण:",
    contrast_btn: "उच्च कंट्रास्ट",
    dyslexia_btn: "डिस्लेक्सिया फ़ॉन्ट",
    tts_mute_btn: "आवाज सहायक: चालू",
    tts_mute_btn_off: "आवाज सहायक: बंद",
    logo_title: "एक्सेसिबिलिटी कोपायलट",
    nav_home: "मुख्य पृष्ठ",
    nav_problem: "समस्या",
    nav_solution: "समाधान",
    nav_features: "विशेषताएं",
    nav_demo: "डेमो",
    nav_chatbot: "लाइव सहायक",
    nav_forms: "अभी आवेदन करें",
    nav_impact: "प्रभाव",
    nav_cta: "लाइव डेमो का प्रयास करें",
    gov_badge_text: "आधिकारिक सार्वजनिक डिजिटल सेवा पहल",
    hero_title: "सार्वजनिक सेवाओं को सभी के लिए सुलभ बनाना।",
    hero_subtitle: "आवाज नेविगेशन, द्विभाषी सहायता, सुलभ इंटरफेस और सरल वर्कफ़्लो का उपयोग करके सरकारी सेवाओं तक पहुँचने में नागरिकों—विशेष रूप से वरिष्ठ नागरिकों, दृष्टिबाधित उपयोगकर्ताओं, विकलांग व्यक्तियों और सीमित डिजिटल साक्षरता वाले लोगों—की सहायता करना।",
    hero_cta_demo: "इंटरैक्टिव डेमो आजमाएं",
    hero_cta_prototype: "सेवाओं का अन्वेषण करें",
    hero_shortcut_tip: "त्वरित कीबोर्ड शॉर्टकट: उच्च कंट्रास्ट को टॉगल करने के लिए S दबाएं, या विवरण सुनने के लिए किसी भी कार्ड पर होवर करें।",
    visual_card_title: "सक्रिय सहायक पोर्टल",
    mic_ready_msg: "आवाज आदेशों के लिए तैयार। \"स्क्रॉल डाउन\" बोलकर प्रयास करें।",
    stat_citizens_lbl: "नागरिकों की सेवा की",
    stat_languages_lbl: "अंग्रेजी और हिंदी टॉगल",
    stat_voice_lbl: "आवाज नियंत्रण सक्षम",
    stat_a11y_lbl: "एक्सेसिबिलिटी प्रथम डिजाइन",
    challenge_title: "सार्वजनिक पोर्टलों में डिजिटल बाधाएं",
    challenge_subtitle: "सरकारी डिजिटल पोर्टल महत्वपूर्ण हैं, लेकिन तकनीकी और इंटरफ़ेस बाधाओं के कारण लाखों नागरिक पीछे छूट जाते हैं।",
    challenge_card1_title: "जटिल नेविगेशन",
    challenge_card1_desc: "भारी-भरकम मेनू, गहरे लिंक और जटिल शब्दावली बुनियादी उपयोगकर्ताओं के लिए आवश्यक प्रमाण पत्र या दिशानिर्देश खोजना अत्यधिक निराशाजनक बनाते हैं।",
    challenge_card2_title: "लंबे फॉर्म",
    challenge_card2_desc: "बुनियादी सेवाओं के लिए आवेदन करने में जटिल परिभाषाओं के साथ बार-बार फ़ील्ड भरने की आवश्यकता होती है और त्रुटि होने पर तुरंत कोई प्रतिक्रिया नहीं मिलती।",
    challenge_card3_title: "दृष्टि और शारीरिक बाधाएं",
    challenge_card3_desc: "कंट्रास्ट की कमी, निश्चित छोटे फोंट और सख्त माउस निर्भरता दृष्टिबाधित नागरिकों और वरिष्ठ नागरिकों को रोकती है।",
    speak_desc: "विवरण सुनें",
    who_helps_title: "यह पोर्टल किसे सशक्त बनाता है",
    who_helps_subtitle: "चार प्रमुख नागरिक समूहों के लिए डिजिटल अंतर को पाटने के लिए उद्देश्यपूर्ण ढंग से डिज़ाइन किया गया है।",
    profile_1_name: "वरिष्ठ नागरिक",
    profile_1_need: "बड़े फोंट और मौखिक निर्देश",
    profile_1_desc: "वरिष्ठ नागरिक जो आधुनिक फ्लैट लेआउट को भ्रमित करने वाला पाते हैं और बिना आवर्धन गाइड के कम-कंट्रास्ट वाले लेबल को पढ़ने में संघर्ष करते हैं।",
    profile_2_name: "दृष्टिबाधित नागरिक",
    profile_2_need: "जोर से बोलना और पूर्ण आवाज नियंत्रण",
    profile_2_desc: "अंधे या आंशिक रूप से दृष्टिबाधित उपयोगकर्ता जो स्पष्ट स्क्रीन रीडिंग और पूरी तरह से आवाज-नेविगेशन योग्य साइट रूपरेखा पर निर्भर हैं।",
    profile_3_name: "शारीरिक रूप से अक्षम उपयोगकर्ता",
    profile_3_need: "कीबोर्ड लूप और वॉयस ट्रिगर",
    profile_3_desc: "जो उपयोगकर्ता माउस का उपयोग करने में असमर्थ हैं और स्क्रॉल करने या लिंक चुनने के लिए पूरी तरह से मानक कीबोर्ड टैब और सरल भाषण क्रियाओं पर निर्भर हैं।",
    profile_4_name: "सीमित साक्षरता वाले उपयोगकर्ता",
    profile_4_need: "हिंदी भाषा और आवाज सहायता",
    profile_4_desc: "नागरिक जो जटिल अंग्रेजी निर्देशों को लिख या पढ़ नहीं सकते हैं, लेकिन बोली जाने वाली हिंदी सहायता का आसानी से जवाब दे सकते हैं।",
    scale_title: "राष्ट्रीय डिजिटल पैमाना और पहुंच",
    scale_subtitle: "1.4 अरब लोगों के देश में डिजिटल समाधान बनाने के लिए मजबूत, समावेशी इंटरफेस की आवश्यकता होती है जो हर उपयोगकर्ता समूह के अनुकूल हो।",
    scale_bar1_lbl: "गैर-अंग्रेजी भाषी नागरिक",
    scale_bar2_lbl: "केवल-मोबाइल सरकारी पोर्टल ट्रैफ़िक",
    scale_bar3_lbl: "वरिष्ठ नागरिक जिन्हें डिजिटल सहायता की आवश्यकता है",
    radar_label: "समानकालिक क्षेत्र सिंक",
    features_title: "मुख्य एक्सेसिबिलिटी सहायक सुविधाएं",
    features_subtitle: "एक समावेशी, बाधा मुक्त पोर्टल अनुभव प्रदान करने के लिए इंजीनियर किए गए चार प्रमुख उप-प्रणालियां।",
    feat_1_title: "इंटरैक्टिव आवाज नेविगेशन",
    feat_1_desc: "प्राकृतिक बोली जाने वाली शर्तों का उपयोग करके पूर्ण पृष्ठ नियंत्रण। स्क्रॉल करें, नेविगेशन लिंक पर जाएं, और विशिष्ट फ़ॉर्म को हाथों से मुक्त खोलें।",
    feat_2_title: "बुद्धिमान पाठ पढ़ना",
    feat_2_desc: "त्वरित ऑडियो विवरण। किसी भी टेक्स्ट ब्लॉक या कार्ड पर होवर करें, रीडिंग बटन पर क्लिक करें और अंग्रेजी या हिंदी में जोर से निर्देश सुनें।",
    feat_3_title: "स्मार्ट फॉर्म सहायक",
    feat_3_desc: "जटिल फॉर्मों पर चरण-दर-चरण मार्गदर्शन। इनपुट मानों को मान्य करता है, त्रुटियों को नेत्रहीन रूप से हाइलाइट करता है, और स्पष्ट बोली जाने वाली दिशानिर्देशों का उपयोग करता है।",
    feat_4_title: "द्विभाषी लाइव सहायक",
    feat_4_desc: "चैट-आधारित मार्गदर्शन प्रणाली जो सरकारी कल्याणकारी योजनाओं के विवरण जानने में सहायता करती है। प्रश्न लिखें या आवाज द्वारा निर्देश लें।",
    demo_title: "इंटरैक्टिव आवाज नेविगेशन सैंडबॉक्स",
    demo_subtitle: "आवाज आदेश बोलने के लिए माइक चालू करें, या ब्राउज़र नेविगेशन सुविधाओं का परीक्षण करने के लिए नीचे दिए गए सिमुलेशन बटन पर क्लिक करें।",
    mic_status_stopped: "आवाज सहायक बंद है",
    mic_status_listening: "आदेश सुन रहे हैं...",
    mic_instruction_txt: "शुरू करने के लिए माइक्रोफ़ोन पर क्लिक करें। बोलने का प्रयास करें: \"स्क्रॉल डाउन\" या \"हिंदी में बदलें\"।",
    speech_log_lbl: "भाषण इनपुट लॉग:",
    speech_log_empty: "अभी तक कोई आदेश नहीं पहचाना गया।",
    simulator_title: "आवाज आदेश सिम्युलेटर",
    simulator_subtitle: "आवाज आदेशों को तुरंत अनुकरण करने के लिए नीचे दिए गए किसी भी बटन पर क्लिक करें (माइक्रोफ़ोन अनुमति के बिना परीक्षण के लिए सर्वोत्तम):",
    sim_scroll_down: "\"नीचे स्क्रॉल करें\"",
    sim_scroll_up: "\"ऊपर स्क्रॉल करें\"",
    sim_switch_hi: "\"हिंदी में बदलें\"",
    sim_switch_en: "\"अंग्रेजी में बदलें\"",
    sim_contrast_hi: "\"उच्च कंट्रास्ट\"",
    sim_contrast_no: "\"सामान्य कंट्रास्ट\"",
    sim_open_form: "\"फॉर्म खोलें\"",
    sim_open_chat: "\"चैटबॉट खोलें\"",
    sim_open_report: "\"रिपोर्ट खोलें\"",
    sim_read_page: "\"निर्देश पढ़ें\"",
    works_title: "सरल चरण-दर-चरण प्रवाह",
    works_subtitle: "हमारा सहायक किसी नागरिक को सरकारी कल्याणकारी योजनाओं में कैसे मार्गदर्शन करता है।",
    step_1_title: "भाषा टॉगल",
    step_1_desc: "अपनी पसंदीदा भाषा (अंग्रेजी/हिंदी) में पेज हेडिंग और ऑडियो आउटपुट बदलें।",
    step_2_title: "पहुंच सेटअप",
    step_2_desc: "टेक्स्ट का आकार, कंट्रास्ट लेआउट और रीडर टूल को तुरंत अनुकूलित करें।",
    step_3_title: "सेवा का चयन",
    step_3_desc: "एक कल्याणकारी सेवा कार्ड चुनें या लाइव सहायक से दिशा-निर्देश मांगें।",
    step_4_title: "निर्देशित आवेदन",
    step_4_desc: "बोली जाने वाली सत्यापन चेतावनियों के साथ चरण-दर-चरण सरल फ़ॉर्म पूरा करें।",
    compare_title: "पारंपरिक सरकारी पोर्टल बनाम हमारा सहायक",
    compare_subtitle: "एक्सेसिबिलिटी-प्रथम सहायक आर्किटेक्चर एक अधिक स्वागत योग्य पोर्टल क्यों बनाता है।",
    comp_col_feature: "सुविधा मीट्रिक",
    comp_col_old: "पारंपरिक सरकारी पोर्टल",
    comp_col_new: "एक्सेसिबिलिटी सहायक के साथ",
    comp_row1_feat: "नेविगेशन मोड",
    comp_row1_old: "केवल माउस क्लिकिंग, जटिल निर्देशिका फ़ोल्डर।",
    comp_row1_new: "आवाज निर्देशित स्क्रॉलिंग, त्वरित एंकर, पूर्ण कीबोर्ड टैब।",
    comp_row2_feat: "भाषा समायोजन",
    comp_row2_old: "मशीनी अनुवादक त्रुटियों के साथ कठोर अंग्रेजी शब्द।",
    comp_row2_new: "देशी अंग्रेजी और हिंदी में जांची गई लेआउट और ऑडियो लिपियाँ।",
    comp_row3_feat: "फॉर्म प्रविष्टि सहायता",
    comp_row3_old: "छोटे सहायता संकेतक और मैनुअल चेक के साथ स्थिर लेबल।",
    comp_row3_new: "चरण-दर-चरण रीडिंग अलर्ट, इनपुट फोकस को हाइलाइट करना, समीक्षा सारांश।",
    comp_row4_feat: "दृष्टिबाधित सहायता",
    comp_row4_old: "महंगे कंप्यूटर स्क्रीन सॉफ्टवेयर खरीदने की आवश्यकता होती है।",
    comp_row4_new: "निर्मित रीड अलाउड टॉगल, उच्च कंट्रास्ट, डिस्लेक्सिया फॉन्ट फेस।",
    chat_title: "द्विभाषी लाइव सेवा सहायक",
    chat_subtitle: "सरकारी योजनाओं के विवरण जानने के लिए आवाज-सक्षम संवादी गाइड शुरू करने के लिए नीचे एक सेवा विकल्प चुनें।",
    chat_service_title: "एक सार्वजनिक सेवा चुनें:",
    srv_pension: "वृद्धावस्था और विधवा पेंशन",
    srv_disability: "विकलांगता प्रमाण पत्र (UDID)",
    srv_income: "आय प्रमाण पत्र",
    srv_scholarship: "छात्र छात्रवृत्ति योजना",
    srv_insurance: "स्वास्थ्य बीमा (आयुष्मान)",
    srv_ration: "राशन कार्ड खाद्य सुरक्षा",
    chat_assistant_title: "एक्सेसिबिलिटी सहायक",
    chat_status_online: "ऑनलाइन • आवाज रीडर सक्षम",
    chat_welcome_pension: "नमस्ते! मैं आपको वृद्धावस्था और विधवा पेंशन योजना में मार्गदर्शन कर सकता हूँ। आवेदन करने के लिए आपकी आयु कम से कम 60 वर्ष होनी चाहिए। क्या आप आवश्यक दस्तावेज या पात्रता मानदंड जानना चाहेंगे?",
    sug_eligibility: "पात्रता क्या है?",
    sug_docs: "मुझे किन दस्तावेजों की आवश्यकता है?",
    sug_apply: "आवेदन कैसे करें?",
    chat_input_placeholder: "अपनी क्वेरी टाइप करें या सुझावों पर क्लिक करें...",
    form_title: "निर्देशित लोक सेवा फॉर्म सहायक",
    form_subtitle: "हमारे चरण-दर-चरण फ़ॉर्म सहायक का अनुभव करें। फ़ील्ड गतिशील रूप से हाइलाइट होते हैं और इंटरैक्टिव टूलटिप्स के साथ जोर से पढ़े जाते हैं।",
    form_lbl_name: "1. आवेदक का पूरा नाम",
    form_name_placeholder: "पहचान पत्र के अनुसार पूरा नाम दर्ज करें",
    form_err_name: "कृपया अपना पूरा नाम दर्ज करें।",
    form_lbl_dob: "2. जन्म तिथि",
    form_err_dob: "कृपया एक वैध जन्म तिथि दर्ज करें।",
    form_lbl_srv: "3. सरकारी योजना का चयन करें",
    form_opt_select: "-- एक योजना चुनें --",
    opt_old_pension: "वृद्धावस्था पेंशन योजना",
    opt_disability: "विकलांगता प्रमाण पत्र पंजीकरण",
    opt_income: "आय और संपत्ति प्रमाण पत्र",
    opt_scholarship: "मैट्रिकोत्तर छात्रवृत्ति",
    opt_insurance: "स्वास्थ्य बीमा (आयुष्मान)",
    opt_ration: "राशन कार्ड खाद्य सुरक्षा",
    eligibility_title: "पात्रता स्थिति",
    eligibility_not_entered_dob: "पात्रता की जांच करने के लिए कृपया अपनी जन्म तिथि दर्ज करें।",
    eligibility_not_entered_scheme: "पात्रता की जांच करने के लिए कृपया एक कल्याणकारी योजना चुनें।",
    eligibility_invalid_dob: "अमान्य जन्म तिथि (भविष्य की तिथि की अनुमति नहीं है)।",
    pension_eligible: "पात्र: आयु मानदंड पूरा किया गया (60 वर्ष या उससे अधिक)।",
    pension_ineligible: "अपात्र: वृद्धावस्था पेंशन योजना के लिए आवेदक की आयु 60 वर्ष या उससे अधिक होनी चाहिए। वर्तमान आयु {age} वर्ष है।",
    disability_eligible: "पात्र: सभी आयु समूहों के लिए उपयुक्त (न्यूनतम 40% शारीरिक या मानसिक विकलांगता आवश्यक)।",
    income_eligible: "पात्र: आयु मानदंड पूरा किया गया (18 वर्ष या उससे अधिक)।",
    income_ineligible: "चेतावनी: स्वतंत्र रूप से आवेदन करने के लिए कम से कम 18 वर्ष का होना आवश्यक है। अवयस्कों की ओर से माता-पिता या अभिभावक को आवेदन करना होगा।",
    scholarship_eligible: "पात्र: मैट्रिकोत्तर छात्रवृत्ति के लिए आयु मानदंड पूरा किया गया (आमतौर पर 15 से 30 वर्ष की आयु)।",
    scholarship_ineligible_young: "अपात्र: मैट्रिकोत्तर छात्रवृत्ति के लिए आवेदक की आयु कम से कम 15 वर्ष होनी चाहिए। वर्तमान आयु {age} वर्ष है।",
    scholarship_ineligible_old: "चेतावनी: मैट्रिकोत्तर छात्रवृत्ति आमतौर पर 30 वर्ष से कम आयु के छात्रों को लक्षित करती है। वर्तमान आयु {age} वर्ष है।",
    insurance_eligible: "पात्र: सभी आयु समूहों के लिए उपयुक्त (SECC-2011/BPL में सूचीबद्ध परिवारों के लिए उपलब्ध)।",
    ration_eligible: "पात्र: परिवार के मुखिया के लिए आयु मानदंड पूरा किया गया (18 वर्ष या उससे अधिक)।",
    ration_ineligible: "अपात्र: परिवार के मुखिया के रूप में आवेदन करने के लिए आवेदक की आयु कम से कम 18 वर्ष होनी चाहिए। वर्तमान आयु {age} वर्ष है।",
    form_err_srv: "कृपया एक वैध योजना चुनें।",
    form_lbl_aadhar: "4. आधार पहचान संख्या (12 अंक)",
    form_aadhar_placeholder: "1234 5678 9012",
    form_err_aadhar: "वैध 12-अंकीय आधार संख्या दर्ज करें।",
    form_btn_prev: "पिछला फ़ील्ड",
    form_btn_next: "अगला फ़ील्ड",
    form_btn_submit: "समीक्षा और सबमिट करें",
    helper_badge: "फील्ड सहायक",
    helper_f1_title: "आवेदक का नाम दर्ज करें",
    helper_f1_desc: "अपने आधिकारिक सरकारी दस्तावेजों (जैसे आधार कार्ड या मतदाता पहचान पत्र) पर छपे अनुसार अपना पूरा कानूनी नाम टाइप करें। उपनामों के उपयोग से बचें।",
    form_btn_read: "निर्देश जोर से पढ़ें",
    modal_title: "आपके द्वारा दर्ज किए गए विवरणों की समीक्षा करें",
    modal_subtitle: "कृपया पोर्टल पर सबमिट करने से पहले निम्नलिखित मानों की पुष्टि करें:",
    modal_cancel: "वापस जाएं और संपादित करें",
    modal_confirm: "पुष्टि करें और सबमिट करें",
    report_title: "सत्र सुलभता रिपोर्ट",
    report_subtitle: "आपके द्वारा चुने गए विकल्पों और गतिविधियों को रिकॉर्ड करता है। स्थानीय ऑफ़लाइन सत्यापन के लिए इस रिपोर्ट को प्रिंट करें।",
    rep_status: "सत्र की स्थिति: पूर्ण",
    rep_lang: "चुनी गई भाषा:",
    rep_features: "उपयोग किए गए सहायक उपकरण:",
    rep_forms: "पूरे किए गए आवेदन:",
    rep_steps: "अनुशंसित अगले कदम:",
    rep_tool_contrast: "सामान्य कंट्रास्ट मोड",
    rep_tool_contrast_high: "उच्च कंट्रास्ट मोड सक्रिय है",
    rep_tool_font: "मानक पाठ का आकार",
    rep_tool_font_scale: "बड़ा पाठ का आकार स्केल",
    rep_tool_dyslexia: "डिस्लेक्सिया रीडर टाइपफेस सक्षम",
    rep_form_none: "इस सत्र में कोई फॉर्म सबमिट नहीं किया गया।",
    rep_guide_desc: "सत्यापन पूरा करने के लिए अपने आधार कार्ड, आयु प्रमाण पत्र और पता प्रमाण की भौतिक प्रतियों के साथ अपने स्थानीय सामान्य सेवा केंद्र (CSC) पर जाएं।",
    rep_print: "आधिकारिक रिपोर्ट प्रिंट करें",
    rep_reset: "सत्र लॉग रीसेट करें",
    impact_title: "प्रत्यक्ष प्रभाव और परिणाम",
    impact_subtitle: "सरल पहुंच कैसे डिजिटल समावेशन और प्रशासनिक दक्षता को बढ़ावा देती है।",
    imp_c1_title: "त्रुटियों में कमी",
    imp_c1_desc: "वास्तविक समय का विवरण और सत्यापन उपयोगकर्ताओं को तुरंत त्रुटियों के प्रति सचेत करता है, जिससे अधूरे फॉर्म अस्वीकृत होने से बचते हैं।",
    imp_c2_title: "तेज प्रसंस्करण",
    imp_c2_desc: "आवाज नियंत्रण और कीबोर्ड लूप इनपुट को तेज करते हैं, जिससे वरिष्ठ नागरिकों के लिए आवेदन का समय 300% तक कम हो जाता है।",
    imp_c3_title: "सम्मानजनक स्वायत्तता",
    imp_c3_desc: "स्वतंत्र रूप से नेविगेट और डेटा भरकर, दृष्टिबाधित नागरिक तीसरे पक्ष की सहायता की निर्भरता से बचते हैं।",
    std_title: "वैश्विक पहुंच मानकों पर निर्मित",
    std_subtitle: "यह प्लेटफॉर्म सख्त एक्सेसिबिलिटी नियमों का पालन करते हुए मानक वेब प्रथाओं के साथ बनाया गया है।",
    std_b1: "WCAG 2.1 स्तर AA",
    std_b2: "WAI-ARIA 1.2 लैंडमार्क",
    std_b3: "कीबोर्ड टैब लूप सत्यापित",
    std_b4: "कंट्रास्ट अनुपात 4.5:1+",
    footer_desc: "सार्वजनिक सेवाओं को नेविगेट करने वाले सभी नागरिकों के लिए समान डिजिटल अवसर सुरक्षित करने के लिए डिज़ाइन किया गया एक आधिकारिक-गुणवत्ता वाला एक्सेसिबिलिटी सहायक।",
    footer_links_title: "त्वरित संचालन",
    footer_shortcuts_title: "श्रवण कीबोर्ड नियंत्रण",
    kbd_contrast: "कंट्रास्ट मोड",
    kbd_dyslexia: "डिस्लेक्सिया फ़ॉन्ट",
    kbd_read: "cursor के नीचे पढ़ें",
    kbd_mic: "आवाज सहायक चालू/बंद करें",
    copyright_text: "\u00A9 2026 एक्सेसिबिलिटी कोपायलट। डिजिटल समावेशन और नागरिक स्वायत्तता के लिए समर्पित।"
  }
};

/* ==========================================================================
   GLOBAL SESSION STATE
   ========================================================================== */

let currentLang = 'en';
let isTTSMuted = false;
let currentFontScale = 1; // 1: normal, 1.2: large, 1.3: xlarge
let activeFormStep = 1;
const formMaxSteps = 4;
let speechRecognizer = null;
let isMicListening = false;
let hoveredElement = null;
const sessionLogs = {
  theme: 'Normal contrast mode',
  font: 'Standard text scale',
  dyslexia: false,
  commandsUsed: [],
  servicesViewed: [],
  formsSubmitted: []
};

// Public Services Chatbot database
const servicesData = {
  pension: {
    title: { en: "Old Age & Widow Pension", hi: "वृद्धावस्था और विधवा पेंशन" },
    welcome: {
      en: "Welcome! I can guide you through the Old Age & Widow Pension Scheme. You must be at least 60 years of age to apply. Would you like to know the documents needed or the eligibility criteria?",
      hi: "नमस्ते! मैं आपको वृद्धावस्था और विधवा पेंशन योजना में मार्गदर्शन कर सकता हूँ। आवेदन करने के लिए आपकी आयु कम से कम 60 वर्ष होनी चाहिए। क्या आप आवश्यक दस्तावेज या पात्रता मानदंड जानना चाहेंगे?"
    },
    eligibility: {
      en: "Eligibility Criteria: 1. Applicant must be 60 years or older (or a widow over 18). 2. Total annual family income must be less than ₹2,00,000. 3. Must not be receiving benefits from other government pension schemes.",
      hi: "पात्रता मानदंड: 1. आवेदक की आयु 60 वर्ष या उससे अधिक होनी चाहिए (या विधवा महिला 18 वर्ष से अधिक)। 2. कुल वार्षिक पारिवारिक आय ₹2,00,000 से कम होनी चाहिए। 3. अन्य सरकारी योजनाओं से पेंशन प्राप्त न कर रहे हों।"
    },
    documents: {
      en: "Required Documents: 1. Proof of Age (Aadhar card, birth certificate). 2. Income certificate issued by competent authority. 3. Passport size photo. 4. Bank account passbook copy.",
      hi: "आवश्यक दस्तावेज: 1. आयु का प्रमाण (आधार कार्ड, जन्म प्रमाण पत्र)। 2. सक्षम अधिकारी द्वारा जारी किया गया आय प्रमाण पत्र। 3. पासपोर्ट आकार का फोटो। 4. बैंक खाता पासबुक की प्रति।"
    },
    apply: {
      en: "How to Apply: 1. Fill out the application form in the 'Apply Now' section below. 2. Verify Aadhar details. 3. Submit online. 4. Take the printed application and documents to the Block Development Office or nearest CSC.",
      hi: "आवेदन कैसे करें: 1. नीचे 'अभी आवेदन करें' अनुभाग में आवेदन पत्र भरें। 2. आधार विवरण सत्यापित करें। 3. ऑनलाइन सबमिट करें। 4. ब्लॉक विकास कार्यालय या नजदीकी सीएससी में दस्तावेज जमा करें।"
    }
  },
  disability: {
    title: { en: "Disability Certificate (UDID)", hi: "विकलांगता प्रमाण पत्र (UDID)" },
    welcome: {
      en: "Hello. I can assist you with Disability Certificate (UDID Card) registration. Would you like to check the medical eligibility requirements, required documents, or application steps?",
      hi: "नमस्ते। मैं विकलांगता प्रमाण पत्र (UDID कार्ड) पंजीकरण में आपकी सहायता कर सकता हूँ। क्या आप पात्रता नियम, आवश्यक दस्तावेज, या आवेदन के चरणों की जांच करना चाहेंगे?"
    },
    eligibility: {
      en: "Eligibility: 1. Minimum disability percentage of 40% certified by a government medical board. 2. Open to any citizen of India.",
      hi: "पात्रता: 1. सरकारी मेडिकल बोर्ड द्वारा प्रमाणित कम से कम 40% की विकलांगता। 2. भारत के किसी भी नागरिक के लिए खुला है।"
    },
    documents: {
      en: "Documents Required: 1. Identity proof (Aadhar card or Voter ID). 2. Address proof (Utility bills/Ration card). 3. Medical report detailing disability status. 4. Recent passport photo.",
      hi: "दस्तावेज आवश्यक: 1. पहचान पत्र (आधार कार्ड या वोटर आईडी)। 2. पते का प्रमाण (बिजली बिल/राशन कार्ड)। 3. विकलांगता विवरण दर्शाने वाली मेडिकल रिपोर्ट। 4. हालिया पासपोर्ट फोटो।"
    },
    apply: {
      en: "How to Apply: Apply on the central Swavlamban Portal online. You will receive an appointment date to visit the nearest government hospital for medical verification, after which the UDID card is issued.",
      hi: "आवेदन कैसे करें: स्वावलंबन पोर्टल पर ऑनलाइन आवेदन करें। आपको मेडिकल सत्यापन के लिए निकटतम सरकारी अस्पताल जाने की तारीख मिलेगी, जिसके बाद UDID कार्ड जारी किया जाता है।"
    }
  },
  income: {
    title: { en: "Income Certificate Assistance", hi: "आय प्रमाण पत्र सहायता" },
    welcome: {
      en: "Welcome. An Income Certificate proves your family earnings for school scholarship schemes or welfare benefits. What details do you need?",
      hi: "नमस्ते। आय प्रमाण पत्र स्कूल छात्रवृत्ति योजनाओं या कल्याणकारी लाभों के लिए आपकी पारिवारिक आय को प्रमाणित करता है। आपको क्या जानकारी चाहिए?"
    },
    eligibility: {
      en: "Eligibility: Citizens residing in the state requiring certified proof of household income. Annual income limits vary depending on local schemes.",
      hi: "पात्रता: राज्य में रहने वाले नागरिक जिन्हें घरेलू आय के प्रमाणित प्रमाण की आवश्यकता है। वार्षिक आय सीमाएं स्थानीय कल्याणकारी योजनाओं पर निर्भर करती हैं।"
    },
    documents: {
      en: "Documents Needed: Aadhar Card, Salary slips (if employed) or Income Declaration Affidavit, Land ownership proof (for farmers), and utility address bills.",
      hi: "दस्तावेज आवश्यक: आधार कार्ड, वेतन पर्ची (यदि कार्यरत हैं) या आय स्व-घोषणा शपथ पत्र, भूमि स्वामित्व प्रमाण (किसानों के लिए), और पते का प्रमाण।"
    },
    apply: {
      en: "How to Apply: Complete the request form on your state's online citizen services portal, pay the nominal processing fee, and download the verified digital certificate in 10-15 working days.",
      hi: "आवेदन कैसे करें: अपने राज्य के ई-डिस्ट्रिक्ट पोर्टल पर अनुरोध फॉर्म पूरा करें, मामूली शुल्क का भुगतान करें और 10-15 कार्य दिवसों में सत्यापित डिजिटल प्रमाणपत्र डाउनलोड करें।"
    }
  },
  scholarship: {
    title: { en: "Student Scholarship Scheme", hi: "छात्र छात्रवृत्ति योजना" },
    welcome: {
      en: "Hello. I can explain the Student Scholarship schemes (Pre-Matric & Post-Matric). What would you like to know: eligibility criteria, required documents, or application instructions?",
      hi: "नमस्ते। मैं छात्र छात्रवृत्ति योजनाओं (मैट्रिक-पूर्व और पोस्ट-मैट्रिक) की व्याख्या कर सकता हूँ। आप क्या जानना चाहेंगे: पात्रता नियम, आवश्यक दस्तावेज, या आवेदन करने के निर्देश?"
    },
    eligibility: {
      en: "Eligibility: Students belonging to SC, ST, OBC, or minority categories enrolled in recognized institutions. Annual family income must be below ₹2,50,000.",
      hi: "पात्रता: मान्यता प्राप्त संस्थानों में नामांकित SC, ST, OBC या अल्पसंख्यक श्रेणियों के छात्र। वार्षिक पारिवारिक आय ₹2,50,000 से कम होनी चाहिए।"
    },
    documents: {
      en: "Documents Needed: Previous class Marksheet, Income certificate of parents, Caste certificate, Fee receipt copy, Aadhar card, and student bank account details.",
      hi: "दस्तावेज आवश्यक: पिछली कक्षा की मार्कशीट, माता-पिता का आय प्रमाण पत्र, जाति प्रमाण पत्र, शुल्क रसीद की प्रति, आधार कार्ड और छात्र का बैंक खाता विवरण।"
    },
    apply: {
      en: "How to Apply: Register on the National Scholarship Portal (NSP), submit the required documents online, and track the verification progress through your school head.",
      hi: "आवेदन कैसे करें: राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर पंजीकरण करें, आवश्यक दस्तावेज ऑनलाइन जमा करें और अपने स्कूल के माध्यम से सत्यापन प्रगति को ट्रैक करें।"
    }
  },
  insurance: {
    title: { en: "Health Insurance (Ayushman Bharat)", hi: "स्वास्थ्य बीमा (आयुष्मान भारत)" },
    welcome: {
      en: "Welcome. Ayushman Bharat (PM-JAY) offers cashless medical insurance cover up to ₹5,00,000 per family annually. Do you need details on eligibility check, benefits, or document needs?",
      hi: "नमस्ते। आयुष्मान भारत (PM-JAY) प्रति परिवार ₹5,00,000 तक का कैशलेस चिकित्सा बीमा प्रदान करता है। क्या आपको पात्रता जांच, लाभ, या आवश्यक दस्तावेजों की जानकारी चाहिए?"
    },
    eligibility: {
      en: "Eligibility: Families identified under the Socio-Economic Caste Census (SECC). Focuses on low-income, landless, rural, and marginalized urban households.",
      hi: "पात्रता: सामाजिक-आर्थिक जाति जनगणना (SECC) के तहत पहचाने गए परिवार। कम आय वाले, भूमिहीन, ग्रामीण और सीमांत शहरी परिवारों पर ध्यान केंद्रित है।"
    },
    documents: {
      en: "Required Documents: Aadhar Card or Ration Card (with family list) for identification. No premium payment is required to receive the Golden Card.",
      hi: "आवश्यक दस्तावेज: पहचान के लिए आधार कार्ड या राशन कार्ड (पारिवारिक सूची के साथ)। आयुष्मान गोल्डन कार्ड प्राप्त करने के लिए किसी प्रीमियम भुगतान की आवश्यकता नहीं है।"
    },
    apply: {
      en: "How to Apply: Visit any empanelled public or private hospital or a nearby CSC center to check your name in the SECC list, complete biometric authentication, and print your Ayushman Card.",
      hi: "आवेदन कैसे करें: SECC सूची में अपना नाम जांचने के लिए किसी भी सूचीबद्ध अस्पताल या नजदीकी CSC केंद्र पर जाएं, बायोमेट्रिक सत्यापन पूरा करें और अपना आयुष्मान कार्ड प्रिंट करें।"
    }
  },
  ration: {
    title: { en: "Ration Card (NFSA)", hi: "राशन कार्ड (NFSA)" },
    welcome: {
      en: "Hello. I can guide you on applying for or updating a Ration Card for subsidized food security grains. What would you like to explore?",
      hi: "नमस्ते। मैं रियायती खाद्य सुरक्षा अनाज के लिए राशन कार्ड के आवेदन या संशोधन में आपका मार्गदर्शन कर सकता हूँ। आप क्या जानना चाहेंगे?"
    },
    eligibility: {
      en: "Eligibility: Division into Priority Household (PHH) or Antyodaya Anna Yojana (AAY) cards based on household monthly earnings and assets criteria.",
      hi: "पात्रता: घरेलू मासिक आय और संपत्ति मानदंडों के आधार पर प्राथमिकता घरेलू (PHH) या अंत्योदय अन्न योजना (AAY) राशन कार्ड का वितरण किया जाता है।"
    },
    documents: {
      en: "Required Documents: Aadhar numbers of all family members, Proof of current residence (rent agreement/water bill), and Income declaration certificate.",
      hi: "आवश्यक दस्तावेज: परिवार के सभी सदस्यों के आधार नंबर, वर्तमान निवास का प्रमाण (किराया समझौता/पानी का बिल), और आय घोषणा पत्र।"
    },
    apply: {
      en: "How to Apply: Submit family details on your state Food Department website, upload members Aadhar cards, and get your physical card verified through the local fair-price ration shop.",
      hi: "आवेदन कैसे करें: अपने राज्य के खाद्य विभाग की वेबसाइट पर पारिवारिक विवरण जमा करें, सदस्यों के आधार कार्ड अपलोड करें और स्थानीय राशन डीलर के माध्यम से भौतिक सत्यापन कराएं।"
    }
  }
};

let currentActiveService = 'pension';

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAccessibilityBar();
  initLanguageControls();
  initFormAssistant();
  initLiveAssistant();
  initVoiceSandbox();
  initKeyboardShortcuts();
  initNarrator();
  updateAccessibilityReport();

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !expanded);
      mainNav.classList.toggle('active');
    });
  }

  // Smooth scroll logic and dynamic ScrollSpy
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Dynamic ScrollSpy using IntersectionObserver
  const spySections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -45% 0px',
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (correspondingLink) {
          navLinks.forEach(l => l.classList.remove('active'));
          correspondingLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  spySections.forEach(section => spyObserver.observe(section));
});

/* ==========================================================================
   ACCESSIBILITY BAR CONTROLS
   ========================================================================== */

function initAccessibilityBar() {
  // Contrast Toggle
  const contrastBtn = document.getElementById('contrast-toggle');
  contrastBtn.addEventListener('click', () => {
    const isHigh = document.body.getAttribute('data-theme') === 'high-contrast';
    if (isHigh) {
      document.body.setAttribute('data-theme', 'light');
      sessionLogs.theme = 'Normal contrast mode';
      announceText("Normal theme contrast restored", "सामान्य कंट्रास्ट लागू किया गया");
    } else {
      document.body.setAttribute('data-theme', 'high-contrast');
      sessionLogs.theme = 'High contrast mode active';
      announceText("High contrast mode enabled", "उच्च कंट्रास्ट मोड सक्षम किया गया");
    }
    updateAccessibilityReport();
  });

  // Font Resizers
  const fontDec = document.getElementById('font-decrease');
  const fontNormal = document.getElementById('font-normal');
  const fontInc = document.getElementById('font-increase');
  const body = document.body;
  const rootHtml = document.documentElement;

  fontDec.addEventListener('click', () => {
    rootHtml.classList.remove('text-medium', 'text-large', 'text-xlarge');
    rootHtml.classList.add('text-small');
    sessionLogs.font = 'Reduced text size scale';
    updateActiveFontBtn(fontDec);
    announceText("Font size decreased", "अक्षरों का आकार छोटा किया गया");
    updateAccessibilityReport();
  });

  fontNormal.addEventListener('click', () => {
    rootHtml.classList.remove('text-small', 'text-large', 'text-xlarge');
    rootHtml.classList.add('text-medium');
    sessionLogs.font = 'Standard text scale';
    updateActiveFontBtn(fontNormal);
    announceText("Font size restored to standard", "अक्षरों का आकार सामान्य किया गया");
    updateAccessibilityReport();
  });

  fontInc.addEventListener('click', () => {
    rootHtml.classList.remove('text-small', 'text-medium', 'text-xlarge');
    rootHtml.classList.add('text-large');
    sessionLogs.font = 'Expanded text size scale';
    updateActiveFontBtn(fontInc);
    announceText("Font size increased", "अक्षरों का आकार बड़ा किया गया");
    updateAccessibilityReport();
  });

  function updateActiveFontBtn(activeBtn) {
    [fontDec, fontNormal, fontInc].forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  // Dyslexia Toggle
  const dyslexiaBtn = document.getElementById('dyslexia-toggle');
  dyslexiaBtn.addEventListener('click', () => {
    const isEnabled = body.classList.toggle('dyslexia-enabled');
    sessionLogs.dyslexia = isEnabled;
    if (isEnabled) {
      dyslexiaBtn.classList.add('active');
      announceText("Dyslexic font layout enabled", "डिस्लेक्सिया फ़ॉन्ट प्रारूप सक्षम");
    } else {
      dyslexiaBtn.classList.remove('active');
      announceText("Dyslexic font disabled", "डिस्लेक्सिया फ़ॉन्ट बंद किया गया");
    }
    updateAccessibilityReport();
  });

  // TTS Mute Toggle
  const muteBtn = document.getElementById('tts-mute-toggle');
  const muteIcon = document.getElementById('tts-audio-icon');
  muteBtn.addEventListener('click', () => {
    isTTSMuted = !isTTSMuted;
    if (isTTSMuted) {
      window.speechSynthesis.cancel();
      muteIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" x2="17" y1="9" y2="15"/><line x1="17" x2="23" y1="9" y2="15"/>`;
      muteBtn.setAttribute('aria-label', "Turn on Voice Guidance speech output");
      muteBtn.querySelector('span').setAttribute('data-i18n', 'tts_mute_btn_off');
      muteBtn.querySelector('span').textContent = translations[currentLang].tts_mute_btn_off;
    } else {
      muteIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
      muteBtn.setAttribute('aria-label', "Mute Voice Guidance speech output");
      muteBtn.querySelector('span').setAttribute('data-i18n', 'tts_mute_btn');
      muteBtn.querySelector('span').textContent = translations[currentLang].tts_mute_btn;
      announceText("Voice assistant reader activated", "आवाज सहायक रीडर चालू किया गया");
    }
  });
}

/* ==========================================================================
   BILINGUAL LOCALIZATION ENGINE
   ========================================================================== */

function initLanguageControls() {
  const langEn = document.getElementById('lang-toggle-en');
  const langHi = document.getElementById('lang-toggle-hi');

  langEn.addEventListener('click', () => switchLanguage('en'));
  langHi.addEventListener('click', () => switchLanguage('hi'));
}

function switchLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  // Toggle active button states
  const langEn = document.getElementById('lang-toggle-en');
  const langHi = document.getElementById('lang-toggle-hi');
  if (lang === 'en') {
    langEn.classList.add('active');
    langHi.classList.remove('active');
    document.documentElement.lang = 'en';
  } else {
    langHi.classList.add('active');
    langEn.classList.remove('active');
    document.documentElement.lang = 'hi';
  }

  // Update translation text content
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      // Check if button or span contains other tags inside
      if (el.tagName === 'KBD') return; // Bypass key markings
      
      // Preserve key element layouts for shortcuts panel
      if (key === 'hero_shortcut_tip') {
        el.innerHTML = currentLang === 'en' ? 
          `Quick Keyboard Shortcut: Press <kbd class="k-key">S</kbd> to toggle High Contrast, or hover any card to hear details.` :
          `त्वरित कीबोर्ड शॉर्टकट: उच्च कंट्रास्ट को टॉगल करने के लिए <kbd class="k-key">S</kbd> दबाएं, या विवरण सुनने के लिए किसी भी कार्ड पर होवर करें।`;
      } else if (key === 'footer_desc') {
        el.textContent = translations[currentLang][key];
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });

  // Translate Input Placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });

  // Re-populate Service Assistant welcome message if active
  loadServiceGuide(currentActiveService);

  // Update instructions in Form Helper if active
  updateFormHelperContent();

  // Speak change status
  announceText("Language changed to English", "भाषा बदलकर हिंदी की गई");

  // Update logs
  updateAccessibilityReport();
}

/* ==========================================================================
   TEXT TO SPEECH (SPEECH SYNTHESIS) ENGINE
   ========================================================================== */

function textToSpeech(text, customLang = null) {
  if (isTTSMuted) return;
  
  // Cancel previous speeches immediately
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = customLang || (currentLang === 'en' ? 'en-US' : 'hi-IN');
  utterance.rate = 1.0;
  
  // Attempt to select native speech engine voices if available
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    const filterLocale = currentLang === 'en' ? 'en-' : 'hi-';
    const chosenVoice = voices.find(v => v.lang.toLowerCase().startsWith(filterLocale));
    if (chosenVoice) utterance.voice = chosenVoice;
  }

  window.speechSynthesis.speak(utterance);
}

function announceText(enText, hiText) {
  const speakText = currentLang === 'en' ? enText : hiText;
  textToSpeech(speakText);
}

/* ==========================================================================
   NARRATOR & SCREEN-READER EFFECTS
   ========================================================================== */

function initNarrator() {
  // Elements that speak their content on mouse hover or key focus (A11y enhancer)
  const interactiveCards = document.querySelectorAll('.challenge-card, .empower-card, .feature-detail-card, .step-card, .impact-card, .badge-item');
  
  interactiveCards.forEach(card => {
    // Add speak button handlers
    const speakBtn = card.querySelector('.speak-btn');
    if (speakBtn) {
      speakBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        readCardContent(card);
      });
    }

    // Add focus-based reader triggering
    card.addEventListener('focus', () => {
      if (document.body.classList.contains('text-xlarge') || !isTTSMuted) {
        // Read headers
        const header = card.querySelector('h3, h4');
        if (header) {
          textToSpeech(header.textContent);
        }
      }
    });

    // Add hover-based reader triggering
    card.addEventListener('mouseenter', () => {
      if (!isTTSMuted) {
        readCardContent(card);
      }
    });
  });
}

function readCardContent(card) {
  const header = card.querySelector('h3, h4');
  const paragraph = card.querySelector('.card-text, .feature-card-desc, .step-desc, .team-bio');
  const label = card.querySelector('.card-tag, .team-role');

  let textToRead = "";
  if (header) textToRead += header.textContent + ". ";
  if (label) textToRead += label.textContent + ". ";
  if (paragraph) textToRead += paragraph.textContent;

  textToSpeech(textToRead);
}

/* ==========================================================================
   SPEECH RECOGNITION (VOICE NAVIGATION) ENGINE
   ========================================================================== */

function initVoiceSandbox() {
  const micBtn = document.getElementById('mic-toggle-btn');
  const simChips = document.querySelectorAll('.sim-chip');

  // Microphone toggle button
  micBtn.addEventListener('click', () => {
    toggleMicrophone();
  });

  // Simulator chips
  simChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const command = chip.getAttribute('data-command');
      handleVoiceCommand(command, true);
    });
  });
}

function toggleMicrophone() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    alert("Speech Recognition API is not supported in this browser. Please use Google Chrome/Microsoft Edge or test with the Command Simulator Panel.");
    return;
  }

  const micBtn = document.getElementById('mic-toggle-btn');
  const micStatusTitle = document.getElementById('voice-activation-status');
  const micInstruct = document.getElementById('voice-interim-txt');

  if (isMicListening) {
    // Stop listening
    speechRecognizer.stop();
    isMicListening = false;
    document.body.classList.remove('mic-recording');
    micBtn.setAttribute('aria-pressed', 'false');
    micStatusTitle.textContent = translations[currentLang].mic_status_stopped;
    micInstruct.textContent = translations[currentLang].mic_instruction_txt;
  } else {
    // Start listening
    try {
      speechRecognizer = new SpeechRecognition();
      speechRecognizer.continuous = true;
      speechRecognizer.interimResults = false;
      speechRecognizer.lang = currentLang === 'en' ? 'en-US' : 'hi-IN';

      speechRecognizer.onstart = () => {
        isMicListening = true;
        document.body.classList.add('mic-recording');
        micBtn.setAttribute('aria-pressed', 'true');
        micStatusTitle.textContent = translations[currentLang].mic_status_listening;
        micInstruct.textContent = currentLang === 'en' ? 
          "Speak now... I can hear you." : 
          "कृपया बोलें... मैं सुन रहा हूँ।";
      };

      speechRecognizer.onresult = (event) => {
        const resultIndex = event.resultIndex;
        const speechResult = event.results[resultIndex][0].transcript;
        handleVoiceCommand(speechResult, false);
      };

      speechRecognizer.onerror = (e) => {
        console.error("Mic error:", e);
        // Fall back gracefully
        stopMicQuietly();
      };

      speechRecognizer.onend = () => {
        stopMicQuietly();
      };

      speechRecognizer.start();
    } catch (err) {
      console.error(err);
      stopMicQuietly();
    }
  }
}

function stopMicQuietly() {
  isMicListening = false;
  document.body.classList.remove('mic-recording');
  const micBtn = document.getElementById('mic-toggle-btn');
  const micStatusTitle = document.getElementById('voice-activation-status');
  const micInstruct = document.getElementById('voice-interim-txt');
  if (micBtn) {
    micBtn.setAttribute('aria-pressed', 'false');
    micStatusTitle.textContent = translations[currentLang].mic_status_stopped;
    micInstruct.textContent = translations[currentLang].mic_instruction_txt;
  }
}

function handleVoiceCommand(rawText, isSimulated = false) {
  const text = rawText.toLowerCase().trim();
  const logBox = document.getElementById('speech-log-result');
  
  // Output to Speech Log
  logBox.textContent = `"${rawText}" ${isSimulated ? '(Simulated)' : ''}`;
  logBox.style.fontWeight = 'bold';

  // Add to report logs
  sessionLogs.commandsUsed.push(rawText);
  updateAccessibilityReport();

  // Define actions and their keyword triggers
  const commandsList = [
    {
      id: 'scroll_down',
      keywords: ['scroll down', 'page down', 'go down', 'move down', 'down', 'नीचे', 'स्क्रॉल नीचे'],
      action: () => {
        window.scrollBy({ top: 400, behavior: 'smooth' });
        announceText("Scrolling down", "नीचे स्क्रॉल किया जा रहा है");
      }
    },
    {
      id: 'scroll_up',
      keywords: ['scroll up', 'page up', 'go up', 'move up', 'up', 'ऊपर', 'स्क्रॉल ऊपर'],
      action: () => {
        window.scrollBy({ top: -400, behavior: 'smooth' });
        announceText("Scrolling up", "ऊपर स्क्रॉल किया जा रहा है");
      }
    },
    {
      id: 'go_to_top',
      keywords: ['go to top', 'top', 'start of page', 'scroll top', 'सबसे ऊपर', 'शीर्ष', 'शुरुआत'],
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        announceText("Scrolled to top", "शीर्ष पर स्क्रॉल किया गया");
      }
    },
    {
      id: 'open_home',
      keywords: ['home', 'main page', 'hero', 'मुख्य पृष्ठ', 'स्टार्ट', 'होम'],
      action: () => {
        document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
        announceText("Navigated to Home section", "मुख्य पृष्ठ पर निर्देशित");
      }
    },
    {
      id: 'open_challenge',
      keywords: ['challenge', 'problem', 'obstacle', 'barrier', 'समस्या', 'बाधा', 'कठिनाई'],
      action: () => {
        document.getElementById('challenge').scrollIntoView({ behavior: 'smooth' });
        announceText("Viewing public challenges", "बाधा विवरण अनुभाग खोला गया");
      }
    },
    {
      id: 'open_services',
      keywords: ['service', 'solution', 'welfare', 'scheme', 'सेवा', 'योजना', 'सॉल्यूशन', 'लाभ'],
      action: () => {
        document.getElementById('who-helps').scrollIntoView({ behavior: 'smooth' });
        announceText("Viewing empowered citizen groups", "समाधान अनुभाग खोला गया");
      }
    },
    {
      id: 'open_form',
      keywords: ['form', 'apply', 'fill', 'submit application', 'pension', 'disability certificate', 'आवेदन', 'फार्म', 'पेंशन', 'विकलांगता', 'भरें'],
      action: () => {
        document.getElementById('form-assistant').scrollIntoView({ behavior: 'smooth' });
        focusFormStep(1);
        announceText("Opened guided application form. Step 1: applicant name.", "आवेदन फॉर्म खोला गया। चरण १: आवेदक का नाम।");
      }
    },
    {
      id: 'open_chatbot',
      keywords: ['chat', 'assistant', 'live', 'talk', 'query', 'support', 'असिस्टेंट', 'सहायक', 'बात', 'चैट', 'मदद'],
      action: () => {
        document.getElementById('live-assistant').scrollIntoView({ behavior: 'smooth' });
        announceText("Opened Live assistant service chat", "लाइव सहायक संवाद खोला गया");
      }
    },
    {
      id: 'open_report',
      keywords: ['report', 'summary', 'log', 'history', 'activities', 'रिपोर्ट', 'विवरण', 'सत्र', 'लॉग'],
      action: () => {
        document.getElementById('accessibility-report').scrollIntoView({ behavior: 'smooth' });
        announceText("Viewing accessibility logs report", "सत्र रिपोर्ट देखें");
      }
    },
    {
      id: 'switch_to_hindi',
      keywords: ['hindi', 'switch to hindi', 'hindi change', 'हिंदी', 'हिन्दी', 'हिंदी में बदलें'],
      action: () => {
        switchLanguage('hi');
      }
    },
    {
      id: 'switch_to_english',
      keywords: ['english', 'switch to english', 'english change', 'अंग्रेजी', 'अंग्रेजी में बदलें'],
      action: () => {
        switchLanguage('en');
      }
    },
    {
      id: 'toggle_contrast_high',
      keywords: ['high contrast', 'contrast mode', 'dark mode', 'black theme', 'उच्च कंट्रास्ट', 'डार्क मोड', 'काला थीम'],
      action: () => {
        document.body.setAttribute('data-theme', 'high-contrast');
        sessionLogs.theme = 'High contrast mode active';
        announceText("Contrast upgraded to High readability", "उच्च कंट्रास्ट लागू किया गया");
        updateAccessibilityReport();
      }
    },
    {
      id: 'toggle_contrast_normal',
      keywords: ['normal contrast', 'normal contrast mode', 'light mode', 'white theme', 'सामान्य कंट्रास्ट', 'लाइट मोड', 'सफेद थीम'],
      action: () => {
        document.body.setAttribute('data-theme', 'light');
        sessionLogs.theme = 'Normal contrast mode';
        announceText("Contrast restored to standard", "सामान्य लेआउट पुनर्स्थापित");
        updateAccessibilityReport();
      }
    },
    {
      id: 'read_instructions',
      keywords: ['read', 'speak', 'instructions', 'page content', 'पढ़ें', 'बोलें', 'सुनाएं', 'पढ़ो', 'निर्देश'],
      action: () => {
        if (document.getElementById('form-assistant').getBoundingClientRect().top < window.innerHeight &&
            document.getElementById('form-assistant').getBoundingClientRect().bottom > 0) {
          readFormHelperInstructions();
        } else if (document.getElementById('live-assistant').getBoundingClientRect().top < window.innerHeight &&
                   document.getElementById('live-assistant').getBoundingClientRect().bottom > 0) {
          const serviceData = servicesData[currentActiveService];
          textToSpeech(serviceData.welcome[currentLang]);
        } else {
          const textToRead = document.getElementById('hero-heading').textContent + ". " +
                             document.querySelector('.hero-subtitle').textContent;
          textToSpeech(textToRead);
        }
      }
    },
    {
      id: 'stop_reading',
      keywords: ['stop', 'quiet', 'cancel', 'silence', 'mute', 'शांत', 'रुकें', 'बंद', 'चुप'],
      action: () => {
        window.speechSynthesis.cancel();
      }
    }
  ];

  // Scoring algorithm:
  // Find which command has the highest number of keyword matches or exact matches
  let bestMatch = null;
  let highestScore = 0;

  commandsList.forEach(cmd => {
    let score = 0;
    cmd.keywords.forEach(kw => {
      // If there is an exact match, assign high score
      if (text === kw) {
        score += 10;
      }
      // If it contains the keyword, add score relative to keyword length
      else if (text.includes(kw)) {
        score += kw.length;
      }
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = cmd;
    }
  });

  if (bestMatch && highestScore > 0) {
    bestMatch.action();
  } else {
    // Unknown command fallback
    announceText("Command not recognized. Please speak clearly.", "आदेश समझ नहीं आया। कृपया स्पष्ट बोलें।");
  }
}

/* ==========================================================================
   LIVE CHATBOT SERVICE ASSISTANT
   ========================================================================== */

function initLiveAssistant() {
  const serviceChips = document.querySelectorAll('.service-chip-btn');
  const suggestionBox = document.getElementById('chat-suggestions-box');
  const sendBtn = document.getElementById('chat-send-btn');
  const textInput = document.getElementById('chat-text-input');
  const micBtn = document.getElementById('chat-mic-btn');

  // Change active service and reload welcome message
  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      serviceChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const serviceKey = chip.getAttribute('data-service');
      currentActiveService = serviceKey;
      sessionLogs.servicesViewed.push(servicesData[serviceKey].title.en);
      loadServiceGuide(serviceKey);
      updateAccessibilityReport();
    });
  });

  // Suggestion buttons click handler
  suggestionBox.addEventListener('click', (e) => {
    if (e.target.classList.contains('suggest-btn')) {
      const query = e.target.getAttribute('data-query');
      handleChatQuery(query);
    }
  });

  // Text inputs
  sendBtn.addEventListener('click', () => {
    const query = textInput.value.trim();
    if (query !== "") {
      handleChatQuery(query);
      textInput.value = "";
    }
  });

  textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = textInput.value.trim();
      if (query !== "") {
        handleChatQuery(query);
        textInput.value = "";
      }
    }
  });

  // Chat speech microphone integration
  if (micBtn) {
    micBtn.addEventListener('click', () => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert("Speech Recognition not supported in this browser.");
        return;
      }
      
      const recognition = new SpeechRecognition();
      recognition.lang = currentLang === 'en' ? 'en-US' : 'hi-IN';
      
      recognition.onstart = () => {
        document.body.classList.add('chat-recording');
        micBtn.setAttribute('aria-label', "Listening for query...");
      };
      
      recognition.onresult = (event) => {
        const query = event.results[0][0].transcript;
        textInput.value = query;
        handleChatQuery(query);
        textInput.value = "";
      };
      
      recognition.onend = () => {
        document.body.classList.remove('chat-recording');
        micBtn.setAttribute('aria-label', "Speak query via microphone");
      };

      recognition.onerror = () => {
        document.body.classList.remove('chat-recording');
      };

      recognition.start();
    });
  }
}

function loadServiceGuide(serviceKey) {
  const service = servicesData[serviceKey];
  const chatMessages = document.getElementById('chat-messages');
  
  // Clear feed and insert welcome
  chatMessages.innerHTML = `
    <div class="msg-bubble assistant-msg">
      <p>${service.welcome[currentLang]}</p>
      <span class="msg-time">${getCurrentTime()}</span>
    </div>
  `;
  
  textToSpeech(service.welcome[currentLang]);
}

function handleChatQuery(queryText) {
  const chatMessages = document.getElementById('chat-messages');
  
  // 1. Append User Bubble
  const userBubble = document.createElement('div');
  userBubble.className = "msg-bubble user-msg";
  userBubble.innerHTML = `
    <p>${queryText}</p>
    <span class="msg-time">${getCurrentTime()}</span>
  `;
  chatMessages.appendChild(userBubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // 2. Process query response (Local accessibility assistant logic)
  setTimeout(() => {
    const service = servicesData[currentActiveService];
    let response = "";
    
    const normQuery = queryText.toLowerCase();

    if (normQuery.includes("eligibility") || normQuery.includes("criteria") || normQuery.includes("पात्रता") || normQuery.includes("योग्यता")) {
      response = service.eligibility[currentLang];
    } else if (normQuery.includes("document") || normQuery.includes("paper") || normQuery.includes("दस्तावेज") || normQuery.includes("कागजात")) {
      response = service.documents[currentLang];
    } else if (normQuery.includes("apply") || normQuery.includes("submit") || normQuery.includes("आवेदन") || normQuery.includes("फॉर्म")) {
      response = service.apply[currentLang];
    } else {
      // Default fallback guidance response matching selected service
      response = currentLang === 'en' ? 
        `To explore this service fully, please select one of the quick suggestions below or click 'Apply Now' to complete the guided form.` :
        `इस सेवा के बारे में अधिक जानने के लिए कृपया नीचे दिए गए विकल्पों में से किसी एक पर क्लिक करें या फॉर्म भरने के लिए 'अभी आवेदन करें' पर जाएं।`;
    }

    // Append Assistant Bubble
    const assistantBubble = document.createElement('div');
    assistantBubble.className = "msg-bubble assistant-msg";
    assistantBubble.innerHTML = `
      <p>${response}</p>
      <span class="msg-time">${getCurrentTime()}</span>
    `;
    chatMessages.appendChild(assistantBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Read response aloud
    textToSpeech(response);
  }, 600);
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutes} ${ampm}`;
}

/* ==========================================================================
   SMART GUIDED FORM ASSISTANT
   ========================================================================== */

function initFormAssistant() {
  const prevBtn = document.getElementById('form-prev-btn');
  const nextBtn = document.getElementById('form-next-btn');
  const submitBtn = document.getElementById('form-submit-btn');
  
  // Navigation button binds
  nextBtn.addEventListener('click', () => {
    if (validateFormStep(activeFormStep)) {
      if (activeFormStep < formMaxSteps) {
        focusFormStep(activeFormStep + 1);
      }
    }
  });

  prevBtn.addEventListener('click', () => {
    if (activeFormStep > 1) {
      // Clear any invalid state on the current step before going back
      const currentGroup = document.getElementById(`field-group-${activeFormStep}`);
      if (currentGroup) {
        const currentInput = currentGroup.querySelector('.form-input');
        const currentError = currentGroup.querySelector('.field-error-msg');
        if (currentInput) currentInput.classList.remove('invalid');
        if (currentError) currentError.style.display = 'none';
      }
      focusFormStep(activeFormStep - 1);
    }
  });

  // Modal actions
  submitBtn.addEventListener('click', () => {
    if (validateFormStep(activeFormStep)) {
      showReviewModal();
    }
  });

  const modalCancel = document.getElementById('modal-cancel-btn');
  const modalConfirm = document.getElementById('modal-confirm-btn');

  modalCancel.addEventListener('click', () => {
    document.getElementById('review-modal').classList.add('hidden');
    announceText("Form review cancelled. Editing fields.", "समीक्षा रद्द की गई। फ़ील्ड संपादित करें।");
  });

  modalConfirm.addEventListener('click', () => {
    document.getElementById('review-modal').classList.add('hidden');
    
    // Log form submission
    const scheme = document.getElementById('form-service').value;
    sessionLogs.formsSubmitted.push({
      name: document.getElementById('form-name').value,
      dob: document.getElementById('form-dob').value,
      scheme: scheme,
      aadhar: document.getElementById('form-aadhar').value
    });
    updateAccessibilityReport();

    // Show dynamic success speak
    announceText("Application submitted successfully. Registration ID generated.", "आवेदन सफलतापूर्वक सबमिट किया गया। पंजीकरण आईडी बनाई गई।");
    
    // Reset form
    document.getElementById('public-service-form').reset();
    focusFormStep(1);
  });

  // Read aloud helper button
  const formReadBtn = document.getElementById('form-read-aloud-btn');
  formReadBtn.addEventListener('click', () => {
    readFormHelperInstructions();
  });

  // Input changes speak instructions on focus
  const formInputs = document.querySelectorAll('.form-input');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      const step = parseInt(input.closest('.form-field-group').getAttribute('data-step'));
      if (step !== activeFormStep) {
        focusFormStep(step);
      } else {
        readFormHelperInstructions();
      }
    });

    // Advance to next field on Enter keypress
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent page refresh submission
        if (activeFormStep < formMaxSteps) {
          if (validateFormStep(activeFormStep)) {
            focusFormStep(activeFormStep + 1);
          }
        } else {
          if (validateFormStep(activeFormStep)) {
            showReviewModal();
          }
        }
      }
    });
  });

  // Dynamically re-evaluate eligibility on input/change
  document.getElementById('form-dob').addEventListener('change', () => {
    const elig = checkFormEligibility();
    if (elig.status !== 'none' && elig.message) {
      textToSpeech(elig.message);
    }
  });

  document.getElementById('form-service').addEventListener('change', () => {
    const elig = checkFormEligibility();
    if (elig.status !== 'none' && elig.message) {
      textToSpeech(elig.message);
    }
  });
}

function focusFormStep(stepIndex) {
  activeFormStep = stepIndex;
  
  // Toggle visible form fields
  const fieldGroups = document.querySelectorAll('.form-field-group');
  fieldGroups.forEach(g => g.classList.remove('active'));
  document.getElementById(`field-group-${stepIndex}`).classList.add('active');

  // Toggle progress steps
  const progressSteps = document.querySelectorAll('.progress-step');
  progressSteps.forEach((s, idx) => {
    s.classList.remove('active', 'completed');
    if (idx + 1 === stepIndex) {
      s.classList.add('active');
    } else if (idx + 1 < stepIndex) {
      s.classList.add('completed');
    }
  });

  // Update button visibilities
  const prevBtn = document.getElementById('form-prev-btn');
  const nextBtn = document.getElementById('form-next-btn');
  const submitBtn = document.getElementById('form-submit-btn');

  if (stepIndex === 1) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  if (stepIndex === formMaxSteps) {
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
  } else {
    nextBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');
  }

  // Update Helper side content
  updateFormHelperContent();

  // Focus on current input field
  const activeInput = document.querySelector(`#field-group-${stepIndex} .form-input`);
  if (activeInput) {
    activeInput.focus();
  }
}

function updateFormHelperContent() {
  const helperTitle = document.getElementById('form-assistant-title');
  const helperDesc = document.getElementById('form-assistant-text');

  if (activeFormStep === 1) {
    helperTitle.textContent = translations[currentLang].helper_f1_title;
    helperTitle.setAttribute('data-i18n', 'helper_f1_title');
    helperDesc.textContent = translations[currentLang].helper_f1_desc;
    helperDesc.setAttribute('data-i18n', 'helper_f1_desc');
  } else if (activeFormStep === 2) {
    helperTitle.textContent = currentLang === 'en' ? "Select Date of Birth" : "जन्म तिथि चुनें";
    helperTitle.removeAttribute('data-i18n');
    helperDesc.textContent = currentLang === 'en' ? 
      "Enter your birth date. Applicants under 18 or above 100 will flag verification warnings." :
      "अपनी जन्म तिथि दर्ज करें। 18 वर्ष से कम या 100 वर्ष से अधिक आयु होने पर सत्यापन चेतावनी आ सकती है।";
    helperDesc.removeAttribute('data-i18n');
  } else if (activeFormStep === 3) {
    helperTitle.textContent = currentLang === 'en' ? "Choose Welfare Scheme" : "कल्याणकारी योजना चुनें";
    helperTitle.removeAttribute('data-i18n');
    helperDesc.textContent = currentLang === 'en' ? 
      "Select the specific public service card you are applying for. Ensure eligibility matches your profile." :
      "उस विशिष्ट सार्वजनिक सेवा कार्ड का चयन करें जिसके लिए आप आवेदन कर रहे हैं। सुनिश्चित करें कि आपकी पात्रता आपके प्रोफ़ाइल से मेल खाती है।";
    helperDesc.removeAttribute('data-i18n');
  } else if (activeFormStep === 4) {
    helperTitle.textContent = currentLang === 'en' ? "Enter Aadhar Details" : "आधार विवरण दर्ज करें";
    helperTitle.removeAttribute('data-i18n');
    helperDesc.textContent = currentLang === 'en' ? 
      "Type the 12 digits of your personal Aadhar identification number. We verify this offline using biometric sync." :
      "अपनी व्यक्तिगत आधार पहचान संख्या के 12 अंक टाइप करें। हम बायोमेट्रिक सिंक का उपयोग करके इसे सत्यापित करते हैं।";
    helperDesc.removeAttribute('data-i18n');
  }

  // Update eligibility status box
  checkFormEligibility();

  // Speak field instructions
  readFormHelperInstructions();
}

function checkFormEligibility() {
  const dobInput = document.getElementById('form-dob');
  const serviceSelect = document.getElementById('form-service');
  const alertBox = document.getElementById('form-eligibility-alert');
  const alertIcon = document.getElementById('eligibility-alert-icon');
  const alertTitle = document.getElementById('eligibility-alert-title');
  const alertText = document.getElementById('eligibility-alert-text');

  if (!alertBox || !alertTitle || !alertText || !alertIcon) return { status: 'none', message: '' };

  if (activeFormStep === 1) {
    alertBox.classList.add('hidden');
    return { status: 'none', message: '' };
  }

  const dobVal = dobInput.value;
  const schemeVal = serviceSelect.value;

  // Set translation for title
  alertTitle.textContent = translations[currentLang].eligibility_title || (currentLang === 'en' ? "Eligibility Status" : "पात्रता स्थिति");

  if (!dobVal) {
    alertBox.className = "eligibility-alert-box warning";
    alertIcon.textContent = "⚠️";
    const msg = translations[currentLang].eligibility_not_entered_dob || (currentLang === 'en' ? "Please enter your date of birth to check eligibility." : "पात्रता की जांच करने के लिए कृपया अपनी जन्म तिथि दर्ज करें।");
    alertText.textContent = msg;
    alertBox.classList.remove('hidden');
    return { status: 'warning', message: msg };
  }

  const birthDate = new Date(dobVal);
  const today = new Date();
  if (birthDate > today) {
    alertBox.className = "eligibility-alert-box error";
    alertIcon.textContent = "❌";
    const msg = translations[currentLang].eligibility_invalid_dob || (currentLang === 'en' ? "Invalid Date of Birth (future date is not allowed)." : "अमान्य जन्म तिथि (भविष्य की तिथि की अनुमति नहीं है)।");
    alertText.textContent = msg;
    alertBox.classList.remove('hidden');
    return { status: 'error', message: msg };
  }

  // Calculate age
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (!schemeVal) {
    alertBox.className = "eligibility-alert-box warning";
    alertIcon.textContent = "⚠️";
    const msg = translations[currentLang].eligibility_not_entered_scheme || (currentLang === 'en' ? "Please select a welfare scheme to check eligibility." : "पात्रता की जांच करने के लिए कृपया एक कल्याणकारी योजना चुनें।");
    alertText.textContent = msg;
    alertBox.classList.remove('hidden');
    return { status: 'warning', message: msg };
  }

  let status = 'success';
  let msg = '';
  let icon = '✅';

  if (schemeVal === 'Old Age Pension') {
    if (age < 60) {
      status = 'error';
      icon = '❌';
      const template = translations[currentLang].pension_ineligible || (currentLang === 'en' ? "Ineligible: Applicant must be 60 years or older for the Old Age Pension scheme. Current age is {age}." : "अपात्र: वृद्धावस्था पेंशन योजना के लिए आवेदक की आयु 60 वर्ष या उससे अधिक होनी चाहिए। वर्तमान आयु {age} वर्ष है।");
      msg = template.replace('{age}', age);
    } else {
      status = 'success';
      icon = '✅';
      msg = translations[currentLang].pension_eligible || (currentLang === 'en' ? "Eligible: Age criteria met (60 years or older)." : "पात्र: आयु मानदंड पूरा किया गया (60 वर्ष या उससे अधिक)।");
    }
  } else if (schemeVal === 'Disability Certificate') {
    status = 'success';
    icon = '✅';
    msg = translations[currentLang].disability_eligible || (currentLang === 'en' ? "Eligible: Suitable for all age groups (minimum 40% physical or mental disability required)." : "पात्र: सभी आयु समूहों के लिए उपयुक्त (न्यूनतम 40% शारीरिक या मानसिक विकलांगता आवश्यक)।");
  } else if (schemeVal === 'Income Certificate') {
    if (age < 18) {
      status = 'warning';
      icon = '⚠️';
      msg = translations[currentLang].income_ineligible || (currentLang === 'en' ? "Warning: Must be at least 18 years old to apply independently. Parent or guardian must apply on behalf of minors." : "चेतावनी: स्वतंत्र रूप से आवेदन करने के लिए कम से कम 18 वर्ष का होना आवश्यक है। अवयस्कों की ओर से माता-पिता या अभिभावक को आवेदन करना होगा।");
    } else {
      status = 'success';
      icon = '✅';
      msg = translations[currentLang].income_eligible || (currentLang === 'en' ? "Eligible: Age criteria met (18 years or older)." : "पात्र: आयु मानदंड पूरा किया गया (18 वर्ष या उससे अधिक)।");
    }
  } else if (schemeVal === 'Scholarship Allocation') {
    if (age < 15) {
      status = 'error';
      icon = '❌';
      const template = translations[currentLang].scholarship_ineligible_young || (currentLang === 'en' ? "Ineligible: Applicant must be at least 15 years old for Post-Matric Scholarship. Current age is {age}." : "अपात्र: मैट्रिकोत्तर छात्रवृत्ति के लिए आवेदक की आयु कम से कम 15 वर्ष होनी चाहिए। वर्तमान आयु {age} वर्ष है।");
      msg = template.replace('{age}', age);
    } else if (age > 30) {
      status = 'warning';
      icon = '⚠️';
      const template = translations[currentLang].scholarship_ineligible_old || (currentLang === 'en' ? "Warning: Post-Matric scholarships typically target students under 30 years old. Current age is {age}." : "चेतावनी: मैट्रिकोत्तर छात्रवृत्ति आमतौर पर 30 वर्ष से कम आयु के छात्रों को लक्षित करती है। वर्तमान आयु {age} वर्ष है।");
      msg = template.replace('{age}', age);
    } else {
      status = 'success';
      icon = '✅';
      msg = translations[currentLang].scholarship_eligible || (currentLang === 'en' ? "Eligible: Age criteria met for Post-Matric Scholarship (typically 15 to 30 years old)." : "पात्र: मैट्रिकोत्तर छात्रवृत्ति के लिए आयु मानदंड पूरा किया गया (आमतौर पर 15 से 30 वर्ष की आयु)।");
    }
  } else if (schemeVal === 'Health Insurance') {
    status = 'success';
    icon = '✅';
    msg = translations[currentLang].insurance_eligible || (currentLang === 'en' ? "Eligible: Suitable for all age groups (available for families listed in SECC-2011/BPL)." : "पात्र: सभी आयु समूहों के लिए उपयुक्त (SECC-2011/BPL में सूचीबद्ध परिवारों के लिए उपलब्ध)।");
  } else if (schemeVal === 'Ration Card') {
    if (age < 18) {
      status = 'error';
      icon = '❌';
      const template = translations[currentLang].ration_ineligible || (currentLang === 'en' ? "Ineligible: Applicant must be at least 18 years old to apply as head of household. Current age is {age}." : "अपात्र: परिवार के मुखिया के रूप में आवेदन करने के लिए आवेदक की आयु कम से कम 18 वर्ष होनी चाहिए। वर्तमान आयु {age} वर्ष है।");
      msg = template.replace('{age}', age);
    } else {
      status = 'success';
      icon = '✅';
      msg = translations[currentLang].ration_eligible || (currentLang === 'en' ? "Eligible: Age criteria met for head of household (18 years or older)." : "पात्र: परिवार के मुखिया के लिए आयु मानदंड पूरा किया गया (18 वर्ष या उससे अधिक)।");
    }
  }

  alertBox.className = `eligibility-alert-box ${status}`;
  alertIcon.textContent = icon;
  alertText.textContent = msg;
  alertBox.classList.remove('hidden');

  return { status, message: msg };
}

function readFormHelperInstructions() {
  const helperTitle = document.getElementById('form-assistant-title').textContent;
  const helperDesc = document.getElementById('form-assistant-text').textContent;
  let text = `${helperTitle}. ${helperDesc}`;

  // If there is an active, visible eligibility alert, append it to spoken narration
  const alertBox = document.getElementById('form-eligibility-alert');
  if (alertBox && !alertBox.classList.contains('hidden')) {
    const alertText = document.getElementById('eligibility-alert-text').textContent;
    text += `. ${alertText}`;
  }

  textToSpeech(text);
}

function validateFormStep(stepIndex) {
  let isValid = true;
  const group = document.getElementById(`field-group-${stepIndex}`);
  const input = group.querySelector('.form-input');
  const errorMsg = group.querySelector('.field-error-msg');

  // --- Basic required field check ---
  if (input.hasAttribute('required') && input.value.trim() === "") {
    isValid = false;
  }

  // --- Step 2 (DOB): extra check — block future dates only ---
  if (isValid && stepIndex === 2) {
    const dobVal = input.value;
    if (dobVal) {
      const birthDate = new Date(dobVal);
      const today = new Date();
      if (birthDate > today) {
        isValid = false;
        // Override the error message to be more descriptive
        errorMsg.textContent = translations[currentLang].eligibility_invalid_dob ||
          (currentLang === 'en' ? "Invalid Date of Birth — future dates are not allowed." : "अमान्य जन्म तिथि — भविष्य की तिथि की अनुमति नहीं है।");
      }
    }
  }

  // --- Step 3 (Scheme): the ONLY step where eligibility mismatch blocks Next ---
  if (isValid && stepIndex === 3) {
    const elig = checkFormEligibility();
    if (elig.status === 'error') {
      isValid = false;
      input.classList.add('invalid');
      // Speak eligibility error so user knows why they are blocked
      textToSpeech(elig.message);
      // Show field error msg too
      errorMsg.textContent = elig.message;
      errorMsg.style.display = 'block';
      return false;
    }
  }

  // --- Step 4 (Aadhar): only format pattern validation ---
  if (isValid && stepIndex === 4) {
    const aadharPattern = /^\d{12}$/;
    if (!aadharPattern.test(input.value.replace(/\s+/g, ''))) {
      isValid = false;
    }
  }

  // --- Show/hide error states ---
  if (!isValid) {
    input.classList.add('invalid');
    errorMsg.style.display = 'block';
    const errText = errorMsg.textContent;
    textToSpeech(errText);
  } else {
    input.classList.remove('invalid');
    errorMsg.style.display = 'none';
    // Restore original error message text from translations (so it's correct next time)
    if (stepIndex === 2) {
      errorMsg.setAttribute('data-i18n', 'form_err_dob');
      errorMsg.textContent = translations[currentLang].form_err_dob || "Please enter a valid date of birth.";
    }
    if (stepIndex === 3) {
      errorMsg.setAttribute('data-i18n', 'form_err_srv');
      errorMsg.textContent = translations[currentLang].form_err_srv || "Please choose a valid scheme.";
    }
  }

  return isValid;
}

function showReviewModal() {
  // Populate summary labels
  document.getElementById('sum-name').textContent = document.getElementById('form-name').value;
  document.getElementById('sum-dob').textContent = document.getElementById('form-dob').value;
  document.getElementById('sum-service').textContent = document.getElementById('form-service').value;
  document.getElementById('sum-aadhar').textContent = document.getElementById('form-aadhar').value;

  // Reveal Modal
  document.getElementById('review-modal').classList.remove('hidden');

  // Announce modal reading out loud
  const name = document.getElementById('form-name').value;
  const scheme = document.getElementById('form-service').value;
  const summaryAnnouncement = currentLang === 'en' ? 
    `Please review your application summary. Name: ${name}. Scheme: ${scheme}. Click Confirm to submit.` :
    `कृपया अपने आवेदन सारांश की समीक्षा करें। नाम: ${name}। योजना: ${scheme}। सबमिट करने के लिए पुष्टि करें पर क्लिक करें।`;
  
  textToSpeech(summaryAnnouncement);
}

/* ==========================================================================
   DYNAMIC SESSION ACCESSIBILITY REPORT
   ========================================================================== */

function updateAccessibilityReport() {
  const repDate = document.getElementById('report-date');
  const repLang = document.getElementById('rep-val-lang');
  const repTools = document.getElementById('rep-val-tools');
  const repForms = document.getElementById('rep-val-forms');

  if (repDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    repDate.textContent = new Date().toLocaleDateString(currentLang === 'en' ? 'en-US' : 'hi-IN', options);
  }

  // Language status
  repLang.textContent = currentLang === 'en' ? 'English (अंग्रेजी)' : 'Hindi (हिंदी)';

  // Build tools list
  let toolsHTML = "";
  if (sessionLogs.theme.includes('High')) {
    toolsHTML += `<li>${translations[currentLang].rep_tool_contrast_high}</li>`;
  } else {
    toolsHTML += `<li>${translations[currentLang].rep_tool_contrast}</li>`;
  }

  if (sessionLogs.font.includes('Expanded') || sessionLogs.font.includes('Reduced')) {
    toolsHTML += `<li>${translations[currentLang].rep_tool_font_scale} (${sessionLogs.font})</li>`;
  } else {
    toolsHTML += `<li>${translations[currentLang].rep_tool_font}</li>`;
  }

  if (sessionLogs.dyslexia) {
    toolsHTML += `<li>${translations[currentLang].rep_tool_dyslexia}</li>`;
  }

  if (sessionLogs.commandsUsed.length > 0) {
    toolsHTML += `<li>${currentLang === 'en' ? 'Voice Control commands' : 'आवाज नियंत्रण आदेश'} (${sessionLogs.commandsUsed.length})</li>`;
  }

  repTools.innerHTML = toolsHTML;

  // Forms Completed / Receipt Card
  if (sessionLogs.formsSubmitted.length > 0) {
    let formsHTML = "";
    sessionLogs.formsSubmitted.forEach((f, index) => {
      // Mask Aadhar for privacy
      const cleanAadhar = f.aadhar.replace(/\s+/g, '');
      const maskedAadhar = cleanAadhar.length === 12 ? 
        `XXXX XXXX ${cleanAadhar.substring(8)}` : 
        f.aadhar;

      formsHTML += `
        <div class="receipt-box">
          <div class="receipt-title">${currentLang === 'en' ? `Intake Receipt #${1024 + index}` : `आवेदन रसीद #${1024 + index}`}</div>
          <div class="receipt-row">
            <span class="receipt-lbl">${currentLang === 'en' ? 'Applicant Name:' : 'आवेदक का नाम:'}</span>
            <span class="receipt-val">${f.name}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-lbl">${currentLang === 'en' ? 'Date of Birth:' : 'जन्म तिथि:'}</span>
            <span class="receipt-val">${f.dob}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-lbl">${currentLang === 'en' ? 'Selected Scheme:' : 'चयनित योजना:'}</span>
            <span class="receipt-val">${f.scheme}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-lbl">${currentLang === 'en' ? 'Aadhar ID:' : 'आधार संख्या:'}</span>
            <span class="receipt-val">${maskedAadhar}</span>
          </div>
          <div class="receipt-row status">
            <span class="receipt-lbl">${currentLang === 'en' ? 'Submission Status:' : 'जमा करने की स्थिति:'}</span>
            <span class="receipt-val text-success">${currentLang === 'en' ? 'PROCESSED & VERIFIED' : 'संसाधित और सत्यापित'}</span>
          </div>
        </div>
      `;
    });
    repForms.innerHTML = formsHTML;
  } else {
    repForms.innerHTML = `
      <div class="receipt-empty">
        <p>${translations[currentLang].rep_form_none}</p>
      </div>
    `;
  }

  // Print button binding
  const printBtn = document.getElementById('report-print-btn');
  if (printBtn) {
    printBtn.replaceWith(printBtn.cloneNode(true)); // remove duplicate events
    document.getElementById('report-print-btn').addEventListener('click', () => {
      window.print();
    });
  }

  // Reset button binding
  const resetBtn = document.getElementById('report-reset-btn');
  if (resetBtn) {
    resetBtn.replaceWith(resetBtn.cloneNode(true));
    document.getElementById('report-reset-btn').addEventListener('click', () => {
      sessionLogs.theme = 'Normal contrast mode';
      sessionLogs.font = 'Standard text scale';
      sessionLogs.dyslexia = false;
      sessionLogs.commandsUsed = [];
      sessionLogs.servicesViewed = [];
      sessionLogs.formsSubmitted = [];

      // Reset DOM classes
      document.body.setAttribute('data-theme', 'light');
      document.body.className = "dyslexia-disabled";
      document.documentElement.className = "text-medium";
      document.getElementById('dyslexia-toggle').classList.remove('active');
      
      const fontBtns = document.querySelectorAll('.font-resizers .a11y-btn');
      fontBtns.forEach(b => b.classList.remove('active'));
      document.getElementById('font-normal').classList.add('active');

      updateAccessibilityReport();
      announceText("Session logs and visual adjustments reset", "सत्र विवरण और सेटिंग्स रीसेट किए गए");
    });
  }
}

/* ==========================================================================
   KEYBOARD CONTROLS & SHORTCUTS SYSTEM
   ========================================================================== */

function initKeyboardShortcuts() {
  // Track element under mouse cursor
  document.addEventListener('mouseover', (e) => {
    hoveredElement = e.target;
  });

  document.addEventListener('mouseout', (e) => {
    if (hoveredElement === e.target) {
      hoveredElement = null;
    }
  });

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    
    // Bypass when typing in inputs/textareas
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT' || document.activeElement.tagName === 'TEXTAREA') {
      return;
    }

    // Toggle Contrast mode - 'S'
    if (key === 's') {
      e.preventDefault();
      document.getElementById('contrast-toggle').click();
    }

    // Toggle Dyslexia Font - 'D'
    if (key === 'd') {
      e.preventDefault();
      document.getElementById('dyslexia-toggle').click();
    }

    // Toggle Voice Assistant mic - 'M'
    if (key === 'm') {
      e.preventDefault();
      document.getElementById('mic-toggle-btn').click();
    }

    // Read element under cursor / active element - 'A'
    if (key === 'a') {
      e.preventDefault();
      const targetEl = hoveredElement || document.activeElement;
      if (targetEl && targetEl !== document.body && targetEl !== document.documentElement) {
        const card = targetEl.closest('.challenge-card, .empower-card, .feature-detail-card, .step-card, .impact-card, .badge-item');
        if (card && targetEl === card) {
          readCardContent(card);
        } else {
          const text = (targetEl.innerText || targetEl.textContent || "").trim();
          if (text) {
            textToSpeech(text);
          }
        }
      }
    }
  });
}
