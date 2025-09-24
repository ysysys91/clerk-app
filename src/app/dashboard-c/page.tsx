'use client'
import { useUser } from '@clerk/nextjs'

export default function DashboardCPage() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return <div>Loading... 페이지 로딩중입니다...</div>
  }

  if (!isSignedIn) {
    return <div>sign in to view this page.이 페이지를 보려면 로그인하세오.</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard(client-side)</h1>
      <div className="mb-5">
        <p>use clint 지지자 사용</p>
        <p>브라우즈에서 useUser() 함수 이용 </p>
        <p>
          Welcome, {user.firstName} {user.lastName}
          {''}
        </p>
        <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
      </div>
    </div>
  )
}
