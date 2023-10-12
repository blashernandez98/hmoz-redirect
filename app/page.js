import { permanentRedirect } from 'next/navigation'

export default function Home() {
  permanentRedirect('https://www.google.com')
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      ...
    </main>
  )
}
