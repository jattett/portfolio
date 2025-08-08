import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const ImageContainer = styled.div<{ isLoaded: boolean }>`
  position: relative;
  overflow: hidden;
  background-color: #f0f0f0;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0.8)};
  cursor: pointer;
`;

const StyledImage = styled.img<{ isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isLoaded }) => (isLoaded ? 'scale(1)' : 'scale(1.05)')};
  pointer-events: none; // 이미지 클릭 이벤트를 컨테이너로 전달
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  pointer-events: none; // 플레이스홀더도 클릭 이벤트를 방해하지 않도록
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder,
  className,
  onClick,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    observerRef.current.observe(img);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // 에러 시 기본 이미지로 대체
    setImageSrc('/assets/placeholder.png');
    setIsLoaded(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.();
  };

  return (
    <ImageContainer 
      isLoaded={isLoaded} 
      className={className} 
      style={style}
      onClick={handleClick}
    >
      {!isLoaded && <Placeholder />}
      <StyledImage
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        isLoaded={isLoaded}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </ImageContainer>
  );
};

export default LazyImage; 