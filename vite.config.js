import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';



const config = defineConfig({
  plugins: [vue()],
  resolve:{
    alias:[{
      find:"@",
      replacement:"/src/",
    },{
      find:"@components",
      replacement:"/src/components",
    },{
      find:"@assets",
      replacement:"/src/assets",
    },{
      find:"@layout",
      replacement:"/src/components/layout",
    },]
  },
});


// https://vitejs.dev/config/
export default config;
