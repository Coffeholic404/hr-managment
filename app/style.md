---
name: Verdant Horizon
colors:
  surface: '#f3fbf4'
  surface-dim: '#d4dcd5'
  surface-bright: '#f3fbf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef6ef'
  surface-container: '#e8f0e9'
  surface-container-high: '#e2eae3'
  surface-container-highest: '#dce5de'
  on-surface: '#161d19'
  on-surface-variant: '#3f4941'
  inverse-surface: '#2a322e'
  inverse-on-surface: '#ebf3ec'
  outline: '#6f7a70'
  outline-variant: '#becabe'
  surface-tint: '#006d3d'
  primary: '#006a3b'
  on-primary: '#ffffff'
  primary-container: '#268451'
  on-primary-container: '#f6fff4'
  inverse-primary: '#7ed99e'
  secondary: '#30694c'
  on-secondary: '#ffffff'
  secondary-container: '#b3f0cc'
  on-secondary-container: '#376f52'
  tertiary: '#625b51'
  on-tertiary: '#ffffff'
  tertiary-container: '#7b7369'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9af6b8'
  primary-fixed-dim: '#7ed99e'
  on-primary-fixed: '#00210f'
  on-primary-fixed-variant: '#00522d'
  secondary-fixed: '#b3f0cc'
  secondary-fixed-dim: '#98d4b1'
  on-secondary-fixed: '#002112'
  on-secondary-fixed-variant: '#155136'
  tertiary-fixed: '#ece1d4'
  tertiary-fixed-dim: '#cfc5b9'
  on-tertiary-fixed: '#201b13'
  on-tertiary-fixed-variant: '#4c463c'
  background: '#f3fbf4'
  on-background: '#161d19'
  surface-variant: '#dce5de'
typography:
  display-lg:
    fontFamily: Almarai
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Almarai
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Almarai
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Almarai
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Almarai
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin-desktop: 40px
  container-margin-mobile: 16px
  gutter: 24px
  sidebar-width: 280px
  card-padding: 24px
---

## Brand & Style

The design system is rooted in the "Green Beach" aesthetic, a concept that merges the organic energy of lush vegetation with the calming stability of a coastal landscape. Targeted at HR professionals and enterprise administrators, it aims to reduce the cognitive load of data-heavy management tasks by replacing the typical "cold" corporate blue with a serene, breathable environment.

The style is **Modern Corporate with a Tactile twist**. It prioritizes extreme clarity and functional minimalism but softens the edges with warm sandy neutrals and organic greens. The emotional response is one of "calculated calm"—conveying both the precision required for HR data and the human-centric nature of the field. Visuals are characterized by generous whitespace, subtle depth through tonal layering, and high-legibility typography.

## Colors

The palette is derived from the provided reference, using a dominant **Sea Green (#2E8B57)** for primary actions, success states, and brand signatures. This green is high-contrast and evokes growth and stability.

The background ecosystem utilizes the **Sandy Cream (#F0E5D8)** as the foundation for the application canvas. To maintain a clean, modern look, we introduce a tiered neutral system. Pure white is reserved for high-level cards and active containers to "pop" against the sandy background. Text and iconography utilize a deep charcoal green (#4A524D) to ensure accessible contrast while maintaining the overall warm/organic temperature of the design system.

## Layout & Spacing

The layout utilizes a **12-column fixed grid** on desktop (max-width 1440px) to ensure structured alignment of data cards. On smaller screens, the layout transitions to a fluid system with standard 16px margins.

The spacing rhythm is built on an 8px base unit. For an HR dashboard, "Generous Whitespace" is a functional requirement, not just an aesthetic choice. It prevents information overload. Data-heavy lists should utilize a "Comfortable" density (16px vertical padding per row), while file upload zones should occupy larger, dedicated sections with at least 40px of internal padding to signify importance and ease of drop-target use.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layering** and **Soft Ambient Depth**. 

- **Level 0 (Canvas):** The sandy background (#F0E5D8).
- **Level 1 (Cards):** Pure white surfaces (#FFFFFF) with a very soft, 10% opacity Sea Green shadow (0px 4px 20px). This "tinted shadow" keeps the UI feeling organic.
- **Level 2 (Modals/Popovers):** Pure white surfaces with a more pronounced, 15% opacity shadow and a 1px solid border in a lightened version of the primary green.

Interactive elements like buttons use a subtle "Pressed" state that removes the shadow and darkens the fill, creating a tactile, "push-in" effect rather than a float-up effect.

## Shapes

The shape language is consistently **Rounded (Level 2)**. This 0.5rem (8px) base radius strikes the perfect balance between professional structure and approachable softness. 

- **Standard Elements:** (Buttons, Inputs, Small Cards) use 8px corners.
- **Large Containers:** (Main dashboard sections) use `rounded-lg` (16px).
- **Feedback Tags/Chips:** (Employee status) use full pill shapes to distinguish them from interactive buttons.
- **File Upload Zones:** These utilize a dashed 2px border with a 16px radius, emphasizing the "drop-in" area.

## Components

### Buttons
Primary buttons use the Sea Green (#2E8B57) with white text. Secondary buttons are ghost-style with a Sea Green outline. Buttons must have a minimum height of 44px for accessibility.

### Input Fields & Uploaders
Inputs use a white background with a subtle cream border. On focus, the border transitions to a 2px solid Sea Green. The **File Uploader** component is a hero element: it features a large dashed container with a "Cloud Upload" icon in the primary color and a "drag and drop" call-to-action in `headline-md`.

### Data Cards
Each card should feature a `title-lg` header. For employee data, use high-contrast avatars with the primary color as the default fallback background. 

### Chips & Status Indicators
Status indicators (e.g., "Active", "Onboarding", "Offboarding") should use highly desaturated versions of the primary/secondary palette to keep the focus on the data, not the decoration. For example, "Active" uses a light green background with dark green text.

### Lists
Lists are the core of HR management. Use thin, 1px horizontal dividers in a light sand color (#E5D8C8) and ensure hover states for rows are indicated by a subtle shift to the sandy background color.