async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

interface curso {
  nome: string,
  horas: number,
  aulas: number,
  gratuito: boolean,
  tags: Array<string>,
  idAulas: Array<number>
  nivel: "iniciante" | "avancado"
}





function mostrarCursos(cursos:Array<curso>) {
  
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <div style="color: ${curso.nivel == "iniciante" ? "blue": "red"};"">
        <h1>Nome ${curso.nome}</h1>
        <p>Horas ${curso.horas}</p>
        <p>È gratuito ? ${curso.gratuito}</p>
        <p>Tags  ${curso.tags}</p>
        <p>Aulas ID ${curso.idAulas}</p>
      </div>
    `
  })
}
