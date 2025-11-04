import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// 환경 변수가 있을 때만 Supabase 클라이언트 생성
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export const isSupabaseConfigured = !!supabase

// 게시판 타입 정의
export interface Post {
  id: string
  title: string
  content: string
  author: string
  created_at: string
  updated_at: string
}

