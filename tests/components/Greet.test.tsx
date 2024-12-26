// import { it, expect, describe } from "vitest"; // made that globals: true in vitest.config.ts and config.ts as types 
import { render,screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import UserAccount from "../../src/components/UserAccount";
// import "@testing-library/jest-dom/vitest"; -> added in the setup file

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Malith" />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Hello Malith/i);
  });
  
  it('should render login button when name is not provided',()=>{
    render(<Greet name=""/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Login/i);
  })

});


