export function youtubeEmbedSrc(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1`;
}

export function postPlayerCommand(
  iframe: HTMLIFrameElement | null | undefined,
  func: "playVideo" | "pauseVideo"
): void {
  iframe?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
}
