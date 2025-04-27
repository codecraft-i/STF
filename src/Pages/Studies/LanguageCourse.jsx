// Header and Footer Components
import Header from '@components/Header/Header/Header';
import Footer from "@components/Footer/Footer"

import PageIntroLC from "@components/LanguageCourse/PageIntroLC"
import LCStudyTringleStudyTringle from "@components/LanguageCourse/LCStudyTringleStudyTringle"
import LCDocs from "@components/LanguageCourse/LCDocs"

export default function LanguageCourse() {
    return (
        <>
          <Header />
          <PageIntroLC />
          <LCStudyTringleStudyTringle />
          <LCDocs />
          <Footer />
        </>
    )
}