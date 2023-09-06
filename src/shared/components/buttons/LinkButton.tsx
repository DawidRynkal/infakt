import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkButtonProps {
  route: string;
  text: string;
  type?: "primary" | "secondary";
}

const LinkButton = ({ route, text, type }: LinkButtonProps) => {
  switch (type) {
    case "primary":
      return <PrimaryButton to={route}>{text}</PrimaryButton>;
    case "secondary":
      return <SecondaryButton to={route}>{text}</SecondaryButton>;
    default:
      return <PrimaryButton to={route}>{text}</PrimaryButton>;
  }
};

const PrimaryButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default LinkButton;
