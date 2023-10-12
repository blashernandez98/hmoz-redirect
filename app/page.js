import { permanentRedirect } from 'next/navigation'

export default function Home() {
  permanentRedirect(
    'https://twinmotion.unrealengine.com/panorama/arI2grvBC47tfMdw?lang=es-ES'
  )
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      ...
    </main>
  )
}
