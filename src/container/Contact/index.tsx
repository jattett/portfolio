import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaPhone, FaGlobe } from 'react-icons/fa';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Styled from './Styled';
import { globalModalState } from '../main';

interface ContactItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
  color: string;
}

function SortableContactItem({ item, isDragging }: { item: ContactItem; isDragging: boolean }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: itemIsDragging,
  } = useSortable({ 
    id: item.id,
    animateLayoutChanges: () => false,
  });

  const baseTransform = CSS.Transform.toString(transform) || '';
  const style = {
    transform: itemIsDragging ? `${baseTransform} rotate(5deg) scale(1.1)` : baseTransform,
    transition: isDragging ? 'none' : transition,
    zIndex: itemIsDragging ? 1000 : 1,
  } as React.CSSProperties;

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
      ref={setNodeRef}
      variants={itemVariants}
      initial="initial"
      animate={itemIsDragging ? "drag" : "animate"}
      whileHover={itemIsDragging ? undefined : "hover"}
      className="contact-item"
      {...attributes}
      {...listeners}
      style={{
        ...style,
        background: `linear-gradient(135deg, ${item.color}20, rgba(57, 255, 20, 0.8))`,
        border: `2px solid ${item.color}40`,
        opacity: itemIsDragging ? 0.9 : 1,
      }}
      layout
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }}
      onMouseEnter={() => globalModalState.setElementHover('contact-item')}
      onMouseLeave={() => globalModalState.setElementHover(null)}
      data-dragging={itemIsDragging ? true : undefined}
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
          background: `radial-gradient(circle, ${item.color}40, transparent)`
        }}
      />
    </motion.div>
  );
}

function Contact() {
  const [contactItems, setContactItems] = useState<ContactItem[]>([
    {
      id: 'github',
      icon: <FaGithub />,
      title: 'GitHub',
      content: 'https://github.com/jattett',
      link: 'https://github.com/jattett',
      color: '#333'
    },
    {
      id: 'email',
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'gnto2000@naver.com',
      link: 'mailto:gnto2000@naver.com',
      color: '#EA4335'
    },
    {
      id: 'phone',
      icon: <FaPhone />,
      title: 'Phone',
      content: '(+82) 010-7422-8672',
      link: 'tel:+8201074228672',
      color: '#25D366'
    },
    {
      id: 'website',
      icon: <FaGlobe />,
      title: 'Website',
      content: 'https://portfolio-4vhc.vercel.app/',
      link: 'https://portfolio-4vhc.vercel.app/',
      color: '#4285F4'
    }
  ]);

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = contactItems.find((item) => item.id === activeId) || null;

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    setActiveId(null);

    if (active.id !== over?.id) {
      setContactItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

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
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={contactItems.map(item => item.id)}
            strategy={rectSortingStrategy}
            >
              <motion.div 
                className="reorder-group"
                layout
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3
                }}
              >
                {contactItems.map((item) => (
                  <SortableContactItem 
                    key={item.id} 
                    item={item} 
                    isDragging={activeId === item.id}
                  />
                ))}
              </motion.div>
            </SortableContext>

            {/* Drag preview overlay to ensure the dragged item is visible */}
            <DragOverlay style={{ zIndex: 2000 }}>
              {activeItem ? (
                <motion.div
                  className="contact-item"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: `linear-gradient(135deg, ${activeItem.color}20, rgba(57, 255, 20, 0.8))`,
                    border: `2px solid ${activeItem.color}40`,
                  }}
                >
                  <div className="item-content">
                    <div className="item-icon">{activeItem.icon}</div>
                    <h3 className="item-title">{activeItem.title}</h3>
                    <div className="item-link">
                      {activeItem.link ? (
                        <a
                          href={activeItem.link}
                          target={activeItem.id === 'email' ? undefined : '_blank'}
                          rel={activeItem.id === 'email' ? undefined : 'noopener noreferrer'}
                          className="contact-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {activeItem.content}
                        </a>
                      ) : (
                        <span>{activeItem.content}</span>
                      )}
                    </div>
                  </div>
                  <div className="item-glow" />
                </motion.div>
              ) : null}
            </DragOverlay>
          </DndContext>
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
            드래그하여 순서를 변경하고 클릭하여 연결하세요
          </motion.p>
        </motion.div>
      </motion.div>
    </Styled>
  );
}

export default Contact;
