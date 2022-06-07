import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';

describe("App tests", () => {
  const user = {
    name: "ben"
  }
  it("Title should render correctly", () => {
    render(<App/>)
    const title = screen.getByText(/rick and morty characters/i)
    expect(title).toBeInTheDocument()
  })
  it("Correct number of buttons should render", () => {
    render(<App/>)
    // screen.debug()
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
  })
  it("Filter buttons should change the status", () => {
    render(<App/>)
    const aliveButton = screen.getByRole("button", {name: "alive"})
    // console.log(aliveButton)
    fireEvent.click(aliveButton)
    const statusMessage = screen.getByText(/status=/i)
    expect(statusMessage.textContent).toContain('alive')
  })
})
