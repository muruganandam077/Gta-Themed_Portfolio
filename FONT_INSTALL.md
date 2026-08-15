# Pricedown Font Installation

## 🚨 IMPORTANT: You need to add the Pricedown font manually

I've updated all the code to use the Pricedown font (the authentic GTA font), but you need to download and add the font files.

## Steps to Add Pricedown Font:

### Option 1: Download Pricedown (Recommended)

1. **Download Pricedown Black from one of these sources:**
   - https://www.dafont.com/pricedown.font
   - https://www.fontspace.com/pricedown-font-f40935
   - Search "Pricedown font download" on Google

2. **Create the fonts directory:**
   ```
   portfoliogtatheme/public/fonts/
   ```

3. **Convert the font to web formats:**
   - Use an online converter like: https://transfonter.org/
   - Upload the Pricedown .ttf or .otf file
   - Check: WOFF2 and WOFF
   - Download the converted files

4. **Add these files to `public/fonts/`:**
   ```
   public/fonts/pricedown-bl.woff2
   public/fonts/pricedown-bl.woff
   ```

5. **Refresh your browser** - the font should now load!

### Option 2: Use a Fallback Font (Temporary)

If you can't get Pricedown immediately, I can set up a similar fallback font. Let me know!

## What I've Already Changed:

✅ All text now uses `font-pricedown` class
✅ Main titles use Pricedown styling
✅ Navigation uses Pricedown
✅ All UI elements updated
✅ Pink (#FF006E) highlight color added
✅ GTA-style hover effects with pink arrow
✅ All content moved to left side
✅ Mini-map moved to right side
✅ Text shadows added for GTA look
✅ Removed old fonts (Bebas Neue, Pacifico)

## Current Status:

The site is running with Inter as a fallback. Once you add the Pricedown font files, everything will look exactly like GTA!
