import React from './react'
import ReactDOM from 'react-dom'

// const element = (
//   <div id='A1'>
//     <div id='B1'>
//       <div id='C1'>C1</div>
//       <div id='C2'>C2</div>
//     </div>
//     <div id='B2'>B2</div>
//   </div>
// )

const reactElement = React.createElement(
  'div',
  { id: 'A1' },
  React.createElement(
    'div',
    { id: 'B1' },
    React.createElement('div', { id: 'C1' }, 'C1'),
    React.createElement('div', { id: 'C2' }, 'C2')
  ),
  React.createElement('div', { id: 'B2' }, 'B2')
)

// console.log(element)
console.log(reactElement)

// ReactDOM.render(reactElement, document.getElementById('root'))
