import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...Nothing

    //Assert
    const helloWroldElement = screen.getByText("Hello World!");
    expect(helloWroldElement).toBeInTheDocument();
  });

  test("Button is not clicked yet", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing yet

    //Assert
    const notClickedYet = screen.getByText("It is good to see you here!");
    expect(notClickedYet).toBeInTheDocument();
  });

  test("Button is already clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const clickedAlready = screen.getByText("Changed!");
    expect(clickedAlready).toBeInTheDocument();
  });

  test("Check if the paragraph is not there after clicking", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const pTagIsNotThere = screen.queryByText("It is good to see you here!");
    expect(pTagIsNotThere).toBeNull();
  });
});
