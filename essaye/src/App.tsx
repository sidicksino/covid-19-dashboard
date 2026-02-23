function App() {
  return (
    <>
      <div className="items-center w-full fixed flex bg-slate-950 justify-between py-4 px-32 text-slate-50 border-slate-900 border-b-2 shadow-sl-800 shadow-sm">
        <h1 className="text-2xl font-bol">Logo<span className="font-extrabold text-orange-600 text-2xl absolute">.</span></h1>
        <nav className="flex justify-between gap-4 ">
          <span className="font-light text-md border-b-2 border-emerald-500">Home</span>
          <span className="font-light text-md">About</span>
          <span className="font-light text-md">Contact</span>
        </nav>
        <button className="bg-fuchsia-800 px-4 py-2 rounded-sm">Subscribe</button>
      </div>
      <div className="flex items-center justify-center bg-slate-950 text-white min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to Sino Agency</h1>
      </div>
    </>
  );
}

export default App;
