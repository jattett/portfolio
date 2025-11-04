'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase, Post, isSupabaseConfigured } from '@/lib/supabase'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function BoardSection() {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const queryClient = useQueryClient()

  // 게시글 목록 조회
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      if (!supabase) throw new Error('Supabase not configured')
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data as Post[]
    },
    enabled: isSupabaseConfigured && !!supabase,
  })

  // 게시글 작성
  const createMutation = useMutation({
    mutationFn: async (newPost: Omit<Post, 'id' | 'created_at' | 'updated_at'>) => {
      if (!supabase) throw new Error('Supabase not configured')
      const { data, error } = await supabase
        .from('posts')
        .insert([newPost])
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      setShowForm(false)
      setTitle('')
      setContent('')
      setAuthor('')
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createMutation.mutate({
      title,
      content,
      author: author || '익명',
    })
  }

  // Supabase가 설정되지 않았으면 게시판을 표시하지 않음
  if (!isSupabaseConfigured || !supabase) {
    return null
  }

  return (
    <section id="board" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            게시판
          </h2>
          <p className="text-lg text-gray-600">
            자유롭게 글을 작성하고 소통해보세요
          </p>
        </motion.div>

        <motion.button
          onClick={() => setShowForm(!showForm)}
          className="mb-8 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showForm ? '작성 취소' : '+ 새 글 작성'}
        </motion.button>

        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="mb-8 p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="작성자 이름 (선택)"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              />
              <button
                type="submit"
                disabled={createMutation.isPending}
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
              >
                {createMutation.isPending ? '작성 중...' : '작성하기'}
              </button>
            </div>
          </motion.form>
        )}

        {isLoading ? (
          <div className="text-center py-12 text-gray-500">로딩 중...</div>
        ) : (
          <div className="space-y-4">
            {posts.length === 0 ? (
              <div className="text-center py-12 text-gray-500 bg-white rounded-xl shadow">
                아직 작성된 글이 없습니다.
              </div>
            ) : (
              posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {post.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString('ko-KR')}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 whitespace-pre-wrap">
                    {post.content}
                  </p>
                  <div className="text-sm text-primary-600 font-medium">
                    작성자: {post.author}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  )
}
