import React, { useState, useEffect } from 'react'
import { Styled } from '../styles/vistas.styles'

export const Vistas = ({ title, children }) => {
  const [currentProduct, setCurrentProduct] = useState(null)
  const [titleX, setTitleX] = useState(0)
  const [titleY, setTitleY] = useState(0)
  const [dimensions, setDimensions] = useState({})

  const handleMouseOver = (e) => {
    if (
      (e.target.tagName.toLowerCase() === 'use' ||
        e.target.tagName.toLowerCase() === 'rect') &&
      e.target.dataset.url
    ) {
      const title = e.target.dataset.name
      const url = e.target.dataset.url

      const width = window.getComputedStyle(e.target).width.replace('px', '')
      const height = window.getComputedStyle(e.target).height.replace('px', '')

      const clientRect = e.target.getBoundingClientRect()
      setTitleY(clientRect.top)
      setTitleX(clientRect.right)

      e.target.style.width = `${width * 1.5}px`
      e.target.style.height = `${height * 1.5}px`

      if (!dimensions.hasOwnProperty(e.target.id)) {
        const elementsDimensions = dimensions
        dimensions[e.target.id] = { width, height }
        setDimensions(elementsDimensions)
      }

      if (title && url) {
        setCurrentProduct({ title, url })
      }
    }
  }

  const handleMouseLeave = (e) => {
    if (
      (e.target.tagName.toLowerCase() === 'use' ||
        e.target.tagName.toLowerCase() === 'rect') &&
      e.target.dataset.url
    ) {
      const id = e.target.id
      if (dimensions.hasOwnProperty(id)) {
        e.target.style.width = `${dimensions[id].width}px`
        e.target.style.height = `${dimensions[id].height}px`
      }
    }
    if (currentProduct) {
      setTimeout(() => {
        setCurrentProduct(null)
      }, 500)
    }
  }

  const handleClick = (e) => {
    if (
      (e.target.tagName.toLowerCase() === 'use' ||
        e.target.tagName.toLowerCase() === 'rect') &&
      typeof window !== undefined
    ) {
      const url = e.target.dataset.url
      window.open(url, '_blank')
    }
  }

  return (
    <Styled.Main>
      <h1 className="main-title">{title}</h1>
      <p className="main-desc">Clique na peça para saber mais</p>

      <div className="vista">
        {currentProduct && titleX && titleY ? (
          <a href={currentProduct.url} target="_blank">
            <div
              className="title"
              style={{ top: `${titleY - 50}px`, left: `${titleX + 10}px` }}
            >
              {currentProduct.title}
            </div>
          </a>
        ) : null}
        {React.cloneElement(children, {
          onMouseOver: handleMouseOver,
          onMouseOut: handleMouseLeave,
          onClick: handleClick,
        })}
      </div>
    </Styled.Main>
  )
}
