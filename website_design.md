
<high_level_design>
# High-Level Design Specification: The Trading Institute Website

## 1. Brand & Art Direction Overview

The Trading Institute website employs a modern, vibrant, and approachable design language targeting financial education and empowerment. The visual identity combines professional credibility with accessible, friendly aesthetics.

**Visual Characteristics:**
- **Modern Geometric Style**: Clean lines, rounded corners, and structured layouts
- **Illustrative Icon System**: Colorful, hand-drawn-style icons with yellow accents provide warmth and approachability
- **Professional Photography**: Real classroom photos overlaid with semi-transparent dark overlays for text legibility
- **Energetic Color Palette**: Bright cyan/turquoise as primary brand color, paired with purple/lavender accents, orange/yellow CTAs, and neutral grays
- **Typography Hierarchy**: Bold, large headlines in display fonts with clear sans-serif body copy
- **White Space Strategy**: Generous padding and spacing creating breathing room between sections
- **Pattern Backgrounds**: Subtle dotted patterns on white backgrounds add texture without distraction
- **Zig-zag Dividers**: Decorative wave/zigzag SVG dividers separate major sections

**Mood & Tone:**
- Empowering and aspirational
- Professional yet approachable
- Educational and trustworthy
- Modern and tech-forward
- Community-oriented

## 2. Color Palette (Light Theme)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| **Primary Brand** | #00B4CC / rgb(0, 180, 204) | Primary CTA backgrounds, headings, icons, accents | Vibrant cyan/turquoise - main brand identifier |
| **Primary Hover** | #009BB3 / rgb(0, 155, 179) | Button hover states | Darker shade of primary |
| **Secondary Accent** | #C17FE8 / rgb(193, 127, 232) | Section headings, decorative elements | Soft purple/lavender |
| **CTA Orange** | #FF9800 / rgb(255, 152, 0) | Secondary buttons, "Know More" CTAs | Bright orange for attention |
| **CTA Orange Hover** | #E68900 / rgb(230, 137, 0) | Button hover states | Darker orange |
| **Text Primary** | #333333 / rgb(51, 51, 51) | Body text, paragraphs | Dark gray for readability |
| **Text Secondary** | #666666 / rgb(102, 102, 102) | Subheadings, supporting text | Medium gray |
| **Text Light** | #999999 / rgb(153, 153, 153) | Captions, meta information | Light gray |
| **White** | #FFFFFF / rgb(255, 255, 255) | Backgrounds, cards, text on dark | Pure white |
| **Background Dots** | #F5F5F5 / rgb(245, 245, 245) | Page background with pattern | Off-white with subtle texture |
| **Dark Overlay** | rgba(0, 0, 0, 0.6) | Hero image overlays | Semi-transparent black |
| **Success Green** | #4CAF50 / rgb(76, 175, 80) | Success states, "After Joining" | Standard success green |
| **Error Red** | #F44336 / rgb(244, 67, 54) | Error states, "Before Joining" | Standard error red |
| **Border Gray** | #E0E0E0 / rgb(224, 224, 224) | Card borders, dividers | Light gray borders |
| **Icon Yellow** | #FFD700 / rgb(255, 215, 0) | Icon accents, highlights | Warm yellow |

## 3. Typography Scale

**Font Families:**
- **Headings**: "Montserrat", "Poppins", sans-serif (bold, 700-900 weight)
- **Body Text**: "Roboto", "Open Sans", sans-serif (regular, 400-600 weight)
- **Numbers/Stats**: "Oswald", "Montserrat", sans-serif (bold, 700)

**Type Scale:**

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| **Hero Headline** | 48px-60px | 800-900 | 1.2 | -0.5px | #00B4CC |
| **Section Heading** | 36px-42px | 700 | 1.3 | 0 | #C17FE8 |
| **Subsection Heading** | 28px-32px | 700 | 1.4 | 0 | #333333 |
| **Card Title** | 20px-24px | 600 | 1.4 | 0 | #333333 |
| **Body Large** | 18px | 400 | 1.7 | 0.3px | #333333 |
| **Body Regular** | 16px | 400 | 1.6 | 0.2px | #333333 |
| **Body Small** | 14px | 400 | 1.5 | 0.2px | #666666 |
| **Caption** | 12px | 400 | 1.4 | 0.2px | #999999 |
| **Button Text** | 14px-16px | 600 | 1.2 | 0.5px | #FFFFFF |
| **Number/Stat** | 48px-60px | 700 | 1 | -1px | #00B4CC |

**Text Treatments:**
- Headings often use text-transform: uppercase for emphasis
- Animated headline has double underline SVG decoration
- Numbers/stats have "+" suffix styling
- Links use underline on hover with color transition

## 4. Spacing & Layout Grid

**Container Widths:**
- **Desktop Max Width**: 1200px-1400px
- **Content Max Width**: 1140px
- **Tablet**: 90% width with 5% padding
- **Mobile**: 95% width with 2.5% padding

**Spacing System (Multiples of 8px):**

| Token | Value | Usage |
|-------|-------|-------|
| `spacing-xs` | 8px | Tight internal spacing |
| `spacing-sm` | 16px | Small gaps, form fields |
| `spacing-md` | 24px | Medium spacing between elements |
| `spacing-lg` | 32px | Large spacing, card padding |
| `spacing-xl` | 48px | Extra large gaps between sections |
| `spacing-2xl` | 64px | Section padding vertical |
| `spacing-3xl` | 96px | Major section separation |

**Grid System:**
- **12-column flexible grid** using CSS Grid/Flexbox
- **Column Gap**: 24px (desktop), 16px (tablet), 12px (mobile)
- **Row Gap**: 32px (desktop), 24px (tablet/mobile)

**Breakpoints:**
- **Desktop**: ≥1200px
- **Tablet**: 768px - 1199px
- **Mobile**: <768px

**Section Padding:**
- **Desktop**: 80px top, 80px bottom
- **Tablet**: 60px top, 60px bottom
- **Mobile**: 40px top, 40px bottom

## 5. Visual Effects & Treatments

**Shadows:**
```css
/* Card Shadow */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

/* Card Hover Shadow */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

/* Button Shadow */
box-shadow: 0 2px 8px rgba(0, 180, 204, 0.3);

/* Modal/Elevated Shadow */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
```

**Border Radius:**
- **Small Elements** (buttons, inputs): 4px-6px
- **Cards**: 8px-12px
- **Icons/Circular**: 50% or 999px
- **Image Containers**: 8px

**Gradients:**
```css
/* Primary Gradient (subtle) */
background: linear-gradient(135deg, #00B4CC 0%, #00D4E8 100%);

/* Overlay Gradient */
background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);

/* Section Divider Gradient */
background: linear-gradient(90deg, transparent 0%, #00B4CC 50%, transparent 100%);
```

**Transitions:**
```css
/* Default Transition */
transition: all 0.3s ease-in-out;

/* Button Hover */
transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

/* Color Transition */
transition: color 0.25s ease;

/* Scale Transform */
transition: transform 0.3s ease;
transform: scale(1.05); /* on hover */
```

**Animations:**
- **Fade In**: opacity 0 → 1, translateY(20px) → 0
- **Slide In Left**: translateX(-50px) → 0, opacity 0 → 1
- **Slide In Right**: translateX(50px) → 0, opacity 0 → 1
- **Pulse**: scale(1) → scale(1.05) → scale(1)
- **Underline Grow**: width 0% → 100%

**Hover Effects:**
- **Cards**: Lift with increased shadow (translateY(-4px))
- **Buttons**: Background darkens, slight scale increase
- **Images**: Slight zoom (scale 1.05) with overflow hidden
- **Links**: Underline slides in from left

**Background Patterns:**
```css
/* Dotted Pattern */
background-image: radial-gradient(circle, #E0E0E0 1px, transparent 1px);
background-size: 20px 20px;
```

**Filters:**
- Hero image overlay: `filter: brightness(0.7);`
- Icon hover: `filter: brightness(1.1);`

## 6. Component Styles

### Navigation Header
```
Structure: Fixed top, white background, shadow on scroll
Height: 80px (desktop), 60px (mobile)
Logo: Left aligned, max-width 180px
Menu: Center aligned, horizontal items with 32px gap
CTA Button: Right aligned, black background (#000), white text
Mobile: Hamburger menu, slide-in drawer from right

Styling:
- background: #FFFFFF
- box-shadow: 0 2px 8px rgba(0,0,0,0.06) (on scroll)
- position: sticky, top: 0, z-index: 999
- Navigation links: 16px, #333333, hover: #00B4CC
- Active link: underline 2px solid #00B4CC
```

### Hero Section
```
Layout: Full-width, two-column (50/50 split)
Background: White with dotted pattern
Left Column: Text content with large headline, subheadline, logo, CTA button
Right Column: Enquiry form with white background and subtle shadow

Headline: 
- Size: 48px-60px
- Color: #00B4CC
- Weight: 800
- Animated underline effect

Form Styling:
- Background: #FFFFFF
- Border-radius: 12px
- Padding: 40px
- Shadow: 0 4px 16px rgba(0,0,0,0.1)
- Input fields: border 1px solid #E0E0E0, border-radius 6px
```

### "Before/After Joining" Stats
```
Layout: Horizontal cards, side-by-side
Left Card: Red theme (#F44336) with downward arrow
Right Card: Green theme (#4CAF50) with upward arrow

Typography:
- Label: 18px, bold, uppercase
- Chart illustration: SVG line chart

Background: White
Divider: Rupee symbol (₹) icon, cyan color, 40px size
```

### Full-Width Image Hero
```
Layout: Full viewport width, background image with dark overlay
Overlay: rgba(0, 0, 0, 0.6)
Text: Center aligned, white color (#FFFFFF)

Headline: 
- Size: 56px
- Weight: 900
- Text-transform: uppercase
- Letter-spacing: 1px
- Text-shadow: 2px 2px 8px rgba(0,0,0,0.3)

CTA Button:
- Background: #00B4CC
- Padding: 16px 40px
- Border-radius: 8px
- Hover: darken and lift

Navigation Arrows: 
- Position: absolute, left/right 40px
- Color: white with 50% opacity
- Hover: 100% opacity
```

### Welcome Section
```
Layout: Two-column (40/60 split)
Left Column: Text content, justified alignment
Right Column: Image of founder with decorative emoji stickers

Background: White with dotted pattern

Typography:
- Section heading: 36px, #C17FE8, center aligned
- Subheading: 28px, #C17FE8
- Body: 16px, #333333, line-height 1.7
- Stats: Large numbers (60px) with "+" suffix, cyan color

Icon Tabs:
- Horizontal layout with icons and labels
- Active tab: cyan color with bottom border
- Inactive: gray with hover effect
```

### Stats Cards
```
Layout: Three-column grid
Each card displays: Large number, label, icon

Card Styling:
- Background: transparent (no background)
- Text centered
- Number: 60px, #00B4CC, bold
- "+" symbol: Same styling as number
- Label: 16px, #333333, uppercase, letter-spacing 1px
- Icon: decorative, positioned above or integrated

Button:
- Background: #00B4CC
- Full width: 100%
- Padding: 16px
- Border-radius: 8px
- Text: white, 16px, bold, uppercase
```

### News Feature Logos
```
Layout: Horizontal auto-scroll or static grid
Logo containers: Equal width, centered content
Grayscale filter with color on hover

Styling:
- Max-height: 60px
- Filter: grayscale(100%)
- Hover: grayscale(0%), transition 0.3s
- Spacing: 40px gap between logos
```

### Mission/Vision/Goal Cards
```
Layout: Three-column grid, equal width
Icon: Top, circular background (white), colored icon
Heading: Below icon, cyan or purple color
Body: Small text, justified

Card Styling:
- Background: transparent or white
- Padding: 32px
- Text-align: center
- Icon size: 80px
- Icon background: white circle with shadow
- Hover: subtle lift effect
```

### Course Cards
```
Layout: Horizontal row with zigzag divider above
Background: Cyan (#00B4CC)
Each card: White circular icon, heading, button

Card Styling:
- Background: transparent (cyan section background)
- Icon: 100px diameter, white circle
- Icon image: centered, 60px
- Heading: 24px, white, bold, centered
- Button: Orange (#FF9800), 14px, padding 12px 32px
- Button hover: darken, slight scale
```

### Why Choose Us Icons
```
Layout: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
Icon above text, centered alignment

Icon Styling:
- Illustrative style with yellow/cyan accents
- Size: 80px-100px
- Margin-bottom: 16px

Text:
- Heading: 20px, #00B4CC, bold
- Subtext: 14px, #666666
```

### FAQ Accordion
```
Layout: Two-column grid of questions
Each item: Question text + expand icon

Styling:
- Background: #F9F9F9 (light gray)
- Border-bottom: 1px solid #E0E0E0
- Padding: 20px
- Question: 16px, #333333, bold
- Icon: Chevron down, rotates 180° when open
- Answer: 14px, #666666, padding-top 12px
- Hover: background lighten
```

### Partner/Brand Logos
```
Layout: Horizontal scrolling or grid
Logos: Equal sizing, centered

Styling:
- Max-height: 60px
- Grayscale with color on hover
- Background: white or transparent
- Padding: 16px
```

### Footer
```
Layout: Full-width with zigzag divider
Background: Cyan (#00B4CC)
Content: Three-column info boxes

Typography:
- Heading: 24px, white, bold
- Body: 16px, white
- Icon size: 48px, white

Info Boxes:
- Background: cyan (same as section)
- Icon: Circular white background
- Centered text below icon
- Hover: subtle opacity change
```

### Contact Info Section
```
Layout: Single column, centered
Background: White with dotted pattern

Typography:
- Main heading: 36px, #C17FE8, center
- Subheading: 18px, #333333, center
- Hours: 16px, #333333

Footer Bar:
- Background: #00B4CC
- Text: white, centered
- Links: horizontal with dividers
- Copyright: 14px, white
```

### Buttons
```
Primary Button:
- Background: #00B4CC
- Color: #FFFFFF
- Padding: 14px 32px
- Border-radius: 6px
- Font-size: 16px
- Font-weight: 600
- Letter-spacing: 0.5px
- Shadow: 0 2px 8px rgba(0, 180, 204, 0.3)
- Hover: background #009BB3, transform translateY(-2px), shadow increase
- Transition: all 0.3s ease

Secondary Button (Orange):
- Background: #FF9800
- Color: #FFFFFF
- Padding: 12px 28px
- Border-radius: 6px
- Font-size: 14px
- Font-weight: 600
- Text-transform: uppercase
- Hover: background #E68900, scale 1.05
- Transition: all 0.3s ease

Outline Button:
- Background: transparent
- Border: 2px solid #00B4CC
- Color: #00B4CC
- Padding: 12px 28px
- Border-radius: 6px
- Hover: background #00B4CC, color #FFFFFF

Icon Button:
- Circular or square with icon
- Size: 40px-48px
- Background: white or cyan
- Icon: centered, 20px-24px
- Hover: background darken, rotate or scale
```

### Form Elements
```
Input Fields:
- Border: 1px solid #E0E0E0
- Border-radius: 6px
- Padding: 12px 16px
- Font-size: 14px
- Color: #333333
- Background: #FFFFFF
- Focus: border-color #00B4CC, box-shadow 0 0 0 3px rgba(0,180,204,0.1)

Select Dropdown:
- Same as input with chevron icon right
- Icon: 16px, #999999

Label:
- Font-size: 14px
- Color: #333333
- Font-weight: 600
- Margin-bottom: 8px

Required Asterisk:
- Color: #F44336
- Font-size: 14px
```

### Modal/Popup
```
Overlay:
- Background: rgba(0, 0, 0, 0.5)
- Position: fixed, full viewport
- Z-index: 9999

Modal Container:
- Background: #FFFFFF
- Border-radius: 12px
- Max-width: 600px
- Padding: 40px
- Shadow: 0 12px 40px rgba(0,0,0,0.2)
- Animation: fade in + scale from 0.9 to 1

Close Button:
- Position: absolute, top-right
- Icon: X, 24px
- Color: #999999
- Hover: color #333333
```

## 7. Site Sections (In Order)

1. **Navigation Header** (Sticky)
   - Logo (left)
   - Menu items: Home, Courses, Life at TTI (dropdown), Demat Account, Blog, Contact
   - Career button (right, black background)

2. **Hero Section**
   - Two columns: left (text + CTA), right (enquiry form)
   - Large headline: "Ready to Transform Your Portfolio? 16 Weeks with"
   - Animated logo display
   - Brochure download button
   - "Before/After Joining" comparison stats

3. **Rupee Symbol Divider**

4. **Full-Width Hero Carousel**
   - Background image with dark overlay
   - Text: "YOUR FINANCIAL JOURNEY, OUR EXPERTISE"
   - "Explore More" button
   - Left/right navigation arrows

5. **Welcome Section**
   - Heading: "Welcome to The Trading Institute"
   - Two columns: text (left), founder image (right)
   - Tabbed content: Mission, Vision, Our Goal
   - Stats: Year Experience, Certificate Trader, TTI Team
   - "About Our Mentor" button

6. **News Feature Section**
   - Heading: "News Feature"
   - Logo strip: webindia123, Latestly, ANI

7. **Mission/Vision/Goal Cards**
   - Three-column grid with icons
   - Mission, Vision, Our Goal detailed cards

8. **Our Courses Section**
   - Zigzag divider (top)
   - Cyan background
   - Three course modules: Security Market, Technical Charter, International Market
   - "Know More" buttons (orange)

9. **Our Services Section**
   - Grid of service features with icons
   - Items: Offline Classes, Live Classes, Lifetime Free Mentor, Trading Strategies, Risk Management, Recorded Lectures, Classroom and Online, Certification, Mock Tests, Psychology Classes

10. **Why Choose Us Section**
    - Grid of benefit icons with descriptions
    - Icons in illustrative style with yellow/cyan

11. **Ask FAQ Section**
    - Two-column accordion
    - Light gray background cards
    - Expandable questions

12. **Most Trusted Brand**
    - Heading: "Most Trusted Brand"
    - Logo strip of partner brands

13. **Social Media Banner**
    - Cyan background with zigzag divider
    - Heading: "The Trading Institute"
    - Subheading: "Ab Bharat Bhi Banega Financial Independent"
    - Social icons: Facebook, Instagram, YouTube

14. **Connect With Us Section**
    - White background with dotted pattern
    - Heading: "Connect with Us"
    - Subheading: "The Trading Institute is here to support you every step of the way"
    - Three info boxes: Office Address, Phone Number, Office Email
    - Business hours

15. **Footer Bar**
    - Cyan background
    - Copyright text: "© Copyright 2024 @The Trading Institute All Right Reserved. Development 'Hello Media'"
    - Links: Contact Us, Privacy Policy, Terms of Use, Refund Policy

16. **WhatsApp Float Button** (Fixed)
    - Green background
    - WhatsApp icon
    - Text: "WhatsApp us"
    - Position: bottom-right
</high_level_design>

<theme>
light
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/header.tsx</file_path>
    <design_instructions>
Clone the sticky header navigation section with white background. Include The Trading Institute logo on the left (cropped-Logo-300x86.png), horizontal navigation menu in the center with items: Home, Courses, Life at TTI (with dropdown), Demat Account, Blog, Contact. The "Life at TTI" dropdown should show: Student Certificate, Photos, Video, Awards & Certificates. Add a black "Career" button with arrow icon on the right. The header should have a subtle shadow and stick to the top on scroll. Use the provided navigation structure with proper hover states and mobile hamburger menu for responsive design.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/cropped-Logo-300x86-1.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero.tsx</file_path>
    <design_instructions>
Create a hero section with white dotted background pattern. Left side: large text "Ready to Transform Your Portfolio? 16 Weeks with" in blue, display The Trading Institute logo (Logo-2.png), animated underlined text "THE TRADING INSTITUTE" in double underline style, and a "Brochure Download" button with download icon. Right side: "Enquire Now" form with fields for Full Name, Mobile No. (with India +91 country code selector), Email Id, and blue "Submit" button. Below the main content, show "Before Joining" and "After Joining" comparison with red declining chart and green ascending chart graphics. Include decorative rupee symbol divider at the top. Mobile responsive with stacked layout.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/Logo-2.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/Untitled-1s-copy-3.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/Untitled-1s-4.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/image-carousel.tsx</file_path>
    <design_instructions>
Create a full-width image carousel/slider section with dark overlay. Display large hero images of classroom settings with students. Include white centered text overlay: "YOUR FINANCIAL JOURNEY, OUR EXPERTISE" with "Explore More" blue button. Add left and right arrow navigation buttons on the sides. Include pagination dots at the bottom. Use images from the gallery showing trading institute classrooms and ceremonies. The carousel should auto-play and pause on hover. Apply 50% dark overlay to ensure text readability.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/IMG-20240529-WA0040-5.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/20240314_104210-scaled-6.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/20240302_140659-scaled-7.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/welcome.tsx</file_path>
    <design_instructions>
Create a two-column section with white dotted background. Left column: purple gradient heading "Welcome to The Trading Institute", followed by the institute's mission statement and detailed description text in justified alignment. Include statistics about 15000+ students, international market education, and CMT course details. Add three clickable pills at bottom: Mission, Vision, Our Goal with cyan checkmark icons. Right column: large image of instructor with decorative emoji-style graphics (megaphone, like hand, thumbs up). Below the image: text "let's come together and make Bharat Economically Independent" with statistics "15+ Year Experience, 14K+ Certificate Trader, 20+ TTI Team" and cyan "About Our Mentor" button. Use purple for headings and dark gray for body text.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/dadada-16.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/news-feature.tsx</file_path>
    <design_instructions>
Create a news feature section with purple heading "News Feature" and white dotted background. Display a horizontal scrollable/carousel of news outlet logos including webindia123, LATESTLY, and ANI (South Asia's Leading Multimedia News Agency). Add navigation arrows on the left and right sides. Include pagination dots below the logos. Center-align all content and ensure the logos are displayed with proper spacing and sizing. The carousel should auto-scroll and allow manual navigation.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/images/jd-logo_nw-15.webp"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/mission-vision-goals.tsx</file_path>
    <design_instructions>
Create a three-column section with white dotted background. Each column contains a colored icon at top (mission: person with flag in cyan circle, vision: lightbulb with rays in yellow circle, goal: person with chart in pink circle), cyan underlined heading, and description text below. Mission: "To democratize financial knowledge and empower individuals to achieve financial independence through expert guidance, innovative teaching methodologies, and a focus on practical application." Vision: "To foster financial growth by empowering individuals to become successful investors. We aim to create a financially stable society through education and mentorship." Goal: "To be India's leading financial education provider. We aim to empower individuals with the knowledge and skills needed to succeed in the stock market and create a brighter financial future." Use purple headings, cyan underlines, and left-aligned text. Responsive design with stacked layout on mobile.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/courses.tsx</file_path>
    <design_instructions>
Create a courses section with zigzag cyan border pattern at top and bottom. Purple heading "Our Courses" with subtitle "Your path to Success 'Online and Offline'". Display three course cards in cyan background with white circular icon containers at top: Security Market Module (book icon), Technical Charter Module (hands with chart icon), International Market Module (dollar exchange icon). Each card has white heading, subtitle text, and orange "Know More" button at bottom. The cards should have equal height and spacing. Center-align all text within cards. Add hover effects on buttons and cards.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/services.tsx</file_path>
    <design_instructions>
Create a services/features section with purple heading "Our Services" and descriptive text about certification programs. Display features in a grid layout with icons and text: Offline Classes (practical live trading), Live classes (1+ hours personal training), Lifetime Free Mentor (24*7 assistance), Trading strategies (85%+ accuracy), Life Time Free Assistance, Base Build-Up Classes, Risk Management, 100% Practical & Live Trading Classes, Recorded Lectures, Classroom And Online Classes, Certification Course, Mock Test And Study Material, Psychology Build-up classes. Each feature has a colored icon above, heading, and description. Use alternating cyan and gray backgrounds. Responsive 3-column grid becoming 2-column on tablet and 1-column on mobile.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/why-choose-us.tsx</file_path>
    <design_instructions>
Create a "Why Choose Us" section with purple heading. Display features in a 3-column grid with colored cartoon-style icons: Risk Management (magnifying glass with gears), Base Build-Up Classes (school building with person), Life Time Free Assistance (clock with checkmark), Classroom And Online Classes (laptop with WiFi), Recorded Lectures (video player), 100% Practical & Live Trading Classes (people with gears and checklist), Psychology Build-up classes (brain on presentation board), Mock Test And Study Material (test paper), Certification Course (certificate with medal). Each feature has cyan heading and gray description text. Icons should be consistent style with yellow, blue, and cyan accent colors. White dotted background pattern. Responsive design.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/faq.tsx</file_path>
    <design_instructions>
Create an FAQ accordion section with purple heading "Ask FAQ". Display two columns of questions with expandable/collapsible answers. Left column questions: course duration, what will I learn, futures and options coverage, beginner friendly, can newbies join. Right column questions: what if I miss class, lifetime mentorship, certificate after completion, confident trader guarantee, live trading classes, SEBI registration. Each question has a plus icon that rotates to minus when expanded. Use light gray background for question rows with rounded corners. Add subtle hover effect. Questions in dark text, answers revealed on click with smooth animation. Responsive design stacking to single column on mobile.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/trusted-brands.tsx</file_path>
    <design_instructions>
Create a "Most Trusted Brand" section with purple heading and white dotted background. Display a horizontal scrollable carousel of partner/certification logos including SEBI, Indiamart, Angel One, Sulekha, JustDial, and other financial institutions. Logos should be grayscale with hover effect to show color. Add navigation arrows and pagination dots. Center-align content with equal spacing between logos. The carousel should auto-scroll and allow manual navigation.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/icons/Angel-One_idGumGbsNV_1-5.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/icons/INDIAMART_NS_BIG-6.png", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2bdd73bf-3e8f-43f2-83bc-63455ef55ee6-thetradinginstitute-in/assets/icons/9n32ekrut78ejpb1qlal7ao5of-7.png"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/institute-banner.tsx</file_path>
    <design_instructions>
Create a full-width cyan banner section with zigzag white border pattern at top and bottom. White heading "The Trading Institute" with Facebook, Instagram, and YouTube social media icons above. Subtitle text "Ab Bharat Bhi Banega Financial Independent." below. Center-align all content. Social icons should be circular white buttons with brand colors on hover. The section should stand out as a call-to-action divider.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/connect.tsx</file_path>
    <design_instructions>
Create a "Connect with Us" section with purple heading and supporting text "The Trading Institute is here to support you every step of the way." Display three equal-width cyan cards with white circular icons: Office Address (location pin icon) showing "Indore, Madhya-Pradesh, India", Phone Number (phone icon) showing "9109275374, +91 731-4088970", Office Email (envelope icon) showing "info@thetradinginstitute.in". Icons should be large and centered at top of each card. White text on cyan background. Cards should have subtle shadow and hover effect. Responsive design stacking on mobile.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Create a footer section with white dotted background showing office hours: "Monday - Friday: 10:00 AM - 07:00 PM | Saturday: 10:00 AM - 05:00PM | Sunday: Closed". Below, add cyan background section with copyright text "© Copyright 2024 @The Trading Institute All Right Reserved. Development 'Hello Media'". Include footer links: Contact Us, Privacy Policy, Terms of use, Refund Policy with checkmark icons. Add floating WhatsApp button on bottom right corner. Center-align office hours, left-align footer links. Use professional typography with proper spacing.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
