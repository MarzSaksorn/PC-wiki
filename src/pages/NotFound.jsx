import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">Page not found</p>
      <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
        Back to home
      </Link>
    </div>
  )
}
