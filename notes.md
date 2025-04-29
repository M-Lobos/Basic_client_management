
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

i) itializing node 
