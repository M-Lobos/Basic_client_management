
*CREATE PROJECT WITH PERN STACK*

*** Frontend ***
1) Instaling Vite + React
    i/      npm create @vite/latest client -- --template react
    ii/     cd client
    iii/    npm install
    iv/     npm run dev (check on localhost:5173 for react template app)

2) instaling Tailwind + Daisy UI
    i/      npm install tailwindcss @tailwindcss/vite 
    ii/     Add tailwind plugin to vite.config.js
                
                import { defineConfig } from 'vite'
                import tailwindcss from '@tailwindcss/vite'
                export default defineConfig({
                plugins: [
                    tailwindcss(),
                ],
                })
    iii/    Add to css file that imports tailwindCSS (remove other styles too)
                
                @import "tailwindcss";

    iv/     npm i -D daisyui@latest
    v/      add daisyUI to your app css
                @plugin "daisyui";

*** Backend ***

1) initialize node and istalling express
    i/      npm init -y
    ii/     npm install express

2) Installing dependencies 
    i/      npm install sequelize
    ii/     npm install dotenv
    iii/    npm install nodemon -D
    iv/     npm cors
    v/      npm install sequelize-auto -D
    vi/     npm install pg
    vii/    npm install pg-hstore

3) Create models from DB through sequelize-auto with:
    npx sequelize-auto -o "./server/src/models" -d client_manag_db -h localhost -u postgrs -x "Nero1509Sabrosum" -p 5432 - postgres -l esm --caseModel p