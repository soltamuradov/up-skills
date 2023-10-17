import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserCard } from ".";
import avatar1 from "img/avatar-1.jpg";

describe("UserCard", () => {
  test("avatar prop", () => {
    render(<UserCard title="" description="" avatar={avatar1} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", avatar1);
  });
});
