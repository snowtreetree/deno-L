import { serve } from "https://deno.land/std@0.51.0/http/server.ts";
// console.log(serve)
const s = serve({ port: 8080 });
console.log("http://localhost:8080/");
for await (const req of s) {
  req.respond({ body: "Hello Deno\n" });
}