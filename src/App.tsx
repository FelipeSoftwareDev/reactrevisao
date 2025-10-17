import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import devforge from './assets/devForgeL.svg'
import pythonlogo from './assets/python2.svg'
import gitlogo from './assets/gitlogo.svg'
import SidebarLinks from'./components/MyComponents.tsx'


function funbutton() {
  return <button className='button1'>click me</button>
}

function card() {
  return <div className='container'>
    <div className=''></div>
  </div>
}

function sideBar() {
  return (
    <>
      <div className="fixed inset-y-0 left-0 w-64 bg-stone-800 shadow-lg flex flex-col items-center justify-center p-6 gap-8 border-r border-stone-700">
      {/*Logo*/}
      <img
        src={devforge}
        alt="DevForge Logo"
        className="w-49 object-contain mb-6"
      />

      {/*Menu*/}
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="text-xl font-semibold text-amber-400 mb-2">Menu</h2>

        {/* Links Menu */}
       <div className="flex flex-col items-center gap-4 w-full">
        <SidebarLinks href="https://felipete.faq">Felipete</SidebarLinks>
        <SidebarLinks href="#projects">Trilhas</SidebarLinks>
        <SidebarLinks href="#quemsomos">Quem Somos</SidebarLinks>
        <SidebarLinks href="#contact">Contato</SidebarLinks>
        <SidebarLinks href="#roadmaps">RoadMaps</SidebarLinks>
      </div>
      </div>
    </div>
    </>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {sideBar()}

      <div className='flex justify-center items-center gap-4 mb-4'>
        <a href="https://www.python.org/" target="_blank">
          <img src={pythonlogo} className="logo python left-4" alt="Python logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react left-4" alt="React logo" />
        </a>
        <a href="https://git-scm.com/" target="_blank">
          <img src={gitlogo} className="logo git" alt="Git logo" />
        </a>
        <a >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </a>
      </div>
      <h2 className='text-4xl text-amber-50'>Escolha uma Tecnologia e Inicie sua Jornada</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        { /* Teste inicial */}
        {funbutton()}
        {card()}
      </div>
      <div>

      </div>
    </>
  )
}

export default App
