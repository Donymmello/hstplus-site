import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Em ES Modules não temos __dirname por padrão, precisamos criá-lo assim:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Ler informações do package.json
const pkgPath = path.join(__dirname, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

// 2. Gerar o novo conteúdo do claude.md
const conteudo = `# Contexto do Projeto: ${pkg.name}

## Versão: ${pkg.version}
Este é um projeto full-stack rodando em Node.js e React.

## Tecnologias Atuais
${Object.keys(pkg.dependencies || {}).map(dep => `- ${dep}`).join('\n')}

## Última Atualização Automática
Data: ${new Date().toLocaleString()}
`;

// 3. Escrever no arquivo
fs.writeFileSync(path.join(__dirname, 'claude.md'), conteudo);
console.log('claude.md atualizado com sucesso!');