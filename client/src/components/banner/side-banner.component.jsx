import { Banner, BannerContent } from "./side-banner.styles";

const SideBanner = ({ children }) => {
  return (
    <Banner>
      <BannerContent>{children}</BannerContent>
    </Banner>
  );
};

export default SideBanner;
