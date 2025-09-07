# 🌍 Lingo - Language Learning Platform

A modern, gamified language learning application built with Next.js 14, featuring interactive lessons, progress tracking, and a comprehensive admin panel for content management.

## ✨ Features

### 🎯 Core Learning Experience
- **Interactive Lessons**: Structured learning with units, lessons, and challenges
- **Multiple Challenge Types**: 
  - **SELECT**: Multiple choice questions
  - **ASSIST**: Audio-assisted learning with visual cues
- **Gamification**: Hearts system, points, and progress tracking
- **Audio Support**: Pronunciation guides and sound effects
- **Practice Mode**: Regain hearts without losing progress

### 🏆 Engagement Features
- **Leaderboard**: Compete with other learners
- **Quests System**: Daily challenges and XP goals
- **Shop**: Spend points on hearts and premium features
- **Progress Tracking**: Visual progress bars and completion statistics

### 💳 Premium Features
- **Stripe Integration**: Subscription management
- **Pro Mode**: Unlimited hearts and advanced features
- **Promotional System**: Upgrade prompts for free users

### 🛠️ Admin Panel
- **Content Management**: Full CRUD operations for courses, units, lessons, challenges, and options
- **React Admin**: Professional admin interface
- **Course Structure**: Hierarchical organization (Courses → Units → Lessons → Challenges)

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Admin** - Admin panel framework

### Backend & Database
- **Drizzle ORM** - Type-safe database operations
- **PostgreSQL** - Primary database (Neon serverless)
- **Next.js API Routes** - Serverless API endpoints

### Authentication & Payments
- **Clerk** - User authentication and management
- **Stripe** - Payment processing and subscriptions

### State Management & Utilities
- **Zustand** - Lightweight state management
- **React Use** - Useful React hooks
- **Sonner** - Toast notifications
- **React Confetti** - Celebration animations

## 📁 Project Structure

```
lingo/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Main app routes
│   │   ├── courses/             # Course selection
│   │   ├── learn/               # Learning interface
│   │   ├── leaderboard/         # User rankings
│   │   ├── quests/              # Daily challenges
│   │   └── shop/                # Points marketplace
│   ├── (marketing)/             # Landing page
│   ├── admin/                   # Admin panel
│   ├── api/                     # API endpoints
│   └── lesson/                  # Lesson components
├── components/                   # Reusable components
│   ├── modals/                  # Modal dialogs
│   └── ui/                      # UI components
├── db/                          # Database schema & queries
├── lib/                         # Utility functions
├── store/                       # Zustand stores
├── actions/                     # Server actions
└── public/                      # Static assets
```

## 🗄️ Database Schema

The application uses a hierarchical structure:

- **Courses** → **Units** → **Lessons** → **Challenges** → **Challenge Options**
- **User Progress**: Tracks hearts, points, and active course
- **Challenge Progress**: Individual challenge completion
- **User Subscriptions**: Stripe integration for premium features

## 🎮 Learning Flow

1. **Course Selection**: Choose from available languages (Spanish, Italian, French, Croatian)
2. **Unit Progression**: Complete units in order
3. **Lesson Challenges**: Interactive exercises with immediate feedback
4. **Progress Tracking**: Visual progress indicators and statistics
5. **Gamification**: Earn points, maintain hearts, unlock achievements

## 🛡️ Authentication & Authorization

- **Clerk Integration**: Secure user authentication
- **Admin Protection**: Role-based access control
- **Session Management**: Persistent user sessions

## 💰 Monetization

- **Freemium Model**: Free tier with limited hearts
- **Premium Subscriptions**: Unlimited hearts and features
- **Points Economy**: Earn and spend points on hearts
- **Stripe Integration**: Secure payment processing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Clerk account for authentication
- Stripe account for payments

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lingo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   STRIPE_API_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Database Setup**
   ```bash
   npm run db:push    # Push schema to database
   npm run db:seed    # Seed with initial data
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:studio` - Open Drizzle Studio
- `npm run db:push` - Push schema changes
- `npm run db:seed` - Seed database
- `npm run db:reset` - Reset database
- `npm run db:prod` - Production database operations

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme switching support
- **Accessibility**: ARIA-compliant components
- **Animations**: Smooth transitions and micro-interactions
- **Audio Feedback**: Sound effects for correct/incorrect answers

## 🔧 Configuration

### Admin Panel
Access the admin panel at `/admin` (requires admin privileges)
- Manage courses, units, lessons, and challenges
- Create and edit content through intuitive forms
- View and manage user data

### Customization
- Modify supported languages in `scripts/seed.ts`
- Adjust gamification parameters in `constants.ts`
- Customize UI themes in `tailwind.config.ts`

## 📱 Mobile Support

- **Progressive Web App**: Installable on mobile devices
- **Touch-Friendly**: Optimized for touch interactions
- **Responsive Layout**: Adapts to all screen sizes
- **Offline Capability**: Core features work offline

## 🚀 Deployment

The application is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Any Node.js hosting platform**

### Production Checklist
- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Set up Stripe webhooks
- [ ] Configure Clerk production keys
- [ ] Run database migrations
- [ ] Test payment flows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by popular language learning platforms
- Uses open-source libraries and frameworks

---

**Happy Learning! 🌍📚**
