# MagicMoments - AI Illustration & Logo Generator

## Project Overview

Transform your ideas into stunning illustrations and logos with AI.

## Recent Changes

### 2024 - Gallery API Performance Optimization

- **File Modified**: `app/gallery/hooks/useGallery.ts`
- **Issue Fixed**: Repeated API calls on every page visit and component mount
- **Implementation**: localStorage caching system with automatic expiration
- **Features Added**:
  - `loadFromCache()` - Loads valid cached data from localStorage
  - `saveToCache()` - Saves API response to localStorage with timestamp
  - `isCacheValid()` - Validates cache based on 30-minute expiration
  - `clearCache()` - Manual cache clearing functionality
- **Cache Management**:
  - **Cache Key**: `"gallery_photos_cache"`
  - **Cache Duration**: 30 minutes (configurable)
  - **Automatic Cleanup**: Removes expired cache automatically
  - **Error Handling**: Graceful fallback on localStorage errors
- **Performance Benefits**:
  - **Instant Loading**: Cached data loads immediately without API calls
  - **Reduced API Usage**: Only fetches fresh data every 30 minutes
  - **Better UX**: No loading spinner on subsequent visits
  - **API Rate Limit Friendly**: Dramatically reduces API requests
- **Smart Caching Flow**:
  - First visit: Checks cache → API call if needed → Saves to cache
  - Subsequent visits: Loads from cache instantly (within 30 minutes)
  - Cache expiry: Automatically fetches fresh data and updates cache

### 2024 - Demo Page Architecture Refactor

- **Files Created**:
  - `app/demo/hooks/useDemo.ts` - Custom hook for demo logic
- **Files Modified**:
  - `app/demo/page.tsx` - Refactored to use custom hook
- **Changes**:
  - Created custom hook to separate business logic from UI components
  - Extracted state management (`prompt`, `isGenerating`, `generatedImage`) to hook
  - Moved `handleGenerate` function to hook for better organization
  - Added `resetDemo` function for additional functionality
- **Architecture Benefits**:
  - Clean separation of concerns (logic vs presentation)
  - Reusable hook for demo functionality
  - Better testability with isolated business logic
  - Consistent pattern with other page hooks (gallery)
- **Code Quality**:
  - Reduced component complexity
  - Improved maintainability
  - Better code organization following React best practices

### 2024 - UI/UX Improvements

- **File Modified**: `src/components/PromptInput.tsx`
- **Issue Fixed**: Text visibility in "Describe your artwork" input field
- **Changes**:
  - Added `text-gray-900` for dark text in light mode
  - Added `dark:text-gray-100` for light text in dark mode
  - Fixed `color: inherit` causing invisible text issue
- **Benefits**:
  - Improved user experience with visible text input
  - Better accessibility and contrast
  - Consistent styling across light and dark modes

### 2024 - Project Structure Reorganization

- **Folder Reorganization**:
  - Moved `app/components/` to `src/components/`
  - Moved `app/constants/` to `src/constants/`
- **Files Updated**:
  - All import statements across the application updated to reflect new paths
  - `app/page.tsx`, `app/layout.tsx`, `app/demo/page.tsx`, `app/blog/page.tsx`
  - `src/components/FontShowcase.tsx`, `src/components/Gallery.tsx`
- **Rationale**:
  - **Clean Separation**: `app/` directory now contains only Next.js routes and pages
  - **Better Organization**: `src/` directory houses all application logic and reusable components
  - **Industry Standard**: Follows Next.js best practices for project structure
  - **Maintainability**: Clearer distinction between routing logic and application code
- **Benefits**:
  - Improved code organization and navigation
  - Easier maintenance and scaling
  - Better separation of concerns between routing and business logic
  - Follows established Next.js conventions

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
- **Files Created**: `src/constants/gallery.ts` - Gallery image data
- **Files Modified**: `src/constants/index.ts` - Added gallery exports
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
  - `src/constants/fonts.ts` - Extracted fonts data
  - `src/constants/features.ts` - Extracted features data
  - `src/constants/gallery.ts` - Gallery image data
  - `src/constants/index.ts` - Centralized exports
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
├── app/                     # Next.js App Router (Routes Only)
│   ├── gallery/             # Gallery page feature
│   │   ├── hooks/
│   │   │   └── useGallery.ts # Custom hook for gallery logic
│   │   └── page.tsx         # Gallery page component
│   ├── demo/                # Demo page feature
│   │   ├── hooks/
│   │   │   └── useDemo.ts   # Custom hook for demo logic
│   │   └── page.tsx         # Demo page component
│   ├── pricing/             # Pricing page
│   ├── blog/                # Blog pages
│   ├── tutorials/           # Tutorial pages
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── src/                     # Application Source Code
│   ├── components/          # Reusable UI components
│   │   ├── Hero.tsx         # Hero section with video background
│   │   ├── FontShowcase.tsx # Font showcase component
│   │   ├── Gallery.tsx      # Optimized gallery component
│   │   ├── PromptInput.tsx  # AI prompt input component
│   │   ├── AppBar.tsx       # Navigation component
│   │   └── ...other components
│   └── constants/           # Centralized constants
│       ├── fonts.ts         # Font definitions
│       ├── features.ts      # Feature definitions
│       ├── gallery.ts       # Gallery image data
│       └── index.ts         # Centralized exports
├── public/                  # Static assets
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
- **localStorage Caching**: Gallery data cached for 30 minutes to prevent repeated API calls
- **Bundle Size**: Separated concerns with custom hooks and constants
- **Core Web Vitals**: Improved LCP, CLS, and FID scores

## Architecture Best Practices

- **Project Structure**: Follows Next.js recommended patterns with `src` directory for application code
- **Separation of Concerns**: Constants separated from routing logic
- **Component Organization**: Reusable components in dedicated directories
- **Code Organization**: Logical grouping of related functionality

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
