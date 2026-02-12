import DashboardLayout from '@/components/dashboard/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfilePage() {
    return (
        <DashboardLayout>
            <div className="space-y-6 max-w-4xl mx-auto">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Profile Settings</h2>
                    <p className="text-gray-500 mt-1">
                        Manage your account settings and farm preferences.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar / User Card */}
                    <div className="w-full md:w-1/3 space-y-6">
                        <Card>
                            <CardHeader className="text-center">
                                <div className="mx-auto w-24 h-24 mb-4">
                                    <Avatar className="w-full h-full">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>DK</AvatarFallback>
                                    </Avatar>
                                </div>
                                <CardTitle>David Kimani</CardTitle>
                                <CardDescription>Farm Owner</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-1 text-sm text-gray-500 text-center">
                                    <p>Member since Jan 2024</p>
                                    <p>Nairobi, Kenya</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="w-full md:w-2/3">
                        <Tabs defaultValue="account" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="farm">Farm Details</TabsTrigger>
                                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account" className="space-y-4 pt-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Personal Information</CardTitle>
                                        <CardDescription>Update your personal details here.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First name</Label>
                                                <Input id="firstName" defaultValue="David" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last name</Label>
                                                <Input id="lastName" defaultValue="Kimani" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" defaultValue="david.kimani@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone number</Label>
                                            <Input id="phone" defaultValue="+254 712 345 678" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="bg-[#590156] hover:bg-[#450142] text-white">Save Changes</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="farm" className="space-y-4 pt-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Farm Information</CardTitle>
                                        <CardDescription>Manage your farm's public profile and location.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="farmName">Farm Name</Label>
                                            <Input id="farmName" defaultValue="Green Valley Farm" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="location">Location</Label>
                                            <Input id="location" defaultValue="Kiambu Road, Nairobi" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="size">Farm Size (Acres)</Label>
                                            <Input id="size" defaultValue="5.5" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="registration">Registration ID</Label>
                                            <Input id="registration" defaultValue="REG-2024-001" disabled />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="bg-[#590156] hover:bg-[#450142] text-white">Update Details</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="notifications" className="space-y-4 pt-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Notification Preferences</CardTitle>
                                        <CardDescription>Choose what you want to be notified about.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {/* Placeholder for notification settings */}
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="emailNotif" className="rounded border-gray-300 text-[#590156] focus:ring-[#590156]" defaultChecked />
                                            <Label htmlFor="emailNotif">Email alerts for health issues</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="smsNotif" className="rounded border-gray-300 text-[#590156] focus:ring-[#590156]" defaultChecked />
                                            <Label htmlFor="smsNotif">SMS alerts for critical tasks</Label>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="bg-[#590156] hover:bg-[#450142] text-white">Save Preferences</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
