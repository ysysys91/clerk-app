import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <nav className="bg-red-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Clerk App</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            <SignedOut>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignInButton />
              </div>

              <div className="text-gray-300 hover:text-white mr-4">
                <SignUpButton />
              </div>
            </SignedOut>
            <SignedIn>
              <Link
                href="/repos"
                className="text-gray-300 hover:text-white mr-4"
              >
                Repos
              </Link>
              <Link
                href="/courses"
                className="text-gray-300 hover:text-white mr-4"
              >
                Courses
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-300 hover:text-white mr-4"
              >
                Dashboard-S
              </Link>

              <Link
                href="/dashboard-c"
                className="text-gray-300 hover:text-white mr-4"
              >
                Dashboard-C
              </Link>

              <div className="text-gray-300 hover:text-white mr-4">
                <UserButton />
              </div>

              <div className="text-gray-300 hover:text-white mr-4">
                <SignOutButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
