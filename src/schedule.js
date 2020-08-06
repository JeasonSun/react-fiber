let nextUnitOfWork = null
let workInProgressRoot = null
function scheduleRoot (rootFiber) {
  workInProgressRoot = rootFiber
  nextUnitOfWork = rootFiber
}

function workLoop (deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }
  
  if (!nextUnitOfWork) {
    console.log('render阶段结束')
  }

  requestIdleCallback(workLoop, { timeout: 500})
}

function performUnitOfWork(){}

requestIdleCallback(workLoop, { timeout: 500 })
