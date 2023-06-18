import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex justify-between items-center">
            <div className='flex gap-3 items-center'>
                <img src='./assets/image/album.jpg' height={56} width={56} className='rounded' />
                <div>
                    <p className='text-sm'>Rope</p>
                    <p className='text-xs text-zinc-400'>Foo Fighters</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-6'>
                    <div><Shuffle size={20} className='text-zinc-200' /></div>
                    <div><SkipBack className='text-zinc-200' /></div>
                    <button className="w-10 h-10 bg-white rounded-full text-black flex items-center justify-center">
                        <Play size={20} />
                    </button>

                    <SkipForward size={20} className='text-zinc-200' />
                    <Repeat size={20} className='text-zinc-200' />
                </div>

                <div className='flex justify-center items-center gap-2 mt-2'>
                    <span className='text-sm text-zinc-400'>0:31</span>
                    <div className='h-1 w-96 bg-zinc-600 rounded-full'>
                        <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
                    </div>
                    <span className='text-sm text-zinc-400'>2:14</span>
                </div>
            </div>

            <div className='flex gap-4'>
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className='flex items-center gap-2'>
                    <Volume size={20} />
                    <div className='h-1 w-24 bg-zinc-600 rounded-full'>
                        <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
                    </div>
                </div>
                <Maximize />
            </div>
        </footer>

    )
}