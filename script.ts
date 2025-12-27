
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

// interface ObjLiteraly {
//   [key: string]: unknown
// }

// async function handleData() {
//   const jogo = await fetchData('/jogo.json');

//   if (checkInterface<Jogo>(jogo, 'nome',"ano")) {
//     console.log(jogo)
//   }
// }


// function checkInterface<T>(dado: unknown, ...props: Array<keyof T>): dado is T{

//   if(dado && typeof dado == "object" && (props.every((atualValor) => atualValor in dado))){
//     return true
//   }
//   return false

// }

// handleData()





interface ObjLiteraly {
  [key: string]: unknown
}

type ObjRecord = Record<string, unknown>

function soObjt(obj: ObjLiteraly,a:string){
 if (a in obj){
  console.log("Existe ",a," em obj")
 }
}

soObjt({"a":"ana maria"},"aa")




