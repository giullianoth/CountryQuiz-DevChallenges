# Country Quiz Solution

**Disponível em | Available in: Português - BR | English**

Esta é uma solução de um quiz proposta pela plataforma [devchallenges.io](https://devchallenges.io/challenge/country-quizz). Trata-se de um jogo de quiz dinâmico e interativo focado em conhecimentos geográficos. A aplicação utiliza dados em tempo real da [REST Countries API](https://restcountries.com/) para gerar perguntas aleatórias sobre bandeiras, capitais, moedas, regiões e idiomas de países ao redor do mundo. Desenvolvido com Next.js e TypeScript, o projeto foca em uma experiência de usuário fluida e lógica de estado robusta.

*This is a solution to a quiz proposed by the [devchallenges.io](https://devchallenges.io/challenge/country-quizz) platform. This is a dynamic and interactive quiz game focused on geographical knowledge. The application uses real-time data from the [REST Countries API](https://restcountries.com/) to generate random questions about flags, capitals, currencies, regions, and languages of countries worldwide. Built with Next.js and TypeScript, the project focuses on a smooth user experience and robust state logic.*

## Sumário | Table of Contents

- [Visão geral | *Overview*](#visão-geral--overview)
    - [O desafio | *The challenge*](#o-desafio--the-challenge)
    - [Capturas de Tela | *Screenshots*](#capturas-de-tela--screenshots)
    - [Links](#links)
- [Instalação | *Installation*](#instalação--installation)
- [Meu Processo | *My Process*](#meu-processo--my-process)
    - [Tecnologias Utilizadas | *Built With*](#tecnologias-utilizadas--built-with)
    - [O que eu aprendi | *What I learned*](#o-que-eu-aprendi--what-i-learned)
- [Autor | *Author*](#autor--author)

## Visão Geral | *Overview*

### O desafio | *The Challenge*

Os usuários devem ser capazes de:

- Visualizar perguntas com múltiplas opções.
- Responder uma pergunta e visualizar em tempo real se está correta ou errada.
- Navegar entre as perguntas já respondidas.
- Visualizar a página de congratulações e o resultado do quiz.

*Users should be able to:*

- *View questions with multiple options.*
- *Answer a question and see in real time if it's correct or incorrect.*
- *Browse through previously answered questions.*
- *View the congratulations page and the quiz results.*

### Capturas de Tela | *Screenshots*

![Captura de tela em desktop | Screenshot in desktop](/public/screenshots/desktop_1440px.jpeg)

Captura de tela em desktop | *Screenshot in desktop*

---

![Captura de tela em tablet | Screenshot in tablet](/public/screenshots/tablet_768px.jpeg)

Captura de tela em tablet | *Screenshot in tablet*

---

![Captura de tela em mobile | Screenshot in mobile](/public/screenshots/mobile_414px.jpeg)

Captura de tela em mobile | *Screenshot in mobile*

---

### Links

- [URL do site ativo | *Live Site URL*](https://country-quiz-sigma.vercel.app/)

## Instalação | *Installation*

1. **Clone o repositório | _Clone the repository:_**

```bash
git clone https://github.com/giullianoth/CountryQuiz-DevChallenges
```

2. **Instale as dependências | _Install dependencies:_**

```bash
npm install
```
3. **Inicie o projeto | _Start the project:_**

```bash
npm run dev
```

## Meu Processo | *My Process*

### Tecnologias Utilizadas | *Built With*

- [**Next.js 15**](https://nextjs.org/) - Componentes dos lados Cliente/Servidor. *Server/Client Components.*
- [**React 19**](https://react.dev/) - Utilizando o novo React Compiler para memorização automática. | *Using the new React Compiler for automatic memorization.*
- [**TypeScript**](https://www.typescriptlang.org/) - Interfaces para tipagem da API | *API typing interfaces*
- [**REST COUNTRIES API**](https://restcountries.com/) - Consumo de dados reais | *Actual data usage*
- [**Axios**](https://axios-http.com/) - Instâncias personalizadas e gerenciamento global de requisições. | *Custom instances and global request management.*
- **CSS Modules** - Estilização isolada e escalável | *Isolated and scalable styling*

### O que eu aprendi | *What I learned*

- **Gerenciamento de Estado Complexo:** Implementação de lógica de quiz centralizada em Custom Hooks, facilitando a comunicação entre componentes e o controle de fluxo do jogo.
- **Consumo de API com Axios:** Tratamento de dados assíncronos e processamento de payloads complexos da REST Countries API para transformá-los em interfaces TypeScript seguras.
- **Algoritmos de Randomização:** Criação de lógica para selecionar países e gerar "distratores" (opções incorretas) de forma dinâmica, garantindo que o quiz nunca se repita da mesma forma.
- **Experiência do Usuário (UX):** Uso de temporizadores (```setTimeout```) e estados de carregamento para criar uma transição suave entre a resposta do usuário e a próxima pergunta.
- **Escalabilidade com TypeScript:** Definição de interfaces rigorosas para modelos de perguntas e dados geográficos, prevenindo erros em tempo de desenvolvimento.

---

- *__Complex State Management:__ Implementation of centralized quiz logic using Custom Hooks, streamlining communication between components and game flow control.*
- *__API Consumption with Axios:__ Handling asynchronous data and processing complex payloads from the REST Countries API to transform them into type-safe TypeScript interfaces.*
- *__Randomization Algorithms:__ Developing logic to select countries and dynamically generate "distractors" (incorrect options), ensuring the quiz experience is unique every time.*
- *__User Experience (UX):__ Utilizing timers (```setTimeout```) and loading states to create smooth transitions between user interaction and the next question.*
- *__Scalability with TypeScript:__ Defining strict interfaces for question templates and geographic data, preventing bugs during the development phase.*

### Autor | *Author*

Feito com :heart: por este cara sonhador:

*Made with :heart: by this dreamy guy:*

| <img src="https://avatars.githubusercontent.com/u/106249494?v=4" width="100px" style="border-radius: 50%"> **Giulliano Guimarães** |
| --- |
|[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/giullianoth) [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/giullianoth/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giullianoth/) [![GMail](https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white)](mailto:llthguimaraes@gmail.com) |