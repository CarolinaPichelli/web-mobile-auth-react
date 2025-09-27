# Portal de Notícias 📱

Um aplicativo mobile de notícias com cadastro de usuários, construído com **React Native** e uma **API em Python/FastAPI**.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react) 
![Expo](https://img.shields.io/badge/Expo-000000?style=flat&logo=expo) 
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python) 
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi)


### 👨‍💻👩‍💻 Integrantes do Grupo

- Carolina Pichelli Souza

- Fernando Alcantara D'Avila

- Guilherme Xavier Zanetti

- Heloísa Pichelli Souza

- Lucas Batista de Sousa

- Nuno Kasuo Tronco Yokoji

- Vivian de Oliveira Zanon

---

## 📝 Sobre o Projeto
O objetivo deste projeto é criar um **portal de notícias mobile completo**, permitindo que usuários se cadastrem, façam login e interajam com o conteúdo. Após a autenticação, os usuários podem visualizar, criar e editar notícias em um feed dinâmico.

---

## ✨ Funcionalidades Implementadas
- ✅ **Autenticação de Usuários:** Cadastro e login seguro.
- ✅ **Feed de Notícias:** Listagem de todas as notícias publicadas, com atualização dinâmica.
- ✅ **Gerenciamento de Conteúdo (CRUD):**
  - **Criação:** Adicionar novas notícias através de um formulário.
  - **Leitura:** Visualizar a lista completa de notícias.
  - **Atualização:** Editar o título e o conteúdo de notícias existentes.

---

## 🛠️ Tecnologias Utilizadas

**Frontend (Aplicativo Mobile)**
- React Native com Expo
- Expo Router para navegação
- Axios para comunicação com a API
- TypeScript

**Backend (API)**
- Python
- FastAPI para construção da API
- SQLite como banco de dados
- Python-dotenv para variáveis de ambiente

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão LTS recomendada, ex: 20.x)
- Python (versão 3.8 ou superior)
- Emulador Android/iOS configurado ou dispositivo físico

---

### Backend (API em Python)

1. Clone o repositório da API:
```bash
git clone https://github.com/zanettIno/web-mobile-auth-api.git
cd web-mobile-auth-api
```

2. Instale as dependências:
```bash
pip install -r requirements.txt
```

3. Inicie o servidor da API:
 ```bash
uvicorn main:app --reload
```

O servidor estará rodando em http://127.0.0.1:8000.

Ou utilize o link da API no Render (obs.: mantenha a API ligada em uma das suas de abas de navegador):
```bash
https://web-mobile-auth-api.onrender.com
```
---

### Frontend (Aplicativo Mobile)

1. Clone o repositório do aplicativo:
```bash
git clone https://github.com/CarolinaPichelli/web-mobile-auth-react.git
cd web-mobile-auth-react
```

2. Instale as dependências:
 ```bash
npm install
 ```

3. Configure o endereço da API no arquivo lib/api.ts:
 ```bash
// Para Emulador Android
baseURL: 'http://10.0.2.2:8000'

// Para Emulador iOS ou dispositivo físico na mesma rede
baseURL: 'http://SEU_IP_LOCAL:8000'

// Para utilizar a API disponibilizada pelo Render
baseURL: 'https://web-mobile-auth-api.onrender.com'
 ```

4. Inicie o aplicativo:
 ```bash
npx expo start
 ```

- Pressione a para abrir no emulador Android

- Ou escaneie o QR Code com o app Expo Go no seu celular

