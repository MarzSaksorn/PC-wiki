export default function Placeholder({ title, subLinks }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">{title}</h1>

      <div className="space-y-6">
        {subLinks.map((section) => (
          <section key={section}>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{section}</h2>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center text-gray-400 dark:text-gray-500">
              Content goes here
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
