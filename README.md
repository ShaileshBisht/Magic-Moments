# MagicMoments - AI Illustration & Logo Generator

## Project Overview

Transform your ideas into stunning illustrations and logos with AI.

## Recent Changes

### 2024 - Gallery Page Optimization & Architecture Refactor

- **Files Created**:
  - `app/gallery/hooks/useGallery.ts` - Custom hook for gallery logic
- **Files Modified**:
  - `app/gallery/page.tsx` - Refactored to use custom hook and Next.js Image
  - `next.config.mjs` - Added Pexels domain configuration and disabled React Strict Mode
- **Changes**:
  - Created custom hook to separate business logic from UI components
  - Replaced regular `<img>` with Next.js `<Image>` component for better performance
  - Added lazy loading for external Pexels images
  - Fixed double API call issue by using `useCallback` and disabling React Strict Mode
  - Configured `remotePatterns` for secure external image loading
  - Improved error handling with retry functionality
- **Architecture Benefits**:
  - Clean separation of concerns (logic vs presentation)
  - Reusable hook for gallery functionality
  - Better testability with isolated business logic
  - Improved performance with optimized image loading
- **Performance Benefits**:
  - Single API call instead of duplicate requests
  - Automatic image optimization and WebP conversion
  - Lazy loading reduces initial page load time
  - Proper error handling and retry mechanism

### 2024 - Gallery Component Optimization

- **File**: `app/components/Gallery.tsx`
- **Files Created**: `app/constants/gallery.ts` - Gallery image data
- **Files Modified**: `app/constants/index.ts` - Added gallery exports
- **Changes**:
  - Replaced regular `<img>` with Next.js `<Image>` component for better performance
  - Added lazy loading and blur placeholder for improved UX
  - Implemented proper alt text and accessibility features
  - Added hover effects with overlay and image scaling
  - Extracted gallery data to constants for better maintainability
  - Added descriptive subtitle and improved styling
- **Performance Benefits**:
  - Automatic image optimization and WebP conversion
  - Lazy loading reduces initial page load time
  - Blur placeholder prevents layout shift
  - Responsive image sizing with proper `sizes` attribute
  - Better Core Web Vitals scores

### 2024 - Constants Refactoring

- **Files Created**:
  - `app/constants/fonts.ts` - Extracted fonts data
  - `app/constants/features.ts` - Extracted features data
  - `app/constants/gallery.ts` - Gallery image data
  - `app/constants/index.ts` - Centralized exports
- **Files Modified**:
  - `app/components/FontShowcase.tsx` - Now imports fonts from constants
  - `app/components/Gallery.tsx` - Now imports gallery data from constants
  - `app/page.tsx` - Now imports features from constants
- **Change**: Organized constants into separate files for better maintainability
- **Benefits**:
  - Improved code organization and reusability
  - Centralized data management
  - Easier maintenance and updates
  - Better separation of concerns

### 2024 - Hero Component Video Fix

- **File**: `app/components/Hero.tsx`
- **Change**: Fixed video source path in Hero component
- **Details**:
  - Changed video source from `/2.mp4` to `/7670835-uhd_3840_2160_30fps.mp4`
  - Video now correctly loads from the public directory
  - Updated to use the UHD video file available in the project

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with video background
│   │   ├── FontShowcase.tsx  # Font showcase component
│   │   └── Gallery.tsx       # Optimized gallery component
│   ├── constants/            # Centralized constants
│   │   ├── fonts.ts         # Font definitions
│   │   ├── features.ts      # Feature definitions
│   │   ├── gallery.ts       # Gallery image data
│   │   └── index.ts         # Centralized exports
│   ├── gallery/             # Gallery page feature
│   │   ├── hooks/
│   │   │   └── useGallery.ts # Custom hook for gallery logic
│   │   └── page.tsx         # Gallery page component
│   └── page.tsx             # Main page component
├── public/                   # Static assets
│   ├── 7670835-uhd_3840_2160_30fps.mp4  # Hero background video
│   ├── 1.png to 11.png      # Gallery images
│   └── ...other assets
├── next.config.mjs          # Next.js configuration
└── README.md                # This file
```

## Technical Configuration

### Next.js Configuration

- **React Strict Mode**: Disabled to prevent double API calls in development
- **Image Optimization**: Configured for external Pexels images using `remotePatterns`
- **Security**: Secure external image loading with protocol and hostname restrictions

### Performance Optimizations

- **Image Loading**: Next.js Image component with lazy loading and blur placeholders
- **API Calls**: Optimized with `useCallback` to prevent unnecessary requests
- **Bundle Size**: Separated concerns with custom hooks and constants
- **Core Web Vitals**: Improved LCP, CLS, and FID scores

## Features

- AI-powered illustration generation
- Logo creation tools
- Demo functionality
- Pricing information
- Responsive design with video background
- Optimized image gallery with lazy loading
- External API integration with Pexels
- Clean architecture with custom hooks

---

_Last updated: December 2024_
