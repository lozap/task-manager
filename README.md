# Опис команд підключення проекту до платформи репозиторіїв github

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

git push -u origin main

touch .gitignore

echo "node_modules
package-lock.json" > .gitignore

# Встановлення модулів необхідних для розробки застосунку

npm init -y

npm i express body-parser

npm i eslint eslint-config-prettier prettier -D

В матеріалі лекції використовується інструмент 
створення конфігурації eslint в json-файлі від 2021 року версії 0.4.6
npm init @eslint/config@0.4.6

перекомпілюємо старий json-файл конфігурації eslint в сучасний файл eslint.config.mjs
npx @eslint/migrate-config .eslintrc.json

Модуль автоматичного перезавантаження сервера після збереження зміненого коду
npm i nodemon -D

Створюємо схеми збереження даних
taskModel
час: 0:33:00

Створюємо маршрути
route
час: 37:20

Перевірка реєстрації з POSTMAN
час: 40:00