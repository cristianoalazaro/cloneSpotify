import Footer from '@/components/Footer'
import GridContent from '@/components/GridContent'
import GridContent2 from '@/components/GridContent2'
import Sidebar from '@/components/Sidebar'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='bg-black/40 rounded-full p-1'>
              <ChevronLeft />
            </button>
            <button className='bg-black/40 rounded-full p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-7'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <GridContent src='./assets/image/album.jpg' height={104} width={104} title='Compilation by Varios Artists' />
            <GridContent src='./assets/image/funkBrasil.jpg' height={104} width={104} title='Funk Brasil' />
            <GridContent src='./assets/image/sertanejo.jpg' height={104} width={104} title='Sertanejo Brasil' />
            <GridContent src='./assets/image/40anosRock.jpg' height={104} width={104} title='40 anos de Rock' />
            <GridContent src='./assets/image/classico.jpg' height={104} width={104} title='O melhor do clássico' />
            <GridContent src='./assets/image/rockNacional.jpg' height={104} width={104} title='Rock Nacional' />
          </div>

          <h2 className='mt-10 font-semibold text-2xl'>Made for...</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'>
            <GridContent2 path='#' src='./assets/image/album.jpg' height={120} width={120} title='Compilation' description='Compilation by Varios Artists' />
            <GridContent2 path='#' src='./assets/image/funkBrasil.jpg' height={120} width={120} title='Funk Brasil' description='Seleção de Funk do Brasil' />
            <GridContent2 path='#' src='./assets/image/sertanejo.jpg' height={120} width={120} title='Sertanejo Brasil' description='O melhor do sertanejo nacional' />
            <GridContent2 path='#' src='./assets/image/40anosRock.jpg' height={120} width={120} title='40 anos de Rock' description='Resumo do melhor de 40 anos de Rock' />
            <GridContent2 path='#' src='./assets/image/rockNacional.jpg' height={120} width={120} title='Rock Nacional' description='Sucessos do Rock Nacional' />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
