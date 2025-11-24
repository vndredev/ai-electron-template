import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../../src/renderer/App'

describe('App Component', () => {
  it('renders app title', () => {
    render(<App />)
    expect(screen.getByText('AI Electron Template')).toBeInTheDocument()
  })

  it('renders electron vite react typescript text', () => {
    render(<App />)
    expect(screen.getByText(/Electron.*Vite.*React.*TypeScript/i)).toBeInTheDocument()
  })

  it('renders counter button with initial count', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })
})
