const { ELEMENT_TEXT } = require('./constants')

function createElement (type, config, ...children) {
  delete config.__self
  delete config.__source
  return {
    type,
    props: {
      ...config,
      // 做了一个兼容处理，如果是React元素的话,就返回自己, 如果是文本类型,即是一个字符串的话,返回元素对象。
      children: children.map(child => {
        return typeof child === 'object'
          ? child
          : {
              type: ELEMENT_TEXT,
              props: {
                text: child,
                children: []
              }
            }
      })
    }
  }
}

const React = {
  createElement
}

export default React
