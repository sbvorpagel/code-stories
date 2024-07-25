import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-slate-300 rounded-2xl shadow-2xl md:w-2/4 lg:1/4 w-full m-4 p-4 flex flex-col gap-2 justify-center items-center content-center">
      <h1 className="text-3xl text-primary text-center">Code Stories</h1>
      <h2 className="text-2xl text-primary text-center">
        O Jogo de Mistério e Dedução
      </h2>

      <p>
        Code Stories é um intrigante jogo de cartas que coloca a criatividade e
        a capacidade de dedução dos jogadores à prova. Inspirado no famoso jogo
        de mistério, Black Stories, este jogo convida os participantes a
        resolver enigmas desafiadores e histórias enigmáticas. Cada carta
        apresenta uma situação misteriosa que os jogadores devem desvendar,
        usando apenas suas habilidades investigativas e raciocínio lógico.
      </p>

      <Link
        href="/stories"
        className="border border-slate-600 shadow-md m-2 p-2 rounded-lg text-slate-600"
      >
        Quero Jogar!!!
      </Link>

      <h3 className="text-xl text-primary text-center">
        Como jogar Code Stories?
      </h3>

      <ul className="list-decimal ml-8 flex flex-col gap-2">
        <li>
          Escolha um Mestre do Mistério: Um jogador assume o papel de Mestre do
          Mistério, que será o responsável por ler a história misteriosa e
          conduzir o jogo.
        </li>

        <li>
          Leia a História: O Mestre do Mistério lê em voz alta a parte inicial
          da história, que geralmente apresenta uma situação estranha, um crime
          ou um evento inexplicável.
        </li>

        <li>
          Faça Perguntas: Os outros jogadores assumem o papel de detetives e
          podem fazer perguntas ao Mestre do Mistério para tentar entender o que
          aconteceu. As perguntas devem ser respondidas apenas com sim, não
          ou irrelevante.
        </li>

        <li>
          Desvende o Mistério: Usando as respostas obtidas, os detetives devem
          montar as peças do quebra-cabeça e tentar descobrir a sequência de
          eventos que levou ao desfecho apresentado na história.
        </li>
      </ul>
    </div>
  );
}
