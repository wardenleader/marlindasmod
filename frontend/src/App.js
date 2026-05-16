import "@/App.css";
import PageLoader from "@/components/PageLoader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookExperience from "@/components/BookExperience";
import About from "@/components/About";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import GiftCards from "@/components/GiftCards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function App() {
    return (
        <div className="App relative bg-cream text-ink">
            <PageLoader />
            <Navigation />
            <main>
                <Hero />
                <BookExperience />
                <About />
                <Story />
                <Services />
                <Team />
                <Reviews />
                <GiftCards />
                <Contact />
            </main>
            <Footer />
            <FloatingCTA />
        </div>
    );
}
