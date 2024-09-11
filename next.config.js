/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',  // Ustawienie na eksportowanie statycznych plików
    basePath: "/Ewmar",  // Zamień na nazwę swojego repozytorium
    trailingSlash: true,  // Aby ścieżki zakończone były ukośnikami, co jest wymagane przez GitHub Pages
}

module.exports = nextConfig
