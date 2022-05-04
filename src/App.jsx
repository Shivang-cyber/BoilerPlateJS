import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(()=>{ 
    return `function runProgram(input) {

      }
if (process.env.USERNAME === 'maney') {
runProgram()
} else {process.stdin.resume()
process.stdin.setEncoding('ascii')
let read = ''
process.stdin.on('data', function (input) {
read += input
})
process.stdin.on('end', function () {
read = read.replace(/\\n$/, '')
read = read.replace(/\\n$/, '')
runProgram(read)
})
process.on('SIGINT', function () {
read = read.replace(/\\n$/, '')
runProgram(read)
process.exit(0)
})
}`
  })


  return (
    <div className="App">
      <button onClick={() => {navigator.clipboard.writeText(count)}}>Copy boilerplate Code</button>
      <div className='boi'>

      <h2>function runProgram(input) {`{ }`}</h2>
      <h2>if (process.env.USERNAME === 'maney') {`{`}</h2>
      <h2>runProgram()</h2>
      <h2>{`}`} else {`{`}process.stdin.resume()</h2>
      <h2>process.stdin.setEncoding('ascii')</h2>
      <h2>let read = ''</h2>
      <h2>process.stdin.on('data', function (input) {`{`}read += input{`}`})</h2>
      <h2>process.stdin.on('end', function () {`{`}</h2>
      <h2>read = read.replace(/\n$/, '')</h2>
      <h2>read = read.replace(/\n$/, '')</h2>
      <h2>runProgram(read)</h2>
      <h2>{`})`}</h2>
      <h2>process.on('SIGINT', function () {`{`}</h2>
      <h2>read = read.replace(/\n$/, '')</h2>
      <h2>runProgram(read)</h2>
      <h2>process.exit(0)</h2>
      <h2>{`})`}</h2>
      <h2>{`}`}</h2>
      </div>
      
    </div>
  )
}

export default App
