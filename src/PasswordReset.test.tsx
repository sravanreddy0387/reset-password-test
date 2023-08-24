/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordReset from "./PasswordReset";

test("renders password reset screen", () => {
  render(<PasswordReset />);
  const passwordResetTitle = screen.getByText(/Password Reset/i);
  expect(passwordResetTitle).toBeInTheDocument();
});

test("disables reset button for invalid password", () => {
  render(<PasswordReset />);
  const passwordInput = screen.getByLabelText(/New Password:/i);
  const resetButton = screen.getByRole("button", { name: /Reset Password/i });
  act(() => {
    userEvent.type(passwordInput, 'invalidpassword');
  });
  expect(resetButton).toBeDisabled();
});

test("enables reset button for valid password", () => {
  render(<PasswordReset />);
  const passwordInput = screen.getByLabelText(/New Password:/i);
  const resetButton = screen.getByRole("button", { name: /Reset Password/i });
  act(() => {
    userEvent.type(passwordInput, 'ValidPassword1!');
  });
 
  expect(resetButton).not.toBeDisabled();
});
