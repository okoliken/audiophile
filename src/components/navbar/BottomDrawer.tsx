import {
  Backdrop,
  StyledDrawer,
  DrawerHandle,
  DrawerContent,
} from "../../styles/bottomDrawer";



type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.JSX.Element;
};

export const BottomDrawer = ({ isOpen, onClose, children }: DrawerProps) => {

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose} />
      <StyledDrawer isOpen={isOpen}>
        <DrawerHandle />
        <DrawerContent>{children}</DrawerContent>
      </StyledDrawer>
    </>
  );
};
