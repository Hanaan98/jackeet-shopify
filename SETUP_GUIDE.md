# JACKEETA SHOPIFY THEME - SETUP GUIDE

## 🎉 What Has Been Completed

### 1. **Header Modernization**
- ✅ Modern premium icons (search, cart, account)
- ✅ Mango-style uppercase text navigation
- ✅ Black hover underline animation on menu items
- ✅ Mobile-responsive header with hamburger menu
- ✅ Hidden search/wishlist/account on mobile (<990px)

### 2. **Wishlist Functionality**
- ✅ Heart icon on all product cards
- ✅ Wishlist button on Product Detail Page (80/20 layout with add-to-cart)
- ✅ localStorage-based wishlist (no login required)
- ✅ Wishlist stores both product ID and handle
- ✅ `/favourites` page with collection-style product cards
- ✅ Full mobile responsiveness
- ✅ Comprehensive console logging for debugging

**Files Created/Modified:**
- `assets/wishlist.js` - Core wishlist logic
- `assets/wishlist-button.js` - Web component for heart button
- `snippets/wishlist-button.liquid` - Wishlist button UI
- `snippets/header-actions.liquid` - WISHLIST link in header
- `snippets/header-drawer.liquid` - Mobile menu with wishlist
- `sections/favourites-list.liquid` - Favourites page
- `templates/page.favourites.json` - Favourites page template
- `blocks/buy-buttons.liquid` - PDP button layout

### 3. **Brand Pages Created (15 Pages)**

#### **About & Brand Pages:**
- ✅ **About Us** (`/pages/about`) - 4 luxury sections (Hero, Story, Values, Craftsmanship)
- ✅ **Our Story** (`/pages/our-story`) - Extended heritage narrative (since 1987)
- ✅ **Sustainability** (`/pages/sustainability`) - 6 pillars of sustainable practices
- ✅ **Stockists** (`/pages/stockists`) - Where to buy (online only for now)
- ✅ **Press & Media** (`/pages/press`) - Press kit, contact, recent coverage
- ✅ **Careers** (`/pages/careers`) - Job openings, benefits, company culture
- ✅ **Journal** (`/pages/journal`) - Coming soon page for blog/lifestyle content

#### **Customer Service Pages:**
- ✅ **Contact** (`/pages/contact`) - Contact form with customer service info
- ✅ **FAQ** (`/pages/faq`) - 20+ questions in 5 categories with accordion UI
- ✅ **Shipping & Returns** (`/pages/shipping-returns`) - Comprehensive shipping & 30-day return policy
- ✅ **Size Guide** (`/pages/size-guide`) - Measurement charts + how to measure
- ✅ **Care Instructions** (`/pages/care-instructions`) - Care by fabric type + symbols

#### **Legal Pages:**
- ✅ **Privacy Policy** (`/pages/privacy-policy`) - GDPR-compliant privacy policy
- ✅ **Terms of Service** (`/pages/terms-of-service`) - Complete terms & conditions

---

## 📋 What You Need To Do

### **Step 1: Create Pages in Shopify Admin**

Go to **Online Store > Pages** and create a new page for each template:

1. **About** - Template: `page.about`
2. **Our Story** - Template: `page.our-story`
3. **Sustainability** - Template: `page.sustainability`
4. **Stockists** - Template: `page.stockists`
5. **Press & Media** - Template: `page.press`
6. **Contact** - Template: `page.contact` (may already exist)
7. **FAQ** - Template: `page.faq`
8. **Shipping & Returns** - Template: `page.shipping-returns`
9. **Size Guide** - Template: `page.size-guide`
10. **Care Instructions** - Template: `page.care-instructions`
10. **Privacy Policy** - Template: `page.privacy-policy`
11. **Terms of Service** - Template: `page.terms-of-service`
12. **Favourites** - Template: `page.favourites`
13. **Careers** - Template: `page.careers`
14. **Journal** - Template: `page.journal`

### **Step 2: Create Footer Navigation Menus**

Go to **Online Store > Navigation** and create these menus:

#### **Footer Menu 1: "SHOP"**
```
- New Arrivals → /collections/new-arrivals
- All Products → /collections/all
- Sale → /collections/sale
```

#### **Footer Menu 2: "ABOUT"**
```
- Our Story → /pages/our-story
- About Us → /pages/about
- Sustainability → /pages/sustainability
- Press → /pages/press
- Stockists → /pages/stockists
- Careers → /pages/careers
- Journal → /pages/journal
```

#### **Footer Menu 3: "CUSTOMER CARE"**
```
- Contact → /pages/contact
- FAQ → /pages/faq
- Shipping & Returns → /pages/shipping-returns
- Size Guide → /pages/size-guide
- Care Instructions → /pages/care-instructions
```

#### **Footer Menu 4: "LEGAL"**
```
- Privacy Policy → /pages/privacy-policy
- Terms of Service → /pages/terms-of-service
```

### **Step 3: Configure Footer**

1. Go to **Online Store > Themes > Customize**
2. Navigate to **Footer** section
3. Add 4 **Menu blocks** (one for each footer menu above)
4. For each menu block:
   - Select the corresponding navigation menu
   - Set heading to: "SHOP", "ABOUT", "CUSTOMER CARE", "LEGAL"
5. Optional: Add **Email Signup** block for newsletter
6. Optional: Add **Social Links** block
7. **Save** changes

### **Step 4: Update Contact Information**

Update these files with your actual information:

1. **Contact Page** - Update email/phone in section settings
2. **Shipping & Returns** - Update email (`returns@jackeeta.com`)
3. **Press Page** - Update email (`press@jackeeta.com`)
4. **Privacy Policy** - Update business address
5. **Terms of Service** - Update legal jurisdiction

### **Step 5: Test Everything**

- ✅ Test wishlist on product cards (heart icon)
- ✅ Test wishlist on PDP (product detail page)
- ✅ Visit `/pages/favourites` to view wishlisted items
- ✅ Test on mobile (header, menu, wishlist)
- ✅ Test all footer links
- ✅ Test contact form submission
- ✅ Check FAQ accordions expand/collapse
- ✅ Verify all pages display correctly

---

## 🎨 Footer Structure Visualization

```
┌─────────────────────────────────────────────────────────────┐
│                    JACKEETA FOOTER                          │
├─────────────┬─────────────┬─────────────┬──────────────────┤
│   SHOP      │   ABOUT     │ CUSTOMER    │      LEGAL       │
│             │             │   CARE      │                  │
├─────────────┼─────────────┼─────────────┼──────────────────┤
│ New Arrivals│ Our Story   │ Contact     │ Privacy Policy   │
│ All Products│ About Us    │ FAQ         │ Terms of Service │
│ Sale        │Sustainability│ Shipping &  │                  │
│             │ Press       │   Returns   │                  │
│             │ Stockists   │ Size Guide  │                  │
│             │             │ Care Guide  │                  │
└─────────────┴─────────────┴─────────────┴──────────────────┘
│                                                             │
│            [Email Newsletter Signup Block]                  │
│                                                             │
│            [Social Media Links]                             │
│                                                             │
│         © 2025 JACKEETA. All rights reserved.              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Technical Notes

### Wishlist Implementation:
- Uses browser `localStorage` (not account-based)
- Data format: `[{id: number, handle: string}, ...]`
- Events: `wishlist:updated` dispatched on changes
- Mobile-friendly with touch event handling

### Module Imports:
- All imports use **relative paths** (`./file.js`)
- Do NOT use `@theme/` aliases (browser incompatible)

### Styling:
- Mango/Calvin Klein aesthetic
- Uppercase text throughout
- Clean, minimal design
- Responsive breakpoints: 750px (mobile), 990px (desktop)

### Browser Cache:
If JavaScript changes don't apply:
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear cache in browser settings

---

## 📞 Support

If you encounter any issues:
1. Check browser console for errors (`F12`)
2. Verify all pages are created with correct templates
3. Ensure footer menus are properly configured
4. Test in incognito mode to rule out cache issues

---

## 🚀 Next Steps (Optional Enhancements)

- Add product image to wishlist page
- Create account-based wishlist (requires Shopify Plus or custom app)
- Add "Recently Viewed" products functionality
- Create email templates matching brand aesthetic
- Add size guide modal on product pages
- Implement product quick view
- Add Instagram feed integration
- Create blog/journal section

---

## 📊 Final Page Count:

**Total: 15 Pages Created**

**Brand Pages (7):**
- About Us, Our Story, Sustainability, Stockists, Press & Media, Careers, Journal

**Customer Service (5):**
- Contact, FAQ, Shipping & Returns, Size Guide, Care Instructions

**Legal (2):**
- Privacy Policy, Terms of Service

**Feature (1):**
- Favourites (wishlist page)

All pages have **professional content**, **luxury design**, and **real purpose** - your footer will look established and complete! 🎉

---

**Last Updated:** November 23, 2025  
**Theme Version:** Atelier 3.1.0  
**Brand:** JACKEETA
