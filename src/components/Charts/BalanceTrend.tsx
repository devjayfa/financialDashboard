import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';


interface Props {
  incomeData: number[];
  expenseData: number[];
  months: string[];
}

export default function BalanceTrend({ incomeData, expenseData, months }: Props) {
  return (
    <>
    <div className='bg-white w-full rounded-xl shadow p-4 hidden lg:block'>
      <h2 className="text-lg font-semibold mb-3">Income vs Expense</h2>

      <Box sx={{ width: '100%', height: 300 }}>
        <LineChart
          series={[
            { data: incomeData, label: 'Income' },
            { data: expenseData, label: 'Expense' },
          ]}
          xAxis={[{ scaleType: 'point', data: months }]}
        />
      </Box>
    </div>
    <div className='bg-white w-full rounded-xl shadow-lg py-5 px-1 block lg:hidden h-82.5'>
      <h2 className="text-lg font-semibold mb-3 px-4">Income vs Expense</h2>

     <Box sx={{ width: '100%', height: 300 }}>
  <LineChart
    series={[
      { data: incomeData, label: 'Income' },
      { data: expenseData, label: 'Expense' },
    ]}
    xAxis={[{ scaleType: 'point', data: months }]}
    
    sx={{
      "& .MuiChartsAxis-root": {
        display: "none",
      },
    }}
  />
</Box>
    </div>
    </>
  );
}