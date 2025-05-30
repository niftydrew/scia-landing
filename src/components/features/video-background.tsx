export function VideoBackground() {
  return (
    <>
      {/* <div className='absolute inset-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#240087] via-[#6366F1]/50 to-background' /> */}
      <div className='absolute inset-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6366F1] via-[#6366F1]/70 to-background' />

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
            src='/video/herobg_optimized.webm'
            type='video/webm'
          />
        </video>
        <div className='absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-background/60 to-background' />
      </div>
    </>
  );
}
