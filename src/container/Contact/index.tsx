import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaPhone, FaGlobe } from 'react-icons/fa';
import Styled from './Styled';
import { globalModalState } from '../main';
import contactData from '../../data/contact.json';

interface ContactItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
  color: string;
}

interface ContactItemJson {
  id: string;
  icon: string;
  title: string;
  content: string;
  link: string;
  color: string;
}

const contactIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub />,
  email: <FaEnvelope />,
  phone: <FaPhone />,
  website: <FaGlobe />,
};

function ContactItemCard({ item, isDragging }: { item: ContactItem; isDragging: boolean }) {
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number }>({ rotateX: 0, rotateY: 0 });
  const [glowPos, setGlowPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [ripplePos, setRipplePos] = useState<{ x: number; y: number } | null>(null);
  const [rippleKey, setRippleKey] = useState<number>(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rotateY = (px - 0.5) * 12;
    const rotateX = -(py - 0.5) * 12;
    setTilt({ rotateX, rotateY });
    setGlowPos({ x, y });
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipplePos({ x, y });
    setRippleKey(Date.now());
  }

  const itemVariants = {
    initial: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 10px 30px rgba(57, 255, 20, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    drag: {
      scale: 1.1,
      rotate: 5,
      boxShadow: "0 20px 40px rgba(57, 255, 20, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      animate={isDragging ? "drag" : "animate"}
      whileHover={isDragging ? undefined : "hover"}
      className="contact-item"
      style={{
        background: `linear-gradient(135deg, rgba(57, 255, 20, 0.12), rgba(57, 255, 20, 0.8))`,
        border: `2px solid rgba(57, 255, 20, 0.25)`,
        opacity: isDragging ? 0.9 : 1,
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      layout
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }}
      onMouseEnter={() => globalModalState.setElementHover('contact-item')}
      onMouseLeave={() => { globalModalState.setElementHover(null); handleMouseLeave(); }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      data-dragging={isDragging ? true : undefined}
    >
      <motion.div
        className="item-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div 
          className="item-icon"
          whileHover={{ 
            rotate: 360,
            scale: 1.2
          }}
          transition={{ duration: 0.6 }}
        >
          {item.icon}
        </motion.div>
        
        <motion.h3
          className="item-title"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {item.title}
        </motion.h3>
        
        <motion.div
          className="item-link"
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 10px rgba(57, 255, 20, 0.8)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {item.link ? (
            <motion.a
              href={item.link}
              target={item.id === 'email' ? undefined : "_blank"}
              rel={item.id === 'email' ? undefined : "noopener noreferrer"}
              className="contact-link"
              onClick={(e) => e.stopPropagation()}
            >
              {item.content}
            </motion.a>
          ) : (
            <span>{item.content}</span>
          )}
        </motion.div>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="item-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          pointerEvents: 'none',
          background: `radial-gradient(160px circle at ${glowPos.x}px ${glowPos.y}px, rgba(57, 255, 20, 0.25), transparent)`
        }}
      />

      {ripplePos && (
        <motion.div
          key={rippleKey}
          style={{
            position: 'absolute',
            left: ripplePos.x,
            top: ripplePos.y,
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: `rgba(57, 255, 20, 0.4)`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      )}
    </motion.div>
  );
}

function Contact() {
  const [contactItems] = useState<ContactItem[]>(() =>
    (contactData as ContactItemJson[]).map((item) => ({
      id: item.id,
      icon: contactIconMap[item.icon] ?? null,
      title: item.title,
      content: item.content,
      link: item.link,
      color: item.color,
    }))
  );

  // Drag & Drop 제거. 대체 효과로 틸트/글로우만 유지

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Styled>
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onMouseEnter={() => globalModalState.setElementHover('contact')}
        onMouseLeave={() => globalModalState.setElementHover(null)}
      >
        <motion.div 
          className="contact-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            드래그하여 순서를 변경하세요
          </motion.p>
        </motion.div>

        <motion.div
          className="contact-items-container"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="reorder-group"
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.3 }}
          >
            {contactItems.map((item) => (
              <div key={item.id} style={{ listStyle: 'none' }}>
                <ContactItemCard item={item} isDragging={false} />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive hint */}
        <motion.div
          className="interaction-hint"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            클릭하여 연결하거나 마우스를 올려보세요
          </motion.p>
        </motion.div>
      </motion.div>
    </Styled>
  );
}

export default Contact;
