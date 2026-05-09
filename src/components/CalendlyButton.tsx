import { ReactNode, useState } from 'react'
import { PopupModal } from 'react-calendly'

const calendlyUrl = 'https://calendly.com/danexdigitalservices/30min'

interface CalendlyButtonProps {
  children: ReactNode
  className?: string
  onOpen?: () => void
}

export function CalendlyButton({ children, className = '', onOpen }: CalendlyButtonProps) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
    if (onOpen) {
      onOpen()
    }
  }

  return (
    <>
      <button type="button" onClick={handleClick} className={className}>
        {children}
      </button>
      <PopupModal
        url={calendlyUrl}
        rootElement={document.getElementById('root') as HTMLElement}
        open={open}
        onModalClose={() => setOpen(false)}
      />
    </>
  )
}
