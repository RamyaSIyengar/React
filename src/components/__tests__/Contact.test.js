import Contact from "../Contact"

test("Should load Contact us component",() => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})