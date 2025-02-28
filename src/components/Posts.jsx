import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Posts = () => {
  const { ref, inView } = useInView()

  const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=5`
    )
    const data = await response.json()
    return data
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length ? pages.length + 1 : undefined
    },
    // Add React Query options to control refetching behavior
    staleTime: 5000, // Data remains fresh for 5 seconds
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error: {error.message}</div>
  if (!data?.pages) return null

  return (
    <div className="posts-container">
      {data.pages.map((group, i) => (
        <div key={i}>
          {group.map((post) => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ))}
      <div ref={ref} className="loading">
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'No more posts'}
      </div>
    </div>
  )
}

export default Posts 