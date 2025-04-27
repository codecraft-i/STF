// Header and Footer Components
import Header from '@components/Header/Header/Header';
import Footer from "@components/Footer/Footer"

import PageIntroVE from "@components/VocationalEducation/PageIntroVE"
import VEDocs from "@components/VocationalEducation/VEDocs"

export default function VocationalEducation() {
    return (
        <>
          <Header />
          <PageIntroVE />
          <VEDocs />
          <Footer />
        </>
    )
}