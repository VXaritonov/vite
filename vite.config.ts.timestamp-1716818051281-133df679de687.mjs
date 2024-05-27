// vite.config.ts
import { defineConfig } from "file:///C:/test/vite-example/vite/node_modules/vite/dist/node/index.js";
import react from "file:///C:/test/vite-example/vite/node_modules/@vitejs/plugin-react/dist/index.mjs";
import istanbul from "file:///C:/test/vite-example/vite/node_modules/vite-plugin-istanbul/dist/index.mjs";
var vite_config_default = defineConfig(
  {
    base: "vite",
    plugins: [
      react(),
      istanbul({
        cypress: true,
        requireEnv: false
      })
    ],
    server: {
      host: true,
      port: 3e3
    },
    resolve: {
      alias: {
        src: "/src"
      }
    }
  }
);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx0ZXN0XFxcXHZpdGUtZXhhbXBsZVxcXFx2aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx0ZXN0XFxcXHZpdGUtZXhhbXBsZVxcXFx2aXRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi90ZXN0L3ZpdGUtZXhhbXBsZS92aXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgaXN0YW5idWwgZnJvbSBcInZpdGUtcGx1Z2luLWlzdGFuYnVsXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICd2aXRlJyxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgaXN0YW5idWwoe1xyXG4gICAgICAgIGN5cHJlc3M6IHRydWUsXHJcbiAgICAgICAgcmVxdWlyZUVudjogZmFsc2UsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogdHJ1ZSxcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAgIHNyYzogXCIvc3JjXCIgICBcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbilcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUSxTQUFTLG9CQUFvQjtBQUNsUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxjQUFjO0FBR3JCLElBQU8sc0JBQVE7QUFBQSxFQUFhO0FBQUEsSUFDMUIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ0wsU0FBUztBQUFBLFFBQ1QsWUFBWTtBQUFBLE1BQ2hCLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0gsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
