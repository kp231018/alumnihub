# 💼 Jobs Module

A complete, production-ready job listings feature built with React + TypeScript using a feature-based architecture.

## 📁 Module Structure

```
src/modules/jobs/
├── components/          # Reusable UI components
│   ├── JobCard.tsx     # Job listing card
│   ├── JobFilters.tsx  # Filter controls
│   └── EmptyState.tsx  # Empty state UI
├── pages/              # Route pages
│   ├── JobsListPage.tsx    # Main jobs listing
│   └── JobDetailsPage.tsx  # Single job details
├── data/               # Mock data
│   └── jobs.mock.ts    # 8 demo jobs
├── types/              # TypeScript definitions
│   └── job.types.ts    # Job interfaces
├── routes.tsx          # Route definitions
└── index.ts            # Module exports
```

## ✨ Features

### 📋 Jobs Listing Page (`/jobs`)
- Grid layout with responsive design
- Job cards showing:
  - Title, company, location
  - Job type badge (Internship/Full-time)
  - Salary (if available)
  - Posted date
- Click to navigate to details

### 🔍 Advanced Filtering
- **Job Type**: All / Internship / Full-time
- **Location**: All + unique locations from jobs
- Real-time filtering (client-side)
- Active filters display
- Clear all filters button
- Shows result count

### 📄 Job Details Page (`/jobs/:id`)
- Full job information:
  - Title, company, location
  - Salary and posted date
  - Complete description
  - Requirements list (with checkmarks)
- Apply Now button (demo alert)
- Back to jobs navigation
- 404 handling for invalid job IDs
- Application tips section

### 🎨 UI/UX
- Clean Tailwind CSS styling
- Fully responsive (mobile + tablet + desktop)
- Smooth hover effects
- Color-coded job type badges
- Empty state with helpful message
- Loading states ready (can add spinner)

## 🚀 Usage

### 1. Already Integrated in App.jsx
The routes are already added to your main application:

```jsx
import { JobsListPage, JobDetailsPage } from './modules/jobs'

// In Routes:
<Route path="/jobs" element={<JobsListPage />} />
<Route path="/jobs/:id" element={<JobDetailsPage />} />
```

### 2. Navigate to Jobs
- Click "Jobs" in the navbar
- Or visit: `http://localhost:5173/jobs`

### 3. Browse Jobs
- View all 8 demo jobs
- Filter by type or location
- Click any job card to see details

## 📊 Mock Data

8 realistic jobs included:
1. **Frontend Developer** - TechCorp (Bangalore, Full-time)
2. **Software Engineering Intern** - StartupXYZ (Remote, Internship)
3. **Full Stack Developer** - CloudNet (Pune, Full-time)
4. **UI/UX Design Intern** - CreativeMinds (Mumbai, Internship)
5. **Backend Engineer** - DataFlow (Hyderabad, Full-time)
6. **Mobile App Dev Intern** - AppNova (Remote, Internship)
7. **DevOps Engineer** - InfraSecure (Bangalore, Full-time)
8. **Data Science Intern** - AI Innovations (Chennai, Internship)

## 🔧 Customization

### Add More Jobs
Edit `data/jobs.mock.ts`:

```typescript
export const MOCK_JOBS: Job[] = [
  {
    id: '9',
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City',
    type: 'Full-time', // or 'Internship'
    salary: '₹XX-XX LPA',
    postedDate: '2026-01-30',
    description: 'Job description here...',
    requirements: [
      'Requirement 1',
      'Requirement 2',
    ],
  },
  // ... existing jobs
];
```

### Modify Filters
Edit `components/JobFilters.tsx` to add:
- Salary range filter
- Experience level filter
- Skills/tags filter

### Connect to Backend
Replace mock data in pages:
```typescript
// Instead of: import { MOCK_JOBS } from '../data/jobs.mock';
// Use: const { data: jobs } = useQuery('jobs', fetchJobs);
```

## 🎯 Key Components

### JobCard
Displays job summary with hover effects and navigation

### JobFilters
Dropdown filters with active filter display and clear button

### EmptyState
Shown when no jobs match filters or invalid job ID

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

## ✅ Production Ready

- ✅ No console errors
- ✅ TypeScript type-safe
- ✅ Clean, commented code
- ✅ Reusable components
- ✅ Proper navigation
- ✅ 404 handling
- ✅ Responsive design
- ✅ Accessible markup
- ✅ Demo data included

## 🧪 Test Scenarios

1. **View all jobs**: Navigate to `/jobs`
2. **Filter by type**: Select "Internship" → should show 4 jobs
3. **Filter by location**: Select "Remote" → should show 2 jobs
4. **Combined filters**: Internship + Remote → 2 jobs
5. **View details**: Click any job card
6. **Invalid ID**: Visit `/jobs/999` → shows not found
7. **Navigation**: Back button returns to listing
8. **Apply**: Click "Apply Now" → shows demo alert

## 🔗 Navigation Flow

```
/jobs
  └─ Job Cards (Grid)
      └─ Click Card
          └─ /jobs/:id
              ├─ Back Button → /jobs
              └─ Apply Now → Alert
```

## 💡 Future Enhancements

- [ ] Add search functionality
- [ ] Bookmarking/Save jobs
- [ ] Share job via link
- [ ] Apply with resume upload
- [ ] Real-time job posting
- [ ] Email notifications
- [ ] Pagination for large datasets
- [ ] Sort by date/salary

## 📞 Support

For questions or customization help, refer to the inline comments in each file.

---

**Built with** ❤️ **using React + TypeScript + Tailwind CSS**
