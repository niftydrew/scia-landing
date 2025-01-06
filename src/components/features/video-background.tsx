export function VideoBackground() {
  return (
    <>
      {/* <div className='absolute inset-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#021A0C] via-[#021A0C]/50 to-background' /> */}

      {/* Video Background */}
      <div className='absolute inset-0 h-[800px] overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover opacity-20'
        >
          <source
            src='/video/bg-video.mp4'
            type='video/mp4'
          />
        </video>
        <div className='absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-background/50 to-background' />
      </div>
    </>
  );
}
