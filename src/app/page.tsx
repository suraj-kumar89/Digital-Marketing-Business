import BeyondAdsSection from '@/sharedComponent/BeyondsAds'
import BookAStartegy from '@/sharedComponent/BookAStratgyCall'
import ELearningCaseStudySection from '@/sharedComponent/E-learning'
import FAQSection from '@/sharedComponent/FAQs'
import Footer from '@/sharedComponent/Footer'
import GrowthDecisionsSection from '@/sharedComponent/GrowthDecision'
import HeroSection from '@/sharedComponent/Hero'
import HowWeChooseSection from '@/sharedComponent/HowtoChoseWork'
import LogoMarqueeSection from '@/sharedComponent/Marquee'
import MultipleTeamsSection from '@/sharedComponent/MultipleTeam'
import OurProcessSection from '@/sharedComponent/OurProcess'
import OurTeamSection from '@/sharedComponent/OurTeam/TeamSection'
import PracticeSection from '@/sharedComponent/PracticeSection'
import StrategicPlanSection from '@/sharedComponent/StrategicPlan'
import SystemsSection from '@/sharedComponent/SystemAccounbtable'
import WhatWeDoSection from '@/sharedComponent/Whatwedo'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarqueeSection/>
      <GrowthDecisionsSection/>
      <BeyondAdsSection/>
      <HowWeChooseSection/>
      <MultipleTeamsSection/>
      <WhatWeDoSection/>
      <PracticeSection/>
      <OurProcessSection/>
      <StrategicPlanSection/>
      <ELearningCaseStudySection/>
      <SystemsSection/>
      <OurTeamSection/>
      <FAQSection/>
      <BookAStartegy/>
      <Footer/>
    </>
  )
}
