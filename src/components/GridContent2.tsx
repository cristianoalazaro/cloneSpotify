type Props = {
    src: string,
    height: number,
    width: number
    title: string,
    description: string
    path: string
}

export default function GridContent2({ src, height, width, title, description, path }: Props) {
    return (
        <a href={path} className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
            <img src= {src} height={height} width={width} className="w-full rounded-md" />
            <strong className="text-sm font-semibold">{title}</strong>
            <p className="text-zinc-400 text-sm">{description}</p>
        </a>
    )
}