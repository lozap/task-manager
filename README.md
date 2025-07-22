<!--
Опис команд підключення проекту до платформи репозиторіїв github
-->

git config --global user.name "lozap"

git config --global user.email "lozinskyy@gmail.com"

git config --global init.defaultBranch main

git init

git add .

git commit -m "Initial commit"

touch README.md

git commit -m "Add README"

gh auth login

gh repo create task-manager --public

git branch -M main

git remote add origin https://github.com/lozap/task-manager.git

git remote set-url origin

git push -u origin main

touch .gitignore

echo "node_modules
package-lock.json" > .gitignore

<!-- Встановлення модулів необхідних для розробки застосунку -->

npm init -y

npm i express body-parser

npm i eslint eslint-config-prettier prettier -D

npm init @eslint/config@0.4.6
