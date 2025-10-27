# Prompt for Building the Linguviq Website

Copy and paste this prompt to Claude when you're ready to build the website:

---

## THE PROMPT

I need you to build a modern, professional waitlist/landing page website for **Linguviq** - a language learning mobile application.

**Context**: I have a comprehensive reference document (LINGUVIQ_WEBSITE_REFERENCE.md) that contains ALL the information you need including:
- Complete product description and features
- Detailed pricing plans (Free, Plus, Premium) with multiple billing options
- Marketing copy, testimonials, and value propositions
- Brand guidelines (colors, typography, spacing)
- FAQ section
- Social proof and statistics
- Call-to-actions
- User journey and conversion flow

**Your Task**: Build a complete, responsive, single-page landing website using HTML, CSS, and vanilla JavaScript.

---

## Requirements

### 1. Technology Stack
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- Mobile-first responsive design
- Modern CSS features (CSS Grid, Flexbox, CSS Variables)
- Smooth scroll behavior and animations
- No external dependencies (except optional: Google Fonts for Inter font)

### 2. Website Structure

The single-page website should include these sections (in order):

**A. Header/Navigation (Sticky)**
- Logo/Brand name "Linguviq"
- Navigation links: Features, Pricing, FAQ, About
- Primary CTA button: "Join Waitlist"

**B. Hero Section**
- Compelling headline (choose from options in reference doc)
- Subheadline
- Primary CTA: "Join Waitlist - Get 3 Free Sessions"
- Hero image/illustration placeholder
- Trust indicators: "10,000+ Active Learners", "150+ Countries", "4.8/5 Rating"

**C. Features Section**
- Title: "Why Linguviq?"
- Display 6-8 key features with icons, titles, and descriptions
- Use grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Features to include:
  1. Intelligent Matching System
  2. One-on-One Video/Audio Conversations
  3. Discussion Rooms
  4. Friends & Community
  5. AI-Generated Avatars
  6. Session History & Analytics (Premium)
  7. Icebreaker Questions
  8. Security & Privacy

**D. How It Works Section**
- Title: "Start Speaking in 4 Easy Steps"
- 4 steps with numbers, icons, titles, and descriptions
- Horizontal layout on desktop, vertical on mobile

**E. Pricing Section**
- Title: "Choose Your Plan"
- Billing period toggle: Session, Daily, Weekly, Monthly
- 3 pricing cards: Free, Plus (Most Popular badge), Premium (Best Value badge)
- Each card includes:
  - Plan name and tagline
  - Price (changes based on billing period selected)
  - Feature list with checkmarks
  - CTA button
- Feature comparison table below the cards

**F. Testimonials Section**
- Title: "What Our Learners Say"
- 3 testimonial cards with quotes, names, and learning details
- Carousel/slider (optional) for more testimonials

**G. Statistics/Social Proof Section**
- Display key metrics in a grid:
  - "10,000+ Active Learners"
  - "150+ Countries"
  - "100,000+ Conversations"
  - "50+ Languages"
  - "4.8/5 Rating"
  - "24/7 Support"

**H. FAQ Section**
- Title: "Frequently Asked Questions"
- Accordion-style FAQ (click to expand/collapse)
- Include 8-10 most important questions from the reference doc
- Categories: General, Pricing, Features, Safety

**I. Final CTA Section**
- Strong headline: "Ready to Start Speaking?"
- Subheadline
- Primary CTA: "Join Waitlist"
- Secondary text about free trial or free plan

**J. Footer**
- Links organized in columns:
  - Product: Features, Pricing, How It Works
  - Company: About, Contact
  - Support: FAQ, Help Center
  - Legal: Privacy Policy, Terms of Service
- Social media icon placeholders
- Copyright notice
- Email: support@linguviq.com

### 3. Waitlist Form (Modal/Popup)

When user clicks "Join Waitlist" button:
- Show modal/popup with form
- Form fields:
  - Email (required)
  - Name (optional)
  - Languages interested in (dropdown, optional)
  - Country (optional)
  - Referral code (optional)
- Submit button
- On submit: Show success message ("You're on the waitlist!")
- Close button

### 4. Design Requirements

**Colors** (from brand guidelines):
- Primary Blue: #4285F4
- Premium Orange: #FF9500
- Secondary Purple: #7C3AED
- Background: #FFFFFF
- Surface: #F9FAFB
- Border: #E5E5E5
- Text Primary: #1F2937
- Text Secondary: #6B7280
- Success: #34D399
- Background Gradient: Linear gradient from #667EEA to #764BA2

**Typography**:
- Font: Inter (from Google Fonts), fallback to system fonts
- Hero headline: 48-64px (bold)
- H2: 28-32px (bold)
- H3: 24px (semi-bold)
- Body: 16px (regular)

**Spacing**:
- Use consistent spacing scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- Section padding: 64px vertical on desktop, 32px on mobile
- Container max-width: 1200px

**Buttons**:
- Primary button: Solid #4285F4, white text, rounded 12px, padding 16px 32px
- Hover: Slightly darker, subtle lift effect
- Secondary button: White background, colored border

**Cards**:
- White background
- Subtle shadow: 0 2px 8px rgba(0,0,0,0.1)
- Rounded corners: 16px
- Padding: 24px

### 5. Interactions & Animations

- Smooth scroll to sections when clicking nav links
- Fade-in animations on scroll (Intersection Observer API)
- Hover effects on buttons and cards
- Accordion toggle for FAQ
- Modal open/close animations
- Pricing period toggle with smooth transition
- Sticky header with shadow on scroll

### 6. Responsiveness

- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full layout, 3 columns)
- Touch-friendly button sizes on mobile (min 44px height)

### 7. Performance & Best Practices

- Semantic HTML5 elements
- Accessible (ARIA labels, keyboard navigation)
- Optimized images (use placeholders if no real images)
- Fast loading (minimal CSS/JS)
- SEO-friendly (meta tags, structured data)
- Form validation

---

## Content to Use

**All content is provided in the LINGUVIQ_WEBSITE_REFERENCE.md file including:**
- All headlines, subheadlines, and body copy
- Complete feature descriptions
- Exact pricing for all plans and billing periods
- Testimonials (use the examples or create similar ones)
- FAQ questions and answers
- All statistics and numbers

**Important**: Use the exact pricing numbers, feature lists, and plan details from the reference document.

---

## Deliverables

Please provide:

1. **index.html** - Complete HTML structure
2. **styles.css** - All CSS styling
3. **script.js** - JavaScript for interactivity
4. **README.md** - Brief instructions for:
   - How to run the website locally
   - Folder structure
   - Future improvements

---

## Additional Notes

- Use placeholder images/icons where needed (you can use emoji or Unicode symbols)
- Add comments in code for clarity
- Ensure cross-browser compatibility (modern browsers)
- Make it visually appealing and professional
- Focus on conversion optimization (clear CTAs, compelling copy)
- The website should work perfectly on mobile devices

---

## Starting Point

I have a basic website structure already. You can either:
1. Build from scratch using the reference doc
2. Enhance my existing website with all the content and features above

Let me know if you need any clarification before you start building!

---

**Reference Document**: Attached (LINGUVIQ_WEBSITE_REFERENCE.md)
