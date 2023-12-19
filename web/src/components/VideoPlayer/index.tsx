import styles from "./index.module.css"

type VideoPlayerProps = {
    src: string
    poster?: string
}
export default function VideoPlayer({ src, poster }: VideoPlayerProps){
    return (
        <video
              id="video-player"
              className={`relative w-full h-full object-cover rounded-lg shadow-lg ${styles['video-player']}`}
              src={src}
              poster={poster}
              controls
        >
        </video>
    )
}