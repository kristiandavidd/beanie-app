import Head from "next/head";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

export default function GuestLayout({ children, title }) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background">
      <Head>
        <title> {title} </title>
      </Head>
      <Header> </Header>
      <main className="flex flex-col items-center justify-center gap-6 py-8">
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
