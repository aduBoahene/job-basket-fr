import { Articles } from "@/components/Articles";
import { CallAction } from "@/components/CallAction";
import Carousel from "@/components/Carousel";
import { Categories } from "@/components/Categories";
import { FeauturedJobs } from "@/components/FeauturedJobs";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Partners } from "@/components/Partners";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionHeader
        mainTitle="Popular Job Categories"
        subTitle="2020 Jobs live - 293 added today"
      />
      <Categories />
      <SectionHeader
        mainTitle="Featured Jobs"
        subTitle="Know your worth and find the job that fits you"
      />
      <FeauturedJobs />
      <Partners/>
      <CallAction/>
     
      <Articles/>
    </div>
  );
}
