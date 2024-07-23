import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <main >
      <Header />
      {children}
      <Footer />
    </main>
  );
}