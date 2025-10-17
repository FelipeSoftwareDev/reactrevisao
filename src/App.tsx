import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import felipetelogo from './assets/felipetelogo.png'
import pythonlogo from './assets/python2.svg'
import gitlogo from './assets/gitlogo.svg'


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
      <div className="mx-auto flex max-w-sm items-center gap-x-4 bg-white p-6 shadow-lg outline outline-black/5 dark:bg-stone-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10  absolute inset-y-0 left-0 w-70">
        <img className="size-45 shrink-0 absolute top-0 left-0" src={felipetelogo} alt="Felipete Logo" />
        <div>
          <div className="text-xl font-medium text-black dark:text-emerald-300">Velibinho Cursos</div>
          <p className="text-gray-500 dark:text-gray-100">O futuro dos cursu!</p>
          <a href="https://felipete.faq" className=" no-underline text-white mt-3 hover:text-emerald-500 block border-1 rounded-xs bg-stone-600 px-4 py-1.5 text-sm font-semibold leading-5 border-solid border-white transition-colors hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-stone-800"> Felipete
          </a>

        </div>
      </div>
    </>
  )
}
/*
function checklistTest(){
   return(
           <>
  <div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 dark:bg-white/10"></div>
<div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 dark:bg-white/10">
    <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
   <div className="space-y-6">
        <p className='dark:text-emerald-400' >An advanced online playground for Tailwind CSS, including support for things like:</p>
        <ul className="space-y-3">
          <li className="flex">
            <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
              <circle cx="11" cy="11" r="11" className="fill-fuchsia-600/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
              <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
            </svg>
            <p className="ml-3 text-emerald-400">
              Customized theme with 
              <code className="font-mono font-medium text-gray-950 dark:text-fuchsia-600">@tailwindcss</code>
            </p>
          </li>
          <li className="flex">
            <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
              <circle cx="11" cy="11" r="11" className="fill-fuchsia-600/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
              <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
            </svg>
            <p className="ml-3 text-emerald-400">
              Adding custom utilities with
              <code className="font-mono font-medium text-gray-950 dark:text-fuchsia-600">@utility</code>
            </p>
          </li>
          <li className="flex">
            <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
              <circle cx="11" cy="11" r="11" className="fill-fuchsia-600/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-sky-400/25" />
              <path d="M8 11.5L10.5 14L14 8" className="stroke-sky-800 dark:stroke-sky-300" />
            </svg>
            <p className="ml-3 text-emerald-400">
              Adding custom variants with
              <code className="font-mono font-medium text-gray-950 dark:text-fuchsia-600">@variant</code>
            </p>
          </li>
          <li className="flex">
            <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" stroke-linecap="square">
              <circle cx="11" cy="11" r="11" className="fill-fuchsia-600/25" />
              <circle cx="11" cy="11" r="10.5" className="stroke-emerald-400/25" />
              <path d="M8 11.5L10.5 14L14 8" className="stroke-emerald-800 dark:stroke-emerald-300" />
            </svg>
            <p className="ml-3 text-emerald-400">Code completion with instant preview</p>
          </li>
        </ul>
        <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
      </div>
      <hr className="my-6 w-full border-(--pattern-fg)" />
      <p className="mb-3">Want to dig deeper into Tailwind?</p>
      <p className="font-semibold">
        <a href="https://tailwindcss.com/docs" className="text-gray-950 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-white">Read the docs &rarr;</a>
      </p>
    </div>
  </div>
    </>
  )
}
*/

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
      <h2 className='text-4xl'>Escolha sua Tecnologia</h2>
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
        { /* checklistTest() */}
        {funbutton()}
        {card()}
      </div>
      <div>

      </div>
    </>
  )
}

export default App
