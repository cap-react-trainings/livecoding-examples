import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ExampleUseForm from "./ExampleUseForm";

describe("ExampleUseForm", () => {
  it("renders the form correctly", () => {
    render(<ExampleUseForm />);
    
    // Check for form elements by label text
    expect(screen.getByLabelText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age:/i)).toBeInTheDocument();
    
    // Check for the submit button
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("shows validation error messages for First Name", async () => {
    render(<ExampleUseForm />);

    // Find First Name input and submit button
    const firstNameInput = screen.getByLabelText(/First Name:/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Attempt to submit without entering a name
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Please enter a name")).toBeInTheDocument();
    });

    // Enter a short name to trigger minLength validation
    fireEvent.change(firstNameInput, { target: { value: "Tom" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Use at least 5 characters")).toBeInTheDocument();
    });

    // Enter a long name to trigger maxLength validation
    fireEvent.change(firstNameInput, { target: { value: "VeryLongFirstName" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Use no more than 10 characters")).toBeInTheDocument();
    });
  });

  it("submits the form with valid input", async () => {
    render(<ExampleUseForm />);

    // Fill out form inputs with valid data
    fireEvent.change(screen.getByLabelText(/First Name:/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name:/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/Age:/i), { target: { value: "25" } });

    // Find and click the submit button
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // Since there's no actual onSubmit output, we can just check that no error message is shown
    await waitFor(() => {
      expect(screen.queryByText(/Please enter a name/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Use at least 5 characters/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Use no more than 10 characters/i)).not.toBeInTheDocument();
    });
  });
});
