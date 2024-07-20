import Header from "@/components/common/header";
import { Articles, Hero, Subscribe, Technologist } from "@/components/pages/home/Components";
import Footer from "@/components/common/footer";


const Landing = () => {
  return (
    <>
      <Hero />
      <Technologist />
      <Articles />
      <Subscribe />
    </>
  );
};
export default Landing;

