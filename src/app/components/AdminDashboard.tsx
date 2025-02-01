"use client"

import { useState, useEffect } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/cards"

// Data interfaces
interface AdCategory {
  name: string
  requests: number
}

interface DashboardData {
  totalRequests: number
  totalRevenue: number
  adCategories: AdCategory[]
}

const AD_AMOUNT = 0.1 // $0.10 per ad request

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    totalRequests: 0,
    totalRevenue: 0,
    adCategories: [],
  })

  useEffect(() => {
    // Simulating data fetching from an API
    const fetchData = () => {
      const mockData: DashboardData = {
        totalRequests: 1000,
        totalRevenue: 1000 * AD_AMOUNT,
        adCategories: [
          { name: "Electronics", requests: 400 },
          { name: "Clothing", requests: 300 },
          { name: "Home & Garden", requests: 200 },
          { name: "Sports", requests: 100 },
        ],
      }
      setDashboardData(mockData)
    }

    fetchData()
    const intervalId = setInterval(fetchData, 5 * 60 * 1000) // Simulate refresh every 5 minutes

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold text-center mb-8">Admin</h2>
        <ul>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Dashboard</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Ads Management</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Categories</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Reports</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Total Requests Card */}
          <Card className="border border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-600">Total Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-extrabold text-gray-800">
                {dashboardData.totalRequests}
              </p>
            </CardContent>
          </Card>

          {/* Total Revenue Card */}
          <Card className="border border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-green-600">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-extrabold text-gray-800">
                ${dashboardData.totalRevenue.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-600">Ad Categories</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Bar Chart for Ad Categories */}
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dashboardData.adCategories}>
                <XAxis dataKey="name" tick={{ fill: "#4B5563" }} />
                <YAxis tick={{ fill: "#4B5563" }} />
                <Bar dataKey="requests" fill="#6366F1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-teal-600">Served Ads Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-700 mb-4">
              <p><strong>Ad Name:</strong> Shirt Promo</p>
              <p><strong>Ad Type:</strong> Banner</p>
              <p><strong>Status:</strong> Active</p>
              <p><strong>Requests Served:</strong> 400</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
