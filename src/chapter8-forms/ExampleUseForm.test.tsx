import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from "@testing-library/react";
import ExampleUseForm from "./ExampleUseForm";

const user = userEvent.setup();

describe("ExampleUseForm", () => {
  it("renders the form correctly", async () => {
    render(<ExampleUseForm />);
    
    // Check for form elements by label text
    expect(await screen.findByText(/First Name:/i)).toBeInTheDocument();
    expect(await screen.findByText(/Last Name:/i)).toBeInTheDocument();
    expect(await screen.findByText(/Age:/i)).toBeInTheDocument();
    
    // Check for the submit button
    const submitButton = await screen.findByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("shows validation error messages for First Name", async () => {
    render(<ExampleUseForm />);

    // Find First Name input and submit button
    const firstNameInput = await screen.findByLabelText(/First Name:/i);
    const submitButton = await screen.findByRole("button", { name: /submit/i });

    // Attempt to submit without entering a name
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Please enter a name")).toBeInTheDocument();
    });

    // Enter a short name to trigger minLength validation
    await user.clear(firstNameInput);
    await user.type(firstNameInput, "Tom");
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Use at least 5 characters")).toBeInTheDocument();
    });

    // Enter a long name to trigger maxLength validation
    await user.clear(firstNameInput);
    await user.type(firstNameInput, "VeryLongFirstName");

    await waitFor(() => {
      expect(screen.getByText("Use no more than 10 characters")).toBeInTheDocument();
    });
  });

  it("submits the form with valid input", async () => {
    render(<ExampleUseForm />);

    // Fill out form inputs with valid data
    const firstNameInput = await screen.findByLabelText(/First Name:/i);
    const lastNameInput = await screen.findByLabelText(/Last Name:/i);
    const ageInput = await screen.findByLabelText(/Age:/i);
    
    await user.type(firstNameInput, "Maxim");
    await user.type(lastNameInput, "Mustermann");
    await user.type(ageInput, "25");

    // Find and click the submit button
    const submitButton = await screen.findByRole("button", { name: /submit/i });
    await user.click(submitButton);

    // Since there's no actual onSubmit output, we can just check that no error message is shown
    await waitFor(() => {
      expect(screen.queryByText(/Please enter a name/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Use at least 5 characters/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Use no more than 10 characters/i)).not.toBeInTheDocument();
    });
  });
});
