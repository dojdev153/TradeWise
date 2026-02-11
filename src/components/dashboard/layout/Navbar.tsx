import { Bell, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
    return (
        <header className="h-[70px] bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
            {/* Left: Page Title (Dynamic placeholder for now) */}
            <h1 className="text-2xl font-bold text-gray-800 hidden md:block">
                Dashboard
            </h1>

            {/* Right: Actions */}
            <div className="flex items-center gap-4 ml-auto">
                {/* Search Bar */}
                <div className="relative hidden md:block w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search..."
                        className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-full h-10"
                    />
                </div>

                {/* Notifications */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-gray-100 text-gray-500">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-[#590156] rounded-full ring-2 ring-white" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80 p-2">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="space-y-2">
                            <DropdownMenuItem className="cursor-pointer flex flex-col items-start gap-1 p-3 rounded-lg hover:bg-gray-50">
                                <span className="font-medium text-sm">🚨 2 animals need vaccination</span>
                                <span className="text-xs text-gray-500">10 minutes ago</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer flex flex-col items-start gap-1 p-3 rounded-lg hover:bg-gray-50">
                                <span className="font-medium text-sm">⚠️ Budget 85% spent</span>
                                <span className="text-xs text-gray-500">2 hours ago</span>
                            </DropdownMenuItem>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Profile */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 hover:bg-gray-50 p-1 pr-2 rounded-full transition-colors">
                            <div className="h-9 w-9 bg-gradient-to-br from-[#590156] to-purple-400 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-sm ring-2 ring-white">
                                DF
                            </div>
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
