export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Your Personal Website
        </h1>
        <p className="text-center text-lg mb-4">
          Built with Next.js, React, and Tailwind CSS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Next.js</h2>
            <p className="text-gray-600">The React Framework for Production</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">React</h2>
            <p className="text-gray-600">A JavaScript library for building user interfaces</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Tailwind CSS</h2>
            <p className="text-gray-600">A utility-first CSS framework</p>
          </div>
        </div>
      </div>
    </main>
  );
}
