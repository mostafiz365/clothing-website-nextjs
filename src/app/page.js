import CollectionsSection from "@/components/CollectionsSection";
import EditorialSection from "@/components/EditorialSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeoSection";


export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <EditorialSection></EditorialSection>
      <CollectionsSection></CollectionsSection>
    </div>
  );
}
