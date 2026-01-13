# +Sorriso App

Projeto frontend simples para gerenciamento de consultas e prontuários.

Como executar localmente
- Abra o arquivo `menu.html` (ou `index.html`) em um navegador.

Preparar e publicar no GitHub
1. Instale Git e GitHub CLI (GUI).
2. No PowerShell, configure seu usuário Git:

   git config --global user.name "Seu Nome"
   git config --global user.email "seu@email.com"

3. Inicialize e envie para o GitHub (após autenticar com `gh auth login`):

   git init
   git branch -M main
   git add .
   git commit -m "Initial commit"
   gh repo create sorriso-app --public --source=. --remote=origin --push --confirm

4. Ative o GitHub Pages nas configurações do repositório (branch `main` / root) para publicar o site.

Observações
- Se quiser autenticação e banco de dados para funcionalidade multiusuário, posso integrar Firebase ou Supabase.
- Remova bordas de depuração em `menu.css` se desejar antes do push final.

---
Feito com ❤️ — me diga quando estiver pronto para eu criar o repositório remoto com `gh` ou te passar os comandos para rodar localmente.