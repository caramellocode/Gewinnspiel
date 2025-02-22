import { Helmet } from "react-helmet-async";

const HelmetChanger = ({ title }) => {
  return (
    <Helmet>
      <title>Casino - {title}</title>
    </Helmet>
  );
};

export default HelmetChanger;
