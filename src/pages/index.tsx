import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Intro } from "../layout/Intro";

export default function Home(){
  return(
    <>
    <Header />
    <main>
      <Intro />
    </main>
    <Footer />
    </>
  )
}