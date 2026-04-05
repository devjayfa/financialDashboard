export interface User {
    id: number;
    role:string;
    username: string;
    email: string;
    profile: string;
}

export const users:User[] = [

     {
    id: 1,
    role:"user",
    username: "John Doe",
    email: "john@example.com",
    profile: "/user1.avif",
  },
  {
    id: 2,
    role:"user",
    username: "Sarah Lee",
    email: "sarah@example.com",
    profile: "/user2.jpg",
  },
  {
    id: 3,
    role:"user",
    username: "David Smith",
    email: "david@example.com",
    profile: "/user3.webp",
  },
   {
    id: 4,
    role:"admin",
    username: "Admin",
    email: "david@example.com",
    profile: "/admin.avif",
  },

]

export type Transaction = {
  id: number;
  userId: number;
  title: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
};

export const transactions = [
  // ================= USER 1 =================
  // JAN
  { id: 1, userId: 1, title: "Salary", amount: 120000, type: "income", category: "Job", date: "2026-01-01" },
  { id: 2, userId: 1, title: "Food", amount: 10000, type: "expense", category: "Food", date: "2026-01-05" },
  { id: 3, userId: 1, title: "Transport", amount: 5000, type: "expense", category: "Travel", date: "2026-01-10" },

  // FEB
  { id: 4, userId: 1, title: "Salary", amount: 120000, type: "income", category: "Job", date: "2026-02-01" },
  { id: 5, userId: 1, title: "Shopping", amount: 23000, type: "expense", category: "Lifestyle", date: "2026-02-12" },
  { id: 6, userId: 1, title: "Food", amount: 9000, type: "expense", category: "Education", date: "2026-02-15" },

  // MAR
  { id: 7, userId: 1, title: "Salary", amount: 125000, type: "income", category: "Job", date: "2026-03-01" },
  { id: 8, userId: 1, title: "Food", amount: 11000, type: "expense", category: "Food", date: "2026-03-10" },
  { id: 9, userId: 1, title: "Bills", amount: 8000, type: "expense", category: "Bills", date: "2026-03-18" },

  // APR
  { id: 10, userId: 1, title: "Salary", amount: 125000, type: "income", category: "Job", date: "2026-04-01" },
  { id: 11, userId: 1, title: "Travel", amount: 15000, type: "expense", category: "Travel", date: "2026-04-08" },

  // MAY
  { id: 12, userId: 1, title: "Salary", amount: 130000, type: "income", category: "Job", date: "2026-05-01" },
  { id: 13, userId: 1, title: "Food", amount: 12000, type: "expense", category: "Food", date: "2026-05-09" },

  // JUN
  { id: 14, userId: 1, title: "Salary", amount: 130000, type: "income", category: "Job", date: "2026-06-01" },
  { id: 15, userId: 1, title: "Shopping", amount: 20000, type: "expense", category: "Lifestyle", date: "2026-06-11" },

  // JUL
  { id: 16, userId: 1, title: "Salary", amount: 135000, type: "income", category: "Job", date: "2026-07-01" },
  { id: 17, userId: 1, title: "Food", amount: 10000, type: "expense", category: "Food", date: "2026-07-05" },

  // AUG
  { id: 18, userId: 1, title: "Salary", amount: 135000, type: "income", category: "Job", date: "2026-08-01" },
  { id: 19, userId: 1, title: "Travel", amount: 18000, type: "expense", category: "Travel", date: "2026-08-12" },

  // SEP
  { id: 20, userId: 1, title: "Salary", amount: 230000, type: "income", category: "Job", date: "2026-09-01" },
  { id: 21, userId: 1, title: "Food", amount: 27000, type: "expense", category: "Food", date: "2026-09-10" },
 { id: 22, userId: 1, title: "Travel", amount: 67000, type: "expense", category: "Travel", date: "2026-09-10" },
 { id: 23, userId: 1, title: "Travel", amount: 97000, type: "expense", category: "Housing", date: "2026-09-10" },
 { id: 24, userId: 1, title: "Travel", amount: 22000, type: "expense", category: "Lifestyle", date: "2026-09-10" },


  // ================= USER 2 =================
  { id: 22, userId: 2, title: "Salary", amount: 90000, type: "income", category: "Job", date: "2026-01-01" },
  { id: 23, userId: 2, title: "Food", amount: 12000, type: "expense", category: "Food", date: "2026-01-05" },

  { id: 24, userId: 2, title: "Salary", amount: 92000, type: "income", category: "Job", date: "2026-02-01" },
  { id: 25, userId: 2, title: "Rent", amount: 25000, type: "expense", category: "Housing", date: "2026-02-10" },

  { id: 26, userId: 2, title: "Salary", amount: 95000, type: "income", category: "Job", date: "2026-03-01" },
  { id: 27, userId: 2, title: "Shopping", amount: 18000, type: "expense", category: "Lifestyle", date: "2026-03-12" },

  { id: 28, userId: 2, title: "Salary", amount: 95000, type: "income", category: "Job", date: "2026-04-01" },
  { id: 29, userId: 2, title: "Food", amount: 10000, type: "expense", category: "Food", date: "2026-04-09" },

  { id: 30, userId: 2, title: "Salary", amount: 98000, type: "income", category: "Job", date: "2026-05-01" },
  { id: 31, userId: 2, title: "Travel", amount: 15000, type: "expense", category: "Travel", date: "2026-05-15" },

  { id: 32, userId: 2, title: "Salary", amount: 100000, type: "income", category: "Job", date: "2026-06-01" },
  { id: 33, userId: 2, title: "Food", amount: 11000, type: "expense", category: "Food", date: "2026-06-10" },

  { id: 34, userId: 2, title: "Salary", amount: 102000, type: "income", category: "Job", date: "2026-07-01" },
  { id: 35, userId: 2, title: "Shopping", amount: 20000, type: "expense", category: "Lifestyle", date: "2026-07-09" },

  { id: 36, userId: 2, title: "Salary", amount: 105000, type: "income", category: "Job", date: "2026-08-01" },
  { id: 37, userId: 2, title: "Bills", amount: 12000, type: "expense", category: "Housing", date: "2026-08-14" },

  { id: 38, userId: 2, title: "Salary", amount: 108000, type: "income", category: "Job", date: "2026-09-01" },
  { id: 39, userId: 2, title: "Food", amount: 13000, type: "expense", category: "Food", date: "2026-09-12" },


  // ================= USER 3 =================
  { id: 40, userId: 3, title: "Salary", amount: 150000, type: "income", category: "Job", date: "2026-01-01" },
  { id: 41, userId: 3, title: "Food", amount: 15000, type: "expense", category: "Food", date: "2026-01-06" },

  { id: 42, userId: 3, title: "Salary", amount: 152000, type: "income", category: "Job", date: "2026-02-01" },
  { id: 43, userId: 3, title: "Shopping", amount: 20000, type: "expense", category: "Lifestyle", date: "2026-02-09" },

  { id: 44, userId: 3, title: "Salary", amount: 155000, type: "income", category: "Job", date: "2026-03-01" },
  { id: 45, userId: 3, title: "Food", amount: 13000, type: "expense", category: "Food", date: "2026-03-10" },

  { id: 46, userId: 3, title: "Salary", amount: 158000, type: "income", category: "Job", date: "2026-04-01" },
  { id: 47, userId: 3, title: "Travel", amount: 18000, type: "expense", category: "Travel", date: "2026-04-15" },

  { id: 48, userId: 3, title: "Salary", amount: 160000, type: "income", category: "Job", date: "2026-05-01" },
  { id: 49, userId: 3, title: "Food", amount: 14000, type: "expense", category: "Food", date: "2026-05-11" },

  { id: 50, userId: 3, title: "Salary", amount: 162000, type: "income", category: "Job", date: "2026-06-01" },
  { id: 51, userId: 3, title: "Shopping", amount: 22000, type: "expense", category: "Lifestyle", date: "2026-06-09" },

  { id: 52, userId: 3, title: "Salary", amount: 165000, type: "income", category: "Job", date: "2026-07-01" },
  { id: 53, userId: 3, title: "Food", amount: 15000, type: "expense", category: "Food", date: "2026-07-08" },

  { id: 54, userId: 3, title: "Salary", amount: 168000, type: "income", category: "Job", date: "2026-08-01" },
  { id: 55, userId: 3, title: "Travel", amount: 20000, type: "expense", category: "Travel", date: "2026-08-14" },

  { id: 56, userId: 3, title: "Salary", amount: 170000, type: "income", category: "Job", date: "2026-09-01" },
  { id: 57, userId: 3, title: "Food", amount: 16000, type: "expense", category: "Food", date: "2026-09-10" },
];