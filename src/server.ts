import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";

import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { subscribeToEventRoute } from "./routes/subscribe-to-event-route";
import { env } from "./env";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

// app.register(fastifyCors, {
//   origin: "http://localhost:3000",
// });
// URLs front ends acesse o server
// app.register(fastifyCors, {
//     origin: true,
//   });
// ou
app.register(fastifyCors);

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "SIDEBIT",
      version: "O.O.1",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

//body - recursos no corpo da requisição
//search params - do rota depois do ponto de interrogação, filtros, paginação
//route params  -  identificação de recursos id.

app.register(subscribeToEventRoute);

app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server running!");
});
