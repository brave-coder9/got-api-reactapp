/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "./Footer";
import Topbar from "./Topbar";
import { PageLayoutContainer } from "./style";

const PageLayout = ({ children }) => {

  return (
    <PageLayoutContainer>
      <Topbar />
      <div className="page-content">{children}</div>
      <Footer />
    </PageLayoutContainer>
  );
};

export default PageLayout;
