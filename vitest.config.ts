import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

// o "paths - @" do tsconfig.json so vale para o TypeScript (tipos e editor),
// ele nao altera o import em tempo de execucao.
// por isso o vitest precisa do alias aqui tambem, senao da erro
// "Failed to resolve import" ao rodar os testes
export default defineConfig({
  resolve: {
    alias: {
      // "@" equivale a pasta src, ex: "@/domain/entities/answer.js"
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
