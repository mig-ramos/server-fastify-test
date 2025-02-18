import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";

import { z } from "zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors, {
  origin: "http://localhost:3000",
});
// URLs front ends acesse o server
// app.register(fastifyCors, {
//     origin: true,
//   });
// ou
// app.register(fastifyCors);

//body - recursos no corpo da requisição
//search params - do rota depois do ponto de interrogação, filtros, paginação
//route params  -  identificação de recursos id.
app.post(
  "/subscriptions",
  {
    schema: {
      body: z.object({
        name: z.string(), // pode ser opcional  .optional()
        email: z.string().email(),
      }),
      response: {
        201: z.object({
          name: z.string(),
          email: z.string(),
        }),
      },
    },
  },
  async (request, reply) => {
    const { name, email } = request.body;

    //Faria a inscrição no banco de dados

    return reply.status(201).send({
      name,
      email,
    });
  }
);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
