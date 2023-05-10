const filenames = Deno.args;
for (const filename of filenames) {
    const file = await Deno.open(filename);
    await file.readable.pipeTo(Deno.stdout.writable, { preventClose: true });
}

// deno run --allow-read https://deno.land/std@0.185.0/examples/cat.ts /etc/hosts
// deno run --allow-read https://deno.land/std@0.185.0/examples/cat.ts "C:\Windows\System32\Drivers\etc\hosts"
