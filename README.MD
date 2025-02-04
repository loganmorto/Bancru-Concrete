# ✅ Concrete Contractor Website Checklist

## 📌 Website Development & Technical Setup
### 1. Project Setup
- [x] Choose a **Jekyll template or theme** if applicable
	- custom setup/no theme
- [x] Set up a **GitHub repository** for version control 
	- https://github.com/loganmorto/Bancru-Concrete/
		- 2 branches
			- main: all site files
			- gh-pages: the  _site folder, this is deployed
- [x] Establish a **local development environment** for Jekyll

- [x] Use **Netlify/GitHub Pages/Cloudflare Pages** for deployment
	- deployed to github pages
- [x] Connect custom domain to github pages
	- deployed to bancruconcrete.com
### 2. Site Structure & Navigation
- [ ] Plan **site architecture** (Home, Services, Portfolio, About, Contact, Privacy, Cookies)
- [ ] Use **breadcrumb navigation** for SEO and usability
- [ ] Ensure URLs are **SEO-friendly** (e.g., `services/concrete-driveways/`)
- [x] Create a **custom 404 error page** for user experience

### 3. Responsive & Mobile Optimization
- [x] Use **mobile-first design**
	- used media queries to adjust for desktop
- [ ] Ensure site is **fully responsive** on different screen sizes
- [ ] Test on **multiple devices and browsers** (Chrome, Firefox, Safari, Edge)
- [x] Implement **viewport meta tag** (`<meta name="viewport" content="width=device-width, initial-scale=1">`)
- [x] Optimize **tap targets** for mobile usability
	- all tappable items should be/are 44px by 44px minimum.

### 4. Performance Optimization
- [ ] Use **optimized images** (`.webp` instead of `.jpg/.png`)
- [ ] Enable **lazy loading** for images (`loading="lazy"`)
- [ ] Minify **CSS, JavaScript, and HTML**
- [ ] Enable **compression (Gzip/Brotli)**
- [ ] Use a **Content Delivery Network (CDN)**
- [x] Reduce **third-party scripts and external dependencies**
- [x] Optimize **font loading** (`font-display: swap`)

---

## 📌 SEO Best Practices
### 5. On-Page SEO
- [ ] Use **descriptive page titles** (`<title>Professional Concrete Contractors in North Carolina</title>`)
- [ ] Write **compelling meta descriptions** (≤160 characters)
- [ ] Use **H1-H6 tags properly** (only one `<h1>` per page, structured subheadings)
- [x] Add **schema markup** (`LocalBusiness`, `Service`, `FAQ`, `Review`)
	- _includes/schema.html
- [ ] Optimize for **featured snippets** (FAQs, step-by-step guides)

### 6. Local SEO
- [ ] Create **Google Business Profile (GBP)**
- [ ] Add **NAP (Name, Address, Phone) schema markup** on all pages
- [ ] Embed a **Google Maps location** on the Contact page
- [ ] Ensure **consistent NAP information** across website & listings
- [ ] Optimize **local keywords** ("concrete contractor in Raleigh, NC")
- [ ] Include **location-based service pages** if serving multiple areas

### 7. Image SEO
- [ ] Use **descriptive alt text** for images
- [ ] Optimize **image filenames** (`concrete-driveway-raleigh.jpg`)
- [ ] Implement **image sitemaps** if applicable

### 8. Technical SEO
- [x] Generate and submit **XML sitemap** (`sitemap.xml`)
- [ ] Create and optimize **robots.txt**
- [ ] Ensure **canonical tags** to avoid duplicate content issues
- [ ] Set up **301 redirects** for changed or removed pages
- [ ] Implement **pagination correctly** (if needed)
- [ ] Validate structured data using **Google’s Rich Results Test**

### 9. Link Optimization
- [ ] Use **internal links** for better crawlability
- [ ] Optimize **anchor text** (avoid "click here")
- [ ] Ensure **no broken links** (`404` errors)

---

## 📌 Crawlers & Indexing
### 10. Search Engine Crawlers
- [ ] Ensure **indexable content** (not blocked by `robots.txt`)
- [ ] Use **meta robots tags** where necessary (`noindex, follow` for admin pages)
- [ ] Submit **XML sitemap** to Google Search Console & Bing Webmaster Tools

### 11. Social Media & Open Graph
- [ ] Implement **Open Graph (OG) tags** for Facebook sharing
- [ ] Use **Twitter Cards** for better Twitter previews
- [ ] Set up a **business Facebook, LinkedIn, and Instagram page** (if applicable)
- [ ] Link to social profiles in the footer

---

## 📌 Security & Compliance
### 12. Security
- [ ] Use **HTTPS (SSL/TLS)**
- [ ] Set up **Content Security Policy (CSP)**
- [ ] Add a **Web Application Firewall (WAF)**
- [ ] Enable **DNSSEC** for domain security
- [ ] Implement **reCAPTCHA** on forms

### 13. Privacy & Legal Compliance
- [ ] Create **Privacy Policy** and **Cookies Policy** pages
- [ ] Add a **cookie consent banner** (GDPR & CCPA compliance)
- [ ] Ensure **WCAG accessibility compliance** (contrast ratios, alt text, keyboard navigation)

---

## 📌 User Experience (UX) & Content Strategy
### 14. Content Strategy
- [ ] Write **clear, engaging copy** with a strong CTA
- [ ] Add a **FAQ section** to improve user experience & SEO
- [ ] Use **case studies or testimonials** for social proof
- [ ] Create a **project portfolio page** with before/after images
- [ ] Ensure **consistent branding and color scheme**

### 15. Contact & Lead Capture
- [ ] Include a **simple contact form** (Name, Email, Phone, Message)
- [ ] Add a **click-to-call button** on mobile
- [ ] Ensure form validation and **success/error messages**
- [ ] Integrate **Google reCAPTCHA** for spam protection

---

## 📌 Final Testing & Launch
### 16. Pre-Launch Testing
- [ ] Perform **cross-browser testing** (Chrome, Firefox, Safari, Edge)
- [ ] Check **mobile usability** with Google’s Mobile-Friendly Test
- [ ] Ensure all **links are working**
- [ ] Test **page speed** using Google PageSpeed Insights
- [ ] Validate **structured data**
- [ ] Ensure **Google Analytics** is tracking properly

### 17. Post-Launch Monitoring
- [ ] Submit the **website to Google Search Console**
- [ ] Check for **crawl errors & index issues**
- [ ] Monitor **site uptime** with UptimeRobot
- [ ] Track **SEO rankings** with Ahrefs, Moz, or Google Search Console
- [ ] Review **Google Analytics reports** regularly

---

## 📌 Additional Enhancements & Best Practices
### 18. Lead Generation & Engagement
- [ ] **Click-to-Call Button** on mobile
- [ ] **Live Chat Widget** (optional)
- [ ] **Email Capture Form** for follow-ups

### 19. Interactive Features
- [ ] **Before/After Image Sliders**
- [ ] **Cost Estimate Calculator**

### 20. Social Proof & Trust Factors
- [ ] **Showcase customer testimonials & video reviews**
- [ ] **Embed recent Google reviews**

### 21. AI & Automation
- [ ] **Automated customer follow-ups**
- [ ] **AI chatbot or FAQ bot**
- [ ] **Appointment scheduling integration**

### 22. Advanced Security & Performance
- [ ] **Cloudflare or CDN with DDoS protection**
- [ ] **Regular vulnerability scans**
- [ ] **Security headers (`Strict-Transport-Security`, `X-Frame-Options`)**

---

## 🔥 Final Thoughts
This checklist ensures the site is **technically sound, SEO-friendly, and user-optimized**. Implementing these strategies will help the concrete contractor **rank higher, convert more leads, and build long-term trust**.

🚀 **Let me know if you need help implementing any of these!**
