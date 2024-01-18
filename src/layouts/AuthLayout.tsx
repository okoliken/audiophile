import styled from "styled-components";
import { device } from "../components/devices";

const AuthContainer = styled.div`
  padding: 20px;

  @media screen and (${device.laptop}) {
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    .subsection__headset_xy_image-desktop {
      display: block;
      width: 100%;
      border-radius: 100%;

      width: 600px;
      height: 600px;
      object-fit: cover;
    }
  }
`;

export const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <AuthContainer>
      {children}
      <div></div>
    </AuthContainer>
  );
};
