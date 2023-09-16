import {
  ControlWidgetButtons,
  ControlwidgetHeading,
  ControlWidgetWrapper,
} from "./control-widget.styles";
import Button from "../button/button.component";

const ControlWidget = ({ children, heading, background }) => {
  return (
    <ControlWidgetWrapper background={background}>
      <ControlwidgetHeading>{heading}</ControlwidgetHeading>
      {children}
      <ControlWidgetButtons>
        <Button buttonType="base">Edit</Button>
        <Button buttonType="cancel">Delete</Button>
      </ControlWidgetButtons>
    </ControlWidgetWrapper>
  );
};

export default ControlWidget;
