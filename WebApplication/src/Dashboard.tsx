"use client"

import { useState } from "react"
import {
	Box,
	DollarSign,
	Users,
	Package,
	ShoppingCart,
	Search,
	Plus,
	ArrowUpRight,
	ArrowDownRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const navItems = [
	{ icon: Box, label: "Inventory" },
	{ icon: Users, label: "Employees" },
	{ icon: DollarSign, label: "Sales" },
]

export default function Component() {
	const [activeTab, setActiveTab] = useState("inventory")

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<div className="w-64 bg-white shadow-md p-4">
				<h1 className="text-2xl font-bold mb-6">Management Portal</h1>
				<nav className="space-y-2">
					{navItems.map(({ icon: Icon, label }) => (
						<Button
							key={label}
							variant={activeTab === label.toLowerCase() ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab(label.toLowerCase())}
						>
							<Icon className="mr-2 h-4 w-4" />
							{label}
						</Button>
					))}
				</nav>
			</div>

			{/* Main Content */}
			<div className="flex-1 overflow-auto p-8">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
					{[
						{ title: "Total Revenue", icon: DollarSign, value: "$45,231.89", change: "+20.1%" },
						{ title: "Inventory Value", icon: Package, value: "$12,234.59", change: "-5.2%" },
						{ title: "Total Orders", icon: ShoppingCart, value: "2,345", change: "+8.1%" },
						{ title: "Active Staff", icon: Users, value: "12", change: "0%" },
					].map((item, index) => (
						<Card key={index}>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">{item.title}</CardTitle>
								<item.icon className="h-4 w-4 text-muted-foreground" />
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">{item.value}</div>
								<p className="text-xs text-muted-foreground flex items-center">
									{item.change.startsWith("+") ? (
										<ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
									) : item.change.startsWith("-") ? (
										<ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
									) : null}
									{item.change} from last month
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				<Tabs value={activeTab} onValueChange={setActiveTab}>

					<TabsContent value="inventory" className="space-y-4">
						<div className="flex justify-between">
							<div className="flex gap-2">
								<div className="relative">
									<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
									<Input placeholder="Search inventory..." className="pl-8 w-[300px]" />
								</div>
								<Select defaultValue="all">
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Category" />
									</SelectTrigger>
									<SelectContent className="bg-white">
										<SelectItem value="all">All Categories</SelectItem>
										<SelectItem value="food">Food</SelectItem>
										<SelectItem value="beverages">Beverages</SelectItem>
										<SelectItem value="supplies">Supplies</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<Button className="rounded bg-black text-white hover:text-black">
								<Plus className="mr-2 h-4 w-4" />
								Add Item
							</Button>
						</div>
						<Card>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Item Name</TableHead>
										<TableHead>Category</TableHead>
										<TableHead>Stock</TableHead>
										<TableHead>Unit Price</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{[
										{ name: "Premium Coffee Beans", category: "Beverages", stock: "458 units", price: "$24.99", status: "In Stock" },
										{ name: "Organic Milk", category: "Beverages", stock: "89 units", price: "$4.99", status: "Low Stock" },
										{ name: "Paper Cups", category: "Supplies", stock: "1,200 units", price: "$0.15", status: "In Stock" },
									].map((item, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">{item.name}</TableCell>
											<TableCell>{item.category}</TableCell>
											<TableCell>{item.stock}</TableCell>
											<TableCell>{item.price}</TableCell>
											<TableCell className={item.status === "In Stock" ? "text-green-600" : "text-yellow-600"}>{item.status}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Card>
					</TabsContent>

					<TabsContent value="employees" className="space-y-4">
						<div className="flex justify-between">
							<div className="flex gap-2">
								<div className="relative">
									<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
									<Input placeholder="Search employees..." className="pl-8 w-[300px]" />
								</div>
								<Select defaultValue="all">
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Role" />
									</SelectTrigger>
									<SelectContent className="bg-white">
										<SelectItem value="all">All Roles</SelectItem>
										<SelectItem value="server">Server</SelectItem>
										<SelectItem value="kitchen">Kitchen</SelectItem>
										<SelectItem value="manager">Manager</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<Button className="rounded bg-black text-white hover:text-black">
								<Plus className="mr-2 h-4 w-4" />
								Add Employee
							</Button>
						</div>
						<Card>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Name</TableHead>
										<TableHead>Role</TableHead>
										<TableHead>Performance</TableHead>
										<TableHead>Hours</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{[
										{ name: "Sarah Johnson", role: "Server", performance: "98%", hours: "32/40", status: "Active" },
										{ name: "Michael Chen", role: "Kitchen", performance: "95%", hours: "38/40", status: "Break" },
										{ name: "Emily Davis", role: "Manager", performance: "97%", hours: "45/40", status: "Active" },
									].map((employee, index) => (
										<TableRow key={index}>
											<TableCell className="font-medium">{employee.name}</TableCell>
											<TableCell>{employee.role}</TableCell>
											<TableCell className="text-green-600">{employee.performance}</TableCell>
											<TableCell>{employee.hours}</TableCell>
											<TableCell>{employee.status}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Card>
					</TabsContent>

					<TabsContent value="sales" className="space-y-4">
						<div className="flex justify-between">
							<div className="flex gap-2">
								<Select defaultValue="week">
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Time Period" />
									</SelectTrigger>
									<SelectContent className="bg-white">
										<SelectItem value="day">Today</SelectItem>
										<SelectItem value="week">This Week</SelectItem>
										<SelectItem value="month">This Month</SelectItem>
										<SelectItem value="year">This Year</SelectItem>
									</SelectContent>
								</Select>
								<Select defaultValue="all">
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Category" />
									</SelectTrigger>
									<SelectContent className="bg-white">
										<SelectItem value="all">All Categories</SelectItem>
										<SelectItem value="food">Food</SelectItem>
										<SelectItem value="beverages">Beverages</SelectItem>
										<SelectItem value="desserts">Desserts</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<Button className="rounded bg-black text-white hover:text-black">Export Report</Button>
						</div>
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
							{[
								{
									title: "Top Selling Items",
									items: [
										{ name: "Espresso", value: "342 sold" },
										{ name: "Latte", value: "289 sold" },
										{ name: "Croissant", value: "245 sold" },
									],
								},
								{
									title: "Revenue by Category",
									items: [
										{ name: "Beverages", value: "$12,456" },
										{ name: "Food", value: "$8,234" },
										{ name: "Desserts", value: "$4,567" },
									],
								},
								{
									title: "Key Metrics",
									items: [
										{ name: "Average Order Value", value: "$23.45" },
										{ name: "Customer Retention", value: "68%" },
										{ name: "Net Profit Margin", value: "22%" },
									],
								},
							].map((card, index) => (
								<Card key={index}>
									<CardHeader>
										<CardTitle>{card.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											{card.items.map((item, itemIndex) => (
												<div key={itemIndex} className="flex justify-between">
													<span>{item.name}</span>
													<span className="font-bold">{item.value}</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
