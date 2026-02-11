import DashboardLayout from './layout/DashboardLayout';
import SummaryCard from './widgets/SummaryCard';
import LivestockChart from './widgets/LivestockChart';
import QuickActionsCard from './widgets/QuickActionsCard';
import HealthAlertsCard from './widgets/HealthAlertsCard';
import UpcomingTasksCard from './widgets/UpcomingTasksCard';
import RecentActivityCard from './widgets/RecentActivityCard';
import BudgetCard from './widgets/BudgetCard';
import { Beef, Stethoscope, AlertTriangle, Wallet } from 'lucide-react';

export default function FarmerDashboard() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Welcome Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Good Morning, David</h2>
                    <p className="text-gray-500">Here's your farm's performance update.</p>
                </div>

                {/* Top Summary Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SummaryCard
                        label="Total Livestock"
                        value="248"
                        trend="+12"
                        trendUp={true}
                        icon={Beef}
                        iconColor="text-purple-600"
                        iconBg="bg-purple-100"
                        accentColor="from-purple-500 to-indigo-500"
                    />
                    <SummaryCard
                        label="Healthy Animals"
                        value="93.1%"
                        trend="+2.1%"
                        trendUp={true}
                        icon={Stethoscope}
                        iconColor="text-green-600"
                        iconBg="bg-green-100"
                        accentColor="from-green-400 to-emerald-600"
                    />
                    <SummaryCard
                        label="Need Attention"
                        value="5"
                        trend="-3"
                        trendUp={false} // Good that it's down, but structurally 'down' arrow
                        icon={AlertTriangle}
                        iconColor="text-red-600"
                        iconBg="bg-red-100"
                        accentColor="from-orange-500 to-red-500"
                    />
                    <SummaryCard
                        label="Monthly Expenses"
                        value="$1,234"
                        trend="76% of budget"
                        trendUp={true} // Just for arrow direction
                        icon={Wallet}
                        iconColor="text-pink-600"
                        iconBg="bg-pink-100"
                        accentColor="from-pink-500 to-rose-500"
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column (Main Charts/Feeds) - Spans 2 cols */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Row: Quick Actions + Chart */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[220px]">
                            <QuickActionsCard />
                            <LivestockChart />
                        </div>

                        {/* Row: Health Alerts + Recent Activity */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <HealthAlertsCard />
                            <RecentActivityCard />
                        </div>
                    </div>

                    {/* Right Column (Side Widgets) - Spans 1 col */}
                    <div className="space-y-6">
                        <div className="h-[300px]">
                            <BudgetCard />
                        </div>
                        <div className="h-[350px]">
                            <UpcomingTasksCard />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
