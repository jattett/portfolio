import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import HeaderStyled from './Styled';

interface HeaderProps {
  activeSection: string;
  onNavigate?: (sectionIndex: number) => void;
}

const sections = [
  { id: 'first', label: 'MAIN' },
  { id: 'info', label: 'INFO' },
  { id: 'timeline', label: 'TIMELINE' },
  { id: 'project', label: 'PROJECT' },
  { id: 'contact', label: 'CONTACT' },
];

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = useCallback((sectionIndex: number) => {
    onNavigate?.(sectionIndex);
    setIsMenuOpen(false);
  }, [onNavigate]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <HeaderStyled>
      <motion.div
        className="header-wrapper"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          DEV.GYUMIN
        </motion.h1>

        {/* PC 메뉴 */}
        <nav className="pc-nav">
          <ul>
            {sections.map(({ id, label }, index) => (
              <motion.li
                key={id}
                className={activeSection === id ? 'active' : ''}
                onClick={() => handleNavigation(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* 햄버거 버튼 */}
        <motion.button
          className="hamburger-button"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiMenu size={24} />
        </motion.button>
      </motion.div>

      {/* 모바일 드로어 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <motion.button
              className="drawer-close"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdClose size={24} />
            </motion.button>
            <ul>
              {sections.map(({ id, label }, index) => (
                <motion.li
                  key={id}
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => handleNavigation(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
};

export default Header;
