import React from 'react'
import Brochure from './components/Brochure'
import Basic from './components/Basic'
import UsingRef from './components/UsingRef'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-50 text-gray-800">

      {/* Header */}
      <header className="w-full bg-white shadow-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">React FlipBook</h1>
          <nav className="flex gap-4">
            <a
              href="https://github.com/vuvandinh123/react-flipbook/blob/main/README.md"
              className="px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-800 transition"
            >
              Docs
            </a>
            <a
              href="https://github.com/vuvandinh123/react-flipbook"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Brochure />
        <Basic />
        <UsingRef />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">React FlipBook</span>.
          Built by <a href="https://github.com/vuvandinh123" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">vuvandinh123</a>
        </p>
      </footer>
    </div>
  )
}



export default App
