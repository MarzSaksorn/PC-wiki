import { useMemo } from 'react'
import { Link } from 'react-router'
import { pages } from '../data/pages.js'

export default function SearchOverlay({ query, onSelect }) {
  const results = useMemo(() => {
    const q = query.toLowerCase()
    if (!q) return []
    const items = []

    pages.forEach((page) => {
      const titleMatch = page.title.toLowerCase().includes(q)
      const keywordMatch = page.keywords.some((k) => k.includes(q))
      const matchingSubLinks = page.subLinks.filter((s) =>
        s.title.toLowerCase().includes(q)
      )

      if (titleMatch || keywordMatch) {
        items.push({
          title: page.title,
          path: page.path,
          subtitle: page.subLinks.map((s) => s.title).join(' · '),
        })
      }

      matchingSubLinks.forEach((link) => {
        items.push({
          title: link.title,
          path: link.path,
          subtitle: page.title,
        })
      })
    })

    const seen = new Set()
    return items.filter((item) => {
      if (seen.has(item.path)) return false
      seen.add(item.path)
      return true
    })
  }, [query])

  if (results.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 text-sm text-gray-500 dark:text-gray-400">
        No results for "{query}"
      </div>
    )
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
      <ul className="divide-y divide-gray-100 dark:divide-gray-700">
        {results.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              onClick={onSelect}
              className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.title}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{item.subtitle}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
