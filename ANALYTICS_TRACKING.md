# Google Analytics Enhanced Tracking Documentation

## Overview
This document outlines all the analytics events being tracked on bas.dev.vandriel.com to help you understand user behavior and optimize your conversion funnel.

## Event Categories

### 1. **Homepage** (Main CTA Tracking)
Primary conversion tracking for the hero section.

| Event Action | Label | Trigger | Purpose |
|--------------|-------|---------|---------|
| `cta_primary_clicked` | - | User clicks "Book Your Strategy Call" (Calendly) | Track primary conversion intent |
| `cta_secondary_clicked` | - | User clicks "Send Quick Email" | Track alternative contact method |

**Business Value**: Measure which CTA drives more qualified leads.

---

### 2. **Lead Generation** (Conversion Tracking)
Track all lead capture attempts across the site.

| Event Action | Label | Trigger | Purpose |
|--------------|-------|---------|---------|
| `assessment_email_clicked` | "DevOps Assessment Request" | User clicks assessment CTA | Track interest in free assessment |
| `case_studies_email_clicked` | "Request Case Studies" | User requests detailed case studies | Track sales-qualified leads |

**Business Value**: Identify which lead magnets convert best. Assessment requests indicate early-stage interest, case study requests indicate later-stage evaluation.

---

### 3. **Engagement** (User Behavior Tracking)
Understand how users interact with your content.

#### Scroll Depth
| Event Action | Label | Value | Trigger |
|--------------|-------|-------|---------|
| `scroll_depth` | "25%" | 25 | User scrolls to 25% of page |
| `scroll_depth` | "50%" | 50 | User scrolls to 50% of page |
| `scroll_depth` | "75%" | 75 | User scrolls to 75% of page |
| `scroll_depth` | "90%" | 90 | User scrolls to 90% of page |
| `scroll_depth` | "100%" | 100 | User scrolls to bottom |

**Business Value**: Identify content drop-off points. If most users don't reach 50%, consider moving key CTAs higher.

#### Time on Page
| Event Action | Label | Value | Trigger |
|--------------|-------|-------|---------|
| `time_on_page` | "30s" | 30 | User stays 30 seconds |
| `time_on_page` | "60s" | 60 | User stays 1 minute |
| `time_on_page` | "120s" | 120 | User stays 2 minutes |
| `time_on_page` | "300s" | 300 | User stays 5 minutes |
| `page_exit` | "Total time on page" | [seconds] | User leaves page |

**Business Value**: Correlate time-on-page with conversions. Users who stay 2+ minutes are likely more qualified.

#### Section Visibility
| Event Action | Label | Trigger |
|--------------|-------|---------|
| `section_viewed` | "Services Section" | User scrolls services into view |
| `section_viewed` | "Value Props Section" | User scrolls value props into view |
| `section_viewed` | "Work Experience Section" | User scrolls work experience into view |

**Business Value**: Understand which sections users actually see. If "Services" has low visibility, it may be too far down the page.

#### FAQ Interaction
| Event Action | Label | Trigger |
|--------------|-------|---------|
| `faq_expanded` | "FAQ 1" | User expands first FAQ |
| `faq_expanded` | "FAQ 2" | User expands second FAQ |
| `faq_expanded` | "FAQ 3" | User expands third FAQ |
| ... | ... | ... |

**Business Value**: Identify which questions matter most to prospects. Popular FAQs reveal objections you need to address earlier.

#### Service Interest
| Event Action | Label | Trigger |
|--------------|-------|---------|
| `service_card_hovered` | [Service Title] | User hovers over service card |

**Business Value**: Track which services generate most interest without requiring a click. Helps prioritize service offerings.

---

### 4. **Language** (Localization Tracking)
Track language preferences of your audience.

| Event Action | Label | Trigger |
|--------------|-------|---------|
| `language_switched` | "nl -> en" | User switches from Dutch to English |
| `language_switched` | "en -> nl" | User switches from English to Dutch |

**Business Value**: Understand your international vs. Dutch audience split. High EN→NL switches may indicate international visitors interested in working with Dutch companies.

---

### 5. **User** (Legacy/General)
| Event Action | Purpose |
|--------------|---------|
| `redesign event` | Page view tracking (legacy) |

---

## Key Metrics to Monitor in Google Analytics

### Conversion Funnel
1. **Page Views** → Track total traffic
2. **Scroll to 50%** → Users engaged with content
3. **Section Views** (Services/Value Props) → Content consumption
4. **FAQ Expansions** → Addressing objections
5. **CTA Clicks** → Conversion attempts
6. **Assessment/Case Study Requests** → Qualified leads

### Expected Conversion Rates (Benchmarks)
- **25% scroll depth**: ~90% of visitors
- **50% scroll depth**: ~60% of visitors
- **75% scroll depth**: ~30% of visitors
- **100% scroll depth**: ~10-15% of visitors
- **FAQ engagement**: ~20-30% of visitors
- **Time 60s+**: ~40% of visitors
- **Time 120s+**: ~20% of visitors (higher quality)
- **CTA clicks**: 2-5% of visitors
- **Lead captures**: 0.5-2% of visitors

### Analytics Views to Create in GA4

#### 1. **Lead Quality Dashboard**
- CTA clicks by time-on-page
- Assessment requests by scroll depth
- Case study requests (indicates late-stage)

#### 2. **Content Performance**
- Section view rates
- Scroll depth distribution
- Service hover heatmap

#### 3. **Engagement Funnel**
- Pageview → 50% scroll → FAQ click → CTA click
- Identify drop-off points

#### 4. **Language Analysis**
- Conversion rate: NL vs EN
- Time-on-page: NL vs EN
- Service interest: NL vs EN

---

## Technical Implementation

### Hooks Used
- **`useScrollTracking()`**: Tracks scroll depth percentages
- **`useTimeOnPage()`**: Tracks engagement duration
- **`useIntersectionTracking(sectionName)`**: Tracks when sections become visible

### Components with Tracking
- ✅ `Hero.tsx` - CTA clicks
- ✅ `AssessmentOffer.tsx` - Lead generation
- ✅ `Testimonials.tsx` - Case study requests
- ✅ `FAQ.tsx` - Question expansions
- ✅ `Services.tsx` - Service interest + section view
- ✅ `ValueProps.tsx` - Section view
- ✅ `WorkExperience.tsx` - Section view
- ✅ `LanguageToggle.tsx` - Language switches
- ✅ `Redesign.tsx` - Scroll/time tracking

---

## Recommended Analytics Reports

### Weekly Check (5 min)
1. **Total conversions**: CTA clicks + email clicks
2. **Top FAQ questions**: Identify objections
3. **Avg scroll depth**: Content engagement
4. **Language split**: Audience composition

### Monthly Deep Dive (30 min)
1. **Conversion funnel analysis**: Where do users drop off?
2. **Service interest trends**: Which services to promote?
3. **Time-on-page correlation**: Does longer = more conversions?
4. **A/B test opportunities**: Based on low-performing sections

### Quarterly Strategy Review
1. **Lead quality trends**: Are CTAs attracting right audience?
2. **Content performance**: Which sections add value?
3. **International growth**: EN vs NL conversion rates
4. **Service portfolio optimization**: Based on hover data

---

## Privacy & GDPR Compliance

All tracking uses Google Analytics 4 with:
- ✅ No PII (Personally Identifiable Information) collected
- ✅ No user-specific tracking beyond session
- ✅ No cross-site tracking
- ✅ Event labels use generic descriptions only
- ✅ Email addresses never sent to GA

Users should be informed via cookie banner/privacy policy.

---

## Future Enhancements to Consider

1. **Heatmap Integration**: Add Hotjar for visual engagement data
2. **Form Analytics**: Track partial form fills if you add forms
3. **Outbound Link Tracking**: Track clicks to LinkedIn, GitHub, etc.
4. **Video Tracking**: If you add video content
5. **Search Tracking**: If you add site search
6. **Download Tracking**: For PDF case studies, whitepapers
7. **Custom Dimensions**: Track user tech stack interest based on tag interactions

---

## Testing Your Analytics

Use Google Analytics DebugView or Chrome Extension "Google Analytics Debugger" to verify events fire correctly:

1. Open site in incognito mode
2. Enable GA debugger
3. Perform actions (scroll, click CTAs, expand FAQs)
4. Check DebugView in GA4 dashboard (real-time)

---

## Support

For analytics questions or custom tracking needs, refer to:
- Google Analytics 4 Documentation: https://support.google.com/analytics
- React-GA4 Library: https://github.com/PriceRunner/react-ga4

---

*Last Updated: January 2025*  
*GA4 Property ID: G-VGSSCQJH3Z*
