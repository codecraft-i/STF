// Header and Footer Components
import Header from '@components/Header/Header/Header';
import Footer from "@components/Footer/Footer"
import PageIntroBachelor from "@components/PageIntroBachelor/PageIntroBachelor";
import BachelorDocs from "@components/PageIntroBachelor/BachelorDocs"

export default function Bachelor() {
    return (
        <>
          <Header />
          <PageIntroBachelor />
          <BachelorDocs />
          <Footer />
        </>
    )
}