<div className="container-video-warp">
  <div
    className="container-video"
    onClick={() => handleDataClick(data)}
    key={index}
  >
    <div className="container-video">
      <MdOutlineVideoLibrary className="icon-video" />
    </div>
    <video
      src={data.videos.tiny.url}
      muted
      loop
      onMouseEnter={(e) => {
        e.target.play();
      }}
      onMouseLeave={(e) => {
        e.target.pause();
      }}
    />
  </div>
</div>;
