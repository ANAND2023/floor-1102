import React,{ useState, useEffect, useRef } from 'react';
import './marquee.css'
export const Marqueeapp = () => {
  return (
    <div>
      <Marquee hoverToStop={ true } >
        <span className='py-2 text-white mx-5'>This is my text</span>
         <span className='py-2 text-white mx-5'>hello</span>
      </Marquee>
    </div>
  );
};

const Marquee = props => {
  const { children, hoverToStop } = props

  const [pause, setPause] = useState(false)
  const [copies, setCopies] = useState(0)

  const containerRef = useRef()
  const elmRef = useRef()

  let elmRefs = []

  const STEP = 1

  const reqAnimationFrame = !window.requestAnimationFrame
    ? window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame
    : window.requestAnimationFrame

  useEffect(() => {
    if (null !== containerRef.current && null !== elmRef.current) {
      const textElm = elmRef.current
      const containerElm = containerRef.current
      const textElmLength = getElementWidth(textElm)
      const containerElmLength = containerElm.offsetWidth

      setCopies(Math.ceil(containerElmLength / textElmLength))
    }
  }, [elmRef])

  useEffect(() => {
    startTimer()
  })

  const getElementWidth = elm => {
    const style = elm.style
    const width = elm.offsetWidth
    const margin = parseFloat(style.marginLeft || 0) + parseFloat(style.marginRight || 0)
    const padding = parseFloat(style.paddingLeft || 0) + parseFloat(style.paddingRight || 0)
    const border = parseFloat(style.borderLeftWidth || 0) + parseFloat(style.borderRightWidth || 0)

    return width + margin - padding + border
  }

  const startTimer = () => {
    if (!reqAnimationFrame) {
      return
    }

    reqAnimationFrame(() => {
      if (false === pause) {
        animate()
      }

      startTimer()
    })
  }

  const animate = () => {
    let pevWidth = 0
    const totalWidth = elmRefs.reduce((total, ref) => {
      return (ref.current) ? total + getElementWidth(ref.current) : 0
    }, 0)

    elmRefs.forEach( ref => {
      const elm = ref.current

      if (elm) {
        let right = elm.getAttribute('padd')
          ? parseInt(elm.getAttribute('padd'))
          : 0

        const elmWidth = getElementWidth(elm)

        right -= STEP

        if (right < (elmWidth + pevWidth) * -1) {
          right = (totalWidth - pevWidth - elmWidth)
        }

        pevWidth += elmWidth

        elm.setAttribute('padd', right)

        elm.style.transform = `translate(${right}px, 0)`
        elm.style.webkitTransform = `translate(${right}px, 0)`
      }
    })
  }

  const elm = <div ref={elmRef}>{children}</div>

  return (
    <>
      <div
        className='container'
        ref={containerRef}
        onMouseEnter={() => {
          if (true === hoverToStop) {
            setPause(true)
          }
        }}
        onMouseLeave={() => {
          setPause(false)
        }}
      >
        <div className='template'>{elm}</div>
        <div className='marquee'>
          {[...Array(3).keys()].map(j => {
            return (
              <div key={ j } className='wrapper' ref={ elmRefs[j] = React.createRef() }>
                {[...Array(copies).keys()].map(i => {
                  return React.cloneElement(elm, {
                    key: i,
                  })
                })}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
