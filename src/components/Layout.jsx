import { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'
import useTheme from '../hooks/useTheme.js'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { isDark, toggle: toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchClose={() => setSearchQuery('')}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <div className="flex">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          searchQuery={searchQuery}
        />

        <main className="flex-1 p-6 md:ml-64 mt-14">
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
