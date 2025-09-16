<p align="center">
  <img src="https://online-project-images.s3.us-east-2.amazonaws.com/flashcards/FlashCards+Logo.svg" height="55%" width="55%" alt="FlashCards Logo"/>
</p>

<div align="center" id="toc">
  <ul style="list-style: none">
    <summary>
      <h1>🃏 FlashCards – AI-Powered Flashcards 🃏</h1>
    </summary>
  </ul>
</div>

<div align="center">

[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/isaiahpeoples/FlashCards)
[![Built With](https://img.shields.io/badge/Built_with-Next.js_15-blue)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)
[![UI](https://img.shields.io/badge/UI-TailwindCSS_+_Shadcn_UI-blue)](https://ui.shadcn.com/)
[![Auth](https://img.shields.io/badge/Auth-Clerk-blue)](https://clerk.com/)
[![Database](https://img.shields.io/badge/Database-Neon_PostgreSQL_+_Drizzle-blue)](https://neon.tech/)
[![Payments](https://img.shields.io/badge/Payments-Stripe-blue)](https://stripe.com/)
[![AI](https://img.shields.io/badge/Built_with-Cursor_AI-blue)](https://cursor.sh/)

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-brightgreen)](https://vercel.com/)
[![Live](https://img.shields.io/badge/Live-Demo-brightgreen)](https://flash-cards-six-brown.vercel.app/)

</div>
<br/>

## 💡 Project Overview

**FlashCards** is a modern, AI-powered **flashcards SaaS application** built entirely by prompting **Cursor AI**.  
With **Next.js 15**, **TypeScript**, **Clerk**, **Stripe**, and **Neon PostgreSQL**, this project shows how to build **production-grade SaaS platforms** without writing boilerplate code by hand.  

Users can:  
- Create accounts, sign in, and manage their profiles.  
- Build flashcard decks and add cards.  
- Upgrade to a **Pro subscription plan** with Stripe billing.  
- Access a full billing portal for plan management, invoices, and subscription changes.  

<br/>

## 🚀 Technologies Used

| Technology            | Description |
|-----------------------|-------------|
| **Next.js 15 (App Router)** | ⚡ Full-stack React framework for routes and APIs. |
| **TypeScript**        | 🔒 Type-safe, scalable codebase. |
| **Tailwind CSS**      | 🎨 Utility-first CSS framework. |
| **Shadcn UI**         | 🧩 Accessible, production-ready components. |
| **Clerk**             | 🔐 Authentication, role-based access, and billing integration. |
| **Stripe**            | 💳 One-time payments + SaaS subscriptions with billing portal. |
| **Neon PostgreSQL**   | 🗃️ Serverless database with scaling built-in. |
| **Drizzle ORM**       | 📝 Type-safe queries, schema, and migrations. |
| **Cursor AI (Agent Mode)** | 🤖 Handles all coding via structured prompting. |
| **MCP (Model Context Protocol)** | 🔌 Connects Cursor directly to Neon DB for schema + seed generation. |

<br/>

## 📑 Key Features

- 🃏 **Flashcards App** – Users create decks and cards for studying.  
- 💼 **SaaS Subscriptions** – Pro plan with monthly/yearly billing via Stripe + Clerk.  
- 🔐 **Full Authentication** – Secure login, roles, and access control via Clerk.  
- 🧾 **Billing Portal** – Manage subscriptions, update payment methods, view invoices.  
- 📧 **Transactional Emails** – Sign-up, purchase, and subscription confirmations.  
- ⚡ **AI-Driven Development** – Entirely built with Cursor AI prompts.  
- 🗃️ **MCP + Drizzle + Neon** – AI-driven schema generation, queries, and seed data.  
- 🎨 **Modern UI** – Tailwind + Shadcn UI for sleek, accessible interfaces.  

<br/>

## 📸 Project Screenshot

![FlashCards Preview](https://online-project-images.s3.us-east-2.amazonaws.com/flashcards/FlashCards-1.png)

*A clean, responsive SaaS platform for studying with flashcards.*

<br/>

## 🔧 Installation & Setup 🔧

1. **Clone the repository**:
```bash
git clone https://github.com/USERNAME/flashcards.git
cd flashcards
```

2. **Install dependencies**:
```bash
npm install
```

3. **Environment variables: Configure the .env file with the following keys**:

```
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Stripe
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Database (Neon + Drizzle)
DATABASE_URL=
DIRECT_URL=

# App Config
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run database migrations with Drizzle:**:
```bash
npx drizzle-kit push
```

5. **Start the development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

<br/>

## 📂 Project Structure 📂

- **/app: Next.js routes, API endpoints, and pages**

- **/components: Reusable UI and form components**

- **/lib: Utilities, helpers, and integrations (Stripe, Clerk, etc)**

- **/db: Drizzle ORM schemas, migrations, and queries**

- **/public: Static assets and images**

<br/>

## 📌 Learn More 📌

- [Next.js Documentation](https://nextjs.org/docs)  
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)  
- [Clerk Documentation](https://clerk.com/docs)  
- [Stripe Docs](https://stripe.com/docs)  
- [Neon PostgreSQL Docs](https://neon.tech/docs/introduction)  
- [Drizzle ORM Docs](https://orm.drizzle.team/docs/overview)  
- [Cursor AI Docs](https://cursor.sh/docs)  

<br/>

## 🌐 Live Demo

Check out the live version:  
👉 [FlashCards Live Demo](https://flash-cards-six-brown.vercel.app/)

<br/>

### ⭐️ Support ⭐️
If you found this project helpful or interesting, please give it a ⭐️! Your support helps to grow the project and boosts visibility. Thank you!
