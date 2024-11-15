import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Banknote, PiggyBank, Target, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const savingsData = [
  { month: 'Jan', amount: 50 },
  { month: 'Feb', amount: 75 },
  { month: 'Mar', amount: 90 },
  { month: 'Apr', amount: 100 },
  { month: 'May', amount: 150 },
  { month: 'Jun', amount: 180 },
  { month: 'July',amount: 100 },
  { month: 'Aug', amount: 80 },
  { month: 'Sep', amount: 120 },
  { month: 'Oct', amount: 190 },
  { month: 'Nov', amount: 90 },
  { month: 'Dec', amount: 150 },
]

const SavingsGoal = ({ title, current, target, icon: Icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        {title}
      </CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">${current}</div>
      <Progress 
        value={(current / target) * 100} 
        className="mt-2"
      />
      <p className="text-xs text-muted-foreground mt-2">
        ${current} of ${target} goal
      </p>
    </CardContent>
  </Card>
)


function Savings() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Your Savings</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SavingsGoal 
          title="Emergency Fund" 
          current={250} 
          target={500} 
          icon={Banknote}
        />
        <SavingsGoal 
          title="New Phone" 
          current={400} 
          target={800} 
          icon={PiggyBank}
        />
        <SavingsGoal 
          title="Summer Trip" 
          current={600} 
          target={1000} 
          icon={Target}
        />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Savings
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,250</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Savings History</CardTitle>
          <CardDescription>
            Your savings growth over the past 6 months
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={savingsData}>
              <XAxis 
                dataKey="month" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Bar 
                dataKey="amount" 
                fill="#3b82f6" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Take control of your savings
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4 text">
          <Link to={'/dashboard/newgoal'} className="flex-1 "><Button className='w-full' >Set New Goal</Button></Link>
          <Link to={'/dashboard/newgoal'} className="flex-1"><Button className='w-full'  >
            Transfer to Savings
          </Button></Link>
          <Link to={'/dashboard/newgoal'} className="flex-1"><Button className='w-full'  >
            View Savings Tips
          </Button></Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default Savings