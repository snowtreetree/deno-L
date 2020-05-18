// import { serve } from "https://deno.land/std@0.51.0/http/server.ts";
// // console.log(serve)
// const s = serve({ port: 8080 });
// console.log("http://localhost:8080/");
// for await (const req of s) {
//   req.respond({ body: "Hello Deno\n" });
// }

import { Controller, Get, Area, App } from 'https://deno.land/x/alosaur/src/mod.ts';

@Controller('/home')
export class HomeController {
    @Get('/text')
    text() {
        return 'Hello world';
    }
    @Get('/json')
    json() {
        return { text: 'test' };
    }
}

// Declare module
@Area({
    controllers: [HomeController],
})
export class HomeArea {}

// Create alosaur application
const app = new App({
    areas: [HomeArea],
});

app.listen();