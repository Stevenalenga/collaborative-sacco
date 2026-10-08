export const org = {
  name: "Collaborative SACCO",
  shortName: "CAC SACCO",
  legalName: "Collaborative Action for Childcare Savings & Cooperative Society",
  tagline: "Save. Grow. Thrive. Together.",
  heroLine: "Building Financial Security for the Childcare Sector",
  description:
    "A digital financial cooperative designed for childcare workers, caregivers, centres, and entrepreneurs — savings, affordable credit, and financial literacy in one place.",
  parent: "Collaborative Action for Childcare",
  founder: "Uthabiti Africa",
  email: "sacco@uthabitiafrica.org",
  phone: "+254 714 262 626",
  whatsapp: "+254714262626",
  hours: "Monday – Friday, 8:00am – 5:00pm",
  address: "Mwaka Estate, House 3431, Suna Close, Dagoretti Corner",
  postal: "P.O. Box 3493, City Square 00200, Nairobi, Kenya",
};

export const stats = [
  { value: "2,500+", label: "Members in the network" },
  { value: "KES 185M", label: "Member savings mobilised" },
  { value: "KES 96M", label: "Loans to the sector" },
  { value: "11,000+", label: "Women in childcare reached" },
];

export const pillars = [
  {
    title: "Save",
    body: "Build your financial future through structured savings designed around how childcare work actually pays.",
  },
  {
    title: "Borrow",
    body: "Access affordable loans for emergencies, school fees, assets, businesses, and centre growth.",
  },
  {
    title: "Grow",
    body: "Earn on shares, plan for dividends, and strengthen the assets that keep your household and centre stable.",
  },
  {
    title: "Connect",
    body: "Belong to a cooperative community that understands caregivers, workers, and childcare enterprises.",
  },
];

export const whyPoints = [
  "Affordable financial services built for the childcare sector",
  "Loan products for workers, entrepreneurs, and centres",
  "Digital member services you can use from a phone",
  "Transparent, cooperative financial management",
  "Financial education through CAC Financial Academy",
  "Community-driven governance and shared ownership",
];

export const memberTypes = [
  {
    title: "Individual Caregiver",
    body: "Parents, domestic workers, and household caregivers who want a safe place to save and borrow.",
    products: ["Emergency loan", "School fees loan", "Personal development loan"],
  },
  {
    title: "Childcare Worker",
    body: "Frontline practitioners in centres and homes seeking emergency, education, and livelihood support.",
    products: ["Emergency loan", "School fees loan", "Salary advance"],
  },
  {
    title: "Childcare Entrepreneur",
    body: "Owner-operators growing home-based or independent childcare businesses.",
    products: ["Business loan", "Asset financing", "Development loan"],
  },
  {
    title: "Childcare Centre",
    body: "Registered centres financing equipment, renovations, materials, payroll, and expansion.",
    products: ["Centre growth loan", "Working capital", "Payroll support"],
  },
  {
    title: "Childcare Organisation",
    body: "NGOs and community organisations supporting the sector with institutional products.",
    products: ["Institutional savings", "Programme financing"],
  },
  {
    title: "Sector Partner",
    body: "Allies investing in the cooperative’s capital, training, and financial inclusion work.",
    products: ["Shareholding", "Partnership savings"],
  },
];

export const savingsProducts = [
  {
    slug: "regular",
    name: "Regular Savings",
    rate: "Earn monthly",
    min: "From KES 500 / month",
    body: "Your core SACCO account. Deposit at your own pace, track every contribution, and build a buffer that stays yours.",
    points: ["Flexible monthly contributions", "M-Pesa deposits", "Withdrawals subject to SACCO rules"],
  },
  {
    slug: "development",
    name: "Development Savings",
    rate: "Goal-based",
    min: "From KES 1,000 / month",
    body: "Earmark funds for a home improvement, a course, or a centre upgrade so day-to-day needs do not eat the plan.",
    points: ["Named savings goals", "Progress tracking", "Optional lock-in periods"],
  },
  {
    slug: "emergency",
    name: "Emergency Fund",
    rate: "Ready access",
    min: "From KES 200 / month",
    body: "A dedicated cushion for illness, family events, and unexpected gaps between pay cycles.",
    points: ["Priority withdrawal review", "Low minimum", "Separate from regular savings"],
  },
  {
    slug: "family",
    name: "Children & Family Savings",
    rate: "Long-term",
    min: "From KES 300 / month",
    body: "Save toward school fees, nutrition, and family milestones without mixing them into operating cash.",
    points: ["School-term reminders", "Beneficiary naming", "Statement downloads"],
  },
  {
    slug: "fixed",
    name: "Fixed Deposits",
    rate: "Higher return",
    min: "From KES 10,000",
    body: "Lock a lump sum for a defined term and earn a stronger return than regular savings.",
    points: ["3, 6, or 12 month terms", "Fixed interest", "Auto-renewal option"],
  },
  {
    slug: "shares",
    name: "Share Capital",
    rate: "Ownership",
    min: "Minimum KES 5,000",
    body: "Your ownership stake in the cooperative. Shares determine membership standing and dividend participation.",
    points: ["Required for membership", "Dividend eligible", "Builds borrowing capacity"],
  },
];

export const loanProducts = [
  {
    slug: "emergency",
    name: "Emergency Loan",
    rate: "1% per month",
    term: "Up to 6 months",
    max: "Up to 2× savings",
    body: "Fast access to funds when life will not wait — medical bills, family emergencies, and sudden income gaps.",
  },
  {
    slug: "development",
    name: "Development Loan",
    rate: "12% p.a.",
    term: "Up to 36 months",
    max: "Up to 3× savings",
    body: "Longer-term financing for personal and household development, including home improvements and major purchases.",
  },
  {
    slug: "school-fees",
    name: "School Fees Loan",
    rate: "10% p.a.",
    term: "Aligned to school terms",
    max: "Based on fees invoice",
    body: "Pay school and training fees on time. Designed around term calendars rather than generic monthly cycles.",
  },
  {
    slug: "asset",
    name: "Asset Financing",
    rate: "14% p.a.",
    term: "Up to 48 months",
    max: "Subject to appraisal",
    body: "Finance equipment, motorbikes, appliances, and other assets that improve livelihood or centre quality.",
  },
  {
    slug: "business",
    name: "Business Loan",
    rate: "13% p.a.",
    term: "Up to 24 months",
    max: "Up to 3× savings",
    body: "Working capital and growth finance for childcare micro-enterprises and related businesses.",
  },
  {
    slug: "centre",
    name: "Childcare Centre Growth Loan",
    rate: "12% p.a.",
    term: "Up to 48 months",
    max: "Subject to appraisal",
    signature: true,
    body: "Our signature product. Finance equipment, renovations, learning materials, staff facilities, and centre expansion.",
  },
  {
    slug: "advance",
    name: "Salary / Income Advance",
    rate: "A small facility fee",
    term: "Until next pay cycle",
    max: "Up to 50% of income",
    body: "A short bridge when pay is delayed or uneven — common in informal and centre-based childcare work.",
  },
];

export const membershipRequirements = [
  "Be 18 years or older, or register as a childcare centre / organisation",
  "Work in, own, or support the childcare and care economy",
  "Complete the membership application and KYC documents",
  "Pay the registration fee and minimum share capital",
  "Commit to regular savings contributions",
  "Agree to the SACCO by-laws and code of conduct",
];

export const membershipBenefits = [
  "A regulated cooperative home for your savings",
  "Access to sector-specific, affordable credit",
  "Share ownership and annual dividend participation",
  "Digital statements, loan tracking, and M-Pesa payments",
  "Guarantor support within the childcare community",
  "Free access to CAC Financial Academy",
  "A voice in cooperative governance",
];

export const joinSteps = [
  { step: "01", title: "Choose your member type", body: "Caregiver, worker, entrepreneur, centre, organisation, or partner." },
  { step: "02", title: "Complete the application", body: "Tell us about you, your work, and your next of kin." },
  { step: "03", title: "Submit KYC documents", body: "National ID, photos, and employment or centre documents." },
  { step: "04", title: "Pay shares & registration", body: "Minimum share capital and joining fee via M-Pesa." },
  { step: "05", title: "Get your member number", body: "Once approved, you can save, borrow, and log in to the portal." },
];

export const academyCourses = [
  {
    title: "Saving with intention",
    level: "Start here",
    duration: "25 min",
    body: "How to set a contribution you can keep, even when income is irregular.",
  },
  {
    title: "Budgeting for care work",
    level: "Start here",
    duration: "30 min",
    body: "A simple household and centre cash plan that respects term-time peaks.",
  },
  {
    title: "Understanding SACCO loans",
    level: "Core",
    duration: "35 min",
    body: "Interest, guarantors, eligibility, and how to borrow without strain.",
  },
  {
    title: "Managing debt well",
    level: "Core",
    duration: "30 min",
    body: "How to sequence repayments and protect your savings when cash is tight.",
  },
  {
    title: "Starting a childcare business",
    level: "Grow",
    duration: "45 min",
    body: "Costing, quality, registration, and the money side of opening a centre.",
  },
  {
    title: "Business accounting basics",
    level: "Grow",
    duration: "40 min",
    body: "Records, pricing, and separating personal cash from the centre’s books.",
  },
  {
    title: "Building creditworthiness",
    level: "Grow",
    duration: "20 min",
    body: "What loan officers look for — savings history, shares, and repayment.",
  },
  {
    title: "Planning for retirement",
    level: "Next",
    duration: "25 min",
    body: "Long-term savings, shares, and how cooperatives can support later life.",
  },
];

export const faqs = [
  {
    q: "Who can join Collaborative SACCO?",
    a: "Childcare workers, caregivers, centre owners, entrepreneurs, childcare organisations, and sector partners who complete KYC and buy the minimum share capital.",
  },
  {
    q: "Is this a public website or a banking system?",
    a: "This site is the public home of the SACCO plus a member portal preview. Live savings, loans, and M-Pesa posting will connect to the SACCO core when the backend is ready. Nothing here moves real money yet.",
  },
  {
    q: "How do I save money?",
    a: "Once you are an approved member, you can deposit from the portal or via M-Pesa Paybill (to be issued at onboarding). Contributions can go to regular, development, emergency, family, or share accounts.",
  },
  {
    q: "How much can I borrow?",
    a: "Eligibility depends on your savings, share capital, membership length, existing loans, and guarantor capacity. Use the loan calculator for an estimate, then apply for a formal appraisal.",
  },
  {
    q: "Do I need guarantors?",
    a: "Most loans above a small emergency threshold require fellow members to guarantee. Guarantors can accept or decline from their portal.",
  },
  {
    q: "What documents do I need?",
    a: "National ID, a passport photo, KRA PIN, proof of childcare work or centre registration, and next-of-kin details. Centres also submit registration and ownership documents.",
  },
  {
    q: "How are dividends paid?",
    a: "Dividends are declared after the annual accounts, based on share capital and SACCO performance. Members can view history and statements in the portal.",
  },
  {
    q: "Is my money safe?",
    a: "The SACCO is being established as a member-owned cooperative with maker-checker controls, audit trails, and governance by a board and credit committee. Full regulatory registration will follow Kenyan cooperative requirements.",
  },
];

export const governance = [
  {
    title: "Board of Directors",
    body: "Sets strategy, approves policy, and oversees financial soundness on behalf of members.",
  },
  {
    title: "Supervisory Committee",
    body: "Independent internal oversight of operations, compliance, and member complaints.",
  },
  {
    title: "Credit Committee",
    body: "Appraises loan applications, guarantors, and exceptions within approved policy.",
  },
  {
    title: "Management",
    body: "Runs day-to-day membership, savings, lending, and member support.",
  },
];

export const demoMember = {
  name: "Jane Achieng",
  firstName: "Jane",
  memberNo: "CAC-000245",
  status: "Active",
  kyc: "Verified" as const,
  phone: "0712 345 678",
  email: "jane.achieng@example.com",
  occupation: "Lead Caregiver",
  employer: "St. Anne's Childcare Centre",
  county: "Nairobi",
  nationality: "Kenyan",
  joined: "2024-03-12",
  nextOfKin: "Peter Achieng — Spouse",
  beneficiaries: "Amina Achieng (daughter), Eli Achieng (son)",
  totals: {
    savings: 185_500,
    savingsGrowth: 12.5,
    shares: 25_000,
    loan: 320_000,
    available: 150_000,
    wallet: 45_200,
  },
  accounts: [
    { name: "Regular Savings", balance: 120_000 },
    { name: "Development Savings", balance: 40_000 },
    { name: "Emergency Fund", balance: 15_500 },
    { name: "Share Capital", balance: 25_000 },
  ],
  transactions: [
    { date: "2026-09-02", label: "Savings deposit", amount: 10_000, type: "credit" as const },
    { date: "2026-08-31", label: "Loan repayment", amount: -15_000, type: "debit" as const },
    { date: "2026-08-28", label: "Savings deposit", amount: 5_000, type: "credit" as const },
    { date: "2026-08-15", label: "Share top-up", amount: 2_000, type: "credit" as const },
    { date: "2026-08-01", label: "Loan repayment", amount: -15_000, type: "debit" as const },
    { date: "2026-07-20", label: "Emergency fund", amount: 1_500, type: "credit" as const },
  ],
  loans: [
    {
      id: "LN-00412",
      product: "Development Loan",
      principal: 400_000,
      balance: 320_000,
      rate: "12% p.a.",
      nextDue: "2026-09-10",
      instalment: 15_000,
      status: "Performing",
    },
  ],
  guarantors: [
    { name: "Mary Wanjiku", memberNo: "CAC-000118", amount: 80_000, status: "Accepted" },
    { name: "Samuel Otieno", memberNo: "CAC-000087", amount: 70_000, status: "Accepted" },
  ],
  guaranteeing: [
    { name: "Faith Njeri", memberNo: "CAC-000301", amount: 40_000, status: "Active" },
  ],
  dividends: [
    { year: 2026, shares: 25_000, rate: "10%", amount: 2_500 },
    { year: 2025, shares: 21_000, rate: "10%", amount: 2_100 },
    { year: 2024, shares: 18_000, rate: "10%", amount: 1_800 },
  ],
};

export const demoCredentials = {
  memberNo: "CAC-000245",
  password: "demo123",
};
