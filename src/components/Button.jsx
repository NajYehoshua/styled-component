import styled from "styled-components";

const StyledButton = styled.button`
  vertical-align: baseline;
  cursor: pointer;
  font-weight: 500;
  size: 14px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  padding: 12px 16px;
  border-radius: 4px;
  border: none;
  background-color: #b1b2ff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  span {
    margin-right: 8px;
  }
`;

export const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export const ButtonWithIcon = ({ icon, text }) => {
  return (
    <StyledButton>
      <span>{icon}</span> {text}
    </StyledButton>
  );
};
