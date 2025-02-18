import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
  origin: "http://localhost:3000",
});
// URLs front ends acesse o server
// app.register(fastifyCors, {
//     origin: true,
//   });
// ou
app.register(fastifyCors);

// Primeira rota
app.get("/hello", () => {
  return "Hello world";
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
