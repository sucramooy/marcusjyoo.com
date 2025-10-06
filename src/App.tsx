import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import PCBrulePage from "./components/PCBrulePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [scrollToSection, setScrollToSection] = useState<string | null>(null);

  const handleNavigate = (page: string, section?: string) => {
    setCurrentPage(page);
    setScrollToSection(section || null);
    
    if (!section) {
      // Scroll to top when navigating without section
      window.scrollTo(0, 0);
    }
  };

  const handleNavigateToTimeline = () => {
    handleNavigate("pcbrule", "timeline");
  };

  useEffect(() => {
    if (scrollToSection && currentPage === "pcbrule") {
      // First scroll to top immediately to show the full page
      window.scrollTo(0, 0);
      
      // Wait for page to render, then perform custom smooth scroll to timeline
      setTimeout(() => {
        const element = document.getElementById("timeline-section");
        if (element) {
          // Calculate target position to completely hide the divider line
          // Scroll so the divider (at element top) is at viewport position 0, hidden behind nav bar
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
          const targetPosition = elementTop + 1; // +1px to ensure divider is fully hidden above viewport
          
          // Custom smooth scroll with sinusoidal easing
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 400; // 400ms animation
          let startTime: number | null = null;
          
          function animation(currentTime: number) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Sinusoidal easing function (ease-in-out)
            const easedProgress = 0.5 * (1 - Math.cos(progress * Math.PI));
            
            window.scrollTo(0, startPosition + distance * easedProgress);
            
            if (progress < 1) {
              requestAnimationFrame(animation);
            }
          }
          
          requestAnimationFrame(animation);
        }
        setScrollToSection(null);
      }, 150); // Slightly longer delay to ensure users see the page
    }
  }, [currentPage, scrollToSection]);

  const renderPage = () => {
    switch (currentPage) {
      case "pcbrule":
        return <PCBrulePage />;
      case "home":
      default:
        return <HomePage onNavigate={handleNavigate} onNavigateToTimeline={handleNavigateToTimeline} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#2d2d2d]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}