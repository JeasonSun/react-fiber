const { TAG_ROOT } = require("./constants");

function render(element, container){
  let rootFiber = {
    tag: TAG_ROOT, // 每个fiber会有一个tag标识此元素的类型
    stateNode: container, // 一般情况下如果这个元素是一个原生节点的话，stateNode指向真是DOM元素
    // props.children是一个数组，里面放的是要渲染的元素
    props: {
      children: [element]
    }
  }

  scheduleRoot(rootFiber)
}

const ReactDOM = {
 render
}
export default ReactDOM