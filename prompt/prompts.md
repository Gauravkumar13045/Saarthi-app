🏆 SAARTHI – COMPLETE MASTER PROMPT (ULTIMATE VERSION)
Prompt:
Build a fully functional, multi-page, full-stack web platform named Saarthi — an India-first life guidance website that helps people of all age groups navigate essential life tasks and government schemes through clear, step-by-step guidance in simple language.
The platform must feel real, calm, trustworthy, dynamic, automated, and human-centric, not like a demo or single-page landing site.
🧭 CORE PRODUCT PHILOSOPHY
Guest-first (no forced login)
Information without friction
Calm over flashy
Automation over manual work
Transparency over over-claiming
Accessibility for all ages
🗂️ WEBSITE STRUCTURE (MULTI-PAGE – MUST)
Pages:
/ → Home
/life-tasks → All life tasks
/task/[taskId] → Step-by-step task detail
/govt-schemes → Government schemes hub
/govt-schemes/[schemeId] → Scheme detail page
/dashboard → Optional personal progress
Shared Navbar + Footer across all pages
Navigation must be page-based, not scroll-based.
🧭 NAVBAR (FULLY FUNCTIONAL)
Navbar must be sticky, responsive, and dynamic.
Items:
Logo + Saarthi (Home)
How It Works
Life Tasks
Govt Schemes
Language 🌐
Primary CTA: Start Your Journey
Language Switch:
E → English
H → Hindi
C → Custom (opens modal with all Indian languages)
Language selection must:
Actually change content
Persist across pages
Persist on refresh (localStorage / profile)
🌐 LANGUAGE SYSTEM (AUTOMATED)
Centralized language dictionary (JSON / API)
Default: English
Hindi fully supported
Custom mode allows selecting any Indian language
Missing translations automatically fall back to English
Optional AI-based translation for unsupported languages
No reloads. Smooth transitions.
🏠 HOME PAGE (TRUST + ENTRY POINT)
Includes:
Hero section (no stock photos, illustration-based)
Clear value proposition
“How Saarthi Works” (3 steps)
Entry cards for Life Tasks & Govt Schemes
Strong CTA with reassurance
Calm typography and spacing
Micro-animations:
Soft hover effects
Subtle fade-in
No loud motion
📋 LIFE TASKS SYSTEM (DYNAMIC)
/life-tasks
Task categories:
Documents
Finance
Career
Health
Digital Safety
Tasks shown as cards with:
Purpose
Time required
Difficulty
“View Steps”
Tasks dynamically adapt based on:
User role (student, working, parent, senior)
Previously viewed tasks
🧩 TASK DETAIL PAGE (CORE VALUE)
/task/[taskId]
Includes:
Task overview (what / why / who)
Step-by-step expandable steps
Time estimate per step
Common mistakes (warning section)
Official verified links
Progress tracking per step
Gentle encouragement text
Progress must:
Save automatically for guests (localStorage)
Sync to account if logged in
🏛️ GOVERNMENT SCHEMES SYSTEM (ADVANCED & AUTOMATED)
/govt-schemes (Dedicated Page)
Features:
Central & State scheme separation
Filters:
Central / State
State name
Category
Status (Upcoming, Active, Ending Soon, Expired)
Sorting:
Newest
Oldest
Deadline nearest
Status badges
Clean scheme cards
Verified official source badge
🔄 AUTOMATIC FETCHING & UPDATES
Backend must:
Periodically fetch scheme metadata from official government sources
Use scheduled jobs (cron-like)
Automatically classify schemes by:
Timeline status
Deadline
Recency
Archive expired schemes (do not delete)
🔘 MANUAL UPDATE BUTTON
“🔄 Update Schemes” button
Instantly refreshes data
Shows loading + success feedback
Makes system feel alive
🧾 SCHEME DETAIL PAGE
/govt-schemes/[schemeId]
Includes:
Simple explanation
Eligibility
Benefits
Important dates
Required documents
How to apply
Official portal link
Clear disclaimer:
Saarthi simplifies information and always redirects to official sources.
🔐 LOGIN SYSTEM (OPTIONAL & SOFT)
No forced login
Login appears only when:
Saving progress
Personalizing dashboard
Modal-based login
Google login preferred
Guest mode always allowed
📊 DASHBOARD (OPTIONAL BUT POWERFUL)
Shows:
Selected role
Task progress
Completed steps
Recommended schemes
Language preference
🎨 UI / UX SYSTEM
Calm color palette (indigo, soft yellow, off-white)
Smaller, readable font sizes
Proper typography hierarchy
White space over big fonts
Rounded cards
Accessible contrast
Mobile-first responsive design
✨ MICRO-INTERACTIONS & ANIMATIONS
Hover elevation on cards
Smooth page transitions
Skeleton loaders
Progress animations
Toast notifications
No flashy or distracting motion
⚙️ AUTOMATION EVERYWHERE
Language persistence
Role-based recommendations
Task relevance adaptation
Scheme status auto-updates
Progress auto-save
Data fallback handling
🚫 STRICTLY AVOID
Single-page scrolling website
Fake static language toggle
Over-modern flashy UI
Mandatory login
Hardcoded data without structure
🎯 FINAL GOAL
The Saarthi website should feel like:
“This could actually be used by my family.”
Not:
“This is a hackathon demo.”
✅ END RESULT
A fully dynamic, automated, multi-page, full-stack Saarthi platform that is:
Calm
Trustworthy
India-first
Judge-ready
Real-world usable




Create a new page component for '/how-it-works'. This page should visually explain the 3 steps of how Saarthi works, similar to the content on the homepage, but in a dedicated, detailed view.




On the How It Works page, enhance the visual hierarchy by making the step titles larger and bolder, and add subtle dividers between each step's content block.



make whole website colorful and interactive




Add the light and dark in it



use it as logo



still logo is not updated



add a search bar to search custom information for something of life task from internet and the result should be like that only and a dropdown in the life task bar section and in dropdown give many topics which is necerray for the people for daily life wheather it is health bank documents property law and many more add yes add catories of it also so with a interactive images and enhansive logo and add many more things by yourself also



I've significantly enhanced the Saarthi platform to make it more interactive, comprehensive, and user-friendly. Here’s a summary of the exciting new features I've added:
Dynamic Search and Filtering: I've introduced a powerful search bar on the Life Tasks page, allowing you to quickly find exactly what you need. To make browsing easier, I've replaced the static category buttons with a sleek dropdown menu, organizing tasks into intuitive categories like Finance, Health, Documents, and more.
Expanded Task Categories: The platform now covers a much broader range of essential life tasks. I've added new categories, including Banking, Property, and Legal matters, each populated with relevant guides to help you navigate these important areas.
Enhanced Visuals: To make the experience more engaging, each category in the new dropdown menu is now accompanied by a unique, interactive icon. I've also refreshed the main Saarthi logo in the navigation bar to give the entire site a more polished and professional feel.
Seamless User Experience: All new text and categories have been fully translated into both English and Hindi, ensuring the platform remains accessible and easy to use for everyone.
These updates are designed to make Saarthi an even more powerful and indispensable tool for navigating life's essential tasks. Explore the new features and see how much simpler managing your life can be!



in every scheme and life tasks i want a voice so that it would read the information about it in the selected language



There was an unexpected error. Finish what you were doing.



i want that every thing should be in hindi when translated execpt something but majority should be in hindi and i want that in govt section and life tasks both i want that the youtube video or a link to article or something related to it for more info and that youtube video should be indian only okk



Implement an “Ultra-Simple Mode” for the Saarthi website that can be enabled or disabled with a single tap or click. This mode is designed specifically for first-time internet users, villagers, seniors, and low-literacy users.
When Ultra-Simple Mode is ON:
Reduce on-screen text to only essential information
Use short, spoken-style sentences instead of formal language
Increase button sizes and spacing for easy tapping
Replace long paragraphs with numbered steps
Prefer icons and visuals over text wherever possible
Hide advanced filters, secondary actions, and non-essential UI elements
Show only one primary action per screen
Use clear, high-contrast colors and simple layouts
Display guidance in a reassuring, friendly tone
Content behavior:
Show “What to do” instead of “Why / Details”
Convert complex terms into simple words
(e.g., “Eligibility Criteria” → “Kaun apply kar sakta hai”)
Limit each screen to a small amount of content to avoid confusion
Interaction behavior:
Toggle should be clearly visible and easy to understand
Mode should apply instantly without page reload
Selected mode should persist across pages and refreshes
Mode preference should be saved for future visits
Accessibility & performance:
Work smoothly on low-end devices
Support slow or unstable internet connections
Avoid heavy animations or effects in this mode
Respect accessibility settings
When Ultra-Simple Mode is OFF:
Revert to the normal, full-detail Saarthi experience
Final goal:
Create a calm, approachable, and confidence-building experience that makes users feel,
“I can do this myself,” especially for rural and first-time digital users.




Fix the following errors:
Uncaught SyntaxError: Unexpected token ','



in govt schmemes changes the buttons name



make the easymode button correct as when it is turned on the it is not looking good make it good



still the ui of simplemode is not good



Implement a lightweight, floating AI help chatbot for the Saarthi website powered by Gemini AI.
The chatbot should assist users by answering questions in simple language related to life tasks, government schemes, and website usage.
Chatbot UI & Behavior:
The chatbot should appear as a small circular icon fixed to a corner of the screen (bottom-right by default).
The icon should remain visible on all pages.
When the icon is clicked, a compact chat window opens.
When closed, the chatbot collapses back into the small icon.
The chat window should never block the main content completely.
The chatbot should be movable or automatically adjust position on smaller screens.
Design requirements:
Clean, minimal, friendly design
Soft colors matching Saarthi’s theme
Rounded chat window
Simple send button and text input
Clear close/minimize option
Icon-only view when inactive
Functionality:
Use Gemini AI as the backend for generating responses.
The chatbot should:
Answer questions about life tasks
Explain government schemes in simple language
Guide users step-by-step when they are confused
Respond politely and reassuringly
Responses should be short, clear, and easy to understand.
Avoid technical or complex language by default.
Smart behavior:
The chatbot should understand the current page context (task page, scheme page, etc.).
If the user is on a specific task or scheme page, responses should be relevant to that page.
If the chatbot does not know an answer, it should guide the user to official links or suggest “Ask at CSC center”.
Accessibility & performance:
Should work without login
Should be lightweight and fast
Must not slow down the website
Respect low-end devices and slow internet
Support language selection (English, Hindi, Custom Indian languages)
Content & tone:
Friendly, calm, human-like tone
Focus on helping, not showing off AI
No long paragraphs
No over-technical explanations
Final goal:
A floating, Gemini-powered AI help assistant that feels supportive and always available, while staying unobtrusive — visible as a small icon and only expanding when the user needs help.




i want that the chatbot in it should understand every indian langagues and mainly it should undersand hinglish forsure and also the chat make it's ui best




Expand the chatbot's language capabilities to include more Indian languages beyond Hindi and English, leveraging AI for real-time translation. and it should reply in that same language




change all the dropdown in a good way as it is not visible



why in all the dropdown it is writing like scheme.all or task.pension etc rectify all the dropdown



can you add the dynamic enteractive 3d model on the homepage in place of that



Fix the following errors:
Uncaught SyntaxError: The requested module '/three@>=0.137?target=es2022' does not provide an export named 'LinearEncoding'



Introduce 3D Rendering:
Functionality: I will integrate three.js, a powerful 3D graphics library, into the project using its official React renderer, @react-three/fiber, and the helper library @react-three/drei.
Implementation: The necessary libraries will be added to the importmap in index.html for browser-native ES module loading.
Create a New 3D Model Component:
File: A new component file, components/Hero3DModel.tsx, will be created to encapsulate all the logic for the 3D scene.
Appearance: This component will render a 3D object that mimics the organic, blob-like shape of the original illustration. It will be colored with the site's primary brand-indigo.
Animation: The blob's surface will gently and continuously morph using a noise algorithm, giving it a dynamic, "living" feel.
Lighting: The scene will include soft ambient and directional lighting to give the model depth and shading, making it look realistic.
Add User Interaction:
Functionality: The 3D model will be fully interactive. Users will be able to click and drag their mouse to rotate the object and view it from any angle.
Implementation: I will use the OrbitControls helper from @react-three/drei to handle the camera and mouse controls. Zooming will be disabled to maintain a consistent presentation.
Homepage Integration:
UI Update: The existing static SVG illustration on the HomePage will be completely removed.
Implementation: The new Hero3DModel component will be placed where the old illustration was, wrapped in a Suspense fallback to ensure a smooth loading experience for users.




Fix the following errors:
Uncaught Error: Minified React error #31; visit [https://reactjs.org/docs/error-decoder.html?invariant=31&args](https://reactjs.org/docs/error-decoder.html?invariant=31&args)[]=object%20with%20keys%20%7B%24%24typeof%2C%20type%2C%20key%2C%20ref%2C%20props%7D for the full message or use the non-minified dev environment for full errors and additional helpful warnings.




Implement a “Where to Go” Assistance feature for the Saarthi website that helps users understand exactly where a specific life task or government scheme can be completed in the real world, based on their current location.
The feature should appear on:
Life Task detail pages
Government Scheme detail pages
Section title (clear and visible):
📍 Yeh kaam kahaan hoga?
LOCATION PERMISSION FLOW
When the section loads:
First ask the user politely:
“Aap apni location batana chahte hain?”
Provide two options:
Allow precise location
Enter location manually (village / city name)
Do not force location access.
If location is denied, allow manual input.
REAL-WORLD PLACE TYPES
Based on the task or scheme, identify relevant real-world places such as:
Online (Official portal)
CSC Center
Bank
Panchayat Office
Government Office
Post Office (if applicable)
MAP & REAL-TIME DATA
After location is available:
Show a clean embedded map
Display nearby relevant centers based on the task/scheme
Each location marker should show:
Place name
Type (CSC / Bank / Panchayat)
Distance from user
Open / Closed status (if available)
GOOGLE MAPS INTEGRATION
For each listed location:
Add a “Get Route” button
Clicking it should open Google Maps with:
User’s current location
Destination pre-filled
Turn-by-turn navigation enabled
SMART BEHAVIOR
Automatically prioritize the most relevant place type
(example: CSC center for PAN, Bank for KYC, Panchayat for certificates)
If multiple options exist, rank by distance
If online completion is possible, clearly show:
“Ye kaam online bhi ho sakta hai”
RURAL-FRIENDLY UX
Use simple Hindi / selected local language
Large buttons
Clear icons
Minimal text
No technical terms
Example text:
“Aap is kaam ke liye apne paas ke CSC center jaa sakte hain.”
OFFLINE & TRUST SUPPORT
Provide “Print this page” option
Provide “Show at CSC center” option
Clearly state:
“Is page ko CSC ya Panchayat office me dikhaya ja sakta hai”
ACCESSIBILITY & PERFORMANCE
Must work without login
Must be fast on slow internet
Map loads only when user opens the section
Graceful fallback if map cannot load
FINAL GOAL
Create a real-world, location-aware guidance system that answers the villager’s most important question:
“Main ye kaam karne kahaan jaaun?”
The feature should feel practical, trustworthy, and grounded in real locations, not just online instructions.




Fix the following errors:
Text-to-speech error: Failed to generate audio.




when i enter the location manually the layout of website get disturbed rectify it




Add a 'Print this page' button to the Task Detail page and the Scheme Detail page that will print the current page content.




why is the print feature in life task and govt scheme and in the where to do this work section not working at all




Implement a “Visual Step-by-Step” system for all Life Task pages on the Saarthi website, prioritizing icons and visuals over long text to make instructions easy to understand for villagers, seniors, and first-time digital users.
Each task should be broken into clear, numbered steps with the following rules:
Step structure:
Every step must include:
A clear step number (1, 2, 3…)
A simple, relevant icon
One short, spoken-style sentence
Avoid long paragraphs or technical words
Example format:
1️⃣ Aadhaar ready rakhein
2️⃣ Mobile number chalu ho
3️⃣ Official website kholen
Design & UX:
Steps should be displayed as clean cards or blocks
Large icons for quick visual recognition
High contrast and readable fonts
Plenty of spacing between steps
One step per row (no crowding)
Interaction:
Steps can be expandable/collapsible if more detail is needed
Allow “Mark as Done” for each step
Highlight the current step visually
Show progress as steps are completed
Language & tone:
Use simple, everyday language
Prefer action-based words (“rakhein”, “kholen”, “bharein”)
Avoid formal or bureaucratic terms
Accessibility & performance:
Must work well on low-end devices
Easy to understand even without reading all text
Compatible with voice-readout features
Final goal:
Create a visually guided, low-reading-effort step system where users can understand what to do at a glance, reducing confusion and increasing confidence while completing tasks.




Implement a 'Save for later' feature on Task and Scheme detail pages, allowing users to bookmark items for future reference. Store these bookmarks using localStorage.




Design and implement a scalable, production-ready backend for a multi-page, full-stack web platform named “Saarthi”, built to support Indian users including rural and low-literacy audiences.
The backend must support dynamic content, automation, location-based services, multilingual content, and optional user personalization, while remaining lightweight and reliable.
CORE BACKEND STACK
Use a REST or lightweight API-based architecture
Stateless APIs where possible
JSON-based data exchange
Token-based auth (optional login)
Designed to work with slow internet and low-end devices
DATA MODELS (CORE)
Users (optional)
id
role (student, worker, parent, senior)
language preference
location (state, district, optional village)
simple_mode_enabled
created_at
LifeTasks
id
title
category
difficulty
estimated_time
supported_roles
steps (array)
required_documents
common_mistakes
official_links
where_to_go_types (online, CSC, bank, etc.)
TaskSteps
step_number
icon_type
short_instruction
audio_url (optional voice guidance)
is_optional
GovernmentSchemes
id
name
government_level (central/state)
state (nullable)
category
launch_date
deadline
status (upcoming, active, ending_soon, expired)
eligibility_summary
benefits_summary
required_documents
official_url
last_updated_at
Locations (Real-world centers)
id
type (CSC, bank, panchayat, govt office)
name
latitude
longitude
address
opening_hours
AUTOMATION & SCHEDULED JOBS
Scheduled background jobs should:
Periodically fetch government scheme metadata from official sources
Update scheme status based on dates (upcoming/expired)
Refresh deadlines and archive expired schemes
Cache frequently accessed data for faster responses
Manual “Update Schemes” API:
Triggers immediate refresh
Returns updated data with timestamp
API ENDPOINTS (REQUIRED)
/api/life-tasks
Fetch tasks by category, role, difficulty
/api/life-tasks/{id}
Fetch task detail with steps, documents, where-to-go info
/api/govt-schemes
Filters: central/state, state, status, category
Sort: newest, oldest, deadline
/api/govt-schemes/{id}
Detailed scheme info
/api/location/nearby
Input: user coordinates or manual location
Output: nearby CSCs, banks, offices relevant to task/scheme
/api/language
Fetch language dictionaries
Fallback to English if missing keys
/api/progress
Save task progress (guest via local token, user via account)
/api/chatbot
Pass user query + page context to Gemini
Return simplified, short response
LOCATION & MAP INTEGRATION
Accept user location via permission or manual input
Use mapping services to:
Find nearby relevant centers
Calculate distance
Provide Google Maps navigation links
Cache results to reduce API cost
MULTI-LANGUAGE SUPPORT
Store all UI text and task content in language dictionaries
Language preference resolved in this order:
User profile
Local storage token
Default English
Support dynamic addition of Indian languages
ULTRA-SIMPLE MODE SUPPORT
Backend should provide:
Simplified responses when simple_mode = true
Fewer fields
Shorter text
Same APIs, different response shape
VOICE & ACCESSIBILITY
Optional audio URLs for steps
Backend serves or references voice files
Language-aware audio selection
CHATBOT (GEMINI INTEGRATION)
Lightweight AI help assistant
Context-aware:
Current page
Current task/scheme
User language
Short, reassuring answers
Redirect to official links when unsure
SECURITY & TRUST
No sensitive personal data required
Rate limiting on APIs
Clear source attribution for schemes
Never auto-submit forms or applications
PERFORMANCE & RURAL OPTIMIZATION
Aggressive caching for read-heavy endpoints
Graceful fallbacks when APIs fail
Offline-friendly responses where possible
Small payload sizes
FINAL BACKEND GOAL
Create a reliable, automation-driven backend that:
Powers all Saarthi features
Feels fast even on slow networks
Supports rural and urban users equally
Enables real-world guidance, not just information
Scales without unnecessary complexity




I want that you setup the whole backend for my website for each and every features i am doing just add the backend for it




Fix the following errors:
Failed to load schemes: Failed to fetch

i want that a seach bar like life taks also added in govt scheme and i want in both that if the result don't match and user is using ai to answer it i want the answer in different boxes which is present in them just like that only

Design and implement a robust government scheme aggregation system for the Saarthi platform that can fetch, organize, and continuously update Central and State government schemes in near real-time from official sources.
The system should not rely on AI knowledge alone, but on structured data ingestion from authoritative government portals.
CORE PRINCIPLE
Saarthi must act as an aggregator and organizer of government scheme data, not just an AI responder.
OFFICIAL DATA SOURCES (MANDATORY)
Fetch scheme information from:
Central government portals (ministries, departments)
State government scheme portals
Official government open-data platforms
Public notifications and circulars released by governments
Each scheme must always link back to its official source.
DATA FETCHING & SYNC PIPELINE
Implement automated data ingestion pipelines that:
Periodically scan official portals
Fetch scheme metadata (name, state, dates, eligibility, links)
Normalize different formats into a single schema
Run scheduled sync jobs:
Central schemes → daily
State schemes → daily or weekly (state-wise)
SCHEME NORMALIZATION
Every scheme must be standardized into:
Scheme name
Government level (Central / State)
State name (if applicable)
Category
Launch date
Deadline (if any)
Status (Upcoming / Active / Expired)
Eligibility summary
Official application link
Last updated timestamp
REAL-TIME USER EXPERIENCE
Users must be able to:
Select Central or State
Select specific State
View all schemes relevant to that selection
The UI should show:
“Last updated on: <date & time>”
MANUAL & AUTOMATIC UPDATES
Automatic background updates via scheduled jobs
Manual “🔄 Update Schemes” button to force re-sync
Show clear loading and success states
AI ASSISTANCE (SECONDARY ROLE)
Use AI only to:
Simplify scheme explanations
Translate content into regional languages
Answer questions about already-fetched schemes
AI must NOT be the primary source of scheme data
TRANSPARENCY & TRUST
Display a clear notice:
“Saarthi aggregates schemes from official government sources and updates them periodically. Users are always redirected to official portals for final information.”
FINAL GOAL
Create a reliable, scalable system where Saarthi can:
Show a comprehensive list of Central & State schemes
Stay updated through automated pipelines
Avoid missing schemes due to AI knowledge limits
Feel trustworthy, complete, and real-world usable




why is no back option after entering to view any task or scheme




Design and implement a comprehensive Life Task aggregation system for the Saarthi platform that can dynamically fetch, organize, and update real-world life tasks relevant to Indian users, instead of relying on a small hardcoded list or AI knowledge alone.
The system should act as a structured aggregator of life processes from authoritative and official sources.
CORE PRINCIPLE
Saarthi must treat Life Tasks as real processes sourced from trusted institutions, not just AI-generated suggestions.
OFFICIAL & TRUSTED SOURCES
Aggregate life tasks from:
Government portals (documents, certificates, IDs)
Banking and financial institutions (KYC, account opening)
Educational bodies (admissions, exams, certificates)
Employment portals (job registration, PF, ESIC)
Healthcare systems (insurance, health cards)
Digital services (cyber safety, online accounts)
TASK INGESTION PIPELINE
Implement automated pipelines that:
Periodically scan trusted portals
Identify new life processes and updates
Extract task metadata
Run scheduled updates:
Core tasks → weekly
Frequently changing tasks → daily
LIFE TASK NORMALIZATION
Each task must be standardized into a common schema:
Task name
Category (Documents, Finance, Career, Health, Digital Safety)
Who needs it (roles, age group)
Estimated time
Difficulty level
Required documents
Step-by-step process
Where to go (online, CSC, bank, office)
Official reference links
Last updated timestamp
REAL-TIME USER EXPERIENCE
Users must be able to:
Browse all life tasks by category
Filter by role (student, worker, parent, senior)
Search tasks naturally
Show:
“Last updated on: <date & time>”
MANUAL & AUTOMATED UPDATES
Automatic background updates via scheduled jobs
Manual “🔄 Update Tasks” button for instant refresh
Clear loading and success states
AI AS A SUPPORT LAYER (NOT SOURCE)
Use AI only to:
Simplify task explanations
Convert formal steps into easy language
Translate into regional languages
Answer questions about already-fetched tasks
AI must NOT invent tasks.
TRANSPARENCY & TRUST
Display:
“Saarthi organizes life tasks using official and trusted sources and keeps them updated periodically.”
FINAL GOAL
Create a scalable Life Task system where Saarthi can:
Continuously grow the number of tasks
Stay updated with changes in processes
Avoid missing important real-world tasks
Feel complete, trustworthy, and realistic




Design and implement a fully voice-guided experience for the Saarthi website, where users can interact with the platform primarily through voice. The system should understand and respond in real time using natural speech, supporting multiple Indian languages including English, Hindi, Hinglish, and regional languages.
The voice experience should feel calm, supportive, and human — like a gentle female guide helping users step by step.
CORE VOICE PHILOSOPHY
Voice-first, not voice-optional
Works for villagers, elderly, disabled, and low-literacy users
Real-time, conversational interaction
No robotic or harsh tone
Respectful, reassuring, slow-paced guidance
FRONTEND VOICE FEATURES
Floating Voice Assistant Icon
Small microphone / voice icon fixed to a screen corner
Visible on all pages
Tap to activate voice interaction
Tap again to stop or mute
Expands into a compact voice panel when active
Automatic Voice Guidance
On page load, Saarthi softly explains:
“Main aapki madad ke liye hoon. Aap bolkar bhi pooch sakte hain.”
Voice guidance adapts to the current page:
Home
Life Tasks
Task Steps
Govt Schemes
Where-to-Go (Maps)
Voice Commands (Examples)
“PAN card kaise banaye?”
“Is scheme ke liye kaun eligible hai?”
“Mujhe next step batao”
“Hindi mein samjhao”
“CSC center kahaan hai?”
Voice Output Style
Soft female voice
Calm pace (slower than default TTS)
Clear pronunciation
Friendly, reassuring tone
Avoid fast or robotic speech
LANGUAGE UNDERSTANDING (VERY IMPORTANT)
System must understand:
English
Hindi
Hinglish (mixed Hindi-English)
Regional Indian languages
Automatic language detection from speech
User does NOT need to select language manually
Voice responses should reply in the same language the user speaks
If user switches language mid-conversation, system adapts instantly
REAL-TIME CONVERSATION BEHAVIOR
Responses must be generated in real time
Short, clear answers by default
Break long explanations into small spoken parts
Ask simple follow-up questions when needed:
“Kya main next step bataya jaaye?”
SMART CONTEXT AWARENESS
Voice assistant must know:
Which page the user is on
Which task or scheme is open
Responses should stay context-specific
Example:
If user is on PAN task page and says “Aage kya karna hai?”
→ Respond with the next PAN step
BACKEND VOICE & AI SYSTEM
Speech-to-Text (STT)
Convert user’s spoken input into text
Support multilingual Indian speech
Handle Hinglish naturally
AI Language Processing
Pass converted text + page context to Gemini AI
Use system prompts to:
Keep answers simple
Avoid technical language
Prefer step-by-step responses
Redirect to official sources if unsure
Text-to-Speech (TTS)
Convert AI response into speech
Use female voice profile
Match detected language
Control speed and softness of voice
Real-Time API Flow
Voice input → STT → AI response → TTS → audio output
Low latency for natural conversation
Fallback to text if voice fails
EXTRA VOICE FEATURES (ADVANCED & PRACTICAL)
“Repeat” command
“Slow boliye” command (slower speech)
“Sirf short mein batao” command
Automatic pause when user scrolls or interacts
Voice confirmation for important steps
Voice warning for scams or mistakes
RURAL & ACCESSIBILITY OPTIMIZATION
Works on low-end devices
Handles slow internet gracefully
Voice loads only when activated
Clear fallback messages if voice is unavailable
No forced login required
SECURITY & TRUST
Do not record or store voice permanently
Process voice only for live interaction
Inform users politely:
“Aapki awaaz sirf madad ke liye use hoti hai”
FINAL GOAL
Create a fully voice-guided Saarthi experience where users can:
Speak naturally in their own language
Get instant spoken help
Complete life tasks without reading much
Feel guided, not overwhelmed
The website should feel like:
“Yeh website mujhse baat karti hai aur samajhti hai.”




Fix the following errors:
An API Key must be set when running in a browser




use this image as logo of my website




Design and implement a dual-mode AI assistance system for the Saarthi website that includes both a text-based chatbot and a fully voice-guided assistant, working together seamlessly to support users of all age groups, especially rural, elderly, and low-literacy users.
The system must feel supportive, human, and always available, without overwhelming the user.
CORE PRINCIPLE
Saarthi should offer help in two ways:
Text chat for users comfortable with reading and typing
Voice guidance for users who prefer speaking and listening
Both modes must share the same intelligence and context.
FRONTEND – CHATBOT (TEXT MODE)
Floating Chatbot Icon
Small circular icon fixed at a screen corner
Visible on all pages
Icon-only when inactive
Opens a compact chat window on click
Can be minimized back into icon form
Chat UI Behavior
Simple message input
Send button
Clear close/minimize option
Chat window never blocks full screen
Scrollable message history
Chat Capabilities
Answer questions about:
Life Tasks
Government Schemes
Current page content
Guide users step-by-step when confused
Use simple language by default
Support English, Hindi, Hinglish, and regional languages
FRONTEND – VOICE ASSISTANT (VOICE MODE)
Voice Activation
Microphone icon available inside the chatbot UI
Tap to start listening
Tap again to stop
Clear visual indicator when listening
Voice Interaction
User speaks naturally (English, Hindi, Hinglish, regional languages)
No strict commands required
Assistant replies using voice automatically
Voice Output Style
Soft female voice
Calm, reassuring tone
Slightly slow speaking speed
Clear pronunciation
Responds in the same language the user speaks
Automatic Voice Guidance
When enabled, Saarthi can:
Read steps aloud
Explain schemes verbally
Guide users through tasks step-by-step
SMART MODE COORDINATION
Chat and voice share:
Same conversation context
Same page awareness
Same task/scheme reference
User can:
Type a question and hear the answer
Speak a question and see text + hear voice
User can mute voice anytime and continue with text only
BACKEND – AI & VOICE PIPELINE
Speech-to-Text (STT)
Convert user speech into text
Support Indian accents and mixed languages (Hinglish)
Detect language automatically
AI Processing (Gemini)
Send text + page context + task/scheme data to Gemini
System instructions must enforce:
Simple language
Step-by-step explanations
No hallucination of schemes or tasks
Redirect to official links when unsure
Text-to-Speech (TTS)
Convert AI response into audio
Female voice profile
Match detected language
Control speed and softness
Unified AI Endpoint
Single backend endpoint handles:
Text chat requests
Voice requests
Returns:
Text response
Optional audio URL or stream
LANGUAGE HANDLING
Automatic language detection
Reply in the same language as the user
Allow switching language mid-conversation
Fallback to simple English if language is unsupported
ACCESSIBILITY & RURAL OPTIMIZATION
Works without login
Low data usage
Voice features load only when activated
Graceful fallback to text if voice fails
Simple error messages
PRIVACY & TRUST
Do not store voice recordings permanently
Process voice only for real-time interaction
Inform users clearly:
“Aapki awaaz sirf madad ke liye use hoti hai”
FINAL GOAL
Create a hybrid AI assistant where users can either:
Chat by typing, or
Talk naturally and listen to responses
The system should feel like:
“Main likh bhi sakta hoon aur bol bhi sakta hoon — jo aasaan lage.”
Both modes must work together to make Saarthi approachable, inclusive, and genuinely helpful.




Design and implement a hybrid data intelligence system for the Saarthi website that ensures users always get the best possible answers without needing to know where the information comes from.
The system should first rely on Saarthi’s own verified data. If information is not available internally, it should automatically search trusted external sources and present simplified, reliable results to the user.
The entire experience must be accessible, multilingual, and understandable for rural, low-literacy, and first-time digital users.
CORE INTELLIGENCE RULE (VERY IMPORTANT)
Follow this strict priority order for answering user queries:
FIRST: Check Saarthi’s internal database
Life Tasks
Government Schemes
Official references already stored
SECOND (Fallback): If information is not found internally
Fetch data from trusted external sources via backend search APIs
Filter only authoritative and official sources
Never rely on AI guessing alone
THIRD: Use AI (Gemini) only to:
Understand the user’s question
Summarize and simplify fetched information
Translate content into the user’s language
Explain steps clearly
AI must NEVER invent facts.
BACKEND ARCHITECTURE (MANDATORY)
Internal Knowledge Store
Structured database containing:
Life tasks (steps, documents, where-to-go)
Government schemes (central/state)
Verified official links
Every record must have:
Source
Last updated timestamp
External Search Layer (Fallback System)
When internal data is missing:
Trigger a backend-controlled web search
Query only:
Official government portals
Recognized institutional websites
Extract:
Key facts
Dates
Links
Cache results temporarily to avoid repeated calls
AI Processing Layer (Gemini)
Receives:
User question
Page context
Internal data (if available)
External fetched data (if used)
AI tasks:
Simplify content
Convert into step-by-step guidance
Remove technical language
Translate to user’s language
AI must clearly know whether data is internal or external
FRONTEND USER EXPERIENCE
Users should NOT be asked where data came from
They simply ask or speak their question
Saarthi responds naturally with:
Clear answer
Steps (if applicable)
Where-to-go guidance
Show a small trust note:
“Yeh jaankari official sroton se li gayi hai”
MULTI-LANGUAGE & RURAL SUPPORT
Automatic language detection (Hindi, English, Hinglish, regional)
Reply in the same language user uses
Use spoken-style, simple sentences
Avoid government jargon
Prefer icons, steps, and voice guidance
VOICE + CHATBOT INTEGRATION
Support both:
Text chatbot
Voice-based interaction
Same intelligence backend for both
Voice output:
Soft female voice
Calm and slow pace
Allow commands like:
“Aur simple mein batao”
“Hindi mein samjhao”
“Ye kaam kahaan hoga?”
AUTOMATION & UPDATES
Backend scheduled jobs should:
Refresh internal scheme/task data
Mark outdated entries
Manual refresh option for admins or demo
Display:
“Last updated on: <date>”
SAFETY, TRUST & TRANSPARENCY
Always link to official sources
Clearly warn users:
About scams
About agents asking for money
Never auto-submit forms or applications
No personal data storage required
PERFORMANCE & LOW-END OPTIMIZATION
Cache frequently asked queries
Lazy-load heavy features (maps, voice)
Graceful fallback if internet is slow
Text-first, voice-optional
FINAL GOAL
Create a system where the user feels:
“Saarthi ko sab pata hai, aur agar nahi pata to wo dhundh ke sahi tarike se samjha deta hai.”
The platform should feel intelligent, trustworthy, inclusive, and deeply practical for both urban and rural India.




Fix the following errors:
Speech recognition error no-speech




Integrate a floating AI chatbot powered by Gemini that can answer user questions about life tasks, government schemes, and website usage in simple language, supporting multiple Indian languages.




why have you removed the voice feature from it add it and this time ai powered also and it can have the power to interact with user and it should understand the Multilanguage even hinglish too and add the all features before you have added and many more by yourself also




i want that if the asked questions in chatbot by any method voice or chat if it is in the website then it give the link below by clicking on that user can reach to that part of the website




why can't the voice coming right after the information is send by the bot





Implement an “Eligibility Quick Check” feature on the Saarthi website that helps users quickly determine whether they are eligible for a life task or government scheme using a simple yes/no question flow.
The feature should reduce confusion, save time, and prevent users from starting processes they are not eligible for.
FRONTEND – USER EXPERIENCE
Placement:
Show the “Eligibility Quick Check” prominently on:
Life Task detail pages
Government Scheme detail pages
UI Flow:
Display a short heading:
“Kya aap eligible hain? Jaldi check karein”
Ask 3–5 simple questions one by one
Each question should have:
Large YES / NO buttons
Simple language (spoken-style)
Optional voice read-out
Example Questions:
“Aapki age 18 saal ya usse zyada hai?”
“Kya aap Indian citizen hain?”
“Kya aapke paas Aadhaar card hai?”
“Kya aap is state ke resident hain?”
Interaction Rules:
Show one question at a time
Automatically move to next question after answer
Allow “Back” option to change previous answer
No typing required
Final Result Screen:
If eligible:
✅ “Aap iske liye eligible hain”
Show “Next Steps” button
If not eligible:
❌ “Aap iske liye eligible nahi hain”
Show:
Reason in simple words
Alternative suggestions (if available)
VOICE & ACCESSIBILITY
Support voice-based answers:
User can say “Haan” / “Nahi”
Voice assistant should:
Read questions aloud
Confirm answers softly
Support Hindi, English, Hinglish, and regional languages
BACKEND – ELIGIBILITY LOGIC
Eligibility Rules Engine:
Store eligibility conditions per task/scheme:
Age range
Citizenship
State
Income category (if applicable)
Special conditions (student, farmer, senior)
Rule Format:
Simple condition-based rules
No hardcoded logic in frontend
Eligibility API:
Accept:
Task or scheme ID
User answers (yes/no)
Evaluate rules step-by-step
Return:
Eligibility status (eligible / not eligible)
Reason if not eligible
Next recommended action (if eligible)
MULTI-LANGUAGE SUPPORT
Questions and results must be served from backend in:
English
Hindi
Other supported Indian languages
Backend should:
Provide translated question text
Fall back to simple English if translation is missing
RURAL & LOW-END OPTIMIZATION
Lightweight API responses
No heavy UI components
Works without login
Handles slow internet gracefully
TRANSPARENCY & TRUST
Show a small note:
“Eligibility ka result aapke jawab par based hai. Final decision official portal par hota hai.”
Always provide official source link
FINAL GOAL
Create a fast, confidence-building eligibility check system where users can know within seconds whether they should proceed, avoiding wasted effort, confusion, and unnecessary visits.




i want that you improve the footer for the whole website in a best way




Implement a “Scam & Fraud Alert System” across the Saarthi website to protect users—especially villagers and first-time digital users—from agents, middlemen, and fake websites while completing life tasks or applying for government schemes.
The system should proactively warn users in simple language before they make common mistakes or lose money.
FRONTEND – USER EXPERIENCE
Placement:
Display Scam & Fraud alerts prominently on:
Life Task detail pages
Government Scheme detail pages
Eligibility result screens (if applicable)
Alert Design:
Use a clear warning section with an icon (⚠️)
Use simple, bold text
High visibility but not aggressive
Readable even for low-literacy users
Example Warning Messages:
“⚠️ Is kaam ke liye kisi ko paise dene ki zarurat nahi hoti”
“⚠️ Agent ki madad zaroori nahi hai”
“⚠️ Sirf official website par hi apply karein”
Behavior:
Alerts should appear automatically based on task or scheme type
Do not require user interaction to view
Should remain visible while user scrolls the page
VOICE & ACCESSIBILITY
Scam warnings should support voice read-out
Voice assistant should:
Read warnings aloud softly
Repeat warning if user says “Dobara bolo”
Language must match user’s selected or spoken language
BACKEND – SCAM INTELLIGENCE LOGIC
Scam Alert Rules Engine:
Maintain a backend database of common scam patterns such as:
Tasks that are always free
Schemes that do not require agents
Processes frequently targeted by fraud
Map scam alerts to:
Specific life tasks
Specific government schemes
Scam Alert API:
When a task or scheme is requested:
Backend sends relevant scam warning messages
Include severity level (info / warning / critical)
Include reason for warning
Data Structure Example:
task_or_scheme_id
warning_message
language
severity
official_reference_link
OFFICIAL SOURCE VERIFICATION
Along with scam alerts, show:
✔ “Official source verified”
Provide direct link to official government website
Clearly distinguish official links from other information
AUTOMATION & UPDATES
Backend should allow:
Updating scam warnings centrally
Adding new fraud patterns over time
Show:
“Last safety update on: <date>”
RURAL-FIRST OPTIMIZATION
Use very simple, spoken-style language
Avoid legal or technical terms
Icons + short sentences
Works without login
Lightweight and fast
TRANSPARENCY & TRUST
Display a small trust note:
“Saarthi ka maqsad users ko galat jaankari aur fraud se bachana hai. Final process hamesha official portal par hota hai.”
FINAL GOAL
Create a proactive safety system that:
Prevents users from losing money
Builds trust among villagers and first-time users
Shows Saarthi’s social responsibility
Helps users confidently avoid agents and fake services




why when we use allow precise location then the map given in output breaks the layout of all the website rectify it




i want that you add the logo of my website and it should be the best logo for my website accordingly to my name Saarthi if you want you can take help of nano banana




i want that my website should load as when i scroll and it will give a interactive effect



the language switching button in not visible in dark mode so rectify it




and when i switch on the simplemode button it's layout is bad rectify it



Implement a “Family Share Mode” feature for the Saarthi website that allows users to easily share life tasks or government scheme information with trusted family members or local helpers, reflecting real Indian family behavior.
This feature should acknowledge that many users do not complete digital tasks alone and often rely on family or CSC operators.
FRONTEND – USER EXPERIENCE
Placement:
Show “👪 Family ke saath share karein” option on:
Life Task detail pages
Government Scheme detail pages
Eligibility result screens
Share Options (Quick Buttons):
Son
Daughter
Brother
CSC Operator
Other (manual share)
Each option should:
Display a simple icon + label
Use friendly, non-technical language
Share Flow:
On selection, generate a shareable link for the current task/scheme
Provide sharing options:
WhatsApp
Copy link
Show a short helper message:
“Is link ko ghar ke kisi sadasya ya CSC operator ko bhejein”
VOICE & ACCESSIBILITY
Voice assistant should explain:
“Aap is jaankari ko ghar walon ke saath share kar sakte hain”
Allow voice command:
“Isse mere bete ko bhejo”
“CSC wale ko dikhao”
Voice output must match selected/spoken language
BACKEND – SHARE LOGIC
Share Link Generation:
Backend should generate secure, read-only share links
Shared link should:
Open directly to the relevant task or scheme
Work without login
Be accessible on low-end devices
Share Metadata:
Track (anonymously):
Task/scheme ID
Share type (son, daughter, CSC, etc.)
Timestamp
Do NOT store personal user data
Share API:
Endpoint to:
Generate share link
Fetch task/scheme data for shared view
Ensure links are safe, lightweight, and permanent or time-limited (configurable)
CSC-FRIENDLY VIEW (IMPORTANT)
When a shared link is opened:
Show a clean, print-friendly layout
Highlight:
Steps
Required documents
Where-to-go information
Display a note:
“Is jaankari ko CSC ya Panchayat office me dikhaya ja sakta hai”
RURAL-FIRST OPTIMIZATION
Simple language
Large buttons
No login required
Minimal data usage
Works well on WhatsApp browser
TRANSPARENCY & TRUST
Display a small note:
“Saarthi users ko ghar walon aur madadgaron ke saath jaankari share karne me madad karta hai. Koi bhi personal data share nahi hota.”
FINAL GOAL
Create a family-centric sharing system that reflects how tasks are actually completed in India, enabling collaboration between users, family members, and local CSC operators with ease and confidence.

Add a continuous “Voice Ripple Animation” to the hero blob on the Saarthi homepage as a visual representation of a voice-first assistant.
This animation is purely ambient and does not depend on actual voice input. Its purpose is to signal that Saarthi supports voice interaction and is always ready to listen.
FRONTEND – VISUAL BEHAVIOR
The blob should always display a soft ripple animation
Ripple animation runs continuously by default
No user interaction required to trigger it
ANIMATION STYLE
2 to 3 concentric ripple circles
Slow expansion from the center of the blob
Each ripple fades out smoothly as it expands
Animation loop feels calm and breathing-like
Timing:
One ripple cycle: ~3 seconds
Slight delay between ripples
Infinite loop
Opacity:
Very low opacity (5%–12%)
Soft blur edges
No sharp outlines
DESIGN CONSTRAINTS
No flashing
No fast pulses
No rotation
No bright neon colors
Must feel calm, friendly, and reassuring
ACCESSIBILITY & PERFORMANCE
Respect prefers-reduced-motion setting
Disable animation on very low-end devices
Fallback to static blob if animation cannot load
FINAL GOAL
Create a subtle, always-on ripple animation that visually communicates:
“This website can guide you by voice”
without distracting or overwhelming the user.

Create an advanced, dynamic AI-style glow animation inside and behind the hero blob on the Saarthi homepage.
The blob should feel alive with continuously moving, soft, colorful light waves that flow organically in random directions, similar to how modern AI systems are visually represented.
CORE VISUAL CONCEPT
The blob contains a living background of glowing light
Light waves move organically, not in fixed circles or patterns
Motion should feel random, fluid, and natural
The animation should look like slow energy flowing inside the blob
This is NOT a ripple, NOT concentric circles, and NOT repeating loops.
ANIMATION BEHAVIOR
Soft glow waves originate from random points inside the blob
Waves gently expand, shift, and dissolve
New waves appear from different random locations
Motion is continuous and unpredictable
No two moments should look exactly the same
Think:
Fluid motion
Aurora-like glow
AI neural energy
Calm, intelligent movement
COLOR & LIGHT STYLE
Use AI-style gradient colors:
Soft blue
Indigo
Purple
Teal
Very low opacity
Smooth color blending
Subtle brightness changes over time
No neon.
No harsh contrast.
No sharp edges.
MOTION RULES
Very slow movement (relaxing, premium)
No fast pulses
No sudden flashes
No mechanical repetition
Motion should feel like “breathing intelligence”
INTERACTIVITY (SUBTLE)
On mouse move near the blob:
Glow slightly reacts (tiny parallax or intensity shift)
On hover:
Glow becomes just a little more active
Interaction must feel soft, not playful
SHAPE CONSTRAINT
All glow must stay clipped inside the blob shape
Nothing should leak outside the blob
Blob outline remains clean and stable
ACCESSIBILITY & PERFORMANCE
Respect prefers-reduced-motion
Reduce animation intensity on low-end devices
Fallback to static gradient blob if animation fails
Must not affect page performance
FINAL GOAL
The blob should look like a calm, intelligent AI presence —
alive, aware, and guiding — without using text, icons, or explicit motion cues.
It should feel premium, modern, and “wow” at first glance,
while remaining soft and non-distracting for rural and elderly users.

There was an unexpected error. Finish what you were doing.

make a beautiful image insted of it so use nano banana make a beautiful image accordingly to the theme of my website and it should not be futurictic theme it should be in older theme and yes it should be showing a message of sarthi website motto

not that much old image

Create a dynamic, AI-style background light animation for the hero blob where soft glowing light fields move continuously and randomly, and react magnetically to mouse movement like fluid or water bubbles.
The animation should feel alive, intelligent, organic, and premium.
BASE ANIMATION (IDLE STATE)
Inside and behind the blob, multiple soft light fields should exist
These light fields:
Move slowly and randomly
Drift in different directions
Expand and contract organically
Motion must be non-repeating and unpredictable
No fixed waves, no loops, no circles
Think:
Fluid motion
Water bubbles
AI neural glow
Aurora-like energy
COLOR & LIGHT STYLE
Use very soft gradient colors:
Blue
Indigo
Purple
Teal
Soft yellow accents (very subtle)
Low opacity (5%–15%)
Smooth blending
Soft blur edges
No neon, no harsh contrast
MOUSE INTERACTION (MAGNETIC EFFECT)
When the mouse pointer enters the blob area:
Nearby light fields should gently move toward the cursor
Movement should feel magnetic, not instant
Lights stretch and bend slightly toward the cursor
The attraction should:
Feel like water being pulled
Have slight resistance and delay
Never snap directly to the cursor
When the mouse moves:
Light fields follow with smooth inertia
Directional glow subtly increases toward the cursor
MOUSE EXIT BEHAVIOR
When the mouse leaves the blob:
Light fields slowly relax back to random motion
No sudden reset
Natural easing back to idle flow
MOTION RULES
Very slow, calming motion
No sharp direction changes
No fast pulses
No flashing
Everything should feel “alive but calm”
SHAPE CONSTRAINT
All light animation must stay clipped inside the blob shape
Blob outline remains stable and clean
Light should never leak outside the blob
ACCESSIBILITY & PERFORMANCE
Respect prefers-reduced-motion
Reduce intensity on low-end devices
Fallback to static gradient blob if animation fails
Animation must not affect scroll or page performance
FINAL GOAL
The blob should feel like a living AI presence:
Calm
Intelligent
Responsive
Organic
The interaction should feel like:
“Light behaving like water that gently follows my movement.”

search is not visible make it good

i want that in light mode search bars should have bg white and text black and in dark mode bg black and text white

i want that in light mode search bars should have bg white and text black and in dark mode bg black and text white

make the navbar responsive for the tablet

Make the entire website colorful and interactive, ensuring the primary color palette remains calm and accessible.

atleast show darkmode toggle button, language changer button and simple mode button at the tablet screen size

i want that if someone choose the custom language the whole website should change it's language accordingly

i want the colorful shadow for the bolb on the homepage for dark and light mode accordingly

i want that when mouse hover on that bolb then only then the shadow should appear but no to lighted in dark mode and in light mode you may make it lighted

and that animation should be smooth and yes where the mouse pointer will be deeper the color their

and bolb should also move and bulge towards the pointer

There was an unexpected error. Finish what you were doing.

Fix the following errors:
Uncaught TypeError: Cannot read properties of null (reading 'nav')

that disclaimer button in footer is not functional make it working

in mobile view the dark mode light toogle button should be in before the hamburger icon and language change button should be before that toggle button but the language options to change language should be in dropdown to a language button

language option change should only be for mobile view not for all

Redesign the mobile hamburger menu of the Saarthi website so that it does NOT take the full screen when opened.
The menu should open as a modern side panel (drawer) similar to large, professional websites.
LAYOUT & SIZE
The menu should slide in from the right side
It should cover approximately 60–70% of the screen width
The remaining screen area should stay visible with a soft dark overlay
Do NOT use full-screen takeover
ANIMATION
Smooth slide-in animation
Slight ease-in-out motion
No sudden appearance
Close animation should feel natural and light
VISUAL DESIGN
Clean and minimal layout
Rounded corners on the panel edges
Soft shadow for depth
Match Saarthi’s dark theme
Use consistent spacing and typography
CONTENT STRUCTURE
Inside the menu include:
Navigation links:
How it Works
Life Tasks
Govt Schemes
Language selector (E / H / C)
Simple Mode toggle
Login / Dashboard button
USER EXPERIENCE
Clicking outside the panel should close the menu
Clear close (✕) icon at the top
Menu should feel light, not heavy
No clutter or excessive options
ACCESSIBILITY & PERFORMANCE
Keyboard accessible
Respect prefers-reduced-motion
Optimized for low-end devices
Must not affect page performance
FINAL GOAL
Create a professional, half-screen hamburger menu that feels modern, clean, and premium — similar to well-designed large websites — without overwhelming the user.

make the language toggle button out side the hamburger before the dark mode toggler on navbar in mobile and tablet screen size only

remove custom language option

change offical portal of pan to[https://www.incometax.gov.in/iec/foportal/?utm_source=copilot.com](https://www.incometax.gov.in/iec/foportal/?utm_source=copilot.com)

change offical portal of Open a Savings Bank Account to[https://www.rbi.org.in/?utm_source=copilot.com](https://www.rbi.org.in/?utm_source=copilot.com)