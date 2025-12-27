
// interface Doom{
//   a: HTMLAnchorElement
//   div: HTMLDivElement
//   p: HTMLParagraphElement
// }

// interface SVG{
//   a: SVGAElement;
//   animate: SVGAnimateElement;
//   animateMotion: SVGAnimateMotionElement;
//   animateTransform: SVGAnimateTransformElement;
// }

// function query<T extends keyof Doom>(seletor: T): Doom[T] | null
// function query<T extends keyof SVG>(seletor: T): SVG[T] | null
// function query(seletor: string): Element | null
// function query(seletor: string): Element | null {
//   return document.querySelector(seletor)
// }

// function teste(a:number): number
// function teste(a:string): string
// function teste(a:number | string): number | string{
//   return a
// }

// let l: string | number = 2
// teste(1)
// teste("1")
// teste(l)

// const a = query(".animate")
// const b = query(".po")




// interface Doom{
//   a: HTMLAnchorElement
//   div: HTMLDivElement
//   p: HTMLParagraphElement

// }
// function query<T extends keyof Doom>(seletor:T): Doom[T] | null
// function query(seletor: string): Element | null
// function query(seletor:string): Element | null{
//   return document.querySelector("")
// }

// const a = query(".a")

// async function fetchData<T>(url: string): Promise<T> {
//   const base = 'https://api.origamid.dev/json';
//   const response = await fetch(base + url);
//   return await response.json();
// }

// interface Jogo {
//   nome: string;
//   ano: number;
//   desenvolvedora: string;
//   plataformas: string[];
// }

// interface Livro {
//   nome: string;
//   ano: number;
//   autor: string;
//   paginas: number;
// }

// async function handleData() {
//   const jogo = await fetchData('/jogo.json');
//   console.log("ui")
//   if (checkInterface<Jogo>(jogo, 'nome',"ano")) {
//     console.log(jogo)
//   }
// }


// function checkInterface<T>(dado: unknown, ...props: Array<keyof T>): dado is T{

//   if(dado && typeof dado == "object" && (props.every((atualValor) => atualValor in dado))){
//     console.log("foi true")
//     return true
//   }
//   console.log("foi falso")
//   return false

// }

// handleData()



















