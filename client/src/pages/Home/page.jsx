import HeroSectionCard from "./../components/Home/HeroSectionCard";
import HomeNavBar from "./../components/Home/HomeNavBar";
import HomeWrapper from "./../components/Home/HomeWrapper";
import LoginCard from "./../components/Home/LoginCard";

export default function Home() {
  return (
    <>
      <HomeNavBar />
      <HomeWrapper>
        <HeroSectionCard />
        <LoginCard />
      </HomeWrapper>
    </>
  );
}
