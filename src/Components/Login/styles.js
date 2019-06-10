import styled from "styled-components";

export const ThemeColors = {
  dark: "#f9d13d"
};

export const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  object-fit: cover;
  background-image: linear-gradient(to right, #12131c, #203a43, #2c5364);
  background-repeat: no-repeat;
  background-size: cover;
`;
export const LoginCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 300px;
  width: 300px;
  background: #ffff;
  margin: auto;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
`;
export const LogoContainer = styled.div`
  position: absolute;
  top: -15%;
`;
export const BackgroundImg = styled.img`
  border-radius: 50%;
  height: 75px;
  width: 75px;
  border: 3px solid white;
  ${LoginCard}:hover {
    transform: scale(0.9, 0.9);
  }
`;

export const AuthIcon = styled.img`
  height: 35px;
  width: 35px;
`;

export const FacebookButton = styled.div`
  border: none;
  background: inherit;
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-left: 20px;
`;

export const GoogleButton = styled(FacebookButton)`
  color: #757575;
  font-weight: 200;
  font-weight: 500;
  letter-spacing: 0.2px;
`;

export const LoginHeader = styled.p`
  color: #585858;
  margin-bottom: 30px;
`;

export const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${({ google }) => (google === "google" ? "#fcfcfc" : "#3f51b5")};
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
  &:last-of-type {
    padding-left: 5px;
  }
`;

export const LoginForm = styled.div`
  margin: 50px 10px 0 10px;
  flex: 1;
`;
