# JACKEETA Footer Menu Configuration

## 📌 Overview
This document provides the exact structure for your Shopify footer menus. Copy these configurations when setting up navigation in Shopify Admin.

---

## 🔗 How to Set Up Menus

1. Go to **Shopify Admin > Online Store > Navigation**
2. Click **"Add menu"** for each footer section below
3. Add menu items exactly as listed
4. Assign menus to footer blocks in Theme Customizer

---

## 📋 Footer Menu Structures

### **MENU 1: SHOP**
**Menu Name:** `footer-shop`

| Link Text | URL |
|-----------|-----|
| New Arrivals | `/collections/new-arrivals` |
| All Products | `/collections/all` |
| Women | `/collections/women` |
| Men | `/collections/men` |
| Sale | `/collections/sale` |

---

### **MENU 2: ABOUT**
**Menu Name:** `footer-about`

| Link Text | URL |
|-----------|-----|
| Our Story | `/pages/our-story` |
| About Us | `/pages/about` |
| Sustainability | `/pages/sustainability` |
| Careers | `/pages/careers` |
| Journal | `/pages/journal` |
| Press & Media | `/pages/press` |
| Stockists | `/pages/stockists` |

---

### **MENU 3: CUSTOMER CARE**
**Menu Name:** `footer-customer-care`

| Link Text | URL |
|-----------|-----|
| Contact | `/pages/contact` |
| FAQ | `/pages/faq` |
| Shipping & Returns | `/pages/shipping-returns` |
| Size Guide | `/pages/size-guide` |
| Care Instructions | `/pages/care-instructions` |

---

### **MENU 4: LEGAL**
**Menu Name:** `footer-legal`

| Link Text | URL |
|-----------|-----|
| Privacy Policy | `/pages/privacy-policy` |
| Terms of Service | `/pages/terms-of-service` |

---

## 🎨 Footer Customizer Setup

After creating the menus above, configure your footer in **Theme Customizer**:

### **Step-by-Step:**

1. **Open Customizer**
   - Go to: **Online Store > Themes > Customize**
   - Navigate to **Footer** section

2. **Add Menu Blocks**
   - Click **"Add block"** → Select **"Menu"**
   - Repeat 4 times (one for each footer menu)

3. **Configure Each Menu Block**

   **Block 1:**
   - Heading: `SHOP`
   - Select menu: `footer-shop`

   **Block 2:**
   - Heading: `ABOUT`
   - Select menu: `footer-about`

   **Block 3:**
   - Heading: `CUSTOMER CARE`
   - Select menu: `footer-customer-care`

   **Block 4:**
   - Heading: `LEGAL`
   - Select menu: `footer-legal`

4. **Optional Blocks to Add**

   **Email Newsletter Block:**
   - Click **"Add block"** → **"Email Signup"**
   - Heading: `JOIN OUR EMAIL LIST`
   - Description: `Get exclusive deals and early access to new products.`
   - Button text: `SUBSCRIBE`

   **Social Links Block:**
   - Click **"Add block"** → **"Social Links"**
   - Add your social media URLs in Theme Settings
   - Display style: Icon only

5. **Footer Settings**
   - Color scheme: `scheme-1` (or match your brand)
   - Padding top: `36px`
   - Padding bottom: `36px`
   - Gap between blocks: `20px`

6. **Save**

---

## 📐 Visual Footer Layout

```
┌──────────────────────────────────────────────────────────────────┐
│                         JACKEETA                                 │
├────────────┬────────────┬──────────────┬─────────────────────────┤
│            │            │              │                         │
│   SHOP     │   ABOUT    │  CUSTOMER    │        LEGAL            │
│            │            │    CARE      │                         │
├────────────┼────────────┼──────────────┼─────────────────────────┤
│            │            │              │                         │
│ New Arrivals│Our Story  │ Contact      │ Privacy Policy          │
│ All Products│About Us   │ FAQ          │ Terms of Service        │
│ Women      │Sustainability│Shipping &  │                         │
│ Men        │Press & Media│  Returns   │                         │
│ Sale       │Stockists   │Size Guide    │                         │
│            │            │Care Instructions│                      │
│            │            │              │                         │
└────────────┴────────────┴──────────────┴─────────────────────────┘
│                                                                  │
│              [📧 JOIN OUR EMAIL LIST]                           │
│        Get exclusive deals and early access to new products     │
│                  [Email Input] [SUBSCRIBE]                      │
│                                                                  │
│              [Instagram] [Facebook] [Twitter]                   │
│                                                                  │
│              © 2025 JACKEETA. All rights reserved.              │
└──────────────────────────────────────────────────────────────────┘
```

---

## ✅ Checklist

Before publishing, verify:

- [ ] All 4 footer menus created in Navigation
- [ ] All pages exist with correct templates
- [ ] All menu links work (no 404 errors)
- [ ] Footer blocks added in Customizer
- [ ] Headings are uppercase and clear
- [ ] Email signup form tested
- [ ] Social links work
- [ ] Mobile responsive (test on phone)
- [ ] Consistent styling across footer
- [ ] Legal pages accessible

---

## 🔍 Testing Footer Links

Use this checklist to test each link:

### SHOP Menu:
- [ ] New Arrivals → Works
- [ ] All Products → Works
- [ ] Women → Works
- [ ] Men → Works
- [ ] Sale → Works

### ABOUT Menu:
- [ ] Our Story → Works
- [ ] About Us → Works
- [ ] Sustainability → Works
- [ ] Press & Media → Works
- [ ] Stockists → Works

### CUSTOMER CARE Menu:
- [ ] Contact → Works
- [ ] FAQ → Works
- [ ] Shipping & Returns → Works
- [ ] Size Guide → Works
- [ ] Care Instructions → Works

### LEGAL Menu:
- [ ] Privacy Policy → Works
- [ ] Terms of Service → Works

---

## 📱 Mobile Footer

On mobile (<750px), footer columns stack vertically:

```
┌─────────────────┐
│     SHOP        │
│   (collapsed)   │
├─────────────────┤
│     ABOUT       │
│   (collapsed)   │
├─────────────────┤
│ CUSTOMER CARE   │
│   (collapsed)   │
├─────────────────┤
│     LEGAL       │
│   (collapsed)   │
├─────────────────┤
│ Email Signup    │
├─────────────────┤
│ Social Links    │
└─────────────────┘
```

**Note:** Test mobile menu collapsing works properly in Theme Customizer mobile preview.

---

## 🎯 Quick Copy-Paste Menu Items

### For SHOP:
```
New Arrivals → /collections/new-arrivals
All Products → /collections/all
Women → /collections/women
Men → /collections/men
Sale → /collections/sale
```

### For ABOUT:
```
Our Story → /pages/our-story
About Us → /pages/about
Sustainability → /pages/sustainability
Careers → /pages/careers
Journal → /pages/journal
Press & Media → /pages/press
Stockists → /pages/stockists
```

### For CUSTOMER CARE:
```
Contact → /pages/contact
FAQ → /pages/faq
Shipping & Returns → /pages/shipping-returns
Size Guide → /pages/size-guide
Care Instructions → /pages/care-instructions
```

### For LEGAL:
```
Privacy Policy → /pages/privacy-policy
Terms of Service → /pages/terms-of-service
```

---

**Last Updated:** November 23, 2025  
**Brand:** JACKEETA  
**Theme:** Atelier 3.1.0
