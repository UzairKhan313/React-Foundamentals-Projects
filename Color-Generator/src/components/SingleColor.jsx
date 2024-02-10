import React from 'react'
import { toast } from 'react-toastify'

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color

  const saveColorOnClipboardHandler = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard')
      } catch (error) {
        toast.error('Faild to copy to clipboard')
      }
    } else {
      toast.error('Clipboard Access not available')
    }
  }

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveColorOnClipboardHandler}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor
