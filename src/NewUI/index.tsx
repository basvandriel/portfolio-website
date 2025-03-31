const App = () => {
  return <>
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col h-screen">
        <nav className="pt-4 pb-12"></nav>
        
        {/* profile block */}
          <div className="flex items-center space-x-4">
            {/* profile pic */}
            <div className="h-16 w-16 bg-slate-300 rounded-full"></div>
            <div className="relative">
              <h3 className="text-lg font-medium text-zinc-800 my-0 py-0">Bas van Driel</h3>
              <span className="text-sm text-zinc-600 font-light">Senior Python Developer, DevOps Engineer</span>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default App;