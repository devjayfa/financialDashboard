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
    profile: "/user3.jpg",
  },
   {
    id: 4,
    role:"Admin",
    username: "David Marcline",
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
 
  { id: 1, userId: 1, title: "Salary", amount: 120000, type: "income", category: "Job", date: "2026-01-01" },
  { id: 2, userId: 1, title: "Food", amount: 10000, type: "expense", category: "Food", date: "2026-01-05" },
  { id: 3, userId: 1, title: "Transport", amount: 5000, type: "expense", category: "Travel", date: "2026-01-10" },

 
  { id: 4, userId: 1, title: "Salary", amount: 120000, type: "income", category: "Job", date: "2026-02-01" },
  { id: 5, userId: 1, title: "Shopping", amount: 15000, type: "expense", category: "Lifestyle", date: "2026-02-12" },
  { id: 6, userId: 1, title: "Food", amount: 9000, type: "expense", category: "Food", date: "2026-02-15" },

 
  { id: 7, userId: 2, title: "Freelance", amount: 80000, type: "income", category: "Side Income", date: "2026-01-08" },
  { id: 8, userId: 2, title: "Rent", amount: 25000, type: "expense", category: "Housing", date: "2026-01-20" },
  { id: 9, userId: 2, title: "Food", amount: 12000, type: "expense", category: "Food", date: "2026-01-25" },

  
  { id: 10, userId: 2, title: "Salary", amount: 90000, type: "income", category: "Job", date: "2026-02-01" },
  { id: 11, userId: 2, title: "Shopping", amount: 18000, type: "expense", category: "Lifestyle", date: "2026-02-10" },
  { id: 12, userId: 2, title: "Transport", amount: 7000, type: "expense", category: "Travel", date: "2026-02-18" },

  
  { id: 13, userId: 3, title: "Salary", amount: 150000, type: "income", category: "Job", date: "2026-01-01" },
  { id: 14, userId: 3, title: "Food", amount: 15000, type: "expense", category: "Food", date: "2026-01-06" },
  { id: 15, userId: 3, title: "Gym", amount: 8000, type: "expense", category: "Health", date: "2026-01-12" },

  
  { id: 16, userId: 3, title: "Salary", amount: 150000, type: "income", category: "Job", date: "2026-02-01" },
  { id: 17, userId: 3, title: "Shopping", amount: 20000, type: "expense", category: "Lifestyle", date: "2026-02-09" },
  { id: 18, userId: 3, title: "Food", amount: 13000, type: "expense", category: "Food", date: "2026-02-14" },
];