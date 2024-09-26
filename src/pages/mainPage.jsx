import styles from "../styles/mainPage.module.css";
import { Header } from "../components/Header";
import { InfoSection } from "../components/InfoSection";
import { IconsBlock } from "../components/IconsBlock";
export function MainPage() {
  return (
    <div>
      <Header />
      <InfoSection />
      <IconsBlock />
    </div>
  );
}
