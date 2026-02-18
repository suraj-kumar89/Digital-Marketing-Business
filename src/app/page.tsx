import { Suspense } from 'react' // Import Suspense
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
      {/* Wrap sections that use useSearchParams in Suspense.
          This prevents the "missing-suspense-with-csr-bailout" error 
          during the Vercel build.
      */}
      <Suspense fallback={<div className="bg-[#050914] min-h-screen" />}>
        <HeroSection />
      </Suspense>

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

      {/* Wrapping the bottom CTA as well just in case it shares the lead form logic */}
      <Suspense fallback={<div className="bg-[#050914] h-96" />}>
        <BookAStartegy/>
      </Suspense>

      <Footer/>
    </>
  )
}