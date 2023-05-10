const res = await fetch("https://deno.land");
const body = await res.text();
console.log(body);

// deno run httpRequest.ts
// deno run https://deno.land/std@0.185.0/examples/curl.ts https://deno.land
