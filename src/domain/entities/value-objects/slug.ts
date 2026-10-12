export class Slug {
    public value: string

    constructor(value: string) {
        this.value = value
    }

    /**
     * Receives a string and normalize it as a slug.
     *
     * Example: "An example title" => "an-example-title"
     *
     * @param text {string}
     */
    static createFromText(text: string): Slug {
        const slugText = text
            .normalize('NFKD')
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/_/g, '-')
            .replace(/--+/g, '-')
            .replace(/-$/g, '')

        return new Slug(slugText)
    }
}


// const slug = Slug.createFromText('Como criar uma API?')
/*
1. createFromText recebe "Como criar uma API?"
2. limpa o texto → slugText = "como-criar-uma-api"
3. return new Slug("como-criar-uma-api")
        └─ constructor(value) { this.value = value }   ← aqui o value é preenchido
4. return do objeto Slug criado
5. slug.value → "como-criar-uma-api"
*/