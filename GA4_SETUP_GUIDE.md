# Quick Google Analytics 4 Setup Guide

## Step 1: Create Custom Reports (5 minutes)

### Report 1: Conversion Funnel

1. Go to GA4 → **Explore** → **Blank**
2. Name: "Lead Generation Funnel"
3. **Dimensions**: Add:
   - Event name
   - Page location
4. **Metrics**: Add:
   - Event count
   - Total users
5. **Visualizations**: Funnel exploration
6. **Steps**:
   - Step 1: `page_view`
   - Step 2: `scroll_depth` (label = 50%)
   - Step 3: `section_viewed` (label = Services Section)
   - Step 4: `faq_expanded`
   - Step 5: `cta_primary_clicked` OR `assessment_email_clicked`

### Report 2: Engagement Dashboard

1. Go to GA4 → **Explore** → **Free form**
2. Name: "User Engagement Insights"
3. **Dimensions**: Event name
4. **Metrics**: 
   - Event count
   - Total users
   - Engaged sessions
5. **Filter**: Event name contains:
   - `scroll_depth`
   - `time_on_page`
   - `section_viewed`

### Report 3: Lead Quality Analysis

1. Go to GA4 → **Explore** → **Free form**
2. Name: "Lead Quality Indicators"
3. **Dimensions**: 
   - Event name
   - Event label
4. **Metrics**: 
   - Event count
   - Conversions
5. **Filter**: Event category = "Lead Generation"

---

## Step 2: Set Up Conversions (2 minutes)

1. Go to GA4 → **Admin** → **Events**
2. Find these events and mark as **Conversions**:
   - ✅ `cta_primary_clicked` (Primary goal)
   - ✅ `assessment_email_clicked` (Secondary goal)
   - ✅ `case_studies_email_clicked` (Qualified lead)

---

## Step 3: Create Custom Audiences (3 minutes)

### Audience: High-Intent Visitors
**Conditions**:
- Time on page > 120s
- OR Scroll depth >= 75%
- OR FAQ expanded

**Use case**: Retargeting campaigns

### Audience: Service-Interested
**Conditions**:
- `service_card_hovered` event fired
- OR `section_viewed` (Services Section)

**Use case**: Service-specific remarketing

### Audience: Bounced Early
**Conditions**:
- Session duration < 30s
- Scroll depth < 25%

**Use case**: Identify why users leave early

---

## Step 4: Set Up Alerts (Optional, 2 minutes)

Go to **Admin** → **Custom Alerts**:

### Alert 1: Conversion Drop
- Condition: `cta_primary_clicked` count < 5 per week
- Action: Email notification

### Alert 2: High Bounce
- Condition: Sessions with scroll_depth < 25% > 70%
- Action: Email notification

---

## Step 5: Verify Tracking (5 minutes)

### Real-time Testing

1. Open your site in **Incognito mode**
2. Go to GA4 → **Reports** → **Real-time**
3. Perform these actions on your site:

```
✓ Scroll to 50% of page        → See "scroll_depth" event
✓ Wait 30 seconds              → See "time_on_page" event  
✓ Switch language (NL/EN)      → See "language_switched" event
✓ Expand an FAQ                → See "faq_expanded" event
✓ Hover over a service card    → See "service_card_hovered" event
✓ Click "Book Strategy Call"   → See "cta_primary_clicked" event
```

4. Events should appear within 15-30 seconds in Real-time view

### DebugView (Advanced)

For detailed event debugging:

1. Go to GA4 → **Admin** → **DebugView**
2. Add `?debug_mode=true` to your URL
   Example: `https://bas.dev.vandriel.com/?debug_mode=true`
3. Perform actions and see detailed event parameters

---

## Step 6: Create Dashboard (5 minutes)

### Recommended Dashboard Layout

Go to **Explore** → **Blank** → Create dashboard with 4 panels:

#### Panel 1: Conversions This Week
- **Metric**: Event count
- **Filter**: 
  - `cta_primary_clicked`
  - `assessment_email_clicked`
  - `case_studies_email_clicked`
- **Time**: Last 7 days

#### Panel 2: Scroll Depth Distribution
- **Visualization**: Bar chart
- **Dimension**: Event label
- **Metric**: Event count
- **Filter**: Event name = `scroll_depth`

#### Panel 3: Top 3 FAQs
- **Visualization**: Table
- **Dimension**: Event label
- **Metric**: Event count
- **Filter**: Event name = `faq_expanded`
- **Sort**: Descending
- **Rows**: 3

#### Panel 4: Service Interest
- **Visualization**: Pie chart
- **Dimension**: Event label
- **Metric**: Event count
- **Filter**: Event name = `service_card_hovered`

---

## Step 7: Weekly Review Checklist

Every Monday, check these 5 metrics (5 min):

```
1. [ ] Total conversions this week (CTA clicks + email captures)
2. [ ] Average scroll depth (is it improving?)
3. [ ] Top 3 FAQ questions (what are users concerned about?)
4. [ ] Time on page distribution (are users engaged?)
5. [ ] Language split (EN vs NL conversions)
```

**Action**: If any metric drops 20%+ week-over-week, investigate.

---

## Expected Timeline

| Week | What to Expect |
|------|----------------|
| Week 1 | Data starts populating (minimum viable dataset) |
| Week 2-3 | Patterns emerge (scroll depth trends, popular FAQs) |
| Week 4 | Enough data for first optimization decisions |
| Month 2 | Confidence in A/B test priorities |
| Month 3 | Clear conversion funnel optimization roadmap |

---

## Quick Troubleshooting

### "I don't see any events in Real-time"
- ✓ Check GA4 property ID matches: `G-VGSSCQJH3Z`
- ✓ Wait 30-60 seconds (slight delay is normal)
- ✓ Try incognito mode (ad blockers may interfere)
- ✓ Check browser console for errors

### "Some events fire, others don't"
- ✓ Scroll to trigger scroll_depth events
- ✓ Wait 30s to trigger time_on_page events
- ✓ Actually interact with elements (hover, click)
- ✓ Check event names match exactly (case-sensitive)

### "Events fire but don't show in reports"
- ✓ Reports can take 24-48 hours to update
- ✓ Use Real-time view for immediate verification
- ✓ Check date range filter in reports

---

## Pro Tips

### 1. Segment by Traffic Source
Compare conversion rates:
- **Direct** vs **Referral** vs **Social**
- Which source brings qualified leads?

### 2. Language as a Proxy for Audience
- **NL users**: Likely Dutch companies (local market)
- **EN users**: International or larger enterprises
- Track conversion rates separately

### 3. Correlate Metrics
- Do users who stay 2+ minutes convert more?
- Do users who expand FAQs convert better/worse?
- Does deep scrolling indicate quality or curiosity?

### 4. Set Up Slack/Email Alerts
Get notified when:
- A lead converts (daily summary)
- Unusual drop in conversions
- High-quality visitor pattern detected

---

## Monthly Action Items

### Month 1: Collect Baseline
- ✓ Let data collect without changes
- ✓ Establish baseline conversion rates
- ✓ Identify most/least viewed sections

### Month 2: First Optimizations
- Move popular content higher
- Address top FAQ objections in copy
- A/B test CTA placement

### Month 3: Advanced Testing
- Test new headlines based on FAQ themes
- Add/remove services based on hover data
- Optimize for high-converting traffic sources

---

## GA4 Resources

- [GA4 Official Docs](https://support.google.com/analytics)
- [GA4 Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4)
- [Debug Events](https://support.google.com/analytics/answer/7201382)
- [Create Custom Reports](https://support.google.com/analytics/answer/10445879)

---

**Next Step**: Deploy your changes, wait 1 week, then run your first weekly review!

Good luck! 📊🚀
