# Portfolio Next.js - 마이그레이션 가이드

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Server State**: TanStack Query
- **Database**: Supabase
- **Animation**: Framer Motion
- **Icons**: React Icons

## 📋 설정 순서

### 1. 패키지 설치
```bash
npm install
```

### 2. Supabase 설정

1. [Supabase](https://supabase.com)에서 프로젝트 생성
2. `.env.local` 파일 생성 및 다음 내용 추가:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Supabase 대시보드에서 테이블 생성:
```sql
CREATE TABLE posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT DEFAULT '익명',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) 활성화
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 읽기 가능
CREATE POLICY "Anyone can read posts" ON posts
  FOR SELECT USING (true);

-- 모든 사용자가 작성 가능
CREATE POLICY "Anyone can insert posts" ON posts
  FOR INSERT WITH CHECK (true);
```

### 3. 개발 서버 실행
```bash
npm run dev
```

## 📁 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   ├── providers.tsx   # TanStack Query Provider
│   └── globals.css     # 글로벌 스타일
├── components/
│   └── sections/       # 섹션 컴포넌트들
│       ├── BoardSection.tsx
│       ├── ContactSection.tsx
│       ├── FirstContentSection.tsx
│       ├── InfoSection.tsx
│       ├── ProjectSection.tsx
│       └── TimelineSection.tsx
├── data/               # JSON 데이터 파일들
│   ├── contact.json
│   ├── info.json
│   ├── projects.json
│   └── timeline.json
├── lib/
│   └── supabase.ts     # Supabase 클라이언트
└── store/
    └── modalStore.ts   # Zustand 스토어
```

## 🎨 디자인 컨셉

- **톤**: 밝은 톤
- **색상**: 파란 파스텔 계열
- **컬러 팔레트**: Tailwind config의 primary, secondary, accent 색상 사용

## 📝 TODO

- [ ] 각 섹션 컴포넌트 재작성 (밝은 파란 파스텔 톤)
- [ ] 이미지 최적화 (Next.js Image 컴포넌트 사용)
- [ ] 반응형 디자인 검토
- [ ] 성능 최적화

