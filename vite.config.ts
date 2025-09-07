import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
<<<<<<< HEAD
  base: "/Haramaya-Gym/", //
=======
>>>>>>> 048c9ad21241b5a4e16cd0080519895510eb713c
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
=======
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> 048c9ad21241b5a4e16cd0080519895510eb713c
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
