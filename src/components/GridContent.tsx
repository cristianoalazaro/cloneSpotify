import { Play } from "lucide-react"

type Props = {
  src: string,
  height: number,
  width: number
  title: string
}

export default function GridContent({src, height, width, title}: Props) {
  return (
    <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 group pr-2'>
      <img src= {src} height={height} width={width} />
      <strong>{title}</strong>
      <button className="p-2 bg-green-400 rounded-full text-black flex items-center invisible group-hover:visible">
        <Play />
      </button>
    </a>
  )
}