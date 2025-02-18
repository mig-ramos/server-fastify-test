## SERVER

1. npm init -y
2. npm i fastify
3. cria pasta src
4. cria server.ts
5. npm i tsx
6. npm i tsx javascript @types/node -D
7. tsc --init
8. Pegar o config.ts do site: https://github.com/tsconfig/bases?tab=readme-ov-file      -> De acordo com o node.
9. Rodar o programa: npx tsx src/server.ts
10. Fazer script dev:
 "scripts": {
    "dev": "tsx watch src/server.ts"
  },
11. Depois: npm run dev
12. npm i @fastify/cors
13. npm i zod
14. npm i fastify-type-provider-zod
15. Os itens acima são para validar e processar de que forma retornará os dados do servidor
16. DOCUMENTAÇÃO: npm i @fastify/swagger @fastify/swagger-ui
17. Depois da exigencia de isolar a rota num arquivo separado, acessar a rota "/docs", já informa o tipo de dados de entrada e as possíveis respostas desta rota