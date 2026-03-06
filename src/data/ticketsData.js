const ticketsData = [
  {
    id: 1,
    title: "Login Authentication Failure",
    description:
      "Multiple users reporting inability to log in. Authentication server returning 503 errors intermittently during peak hours.",
    customer: "Rahim Ahmed",
    priority: "High",
    status: "Open",
    createdAt: "2025-01-15",
  },
  {
    id: 2,
    title: "Dashboard Charts Not Rendering",
    description:
      "Analytics dashboard charts fail to display data correctly. Charts show a loading spinner indefinitely after page refresh.",
    customer: "Fatima Begum",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-01-16",
  },
  {
    id: 3,
    title: "Payment Gateway Timeout",
    description:
      "Payment processing takes over 30 seconds and frequently times out. Customers are unable to complete their purchases.",
    customer: "Karim Hassan",
    priority: "High",
    status: "Open",
    createdAt: "2025-01-17",
  },
  {
    id: 4,
    title: "Email Notifications Delayed",
    description:
      "Order confirmation emails are delayed by 2-3 hours. Some customers report not receiving any notification emails at all.",
    customer: "Nadia Islam",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-01-18",
  },
  {
    id: 5,
    title: "Mobile App Crash on Startup",
    description:
      "Android app crashes immediately upon launch on devices running Android 12 and above. iOS version is unaffected by this issue.",
    customer: "Tanvir Rahman",
    priority: "High",
    status: "Open",
    createdAt: "2025-01-19",
  },
  {
    id: 6,
    title: "Search Returns Empty Results",
    description:
      "Product search functionality returns no results regardless of the query. Elasticsearch index may require a complete rebuild.",
    customer: "Sabrina Akter",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-01-20",
  },
  {
    id: 7,
    title: "Profile Image Upload Error",
    description:
      "Users cannot upload profile pictures. The server returns a 413 error even for image files well under the 1MB size limit.",
    customer: "Imran Khan",
    priority: "Low",
    status: "Open",
    createdAt: "2025-01-21",
  },
  {
    id: 8,
    title: "Slow Page Load Performance",
    description:
      "Homepage takes more than 8 seconds to fully load. Significant performance degradation observed after the latest deployment.",
    customer: "Reshma Khatun",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-01-22",
  },
  {
    id: 9,
    title: "CSV Data Export Corrupted",
    description:
      "CSV export feature generates corrupted files that cannot be opened in Excel or Google Sheets. JSON export works correctly.",
    customer: "Arif Hossain",
    priority: "Low",
    status: "Open",
    createdAt: "2025-01-23",
  },
  {
    id: 10,
    title: "Two-Factor SMS Not Delivered",
    description:
      "SMS verification codes for two-factor authentication are not being delivered. Third-party SMS provider may be experiencing outage.",
    customer: "Maliha Sultana",
    priority: "High",
    status: "Open",
    createdAt: "2025-01-24",
  },
  {
    id: 11,
    title: "Inventory Count Mismatch",
    description:
      "Product inventory displays incorrect stock quantities. Significant discrepancy exists between database records and the storefront UI.",
    customer: "Zahid Hasan",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-01-25",
  },
  {
    id: 12,
    title: "Dark Mode Toggle Broken",
    description:
      "The dark mode toggle in user settings does not persist across browser sessions. It always reverts to light mode upon page refresh.",
    customer: "Tasnim Jahan",
    priority: "Low",
    status: "Open",
    createdAt: "2025-01-26",
  },
];

export default ticketsData;