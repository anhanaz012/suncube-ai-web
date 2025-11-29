
export default function VideoBox() {
  return (
    <div className="video-box">
      <video className="video-area" loop={true} muted autoPlay playsInline>
        <source src="https://www.pexels.com/download/video/855472/" type="video/mp4" />
      </video>
    </div>
  )
}
