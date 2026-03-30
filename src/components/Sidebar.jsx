import { useState, useMemo } from 'react'
import { NavLink, useLocation } from 'react-router'
import { pages } from '../data/pages.js'

export default function Sidebar({ open, onClose, searchQuery }) {
  const [expanded, setExpanded] = useState(() => {
    const init = {}
    pages.forEach((p) => { init[p.path] = true })
    return init
  })
  const location = useLocation()

  const filteredPages = useMemo(() => {
    if (!searchQuery) return pages
    const q = searchQuery.toLowerCase()
    return pages.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.includes(q)) ||
        p.subLinks.some((s) => s.title.toLowerCase().includes(q))
    )
  }, [searchQuery])

  const toggle = (path) => {
    setExpanded((prev) => ({ ...prev, [path]: !prev[path] }))
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-14 left-0 bottom-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-20 overflow-y-auto transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <nav className="p-4 space-y-1">
          {filteredPages.map((page) => {
            const isActive = location.pathname === page.path
            return (
              <div key={page.path}>
                <div className="flex items-center">
                  <NavLink
                    to={page.path}
                    onClick={onClose}
                    className={({ isActive: navActive }) =>
                      `flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        navActive
                          ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`
                    }
                  >
                    {page.title}
                  </NavLink>
                  <button
                    onClick={() => toggle(page.path)}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label={`Toggle ${page.title} section`}
                  >
                    <svg
                      className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform ${
                        expanded[page.path] ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {expanded[page.path] && (
                  <div className="ml-6 mt-1 space-y-0.5">
                    {page.subLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `block px-3 py-1.5 text-xs rounded transition-colors ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium'
                              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`
                        }
                      >
                        {link.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          {filteredPages.length === 0 && (
            <p className="text-sm text-gray-400 dark:text-gray-500 px-3 py-2">No matching pages</p>
          )}
        </nav>
      </aside>
    </>
  )
}
