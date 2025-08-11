import { useState, useCallback, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Header from "../../components/header";
import Styled from "./Styled";
import FirstContents from "../FirstContents";
import Info from "../Info";
import Contact from "../Contact";
import Project from "../Project";
import Timeline from "../Timeline";

const sections = [
  { id: "first", component: FirstContents, title: "First Contents" },
  { id: "info", component: Info, title: "Info" },
  { id: "timeline", component: Timeline, title: "Timeline" },
  { id: "project", component: Project, title: "Project" },
  { id: "contact", component: Contact, title: "Contact" },
];

// Global modal state management using a simple object
export const globalModalState = {
  isAnyModalOpen: false,
  hoveredElement: null as string | null,
  openModal: () => {
    globalModalState.isAnyModalOpen = true;
    document.body.style.overflow = "hidden";
  },
  closeModal: () => {
    globalModalState.isAnyModalOpen = false;
    document.body.style.overflow = "";
  },
  setElementHover: (elementId: string | null) => {
    globalModalState.hoveredElement = elementId;
  },
};

function Main() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number>();

  // Framer Motion values for enhanced animations
  const scrollY = useMotionValue(0);

  const scrollToSection = useCallback(
    (sectionIndex: number) => {
      if (containerRef.current) {
        const translateY = -sectionIndex * 100;
        containerRef.current.style.transform = `translateY(${translateY}vh)`;
        setActiveSection(sectionIndex);

        // Enhanced scroll animation with Framer Motion
        scrollY.set(sectionIndex * 100);
      }
    },
    [scrollY]
  );

  const handleScrollDown = useCallback(() => {
    // Don't scroll if any modal is open or hovering over specific elements
    if (globalModalState.isAnyModalOpen || globalModalState.hoveredElement) {
      return;
    }

    if (activeSection < sections.length - 1 && !isScrolling) {
      setIsScrolling(true);
      scrollToSection(activeSection + 1);

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, [activeSection, isScrolling, scrollToSection]);

  const handleScrollUp = useCallback(() => {
    // Don't scroll if any modal is open or hovering over specific elements
    if (globalModalState.isAnyModalOpen || globalModalState.hoveredElement) {
      return;
    }

    if (activeSection > 0 && !isScrolling) {
      setIsScrolling(true);
      scrollToSection(activeSection - 1);

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, [activeSection, isScrolling, scrollToSection]);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // Check if the target element or its parents have scrollable content
      const target = e.target as HTMLElement;
      const scrollableElement = target.closest(
        ".scrollable-content, .modal-content, .info-section"
      );

      // If hovering over scrollable content, don't prevent default
      if (scrollableElement) {
        return;
      }

      // Don't handle wheel events if any modal is open or hovering over specific elements
      if (globalModalState.isAnyModalOpen || globalModalState.hoveredElement) {
        return;
      }

      e.preventDefault();

      if (isScrolling) return;

      if (e.deltaY > 0) {
        handleScrollDown();
      } else {
        handleScrollUp();
      }
    },
    [isScrolling, handleScrollDown, handleScrollUp]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't handle key events if any modal is open
      if (globalModalState.isAnyModalOpen) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        handleScrollDown();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        handleScrollUp();
      }
    },
    [handleScrollDown, handleScrollUp]
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      // Don't handle touch events if any modal is open
      if (globalModalState.isAnyModalOpen) {
        return;
      }

      const touch = e.touches[0];
      const startY = touch.clientY;

      const handleTouchEnd = (e: TouchEvent) => {
        const touch = e.changedTouches[0];
        const endY = touch.clientY;
        const diffY = startY - endY;

        if (Math.abs(diffY) > 50) {
          if (diffY > 0) {
            handleScrollDown();
          } else {
            handleScrollUp();
          }
        }

        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchend", handleTouchEnd);
    },
    [handleScrollDown, handleScrollUp]
  );

  useEffect(() => {
    const container = document.getElementById("main-container");
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("keydown", handleKeyDown);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [handleWheel, handleKeyDown, handleTouchStart]);

  return (
    <Styled id="main-container">
      {/* Enhanced Header with animations */}
      <AnimatePresence mode="wait">
        {activeSection === 0 && (
          <motion.div
            key="header"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
            }}
          >
            <Header
              activeSection={sections[activeSection].id}
              onNavigate={(sectionIndex) => {
                scrollToSection(sectionIndex);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced sections container */}
      <motion.div
        ref={containerRef}
        className="sections-container"
        style={{
          transition: "transform 1s cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <motion.section
              key={section.id}
              className="section"
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {index === 0 ? (
                <Component onScrollDown={handleScrollDown} />
              ) : (
                <Component />
              )}
            </motion.section>
          );
        })}
      </motion.div>

      {/* Enhanced Navigation Dots */}
      <motion.div
        className="navigation-dots"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      >
        {sections.map((_, index) => (
          <motion.button
            key={index}
            className={`dot ${index === activeSection ? "active" : ""}`}
            onClick={() => scrollToSection(index)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.5 + index * 0.1,
              duration: 0.5,
              ease: "backOut",
            }}
            whileHover={{
              scale: 1.3,
              boxShadow: "0 0 20px rgba(57, 255, 20, 0.6)",
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              background:
                index === activeSection
                  ? "linear-gradient(45deg, #39ff14, #32cd32)"
                  : "transparent",
            }}
          >
            {index === activeSection && (
              <motion.div
                className="active-indicator"
                layoutId="activeDot"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="scroll-progress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #39ff14, #32cd32)",
          transformOrigin: "0%",
          zIndex: 1001,
          scaleX: useTransform(
            scrollY,
            [0, (sections.length - 1) * 100],
            [0, 1]
          ),
        }}
      />

      {/* Enhanced Background Effects */}
      <motion.div
        className="background-effects"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.1,
        }}
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(57, 255, 20, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(57, 255, 20, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(57, 255, 20, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </Styled>
  );
}

export default Main;
