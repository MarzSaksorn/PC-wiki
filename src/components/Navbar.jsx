import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import SearchOverlay from './SearchOverlay.jsx'

export default function Navbar({ onToggleSidebar, searchQuery, onSearchChange, onSearchClose, isDark, onToggleTheme }) {
  const [showSearch, setShowSearch] = useState(false)
  const inputRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault()
        inputRef.current?.focus()
      }
      if (e.key === 'Escape') {
        onSearchClose()
        setShowSearch(false)
        inputRef.current?.blur()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onSearchClose])

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSearch(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-14 flex items-center px-4 gap-4">
      <button
        onClick={onToggleSidebar}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Toggle sidebar"
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <Link to="/" className="text-lg font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">
        PC Wiki
      </Link>

      <div className="flex-1 max-w-xl mx-auto relative" ref={wrapperRef}>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search pages... ( / )"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value)
              setShowSearch(true)
            }}
            onFocus={() => setShowSearch(true)}
            className="w-full pl-9 pr-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 focus:bg-white dark:focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {showSearch && searchQuery && (
          <SearchOverlay
            query={searchQuery}
            onSelect={() => {
              onSearchClose()
              setShowSearch(false)
            }}
          />
        )}
      </div>

      <button
        onClick={onToggleTheme}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </nav>
  )
}
