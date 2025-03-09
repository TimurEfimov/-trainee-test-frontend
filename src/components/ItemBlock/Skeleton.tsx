import ContentLoader from "react-content-loader";

export const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={343}
    height={84}
    viewBox="0 0 343 84"
    backgroundColor="#F3F3F6"
    foregroundColor="#FAFAFA"
  >
    <rect x="0" y="345" rx="10" ry="10" width="280" height="88" />
    <rect x="-2" y="450" rx="10" ry="10" width="90" height="30" />
    <rect x="125" y="443" rx="25" ry="25" width="152" height="45" />
    <rect x="0" y="270" rx="5" ry="5" width="200" height="20" />
    <rect x="0" y="300" rx="5" ry="5" width="50" height="16" />
    <circle cx="36" cy="36" r="36" />
    <rect x="88" y="25" rx="8" ry="8" width="144" height="16" />
    <rect x="88" y="47" rx="8" ry="8" width="80" height="12" />
  </ContentLoader>
);

export default MyLoader;
