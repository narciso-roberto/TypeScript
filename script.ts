
interface DoomInterface{
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

function query<T extends keyof DoomInterface>(target:T): DoomInterface[T] | null{
  return document.querySelector(target)
}




