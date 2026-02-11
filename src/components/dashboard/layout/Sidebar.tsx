import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Beef,
    Activity,
    Wallet,
    Calendar,
    Package,
    FileText,
    User,
    LogOut,
    Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Beef, label: 'My Livestock', href: '/dashboard/livestock' },
    { icon: Activity, label: 'Health Records', href: '/dashboard/health' },
    { icon: Wallet, label: 'Budget & Expenses', href: '/dashboard/budget' },
    { icon: Calendar, label: 'Farm Planner', href: '/dashboard/planner' },
    { icon: Package, label: 'Inventory', href: '/dashboard/inventory' },
    { icon: FileText, label: 'Reports', href: '/dashboard/reports' },
    { icon: User, label: 'Profile', href: '/dashboard/profile' },
];

export default function Sidebar() {
    const location = useLocation();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Trigger */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                    <Menu className="h-6 w-6" />
                </Button>
            </div>

            {/* Backdrop for mobile */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside className={cn(
                "fixed top-0 left-0 z-40 h-screen w-[260px] bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out lg:translate-x-0",
                isMobileOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex flex-col h-full">
                    {/* Logo Area */}
                    <div className="h-[70px] flex items-center px-6 border-b border-gray-50">
                        <span className="text-2xl font-bold text-[#590156]">StockWise</span>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                        {sidebarItems.map((item) => {
                            const isActive = location.pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                                        isActive
                                            ? "bg-[#590156] text-white shadow-md shadow-purple-900/10"
                                            : "text-gray-600 hover:bg-[#F3E8F3] hover:text-[#590156]"
                                    )}
                                >
                                    <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-current")} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer / Logout */}
                    <div className="p-4 border-t border-gray-50">
                        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors text-sm font-medium">
                            <LogOut className="h-5 w-5" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
