import {
  WidgetImage,
  WidgetTitle,
  WidgetWrapper,
  WidgetText,
  WidgetContent,
  WidgetButton,
} from "./widget.styles";

const Widget = ({
  image,
  title,
  text,
  background,
  buttonLink = "",
  fullWidth = false,
}) => {
  return (
    <WidgetWrapper background={background}>
      <WidgetContent>
        <WidgetTitle>{title}</WidgetTitle>
        <WidgetText>{text}</WidgetText>
        {buttonLink ? (
          <WidgetButton to={buttonLink}>Learn more...</WidgetButton>
        ) : (
          ""
        )}
      </WidgetContent>
      <WidgetImage>{image}</WidgetImage>
    </WidgetWrapper>
  );
};

export default Widget;
