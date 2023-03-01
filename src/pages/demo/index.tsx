import { Navbar } from "@/ui/demo/game/Navbar";
import { MainContent } from "@/ui/demo/main-content";
import { Footer } from "@/ui/footer";
import { Layout } from "@/ui/layout";

const WordlePage = () => {
  return (
    <Layout>
      <Navbar />
      <MainContent />
      <Footer />
    </Layout>
  );
};

export default WordlePage;
