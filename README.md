<div align="center">

Portal de Notícias 📱
Um aplicativo mobile de notícias com autenticação de usuários, construído com React Native e uma API em Python/FastAPI.

</div>

<p align="center">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/React_Native-20232A%3Fstyle%3Dfor-the-badge%26logo%3Dreact%26logoColor%3D61DAFB" alt="Badge do React Native" />
<img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Badge do Expo" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Python-3776AB%3Fstyle%3Dfor-the-badge%26logo%3Dpython%26logoColor%3Dwhite" alt="Badge do Python" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/FastAPI-005571%3Fstyle%3Dfor-the-badge%26logo%3Dfastapi%26logoColor%3Dwhite" alt="Badge do FastAPI" />
</p>

📝 Sobre o Projeto
O objetivo deste projeto é criar um portal de notícias mobile completo, permitindo que usuários se cadastrem, façam login e interajam com o conteúdo. Após a autenticação, os usuários podem visualizar, criar e editar notícias em um feed dinâmico.

✨ Funcionalidades Implementadas
[x] Autenticação de Usuários: Sistema de cadastro e login para acesso seguro.

[x] Feed de Notícias: Listagem de todas as notícias publicadas com "pull to refresh".

[x] Gerenciamento de Conteúdo (CRUD):

Criação: Adicionar novas notícias através de um formulário.

Leitura: Visualizar a lista completa de notícias.

Atualização: Editar o título e o conteúdo de notícias existentes.

🛠️ Tecnologias Utilizadas
Frontend (Aplicativo Mobile)
React Native com Expo

Expo Router para navegação

Axios para comunicação com a API

TypeScript

Backend (API)
Python

FastAPI para a construção da API

SQLite como banco de dados

🚀 Como Rodar o Projeto
Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento localmente.

Pré-requisitos
Node.js (versão LTS recomendada, ex: 20.x)

Python (versão 3.8 ou superior)

Um emulador Android/iOS configurado ou um dispositivo físico.

1. Backend (API em Python)
Primeiro, inicie o servidor da API.

# 1. Navegue até a pasta do backend
cd caminho/para/seu/backend

# 2. Instale as dependências do Python
pip install -r requirements.txt

# 3. Inicie o servidor da API
uvicorn main:app --reload

O servidor estará rodando em http://12-7.0.0.1:8000. Deixe este terminal aberto.

2. Frontend (Aplicativo Mobile)
Com o backend no ar, configure e inicie o aplicativo.

# 1. Em um NOVO terminal, navegue até a pasta do frontend
cd caminho/para/seu/app-noticias

# 2. Instale as dependências do Node.js
npm install

# 3. Configure o endereço da API
# Abra o arquivo `lib/api.ts` e ajuste a `baseURL`.
# - Para Emulador Android: '[http://10.0.2.2:8000](http://10.0.2.2:8000)'
# - Para Emulador iOS ou dispositivo físico na mesma rede: 'http://SEU_IP_LOCAL:8000'

# 4. Inicie o aplicativo
npx expo start

Após iniciar, pressione a para abrir no emulador Android, i para o simulador iOS, ou escaneie o QR Code com o app Expo Go no seu celular.

👨‍💻👩‍💻 Integrantes do Grupo
Carolina Pichelli Souza

Fernando Alcantara D'Avila

Guilherme Xavier Zanetti

Heloísa Pichelli Souza

Lucas Batista de Sousa

Nuno Kasuo Tronco Yokoji

Vivian de Oliveira Zanon
