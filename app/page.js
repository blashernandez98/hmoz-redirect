import { permanentRedirect } from 'next/navigation'

const link = 'https://twinmotion.unrealengine.com/panorama/bcWj0szGjxm7_zSN'

export default function Home() {
  permanentRedirect(link)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      ...
    </main>
  )
}
