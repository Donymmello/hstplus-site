## REPOMIX
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.claude/
  settings.json
graphify-out/
  cache/
    ast/
      v0.9.14/
        7170799999f8f07626595a69efc8d1ad51fd60daa8fd5c44ee35cf67cc803839.json
        bf9b11d9cafa31776d5071f4aa1dbdfe7d30a5d35630d82e7f2f8041028784a1.json
        c3f2196c05614a1579f3f7ea493e58862bf6973f613bf8f7eb1989bc53bf6436.json
    stat-index.json
  .graphify_detect.json
  .graphify_python
  .graphify_root
server/
  cache/
    .gitkeep
  src/
    fetchPosts.js
    index.js
  .dockerignore
  .env.example
  Dockerfile
  package.json
  README.md
src/
  assets/
    clients/
      gabriel-couto.jpg
      lcpower.png
      manica.jpg
      mota-engil.png
      protecna.jpg
      tata.png
      tcpi.png
      terminais-do-norte.png
      uni-span.png
    gallery/
      avaliacao-escrita-unispan.jpg
      combate-incendio.jpg
      conducao-defensiva.jpg
      encerramento-formacao-unispan.jpg
      equipa-unispan-1.jpg
      equipa-unispan-2.jpg
      equipamentos-medicao.jpg
      espaco-confinado-terminais.jpg
      formacao-altura-unispan-1.jpg
      formacao-equipa.jpg
      formacao-sala-manica.jpg
      inspecao-gancho.jpg
      montagem-andaime.jpg
      rigger-altura.jpg
      sala-formacao.jpg
      visita-terreno-unispan.jpg
    about.jpg
    cta.jpg
    gallery1.jpg
    gallery2.jpg
    gallery3.jpg
    gallery4.jpg
    gallery5.jpg
    gallery6.jpg
    hero.jpg
    logo.png
  components/
    Analytics.jsx
    Blog.jsx
    ClientLogos.jsx
    Consultoria.jsx
    Contacto.jsx
    Counter.jsx
    Eyebrow.jsx
    Footer.jsx
    Formacoes.jsx
    Galeria.jsx
    GaleriaCTA.jsx
    HazardDivider.jsx
    Header.jsx
    Hero.jsx
    InspecaoQualidade.jsx
    Legalidade.jsx
    Metodologia.jsx
    OQueFazemos.jsx
    PageFade.jsx
    QuemSomos.jsx
    Referencias.jsx
    Reveal.jsx
    ScrollProgress.jsx
    Solucoes.jsx
    Stats.jsx
    TopBar.jsx
    WhatsAppButton.jsx
  data/
    content.js
    courses.js
  hooks/
    useScrollToHash.js
  layouts/
    MainLayout.jsx
  pages/
    GaleriaPage.jsx
    HomePage.jsx
  App.jsx
  index.css
  main.jsx
  theme.js
.dockerignore
.gitignore
.oxlintrc.json
CLAUDE.md
docker-compose.dev.yml
docker-compose.yml
Dockerfile
Dockerfile.dev
index.html
nginx.conf
package.json
README.md
vite.config.js
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path=".claude/settings.json">
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "C:\\Users\\Dony\\.local\\bin\\graphify.EXE hook-guard search"
          }
        ]
      },
      {
        "matcher": "Read|Glob",
        "hooks": [
          {
            "type": "command",
            "command": "C:\\Users\\Dony\\.local\\bin\\graphify.EXE hook-guard read"
          }
        ]
      }
    ]
  }
}
</file>

<file path="graphify-out/cache/ast/v0.9.14/7170799999f8f07626595a69efc8d1ad51fd60daa8fd5c44ee35cf67cc803839.json">
{"nodes": [{"id": "c_users_dony_documents_workspace_hstplus_site_package_json", "label": "package.json", "file_type": "code", "source_file": "package.json", "source_location": "L1"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_name", "label": "name", "file_type": "code", "source_file": "package.json", "source_location": "L2"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_private", "label": "private", "file_type": "code", "source_file": "package.json", "source_location": "L3"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_version", "label": "version", "file_type": "code", "source_file": "package.json", "source_location": "L4"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_type", "label": "type", "file_type": "code", "source_file": "package.json", "source_location": "L5"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_scripts", "label": "scripts", "file_type": "code", "source_file": "package.json", "source_location": "L6"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_scripts_dev", "label": "dev", "file_type": "code", "source_file": "package.json", "source_location": "L7"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_scripts_build", "label": "build", "file_type": "code", "source_file": "package.json", "source_location": "L8"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_scripts_lint", "label": "lint", "file_type": "code", "source_file": "package.json", "source_location": "L9"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_scripts_preview", "label": "preview", "file_type": "code", "source_file": "package.json", "source_location": "L10"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "label": "dependencies", "file_type": "code", "source_file": "package.json", "source_location": "L12"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_emotion_react", "label": "@emotion/react", "file_type": "code", "source_file": "package.json", "source_location": "L13"}, {"id": "emotion_react", "label": "@emotion/react", "file_type": "concept", "source_file": "package.json", "source_location": "L13"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_emotion_styled", "label": "@emotion/styled", "file_type": "code", "source_file": "package.json", "source_location": "L14"}, {"id": "emotion_styled", "label": "@emotion/styled", "file_type": "concept", "source_file": "package.json", "source_location": "L14"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_mui_icons_material", "label": "@mui/icons-material", "file_type": "code", "source_file": "package.json", "source_location": "L15"}, {"id": "mui_icons_material", "label": "@mui/icons-material", "file_type": "concept", "source_file": "package.json", "source_location": "L15"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_mui_material", "label": "@mui/material", "file_type": "code", "source_file": "package.json", "source_location": "L16"}, {"id": "mui_material", "label": "@mui/material", "file_type": "concept", "source_file": "package.json", "source_location": "L16"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_react", "label": "react", "file_type": "code", "source_file": "package.json", "source_location": "L17"}, {"id": "react", "label": "react", "file_type": "concept", "source_file": "package.json", "source_location": "L17"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_react_dom", "label": "react-dom", "file_type": "code", "source_file": "package.json", "source_location": "L18"}, {"id": "react_dom", "label": "react-dom", "file_type": "concept", "source_file": "package.json", "source_location": "L18"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_react_router_dom", "label": "react-router-dom", "file_type": "code", "source_file": "package.json", "source_location": "L19"}, {"id": "react_router_dom", "label": "react-router-dom", "file_type": "concept", "source_file": "package.json", "source_location": "L19"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_recharts", "label": "recharts", "file_type": "code", "source_file": "package.json", "source_location": "L20"}, {"id": "recharts", "label": "recharts", "file_type": "concept", "source_file": "package.json", "source_location": "L20"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies", "label": "devDependencies", "file_type": "code", "source_file": "package.json", "source_location": "L22"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_types_react", "label": "@types/react", "file_type": "code", "source_file": "package.json", "source_location": "L23"}, {"id": "types_react", "label": "@types/react", "file_type": "concept", "source_file": "package.json", "source_location": "L23"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_types_react_dom", "label": "@types/react-dom", "file_type": "code", "source_file": "package.json", "source_location": "L24"}, {"id": "types_react_dom", "label": "@types/react-dom", "file_type": "concept", "source_file": "package.json", "source_location": "L24"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_vitejs_plugin_react", "label": "@vitejs/plugin-react", "file_type": "code", "source_file": "package.json", "source_location": "L25"}, {"id": "vitejs_plugin_react", "label": "@vitejs/plugin-react", "file_type": "concept", "source_file": "package.json", "source_location": "L25"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_oxlint", "label": "oxlint", "file_type": "code", "source_file": "package.json", "source_location": "L26"}, {"id": "oxlint", "label": "oxlint", "file_type": "concept", "source_file": "package.json", "source_location": "L26"}, {"id": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_vite", "label": "vite", "file_type": "code", "source_file": "package.json", "source_location": "L27"}, {"id": "vite", "label": "vite", "file_type": "concept", "source_file": "package.json", "source_location": "L27"}], "edges": [{"source": "c_users_dony_documents_workspace_hstplus_site_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_package_name", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L2", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_package_private", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L3", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_package_version", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L4", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_package_type", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L5", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_package_scripts", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L6", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_scripts", "target": "c_users_dony_documents_workspace_hstplus_site_package_scripts_dev", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L7", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_scripts", "target": "c_users_dony_documents_workspace_hstplus_site_package_scripts_build", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L8", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_scripts", "target": "c_users_dony_documents_workspace_hstplus_site_package_scripts_lint", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L9", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_scripts", "target": "c_users_dony_documents_workspace_hstplus_site_package_scripts_preview", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L10", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L12", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_emotion_react", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L13", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_emotion_react", "target": "emotion_react", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L13", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_emotion_styled", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L14", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_emotion_styled", "target": "emotion_styled", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L14", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_mui_icons_material", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L15", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_mui_icons_material", "target": "mui_icons_material", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L15", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_mui_material", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L16", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_mui_material", "target": "mui_material", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L16", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_react", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L17", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_react", "target": "react", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L17", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_react_dom", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L18", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_react_dom", "target": "react_dom", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L18", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_react_router_dom", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L19", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_react_router_dom", "target": "react_router_dom", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L19", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_recharts", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L20", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_dependencies_recharts", "target": "recharts", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L20", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L22", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_types_react", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L23", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_types_react", "target": "types_react", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L23", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_types_react_dom", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L24", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_types_react_dom", "target": "types_react_dom", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L24", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_vitejs_plugin_react", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L25", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_vitejs_plugin_react", "target": "vitejs_plugin_react", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L25", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_oxlint", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L26", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_oxlint", "target": "oxlint", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L26", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies", "target": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_vite", "relation": "contains", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L27", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_package_devdependencies_vite", "target": "vite", "relation": "imports", "confidence": "EXTRACTED", "source_file": "package.json", "source_location": "L27", "weight": 1.0, "context": "import"}]}
</file>

<file path="graphify-out/cache/ast/v0.9.14/bf9b11d9cafa31776d5071f4aa1dbdfe7d30a5d35630d82e7f2f8041028784a1.json">
{"nodes": [{"id": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_json", "label": ".oxlintrc.json", "file_type": "code", "source_file": ".oxlintrc.json", "source_location": "L1"}, {"id": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_schema", "label": "$schema", "file_type": "code", "source_file": ".oxlintrc.json", "source_location": "L2"}, {"id": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_plugins", "label": "plugins", "file_type": "code", "source_file": ".oxlintrc.json", "source_location": "L3"}, {"id": "ref_react", "label": "react", "file_type": "concept", "source_file": ".oxlintrc.json", "source_location": "L3"}, {"id": "ref_oxc", "label": "oxc", "file_type": "concept", "source_file": ".oxlintrc.json", "source_location": "L3"}, {"id": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_rules", "label": "rules", "file_type": "code", "source_file": ".oxlintrc.json", "source_location": "L4"}, {"id": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_rules_react_rules_of_hooks", "label": "react/rules-of-hooks", "file_type": "code", "source_file": ".oxlintrc.json", "source_location": "L5"}, {"id": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_rules_react_only_export_components", "label": "react/only-export-components", "file_type": "code", "source_file": ".oxlintrc.json", "source_location": "L6"}, {"id": "ref_warn", "label": "warn", "file_type": "concept", "source_file": ".oxlintrc.json", "source_location": "L6"}], "edges": [{"source": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_json", "target": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_schema", "relation": "contains", "confidence": "EXTRACTED", "source_file": ".oxlintrc.json", "source_location": "L2", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_json", "target": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_plugins", "relation": "contains", "confidence": "EXTRACTED", "source_file": ".oxlintrc.json", "source_location": "L3", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_plugins", "target": "ref_react", "relation": "extends", "confidence": "EXTRACTED", "source_file": ".oxlintrc.json", "source_location": "L3", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_plugins", "target": "ref_oxc", "relation": "extends", "confidence": "EXTRACTED", "source_file": ".oxlintrc.json", "source_location": "L3", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_json", "target": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_rules", "relation": "contains", "confidence": "EXTRACTED", "source_file": ".oxlintrc.json", "source_location": "L4", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_rules", "target": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_rules_react_rules_of_hooks", "relation": "contains", "confidence": "EXTRACTED", "source_file": ".oxlintrc.json", "source_location": "L5", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_rules", "target": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_rules_react_only_export_components", "relation": "contains", "confidence": "EXTRACTED", "source_file": ".oxlintrc.json", "source_location": "L6", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_oxlintrc_rules_react_only_export_components", "target": "ref_warn", "relation": "extends", "confidence": "EXTRACTED", "source_file": ".oxlintrc.json", "source_location": "L6", "weight": 1.0, "context": "import"}]}
</file>

<file path="graphify-out/cache/ast/v0.9.14/c3f2196c05614a1579f3f7ea493e58862bf6973f613bf8f7eb1989bc53bf6436.json">
{"nodes": [{"id": "c_users_dony_documents_workspace_hstplus_site_server_package_json", "label": "package.json", "file_type": "code", "source_file": "server/package.json", "source_location": "L1"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_name", "label": "name", "file_type": "code", "source_file": "server/package.json", "source_location": "L2"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_private", "label": "private", "file_type": "code", "source_file": "server/package.json", "source_location": "L3"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_version", "label": "version", "file_type": "code", "source_file": "server/package.json", "source_location": "L4"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_type", "label": "type", "file_type": "code", "source_file": "server/package.json", "source_location": "L5"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts", "label": "scripts", "file_type": "code", "source_file": "server/package.json", "source_location": "L6"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts_start", "label": "start", "file_type": "code", "source_file": "server/package.json", "source_location": "L7"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts_dev", "label": "dev", "file_type": "code", "source_file": "server/package.json", "source_location": "L8"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts_fetch_now", "label": "fetch:now", "file_type": "code", "source_file": "server/package.json", "source_location": "L9"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies", "label": "dependencies", "file_type": "code", "source_file": "server/package.json", "source_location": "L11"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_express", "label": "express", "file_type": "code", "source_file": "server/package.json", "source_location": "L12"}, {"id": "express", "label": "express", "file_type": "concept", "source_file": "server/package.json", "source_location": "L12"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_cors", "label": "cors", "file_type": "code", "source_file": "server/package.json", "source_location": "L13"}, {"id": "cors", "label": "cors", "file_type": "concept", "source_file": "server/package.json", "source_location": "L13"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_dotenv", "label": "dotenv", "file_type": "code", "source_file": "server/package.json", "source_location": "L14"}, {"id": "dotenv", "label": "dotenv", "file_type": "concept", "source_file": "server/package.json", "source_location": "L14"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_node_cron", "label": "node-cron", "file_type": "code", "source_file": "server/package.json", "source_location": "L15"}, {"id": "node_cron", "label": "node-cron", "file_type": "concept", "source_file": "server/package.json", "source_location": "L15"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_engines", "label": "engines", "file_type": "code", "source_file": "server/package.json", "source_location": "L17"}, {"id": "c_users_dony_documents_workspace_hstplus_site_server_package_engines_node", "label": "node", "file_type": "code", "source_file": "server/package.json", "source_location": "L18"}], "edges": [{"source": "c_users_dony_documents_workspace_hstplus_site_server_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_name", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L2", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_private", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L3", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_version", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L4", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_type", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L5", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L6", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts_start", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L7", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts_dev", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L8", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_scripts_fetch_now", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L9", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L11", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_express", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L12", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_express", "target": "express", "relation": "imports", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L12", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_cors", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L13", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_cors", "target": "cors", "relation": "imports", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L13", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_dotenv", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L14", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_dotenv", "target": "dotenv", "relation": "imports", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L14", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_node_cron", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L15", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_dependencies_node_cron", "target": "node_cron", "relation": "imports", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L15", "weight": 1.0, "context": "import"}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_json", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_engines", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L17", "weight": 1.0}, {"source": "c_users_dony_documents_workspace_hstplus_site_server_package_engines", "target": "c_users_dony_documents_workspace_hstplus_site_server_package_engines_node", "relation": "contains", "confidence": "EXTRACTED", "source_file": "server/package.json", "source_location": "L18", "weight": 1.0}]}
</file>

<file path="graphify-out/.graphify_detect.json">
{"files": {"code": ["C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\.oxlintrc.json", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\package.json", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\package.json", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\src\\fetchPosts.js", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\src\\index.js", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\App.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Analytics.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Blog.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\ClientLogos.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Consultoria.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Contacto.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Counter.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Eyebrow.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Footer.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Formacoes.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Galeria.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\GaleriaCTA.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\HazardDivider.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Header.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Hero.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\InspecaoQualidade.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Legalidade.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Metodologia.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\OQueFazemos.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\PageFade.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\QuemSomos.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Referencias.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Reveal.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\ScrollProgress.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Solucoes.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Stats.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\TopBar.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\WhatsAppButton.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\data\\content.js", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\data\\courses.js", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\hooks\\useScrollToHash.js", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\layouts\\MainLayout.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\main.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\pages\\GaleriaPage.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\pages\\HomePage.jsx", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\theme.js", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\vite.config.js"], "document": ["C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\README.md", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\docker-compose.dev.yml", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\docker-compose.yml", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\index.html", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\README.md"], "paper": [], "image": ["C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\about.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\gabriel-couto.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\lcpower.png", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\manica.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\mota-engil.png", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\protecna.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\tata.png", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\tcpi.png", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\terminais-do-norte.png", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\uni-span.png", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\cta.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery1.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery2.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery3.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery4.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery5.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery6.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\avaliacao-escrita-unispan.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\combate-incendio.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\conducao-defensiva.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\encerramento-formacao-unispan.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\equipa-unispan-1.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\equipa-unispan-2.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\equipamentos-medicao.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\espaco-confinado-terminais.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\formacao-altura-unispan-1.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\formacao-equipa.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\formacao-sala-manica.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\inspecao-gancho.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\montagem-andaime.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\rigger-altura.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\sala-formacao.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\visita-terreno-unispan.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\hero.jpg", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\logo.png"], "video": []}, "total_files": 82, "total_words": 109268, "needs_graph": true, "warning": null, "skipped_sensitive": ["C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\.env.example"], "unclassified": ["C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\.dockerignore", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\.gitignore", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\Dockerfile", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\Dockerfile.dev", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\nginx.conf", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\.dockerignore", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\Dockerfile", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\cache\\.gitkeep", "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\index.css"], "walk_errors": [], "graphifyignore_patterns": 23, "scan_root": "C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site"}
</file>

<file path="graphify-out/.graphify_python">
C:\Users\Dony\AppData\Roaming\uv\tools\graphifyy\Scripts\python.exe
</file>

<file path="graphify-out/.graphify_root">
C:\Users\Dony\Documents\Workspace\hstplus-site
</file>

<file path="CLAUDE.md">
## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
</file>

<file path="server/cache/.gitkeep">

</file>

<file path="server/src/fetchPosts.js">
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_FILE = path.join(__dirname, '..', 'cache', 'posts.json');

const {
  META_GRAPH_VERSION = 'v20.0',
  FB_PAGE_ID,
  FB_PAGE_ACCESS_TOKEN,
  IG_BUSINESS_ACCOUNT_ID,
  MAX_POSTS = '9',
} = process.env;

const GRAPH_BASE = `https://graph.facebook.com/${META_GRAPH_VERSION}`;

/**
 * Vai buscar as publicações mais recentes da Página de Facebook.
 * Docs: https://developers.facebook.com/docs/graph-api/reference/page/feed/
 */
async function fetchFacebookPosts() {
  if (!FB_PAGE_ID || !FB_PAGE_ACCESS_TOKEN) return [];

  const fields = 'message,full_picture,permalink_url,created_time';
  const url = `${GRAPH_BASE}/${FB_PAGE_ID}/posts?fields=${fields}&limit=${MAX_POSTS}&access_token=${FB_PAGE_ACCESS_TOKEN}`;

  const res = await fetch(url);
  const json = await res.json();
  if (json.error) {
    console.error('[facebook] erro da Graph API:', json.error.message);
    return [];
  }

  return (json.data || [])
    .filter((p) => p.full_picture) // ignora posts só de texto, sem imagem
    .map((p) => ({
      id: `fb_${p.id}`,
      source: 'facebook',
      excerpt: (p.message || '').slice(0, 180),
      image: p.full_picture,
      url: p.permalink_url,
      date: p.created_time,
    }));
}

/**
 * Vai buscar os media mais recentes da conta Instagram Business associada.
 * Docs: https://developers.facebook.com/docs/instagram-api/reference/ig-user/media
 */
async function fetchInstagramPosts() {
  if (!IG_BUSINESS_ACCOUNT_ID || !FB_PAGE_ACCESS_TOKEN) return [];

  const fields = 'caption,media_url,thumbnail_url,permalink,timestamp,media_type';
  const url = `${GRAPH_BASE}/${IG_BUSINESS_ACCOUNT_ID}/media?fields=${fields}&limit=${MAX_POSTS}&access_token=${FB_PAGE_ACCESS_TOKEN}`;

  const res = await fetch(url);
  const json = await res.json();
  if (json.error) {
    console.error('[instagram] erro da Graph API:', json.error.message);
    return [];
  }

  return (json.data || []).map((p) => ({
    id: `ig_${p.id}`,
    source: 'instagram',
    excerpt: (p.caption || '').slice(0, 180),
    // Vídeos não têm media_url utilizável directamente como imagem — usa a thumbnail
    image: p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url,
    url: p.permalink,
    date: p.timestamp,
  }));
}

export async function refreshCache() {
  const [fb, ig] = await Promise.all([
    fetchFacebookPosts().catch((e) => {
      console.error('[facebook] falha ao consultar:', e.message);
      return [];
    }),
    fetchInstagramPosts().catch((e) => {
      console.error('[instagram] falha ao consultar:', e.message);
      return [];
    }),
  ]);

  const merged = [...fb, ...ig]
    .filter((p) => p.image)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, Number(MAX_POSTS));

  const payload = { updatedAt: new Date().toISOString(), posts: merged };
  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(CACHE_FILE, JSON.stringify(payload, null, 2));
  console.log(`[cache] actualizada com ${merged.length} publicações em ${payload.updatedAt}`);
  return payload;
}

export async function readCache() {
  try {
    const raw = await fs.readFile(CACHE_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { updatedAt: null, posts: [] };
  }
}

// Permite correr manualmente: npm run fetch:now
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  refreshCache().then(() => process.exit(0));
}
</file>

<file path="server/src/index.js">
import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import 'dotenv/config';
import { refreshCache, readCache } from './fetchPosts.js';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
// Padrão: actualiza a cada 6 horas. Ajustável via .env (CRON_SCHEDULE).
const CRON_SCHEDULE = process.env.CRON_SCHEDULE || '0 */6 * * *';

app.get('/api/posts', async (_req, res) => {
  const cache = await readCache();
  res.json(cache);
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`[server] hstplus-blog-api a correr na porta ${PORT}`);
});

// Actualiza a cache uma vez no arranque (não bloqueia o servidor se falhar)...
refreshCache().catch((e) => console.error('[startup] falha ao actualizar cache:', e.message));

// ...e depois no horário definido.
cron.schedule(CRON_SCHEDULE, () => {
  refreshCache().catch((e) => console.error('[cron] falha ao actualizar cache:', e.message));
});
</file>

<file path="server/.dockerignore">
node_modules
cache
.env
*.md
</file>

<file path="server/.env.example">
# ID da Página de Facebook da HST Plus (Configurações da Página > Sobre)
FB_PAGE_ID=

# Token de acesso de longa duração da Página (ver instruções no README do server/)
FB_PAGE_ACCESS_TOKEN=

# ID da conta Instagram Business associada à Página (via Graph API Explorer)
IG_BUSINESS_ACCOUNT_ID=

# Versão da Graph API a usar
META_GRAPH_VERSION=v20.0

# Quantas publicações manter na cache/mostrar no site
MAX_POSTS=9

# Porta onde o servidor Express corre
PORT=4000

# Frequência de actualização da cache (formato cron). Por omissão: a cada 6 horas.
CRON_SCHEDULE=0 */6 * * *
</file>

<file path="server/Dockerfile">
FROM node:20-alpine
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY . .

EXPOSE 4000
CMD ["node", "src/index.js"]
</file>

<file path="server/package.json">
{
  "name": "hstplus-blog-api",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "dev": "node --watch src/index.js",
    "fetch:now": "node src/fetchPosts.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "node-cron": "^3.0.3"
  },
  "engines": {
    "node": ">=20"
  }
}
</file>

<file path="server/README.md">
# HST Plus — Blog API (Facebook + Instagram)

Serviço Node/Express que consulta a Graph API da Meta de tempo a tempo (cron), guarda o
resultado numa cache local (`cache/posts.json`) e expõe `GET /api/posts` para o frontend
consumir. O frontend nunca fala directamente com a Meta — só com este serviço.

## Como correr

```bash
cd server
cp .env.example .env    # depois preenche o .env com as tuas credenciais (ver abaixo)
npm install
npm run dev              # http://localhost:4000/api/posts
```

Ou via Docker, a partir da raiz do projecto:

```bash
docker compose up --build     # sobe o site (8080) + esta API (interna, via proxy /api)
```

## Onde arranjar as credenciais (o único bloqueio real)

Como só vamos **ler** as publicações da própria Página/Instagram da HST Plus (não dados de
terceiros), isto corre em modo de desenvolvimento da app Meta — **não precisa de App Review**.
Precisas de:

### 1. Ligar o Instagram à Página de Facebook
No Instagram: Definições → Contas ligadas → Facebook → liga à Página da HST Plus.
(Se ainda não for conta Business/Creator, o Instagram pede para mudares — é gratuito.)

### 2. Criar uma app em developers.facebook.com
1. [developers.facebook.com](https://developers.facebook.com) → **Minhas Apps** → **Criar App**
2. Tipo: **Negócios**
3. Adiciona o produto **Graph API Explorer** (já vem disponível por omissão)

### 3. Gerar um token de acesso de longa duração da Página
1. Vai a **Graph API Explorer** (developers.facebook.com/tools/explorer)
2. Selecciona a tua app, depois "User or Page" → escolhe a Página da HST Plus
3. Em permissões, adiciona: `pages_show_list`, `pages_read_engagement`, `instagram_basic`
4. Gera o token — isto dá-te um **token de curta duração** (dura ~1h a 2 meses conforme o tipo)
5. Troca-o por um de longa duração (~60 dias, renovável) usando este pedido no próprio
   Graph API Explorer ou via `curl`:

```
GET https://graph.facebook.com/v20.0/oauth/access_token
  ?grant_type=fb_exchange_token
  &client_id={ID da tua app}
  &client_secret={Segredo da tua app}
  &fb_exchange_token={token de curta duração do passo 4}
```

> Dica: se a HST Plus tiver acesso ao **Business Manager** (business.facebook.com), dá para
> gerar um token de **Utilizador de Sistema** que não expira — poupa-vos de repetir este
> passo a cada ~60 dias. Se quiserem, faço essa configuração depois.

### 4. Obter os IDs
- **`FB_PAGE_ID`**: na própria Página → Configurações → Sobre → "ID da Página"
- **`IG_BUSINESS_ACCOUNT_ID`**: no Graph API Explorer, com o token do passo 3, faz um
  pedido a `GET /{FB_PAGE_ID}?fields=instagram_business_account` — o campo devolvido é o ID.

### 5. Preencher o `.env`
```
FB_PAGE_ID=xxxxxxxxxxxxxxx
FB_PAGE_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
IG_BUSINESS_ACCOUNT_ID=xxxxxxxxxxxxxxx
```

Depois corre `npm run fetch:now` (ou reinicia o container) para testar — se tudo estiver
certo, `cache/posts.json` aparece com as publicações mais recentes.

## Notas

- Sem credenciais preenchidas, `/api/posts` devolve uma lista vazia — o site mostra
  automaticamente um convite para seguir as redes sociais em vez de uma secção quebrada.
- A cache actualiza sozinha de 6 em 6 horas (`CRON_SCHEDULE` no `.env`, formato cron).
- Publicações do Facebook só de texto (sem imagem) são ignoradas — o layout do blog é
  todo baseado em cartões com imagem.
</file>

<file path="src/components/Analytics.jsx">
import { useEffect } from 'react';

const GA_ID = import.meta.env.VITE_GA_ID;

/**
 * Carrega o Google Analytics (gtag.js) apenas se VITE_GA_ID estiver definido
 * (ver .env.example na raiz do projecto). Sem esta variável, não injecta nada —
 * assim o site funciona normalmente em desenvolvimento sem "sujar" as métricas.
 * Não renderiza nada visualmente.
 */
export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) {
      console.info('[analytics] VITE_GA_ID não definido — Google Analytics desligado.');
      return;
    }

    // Evita carregar duas vezes (ex: em StrictMode/HMR)
    if (document.querySelector(`script[data-ga-id="${GA_ID}"]`)) return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    script.dataset.gaId = GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = window.gtag || gtag;
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }, []);

  return null;
}
</file>

<file path="src/components/Blog.jsx">
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { socials } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

const API_URL = `${import.meta.env.VITE_API_URL || '/api'}/posts`;

const sourceIcon = { facebook: FacebookIcon, instagram: InstagramIcon };

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('pt-MZ', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

export default function Blog() {
  const [state, setState] = useState({ loading: true, posts: [], error: false });

  useEffect(() => {
    let cancelled = false;
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setState({ loading: false, posts: data.posts || [], error: false });
      })
      .catch(() => {
        if (!cancelled) setState({ loading: false, posts: [], error: true });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Sem publicações configuradas ainda (ou serviço indisponível) — não mostra a
  // secção vazia/quebrada, mostra um convite para seguir as redes sociais.
  const showFallback = !state.loading && (state.error || state.posts.length === 0);

  return (
    <Box id="blog" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            Blog &amp; Actualidade
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1 }}>
            Últimas publicações
          </Typography>
        </Box>

        {state.loading && (
          <Grid container spacing={3}>
            {[0, 1, 2].map((i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Skeleton variant="rectangular" height={180} />
                <Skeleton variant="text" sx={{ mt: 1 }} />
                <Skeleton variant="text" width="60%" />
              </Grid>
            ))}
          </Grid>
        )}

        {showFallback && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography sx={{ color: 'text.secondary', mb: 2 }}>
              Ainda sem publicações ligadas por aqui — segue-nos directamente nas redes sociais.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {socials.facebook && (
                <Chip
                  component="a"
                  href={socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  clickable
                  icon={<FacebookIcon />}
                  label="Facebook"
                />
              )}
              {socials.instagram && (
                <Chip
                  component="a"
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  clickable
                  icon={<InstagramIcon />}
                  label="Instagram"
                />
              )}
            </Box>
          </Box>
        )}

        {!state.loading && state.posts.length > 0 && (
          <Grid container spacing={3}>
            {state.posts.map((p) => {
              const Icon = sourceIcon[p.source] || FacebookIcon;
              return (
                <Grid item xs={12} sm={6} md={4} key={p.id}>
                  <Box
                    component="a"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}
                  >
                    <Box
                      component="img"
                      src={p.image}
                      alt=""
                      loading="lazy"
                      sx={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', mb: 1.5 }}
                    />
                    <Chip
                      size="small"
                      icon={<Icon sx={{ fontSize: '14px !important' }} />}
                      label={formatDate(p.date)}
                      sx={{ fontSize: '0.68rem', mb: 1 }}
                    />
                    <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary' }}>
                      {p.excerpt || 'Ver publicação'}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Counter.jsx">
import { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';

/**
 * Anima um número de 0 até `to` quando entra no ecrã (uma vez só), com easing
 * suave. `suffix` é anexado sem ser animado (ex: "+"). Mantém o mesmo espaço
 * tipográfico do valor final durante toda a contagem para não saltar layout.
 */
export default function Counter({ to, suffix = '', duration = 1400, sx }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setValue(to);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            // easeOutCubic — arranca rápido, desacelera no fim
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <Typography ref={ref} sx={sx}>
      {value}
      {suffix}
    </Typography>
  );
}
</file>

<file path="src/components/Eyebrow.jsx">
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Eyebrow({ index, children, color = 'primary.main', dark = false }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
      <Box sx={{ width: 28, height: 3, bgcolor: color }} />
      <Typography
        variant="overline"
        sx={{ color: dark ? 'rgba(255,255,255,0.7)' : 'text.secondary', fontSize: '0.78rem' }}
      >
        {index ? `${index} — ` : ''}
        {children}
      </Typography>
    </Stack>
  );
}
</file>

<file path="src/components/GaleriaCTA.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { Link as RouterLink } from 'react-router-dom';
import { gradients } from '../theme';
import Reveal from './Reveal';

/**
 * Antes esta secção mostrava um carrossel de fotos directamente na página
 * principal. Agora é só um convite — as fotos vivem na página /galeria.
 */
export default function GaleriaCTA() {
  return (
    <Box id="galeria" sx={{ py: { xs: 7, md: 9 }, backgroundImage: gradients.dark, color: '#fff' }}>
      <Container maxWidth="sm">
        <Reveal>
          <Box sx={{ textAlign: 'center' }}>
            <PhotoLibraryIcon sx={{ fontSize: 34, color: 'warning.main', mb: 1.5 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, mb: 1.5 }}>
              Veja a HST Plus em acção
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.78)', mb: 3.5 }}>
              Fotos das nossas formações e inspecções no terreno, numa galeria dedicada.
            </Typography>
            <Button
              component={RouterLink}
              to="/galeria"
              variant="contained"
              color="secondary"
              size="large"
            >
              Ver Galeria
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/HazardDivider.jsx">
import Box from '@mui/material/Box';

/**
 * Faixa diagonal inspirada em fita de sinalização de obra/perigo — o elemento
 * assinatura do site, usado com moderação entre secções-chave.
 */
export default function HazardDivider({ tone = 'dark', height = 10 }) {
  const stripes =
    tone === 'dark'
      ? 'repeating-linear-gradient(-45deg, #14181A 0 18px, #F0B429 18px 36px)'
      : 'repeating-linear-gradient(-45deg, #C81D2C 0 18px, #F6F5F1 18px 36px)';
  return (
    <Box
      aria-hidden
      sx={{
        height,
        width: '100%',
        backgroundImage: stripes,
        opacity: tone === 'dark' ? 0.9 : 1,
      }}
    />
  );
}
</file>

<file path="src/components/OQueFazemos.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import ShieldIcon from '@mui/icons-material/Shield';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SignpostIcon from '@mui/icons-material/Signpost';
import PolicyIcon from '@mui/icons-material/Policy';
import CampaignIcon from '@mui/icons-material/Campaign';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import Eyebrow from './Eyebrow';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import { solutions, measuringInstruments } from '../data/content';

const icons = [
  HealthAndSafetyIcon, FactCheckIcon, TroubleshootIcon, ShieldIcon, ReportProblemIcon,
  SignpostIcon, PolicyIcon, CampaignIcon, VerifiedIcon, SchoolIcon,
];

export default function OQueFazemos() {
  return (
    <Box id="o-que-fazemos" sx={{ py: { xs: 9, md: 13 }, bgcolor: '#EFEDE6' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Eyebrow index="02">O Que Fazemos</Eyebrow>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' } }}>
              As nossas soluções
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: 'text.secondary' }}>
              Soluções práticas e personalizadas de acordo com as necessidades de cada cliente,
              cobrindo todo o ciclo de gestão de risco laboral.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 8 }}>
          {solutions.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Grid item xs={12} sm={6} md={4} key={s}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                  sx={{ bgcolor: '#fff', p: 2.5, height: '100%', borderTop: '3px solid', borderTopColor: 'primary.main' }}
                >
                  <Icon sx={{ color: 'secondary.main', fontSize: 28, flexShrink: 0, mt: 0.3 }} />
                  <Typography sx={{ fontSize: '0.9rem' }}>{s}</Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontSize: '1.4rem', color: 'primary.main', mb: 1.5 }}>
              Análise Quantitativa
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3 }}>
              As nossas análises técnico-quantitativas medem agentes físicos e químicos no
              ambiente de trabalho, usando equipamentos de última geração em conformidade com a
              ISO. Os resultados ficam registados em relatórios descritivos com parâmetros para
              mitigar riscos laborais.
            </Typography>
            <Grid container spacing={1}>
              {measuringInstruments.map((m) => (
                <Grid item xs={6} key={m}>
                  <Typography sx={{ fontSize: '0.82rem', fontFamily: '"IBM Plex Mono"', color: 'text.secondary' }}>
                    · {m}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box component="img" src={gallery5} alt="Kit de instrumentos de medição ambiental" sx={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }} />
              </Grid>
              <Grid item xs={6}>
                <Box component="img" src={gallery6} alt="Instrumentos de inspeção técnica" sx={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', mt: 4 }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/PageFade.jsx">
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

/**
 * Aplica um fade leve sempre que a rota muda (mudança de página, ex:
 * "/" -> "/galeria"). Sem depender de bibliotecas de animação: ao mudar de
 * `pathname`, o conteúdo começa invisível e transiciona para opaco.
 */
export default function PageFade({ children }) {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const raf = requestAnimationFrame(() => {
      // pequeníssimo atraso para garantir que o browser regista o estado
      // "invisível" antes de animar para visível (senão não há transição)
      requestAnimationFrame(() => setVisible(true));
    });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <Box
      sx={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.45s ease',
      }}
    >
      {children}
    </Box>
  );
}
</file>

<file path="src/components/Reveal.jsx">
import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

/**
 * Envolve uma secção e aplica um fade-in + leve deslocamento vertical quando
 * entra no viewport — um efeito discreto de transição entre secções, sem
 * saltos de layout (anima opacity/transform, nunca display).
 * Respeita prefers-reduced-motion (ver regra global em index.css).
 */
export default function Reveal({ children, delay = 0, y = 18, sx, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
</file>

<file path="src/components/ScrollProgress.jsx">
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { gradients } from '../theme';

/**
 * Linha fina fixa no topo do ecrã que mostra o progresso de leitura da página.
 * Fica acima de tudo (inclusive da TopBar/Header), sem interferir no layout.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 3,
        width: `${progress}%`,
        backgroundImage: gradients.secondary,
        zIndex: (theme) => theme.zIndex.appBar + 10,
        transition: 'width 0.1s linear',
      }}
    />
  );
}
</file>

<file path="src/components/WhatsAppButton.jsx">
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { company } from '../data/content';

export default function WhatsAppButton() {
  return (
    <Box
      component="a"
      href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 28 },
        bottom: { xs: 16, md: 28 },
        width: 56,
        height: 56,
        borderRadius: '50%',
        bgcolor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
        zIndex: 1200,
        transition: 'transform 0.2s ease',
        '&:hover': { transform: 'scale(1.06)' },
      }}
    >
      <WhatsAppIcon sx={{ color: '#fff', fontSize: 30 }} />
    </Box>
  );
}
</file>

<file path="src/data/courses.js">
// Catálogo de formações extraído da planilha "Para_designer1.xlsx"
export const courseCatalog = [
  {
    category: 'Gestão Estratégica e Metodologias (Qualidade & Processos)',
    courses: [
      { name: 'Metodologia 5S', basico: '08h', reciclagem: '06h' },
      { name: 'Metodologia PDCA', basico: '08h', reciclagem: '06h' },
      { name: 'SST – Saúde e Segurança no Trabalho (Geral/Consciencialização)', basico: '16h', reciclagem: '08h' },
      { name: 'Gestão de Risco', basico: '08h', reciclagem: '06h' },
      { name: 'Gestão de Fadiga e Stress', basico: '08h', reciclagem: '06h' },
    ],
  },
  {
    category: 'Prevenção, Diagnóstico e Resposta a Emergências',
    courses: [
      { name: 'Primeiros Socorros', basico: '08h', reciclagem: '06h' },
      { name: 'Prevenção e Combate a Incêndios', basico: '08h', reciclagem: '06h' },
      { name: 'Procedimentos de Evacuação de Emergência', basico: '08h', reciclagem: '06h' },
      { name: 'Investigação de Acidentes de Trabalho (Análise pós-evento)', basico: '08h', reciclagem: '06h' },
      { name: 'HIRA – Hazard Identification and Risk Analysis', basico: '16h', reciclagem: '08h' },
      { name: 'Condições Inseguras + CheckList', basico: '08h', reciclagem: '06h' },
      { name: 'Análise e Causa Raiz', basico: '08h', reciclagem: '06h' },
      { name: 'HST – Higiene e Segurança no Trabalho', basico: '16h', reciclagem: '08h' },
      { name: 'Gestão de PPE (Equipamentos de Proteção Individual)', basico: '08h', reciclagem: '06h' },
    ],
  },
  {
    category: 'Segurança Técnica em Trabalhos de Alto Risco',
    courses: [
      { name: 'Segurança em Trabalhos em Altura', basico: '08h', reciclagem: '06h' },
      { name: 'Trabalhos em Espaços Confinados', basico: '08h', reciclagem: '06h' },
      { name: 'Resgate em Altura e em Espaços Confinados', basico: '08h', reciclagem: '06h' },
      { name: 'Procedimento em Lockout and Tagout (LOTO)', basico: '08h', reciclagem: '06h' },
      { name: 'Uso de GasMeter + ATEX (Atmosferas Explosivas)', basico: '08h', reciclagem: '06h' },
      { name: 'Dangerous Goods (Cargas Perigosas)', basico: '08h', reciclagem: '06h' },
      { name: 'Rigger (Sinaleiro/Amarrador de Cargas)', basico: '08h', reciclagem: '06h' },
      { name: 'Uso de Ferramentas Manuais Eléctricas', basico: '08h', reciclagem: '06h' },
    ],
  },
  {
    category: 'Operação de Equipamentos e Máquinas Pesadas',
    courses: [
      { name: 'Manuseio de Empilhadeira', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Camião Munck', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Guindaste', basico: '16h', reciclagem: '08h' },
      { name: 'Manuseio de Ponte Rolante', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Plataforma Elevatória', basico: '08h', reciclagem: '06h' },
      { name: 'Direção Defensiva e Preventiva', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Empilhadeira / Mini-Empilhadeira', basico: '08h', reciclagem: '06h' },
      { name: 'Manuseio de Guindaste / Mini-Guindaste', basico: '08h', reciclagem: '06h' },
    ],
  },
  {
    category: 'Estruturas, Elevação e Montagem',
    courses: [
      { name: 'Flag Man (Sinalizador de Trânsito/Manobras)', basico: '08h', reciclagem: '06h' },
      { name: 'Montagem e Inspeção de Andaime', basico: '16h', reciclagem: '08h' },
      { name: 'Supervisão de Andaime', basico: '08h', reciclagem: '06h' },
      { name: 'Içamento de Cargas', basico: '08h', reciclagem: '06h' },
    ],
  },
];

export const totalCourses = courseCatalog.reduce((acc, c) => acc + c.courses.length, 0);
</file>

<file path="src/hooks/useScrollToHash.js">
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Quando se navega para "/#quem-somos" a partir de outra página (ex: da
 * Galeria de volta à Home), o React Router só troca de página — não faz
 * scroll até à âncora sozinho. Este hook trata disso.
 */
export default function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // pequeno atraso para garantir que a página já montou todo o conteúdo
    const id = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => clearTimeout(id);
  }, [hash]);
}
</file>

<file path="src/layouts/MainLayout.jsx">
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PageFade from '../components/PageFade';

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <PageFade>
        <Outlet />
      </PageFade>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
</file>

<file path="src/pages/HomePage.jsx">
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Solucoes from '../components/Solucoes';
import Formacoes from '../components/Formacoes';
import Stats from '../components/Stats';
import QuemSomos from '../components/QuemSomos';
import GaleriaCTA from '../components/GaleriaCTA';
import InspecaoQualidade from '../components/InspecaoQualidade';
import Metodologia from '../components/Metodologia';
import Consultoria from '../components/Consultoria';
import Legalidade from '../components/Legalidade';
import Referencias from '../components/Referencias';
import Blog from '../components/Blog';
import Contacto from '../components/Contacto';
import useScrollToHash from '../hooks/useScrollToHash';

export default function HomePage() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <ClientLogos />
      <Solucoes />
      <Formacoes />
      <Stats />
      <QuemSomos />
      <GaleriaCTA />
      <InspecaoQualidade />
      <Metodologia />
      <Consultoria />
      <Legalidade />
      <Referencias />
      <Blog />
      <Contacto />
    </>
  );
}
</file>

<file path="src/main.jsx">
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
</file>

<file path=".dockerignore">
node_modules
dist
.git
.gitignore
*.md
npm-debug.log
.DS_Store
</file>

<file path=".oxlintrc.json">
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
</file>

<file path="Dockerfile">
# --- Stage 1: build ---
FROM node:20
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# --- Stage 2: runtime (nginx) ---
FROM nginx:1.27 AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
</file>

<file path="Dockerfile.dev">
FROM node:20
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
</file>

<file path="index.html">
<!doctype html>
<html lang="pt-MZ">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/src/assets/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="HST Plus, Consultancy & Training — Consultoria, Gestão de Risco, Formação Profissional e Inspeção de Qualidade em Moçambique." />
    <title>HST Plus | Consultancy & Training</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
</file>

<file path="vite.config.js">
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ouvir em 0.0.0.0, necessário dentro do container
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // garante hot-reload com bind mounts (Docker Desktop / WSL)
    },
  },
})
</file>

<file path="src/components/ClientLogos.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import uniSpan from '../assets/clients/uni-span.png';
import terminaisDoNorte from '../assets/clients/terminais-do-norte.png';
import motaEngil from '../assets/clients/mota-engil.png';
import tcpi from '../assets/clients/tcpi.png';
import manica from '../assets/clients/manica.jpg';
import lcpower from '../assets/clients/lcpower.png';
import gabrielCouto from '../assets/clients/gabriel-couto.jpg';
import protecna from '../assets/clients/protecna.jpg';
import tata from '../assets/clients/tata.png';
import Reveal from './Reveal';

const logos = [
  { src: uniSpan, alt: 'Uni-Span' },
  { src: terminaisDoNorte, alt: 'Terminais do Norte' },
  { src: motaEngil, alt: 'Mota-Engil Engenharia' },
  { src: tcpi, alt: 'TCPI International' },
  { src: manica, alt: 'Manica Moçambique Terminais' },
  { src: lcpower, alt: 'LC Power' },
  { src: gabrielCouto, alt: 'Gabriel Couto' },
  { src: protecna, alt: 'Protecna' },
  { src: tata, alt: 'Tata' },
];

export default function ClientLogos() {
  return (
    <Box sx={{ py: { xs: 4, md: 5 }, bgcolor: '#fff', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Reveal>
        <Typography sx={{ textAlign: 'center', fontSize: '0.72rem', color: 'text.secondary', letterSpacing: '0.06em', mb: 3 }}>
          EMPRESAS QUE CONFIAM NA HST PLUS
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" alignItems="center">
          {logos.map((l) => (
            <Grid item xs={4} sm={3} md={1.33} key={l.alt} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src={l.src}
                alt={l.alt}
                sx={{
                  maxHeight: { xs: 32, md: 38 },
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'grayscale(1)',
                  opacity: 0.7,
                  transition: 'all 0.2s ease',
                  '&:hover': { filter: 'grayscale(0)', opacity: 1 },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Galeria.jsx">
import { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Reveal from './Reveal';

import riggerAltura from '../assets/gallery/rigger-altura.jpg';
import formacaoEquipa from '../assets/gallery/formacao-equipa.jpg';
import inspecaoGancho from '../assets/gallery/inspecao-gancho.jpg';
import salaFormacao from '../assets/gallery/sala-formacao.jpg';
import montagemAndaime from '../assets/gallery/montagem-andaime.jpg';
import conducaoDefensiva from '../assets/gallery/conducao-defensiva.jpg';
import combateIncendio from '../assets/gallery/combate-incendio.jpg';
import equipamentosMedicao from '../assets/gallery/equipamentos-medicao.jpg';

const slides = [
  { src: riggerAltura, caption: 'Trabalho em altura com equipamento de protecção certificado' },
  { src: formacaoEquipa, caption: 'Formação prática de segurança em contentor de obra' },
  { src: salaFormacao, caption: 'Formação teórica em sala — Uni-Span, Temane' },
  { src: montagemAndaime, caption: 'Montagem e inspecção de andaime' },
  { src: conducaoDefensiva, caption: 'Formação de condução defensiva — Vale, Tete' },
  { src: combateIncendio, caption: 'Simulação de combate a incêndio' },
  { src: inspecaoGancho, caption: 'Inspecção técnica de gancho de elevação de cargas' },
  { src: equipamentosMedicao, caption: 'Instrumentos de medição e higiene ocupacional' },
];

const AUTOPLAY_MS = 5000;

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    pause();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
  };

  return (
    <Box id="galeria" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#0E1112' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'warning.main' }}>
              No Terreno
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, color: '#fff' }}>
              A HST Plus em acção
            </Typography>
          </Box>

          <Box
            onMouseEnter={pause}
            onMouseLeave={resume}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: { xs: '4/5', sm: '16/9' },
              bgcolor: '#000',
            }}
          >
            {slides.map((s, i) => (
              <Box
                key={`${s.src}-${i === index}`}
                component="img"
                src={s.src}
                alt={s.caption}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: i === index ? 1 : 0,
                  transition: 'opacity 0.9s ease',
                  transformOrigin: 'center',
                  animation: i === index ? `hstKenBurns ${AUTOPLAY_MS + 900}ms ease-out forwards` : 'none',
                }}
              />
            ))}

            {/* legenda */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                p: { xs: 2, md: 3 },
                background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)',
              }}
            >
              <Typography sx={{ color: '#fff', fontSize: { xs: '0.82rem', md: '0.9rem' } }}>
                {slides[index].caption}
              </Typography>
            </Box>

            {/* setas */}
            <IconButton
              onClick={prev}
              aria-label="Foto anterior"
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.35)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.55)' },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
            </IconButton>
            <IconButton
              onClick={next}
              aria-label="Foto seguinte"
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(0,0,0,0.35)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.55)' },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>

          {/* indicadores */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2.5 }}>
            {slides.map((s, i) => (
              <Box
                key={s.src}
                component="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para a foto ${i + 1}`}
                sx={{
                  width: i === index ? 22 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  bgcolor: i === index ? 'warning.main' : 'rgba(255,255,255,0.25)',
                  transition: 'all 0.3s ease',
                  p: 0,
                }}
              />
            ))}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/data/content.js">
export const company = {
  name: 'HST Plus',
  fullName: 'HST Plus, Consultancy & Training',
  founded: 2018,
  phone1: '+258 86 556 4580',
  phone2: '+258 84 360 3393',
  whatsapp: '+258 82 556 4580',
  email: 'info@hstplus.co.mz',
  emailCorporate: 'corporate@hstplus.co.mz',
  web: 'www.hstplus.co.mz',
  address: 'Av. do Trabalho / Rua do Lago Amaramba, R/C Nº 37, Maputo, Moçambique',
  mapUrl: 'https://maps.app.goo.gl/pXXGxY8xuNazUrueA?g_st=ac',
  nuel: '101 045 706',
  nuit: '400 924 597',
};

// Preenche com os endereços reais das páginas da HST Plus. Deixa '' (vazio) para
// esconder o ícone correspondente automaticamente.
export const socials = {
  facebook: '',
  instagram: '',
  linkedin: '',
};

export const solutions = [
  'Consultoria, Acessória em Saúde, Segurança e Meio Ambiente (SSMA)',
  'Inspeção de Qualidade',
  'Levantamento e Análise de Riscos',
  'Distribuição e fornecimento de Equipamentos de Proteção Individual (EPI)',
  'Elaboração de Plano de Segurança e Emergência',
  'Projectos de Sinalização de Segurança',
  'Desenvolvimento de Políticas de Saúde e Segurança',
  'Organização de Campanhas de Sensibilização',
  'Implementação de Sistema de Gestão Integrada (SGI – ISO 9001, 14001 & 45001)',
  'Formação e Capacitação Profissional',
];

export const values = [
  { title: 'Integridade', text: 'Honestidade e justiça direccionada em nossas acções.' },
  { title: 'Respeito', text: 'Firmar a conduta ética e relação de confiança com o cliente.' },
  { title: 'Dinamismo', text: 'Dar retorno ao cliente em tempo hábil.' },
  { title: 'Excelência', text: 'Qualidade e eficiência dos nossos serviços.' },
];

export const trainingApproach = [
  { title: 'Sala de Aula Invertida', text: 'O conteúdo é enviado com antecedência para o colaborador, a fim de ser estudado e absorvido antes que a formação seja ministrada.' },
  { title: 'Gamificação', text: 'Auxilia na aprendizagem e transforma o modelo de ensino tradicional em moderno.' },
  { title: 'Microlearning', text: 'Dividir o conhecimento em curtas e simples sessões ajustadas à realidade do dia-a-dia.' },
];

export const measuringInstruments = [
  'Termómetro IBUTG', 'Sonómetro', 'Dosímetro', 'Anemómetro',
  'Luxímetro', 'Medidor de CO2, PM10 e 2.5', 'Humidade relativa', 'Vibração do corpo inteiro, mãos e braço',
];

export const specializedServices = [
  'Ensaios e análises técnicas: ar, solo, água, afluentes e efluentes',
  'Higiene ocupacional: partículas, gases, vapores, ruído, vibração, conforto térmico e luminância',
  'Projectos e manutenção de sistemas de detecção e combate a incêndios',
  'Prevenção e resposta a emergências, com equipas especializadas',
];

export const methodology = {
  teorica: [
    'Recursos áudio visual (data show/projectores) para conteúdos claros e objectivos',
    'Manuais físicos para apoiar a aprendizagem e servir de referência futura',
    'Conceitos teóricos e fundamentos, com exemplos práticos e casos de estudo',
    'Incentivo à participação e discussão em grupo',
  ],
  pratica: [
    'Equipamentos adequados para simular situações reais',
    'Actividades práticas e exercícios de aplicação dos conhecimentos',
    'Supervisão de instrutores experientes, garantindo segurança e eficácia',
    'Foco na colaboração e no trabalho em equipa',
  ],
};

export const differentiators = [
  { title: 'Tecnologia Inovadora', text: 'Instrumentos modernos para avaliações de agentes ambientais e simuladores conectados a softwares.' },
  { title: 'Equipa Especializada', text: 'Rede de expertise multidisciplinar, habilitada a abordar aspectos técnicos e comportamentais.' },
];

export const consultants = [
  {
    name: 'Francisco Mateus',
    facts: [
      '17 anos de experiência profissional em Saúde e Segurança no Trabalho',
      '12 anos dedicados como formador de HSE',
      'Diploma em Segurança do Trabalho',
      'Especializado nos sectores da construção civil, mineração e indústria metalomecânica',
    ],
  },
];

export const legal = {
  text: 'A HST Plus, Consultancy & Training está sujeita à legislação moçambicana, incluindo a lei da formação profissional e a lei de certificação (Lei n.º 26/2022, Decreto n.º 91/2021). A HST Plus possui as licenças e autorizações necessárias para operar, incluindo a licença de funcionamento e a autorização para ministrar formações.',
  registrations: [
    { label: 'Alvará (Balcão de Atendimento Único, Jul/2018)', value: '2846/07/01PS/2018' },
    { label: 'NUEL — Conservatória de Registo das Entidades Legais', value: '101045706' },
    { label: 'Boletim da República (Nov/2018)', value: 'BR 218 · III Série · 2018' },
  ],
};

export const certifications = [
  { title: 'ISO 9001:2015', subtitle: 'Certificação de Qualidade pelo British Standards (BS), 2024', code: 'Certificado nº 601 068' },
  { title: 'OSHAcademy', subtitle: 'Provedor de Treinamento Autorizado (ATP)', code: 'Membro nº 367' },
  { title: 'LEEA', subtitle: 'Membro desde 2023 — Órgão britânico para profissionais da indústria de elevação', code: 'Membro nº 9 972' },
  { title: 'BSI', subtitle: 'Membro desde 2020 — normas globais e suporte a organizações', code: 'Membro nº 20 686 503' },
];

export const clients = [
  'Uni-Span', 'Terminais do Norte', 'Mota-Engil Engenharia', 'TCPI International',
  'Manica Moçambique Terminais', 'LC Power', 'Gabriel Couto', 'Protecna', 'Tata',
];

export const resultsChart = {
  labels: ['Uni-Span', 'Terminais do Norte', 'Friedlander', 'TCPI'],
  series: [
    { key: 'percepcao', name: 'Percepção de Risco', color: '#C81D2C', data: [4.3, 3.7, 3.5, 4.5] },
    { key: 'treinamentos', name: 'Diversos Treinamentos', color: '#8FA6C9', data: [2.4, 4.0, 1.8, 2.8] },
    { key: 'reducao', name: 'Redução de Acidentes', color: '#1F7A3D', data: [5.2, 5.7, 4.1, 3.4] },
    { key: 'indice', name: 'Índice de Acidentes', color: '#14181A', data: [0.2, 0.15, 0.3, 0.5] },
  ],
};

export const qualityInspection = 'A nossa inspecção de qualidade é um processo sistémico de avaliação e verificação de equipamentos para garantir que atendam aos padrões de qualidade e segurança, com o objectivo de identificar não conformidades antes que o equipamento seja usado ou entregue aos clientes. Dispomos de mais de 100 certificações em diversos tipos de equipamentos de elevação de cargas e trabalho em altura.';

export const inspectionCategories = [
  { title: 'Equipamentos de Elevação e Cargas', items: ['Gruas e Guindastes', 'Empilhadores', 'Plataformas Elevatórias'] },
  { title: 'Máquinas e Equipamentos Industriais', items: ['Escavadoras e Retroescavadoras', 'Bulldozers', 'Geradores'] },
  { title: 'Equipamentos de Proteção e Segurança (HST)', items: ['Equipamentos de Proteção Individual (EPIs)', 'Sistemas de Emergência', 'Cintos de Segurança'] },
  { title: 'Conformidade com Normas Internacionais', items: ['ISO 9001 (Qualidade)', 'ISO 14001 (Gestão Ambiental)', 'ISO 45001 (Saúde e Segurança Ocupacional)', 'Normas BSI, EN, NP e ABNT'] },
];
</file>

<file path="src/pages/GaleriaPage.jsx">
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { gradients } from '../theme';
import Reveal from '../components/Reveal';

// Fotos fornecidas pela HST Plus (Julho 2026). Para trocar/adicionar: colocar o
// ficheiro em src/assets/gallery/, importar aqui, e adicionar/editar uma linha
// na lista `photos` abaixo.
import formacaoAltura1 from '../assets/gallery/formacao-altura-unispan-1.jpg';
import avaliacaoEscrita from '../assets/gallery/avaliacao-escrita-unispan.jpg';
import equipaUnispan1 from '../assets/gallery/equipa-unispan-1.jpg';
import equipaUnispan2 from '../assets/gallery/equipa-unispan-2.jpg';
import encerramentoFormacao from '../assets/gallery/encerramento-formacao-unispan.jpg';
import espacoConfinadoTerminais from '../assets/gallery/espaco-confinado-terminais.jpg';
import visitaTerreno from '../assets/gallery/visita-terreno-unispan.jpg';

const photos = [
  { src: formacaoAltura1, caption: 'Formação em segurança para trabalho em altura — equipa Uni-Span' },
  { src: avaliacaoEscrita, caption: 'Avaliação escrita durante a formação — Uni-Span' },
  { src: equipaUnispan1, caption: 'Equipa formada em Saúde e Segurança no Trabalho — Uni-Span' },
  { src: equipaUnispan2, caption: 'Formação técnica com a equipa Uni-Span' },
  { src: encerramentoFormacao, caption: 'Encerramento de formação com a equipa Uni-Span' },
  { src: espacoConfinadoTerminais, caption: 'Formação de Trabalho em Espaço Confinado — Terminais do Norte' },
  { src: visitaTerreno, caption: 'Visita técnica ao terreno — equipa Uni-Span' },
];

export default function GaleriaPage() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.title = 'Galeria — HST Plus';
  }, []);

  const close = () => setOpenIndex(null);
  const showNext = () => setOpenIndex((i) => (i + 1) % photos.length);
  const showPrev = () => setOpenIndex((i) => (i - 1 + photos.length) % photos.length);

  return (
    <>
      <Box sx={{ py: { xs: 7, md: 9 }, backgroundImage: gradients.dark, color: '#fff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'warning.main' }}>
            No Terreno
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '2.8rem' }, mt: 1 }}>
            Galeria
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.78)', mt: 1.5, maxWidth: 560, mx: 'auto' }}>
            Fotos das nossas formações, consultorias e inspecções de qualidade no terreno.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 9 }, backgroundImage: gradients.surfaceLight }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 1.5, md: 2 }}>
            {photos.map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={p.src}>
                <Reveal delay={Math.min(i, 8) * 0.06}>
                  <Box
                    onClick={() => setOpenIndex(i)}
                    sx={{
                      position: 'relative',
                      aspectRatio: '1/1',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      '&:hover img': { transform: 'scale(1.06)' },
                      '&:hover .overlay': { opacity: 1 },
                    }}
                  >
                    <Box
                      component="img"
                      src={p.src}
                      alt={p.caption}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(20,24,26,0.55)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 2,
                      }}
                    >
                      <ZoomInIcon sx={{ color: '#fff', position: 'absolute', top: 12, right: 12 }} />
                      <Typography sx={{ color: '#fff', fontSize: '0.8rem' }}>{p.caption}</Typography>
                    </Box>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Modal open={openIndex !== null} onClose={close} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', width: '90vw', maxWidth: 900, outline: 'none' }}>
          {openIndex !== null && (
            <>
              <Box
                component="img"
                src={photos[openIndex].src}
                alt={photos[openIndex].caption}
                sx={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block', mx: 'auto' }}
              />
              <Typography sx={{ color: '#fff', textAlign: 'center', mt: 1.5, fontSize: '0.9rem' }}>
                {photos[openIndex].caption}
              </Typography>

              <IconButton onClick={close} aria-label="Fechar" sx={{ position: 'absolute', top: -44, right: -8, color: '#fff' }}>
                <CloseIcon />
              </IconButton>
              <IconButton
                onClick={showPrev}
                aria-label="Foto anterior"
                sx={{ position: 'absolute', left: -8, top: '40%', color: '#fff', bgcolor: 'rgba(0,0,0,0.35)' }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                onClick={showNext}
                aria-label="Foto seguinte"
                sx={{ position: 'absolute', right: -8, top: '40%', color: '#fff', bgcolor: 'rgba(0,0,0,0.35)' }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
</file>

<file path="src/index.css">
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
}
::selection {
  background: #C81D2C;
  color: #fff;
}
:focus-visible {
  outline: 3px solid #F0B429;
  outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}

/* Zoom lento nas fotos activas do carrossel (Galeria) */
@keyframes hstKenBurns {
  from { transform: scale(1); }
  to { transform: scale(1.09); }
}

/* Brilho/sweep de luz ao passar o rato nos botões principais */
@keyframes hstButtonShine {
  from { transform: translateX(-120%) skewX(-15deg); }
  to { transform: translateX(220%) skewX(-15deg); }
}
</file>

<file path=".gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Backend do blog (server/)
server/.env
server/cache/*.json
server/node_modules
</file>

<file path="docker-compose.dev.yml">
services:
  hstplus-site:
    build:
      context: .
      dockerfile: Dockerfile.dev
    container_name: hstplus-site-dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
      - VITE_API_URL=http://localhost:4000/api
    depends_on:
      - api

  api:
    image: node:20
    container_name: hstplus-blog-api-dev
    working_dir: /app
    command: sh -c "npm install && npm run dev"
    ports:
      - "4000:4000"
    volumes:
      - ./server:/app
      - /app/node_modules
    env_file:
      - ./server/.env
</file>

<file path="docker-compose.yml">
services:
  hstplus-site:
    build:
      context: .
      dockerfile: Dockerfile
    image: hstplus-site:latest
    container_name: hstplus-site
    ports:
      - "8080:80"
    depends_on:
      - api
    restart: unless-stopped

  api:
    build:
      context: ./server
      dockerfile: Dockerfile
    image: hstplus-blog-api:latest
    container_name: hstplus-blog-api
    env_file:
      - ./server/.env
    volumes:
      - blog-cache:/app/cache
    restart: unless-stopped

volumes:
  blog-cache:
</file>

<file path="nginx.conf">
server {
    listen       80;
    server_name  _;
    root   /usr/share/nginx/html;
    index  index.html;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1024;

    # Encaminha os pedidos à API do blog (Facebook/Instagram) para o serviço "api"
    # definido no docker-compose.yml — assim o frontend chama sempre /api/... no
    # mesmo domínio, sem CORS e sem expor a porta do backend publicamente.
    location /api/ {
        proxy_pass http://api:4000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # Assets com hash no nome (Vite) podem ser cacheados de forma agressiva
    location ~* \.(?:js|css|woff2?|ttf|svg|png|jpg|jpeg|webp)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # Página única — qualquer rota cai no index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
</file>

<file path="package.json">
{
  "name": "hstplus-site",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@mui/icons-material": "^9.2.0",
    "@mui/material": "^9.2.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-router-dom": "^7.18.1",
    "recharts": "^3.9.2"
  },
  "devDependencies": {
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.3",
    "oxlint": "^1.71.0",
    "vite": "^8.1.1"
  }
}
</file>

<file path="src/components/Consultoria.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { consultants, specializedServices } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

export default function Consultoria() {
  return (
    <Box id="consultoria" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            06 — Consultoria Especializada
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1 }}>
            Expertise comprovada, a nível nacional e internacional
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            {consultants.map((c) => (
              <Paper key={c.name} elevation={0} sx={{ p: 4, bgcolor: '#fff', borderLeft: '4px solid', borderLeftColor: 'primary.main' }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 52, height: 52 }}>
                    <EngineeringIcon />
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>{c.name}</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                      Especialista em Saúde e Segurança no Trabalho
                    </Typography>
                  </Box>
                </Stack>
                <Stack spacing={1}>
                  {c.facts.map((f) => (
                    <Typography key={f} sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                      · {f}
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            ))}
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography sx={{ color: 'text.secondary', mb: 3 }}>
              Nem todos os riscos no ambiente de trabalho são visíveis. A nossa equipa de
              consultores qualificados identifica ameaças ocultas e promove acções que garantem a
              segurança e o cumprimento legal da organização — apoiada por tecnologia moderna de
              avaliação ambiental e uma rede de expertise multidisciplinar.
            </Typography>
            <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.7rem', color: 'primary.main', letterSpacing: '0.06em', mb: 1.5 }}>
              SERVIÇOS ESPECIALIZADOS
            </Typography>
            <Grid container spacing={1}>
              {specializedServices.map((s) => (
                <Grid item xs={12} key={s}>
                  <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>· {s}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Contacto.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceIcon from '@mui/icons-material/Place';
import { company } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

const contactLines = [
  { icon: PhoneIcon, label: `${company.phone1} / ${company.phone2}`, href: `tel:${company.phone1.replace(/\s/g, '')}` },
  { icon: WhatsAppIcon, label: company.whatsapp, href: `https://wa.me/${company.whatsapp.replace(/\D/g, '')}` },
  { icon: EmailIcon, label: company.email, href: `mailto:${company.email}` },
  { icon: LanguageIcon, label: company.web, href: `https://${company.web}` },
  { icon: PlaceIcon, label: company.address, href: company.mapUrl },
];

export default function Contacto() {
  return (
    <Box id="contacto" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.dark, color: '#fff' }}>
      <Container maxWidth="lg">
        <Reveal>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: 'warning.main' }}>
              09 — Fale Connosco
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.6rem' }, mt: 1, mb: 2 }}>
              Fazemos diferente
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 460 }}>
              Somos gratos pela confiança depositada em nossa experiência desde {company.founded}
              para cuidar da vossa empresa e do vosso activo mais valioso — a vossa equipa.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              {contactLines.map((c) => {
                const Icon = c.icon;
                const content = (
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Icon sx={{ fontSize: 20, color: 'warning.main', mt: 0.2 }} />
                    <Typography sx={{ fontSize: '0.9rem' }}>{c.label}</Typography>
                  </Stack>
                );
                return c.href ? (
                  <Box
                    key={c.label}
                    component="a"
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    sx={{ textDecoration: 'none', color: '#fff' }}
                  >
                    {content}
                  </Box>
                ) : (
                  <Box key={c.label}>{content}</Box>
                );
              })}
              <Button href={`mailto:${company.email}`} variant="contained" color="secondary" size="large" sx={{ mt: 1, alignSelf: 'flex-start' }}>
                Pedir Proposta
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Footer.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../assets/logo.png';
import { company, socials } from '../data/content';
import { gradients } from '../theme';

const quickLinks = [
  { to: '/#quem-somos', label: 'Quem Somos' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/#solucoes', label: 'Soluções' },
  { to: '/#formacoes', label: 'Formações' },
  { to: '/#certificacoes', label: 'Certificações' },
  { to: '/#referencias', label: 'Referências' },
  { to: '/#blog', label: 'Blog' },
];

const socialIcons = [
  { key: 'facebook', Icon: FacebookIcon, label: 'Facebook' },
  { key: 'instagram', Icon: InstagramIcon, label: 'Instagram' },
  { key: 'linkedin', Icon: LinkedInIcon, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <Box sx={{ backgroundImage: gradients.footer, color: 'rgba(255,255,255,0.65)', py: { xs: 6, md: 7 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <Box component="img" src={logo} alt="HST Plus" sx={{ height: 30 }} />
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>HST PLUS</Typography>
            </Stack>
            <Typography sx={{ fontSize: '0.82rem', maxWidth: 280 }}>
              Consultoria, Gestão de Risco, Formação Profissional e Inspeção de Qualidade —
              Moçambique, desde {company.founded}.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              {socialIcons.map(({ key, Icon, label }) => (
                <IconButton
                  key={key}
                  component="a"
                  href={socials[key] || '#'}
                  target={socials[key] ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  sx={{
                    color: 'rgba(255,255,255,0.75)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    '&:hover': { color: '#fff', borderColor: 'rgba(255,255,255,0.4)' },
                  }}
                >
                  <Icon fontSize="medium" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', mb: 2, letterSpacing: '0.04em' }}>
              MENU
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((l) => (
                <Link key={l.to} component={RouterLink} to={l.to} underline="hover" sx={{ color: 'inherit', fontSize: '0.82rem' }}>
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.8rem', mb: 2, letterSpacing: '0.04em' }}>
              CONTACTO
            </Typography>
            <Stack spacing={1}>
              <Link href={`tel:${company.phone1.replace(/\s/g, '')}`} underline="hover" sx={{ color: 'inherit', fontSize: '0.82rem' }}>
                {company.phone1}
              </Link>
              <Link href={`mailto:${company.email}`} underline="hover" sx={{ color: 'inherit', fontSize: '0.82rem' }}>
                {company.email}
              </Link>
              <Link
                href={company.mapUrl}
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ color: 'inherit', fontSize: '0.82rem' }}
              >
                {company.address}
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.72rem' }}
        >
          <Typography sx={{ fontSize: 'inherit' }}>
            © {new Date().getFullYear()} {company.fullName}. Todos os direitos reservados.
          </Typography>
          <Typography sx={{ fontSize: 'inherit' }}>
            NUEL {company.nuel} · NUIT {company.nuit}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Hero.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { company } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <Box
      id="top"
      sx={{
        color: '#fff',
        py: { xs: 9, md: 12 },
        textAlign: 'center',
        backgroundImage: `${gradients.dark}, radial-gradient(circle at 15% 20%, rgba(255,255,255,0.05), transparent 40%), radial-gradient(circle at 85% 80%, rgba(31,122,61,0.18), transparent 45%)`,
      }}
    >
      <Container maxWidth="md">
        <Reveal>
        <Typography variant="overline" sx={{ color: 'warning.main' }}>
          Consultoria · Formação · Inspeção — Moçambique, desde {company.founded}
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' }, mt: 1.5, mb: 2.5 }}
        >
          Preparamos a sua equipa antes que o risco apareça
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', maxWidth: 620, mx: 'auto', mb: 4 }}>
          Soluções integradas de Saúde, Segurança no Trabalho, Qualidade e Meio Ambiente —
          consultoria técnica, formação profissional e inspeção de equipamentos, para operações
          mais seguras e em conformidade.
        </Typography>
        <Button href="#formacoes" variant="contained" color="secondary" size="large" endIcon={<ArrowOutwardIcon />}>
          Ver Formações
        </Button>
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/InspecaoQualidade.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { qualityInspection, inspectionCategories } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

export default function InspecaoQualidade() {
  return (
    <Box sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              04 — Inspeção de Qualidade
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 2 }}>
              Mais de 100 certificações em equipamentos
            </Typography>
            <Typography sx={{ color: 'text.secondary', maxWidth: 680, mx: 'auto' }}>
              {qualityInspection}
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ maxWidth: 900, mx: 'auto' }}>
            {inspectionCategories.map((cat) => (
              <Grid item xs={12} sm={6} key={cat.title}>
                <Stack
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                  sx={{ bgcolor: '#fff', p: 2, height: '100%' }}
                >
                  <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 20, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.88rem' }}>{cat.title}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Metodologia.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import { methodology, trainingApproach } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

function List({ items, color }) {
  return (
    <Stack spacing={1.4}>
      {items.map((it) => (
        <Stack direction="row" spacing={1.2} key={it} alignItems="flex-start">
          <CheckIcon sx={{ fontSize: 18, color, mt: 0.3, flexShrink: 0 }} />
          <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary' }}>{it}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default function Metodologia() {
  return (
    <Box sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            05 — Método Aplicado
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 2 }}>
            Aulas teóricas e práticas, para cada participante
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
            {trainingApproach.map((t) => (
              <Chip key={t.title} label={t.title} size="small" sx={{ bgcolor: '#EFEDE6', fontWeight: 600 }} />
            ))}
          </Stack>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#EFEDE6', p: { xs: 3, md: 4 }, height: '100%', borderTop: '3px solid', borderTopColor: 'primary.main' }}>
              <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 2.5 }}>
                Nas aulas teóricas
              </Typography>
              <List items={methodology.teorica} color="#7A1420" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#EFEDE6', p: { xs: 3, md: 4 }, height: '100%', borderTop: '3px solid', borderTopColor: 'secondary.main' }}>
              <Typography variant="h4" sx={{ fontSize: '1.15rem', mb: 2.5 }}>
                Nas aulas práticas
              </Typography>
              <List items={methodology.pratica} color="#1F7A3D" />
            </Box>
          </Grid>
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/QuemSomos.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { company, values } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

export default function QuemSomos() {
  return (
    <Box id="quem-somos" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="md">
        <Reveal>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: 'primary.main' }}>
              03 — Quem Somos
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 2.5 }}>
              Uma equipa moçambicana dedicada à sua segurança
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 680, mx: 'auto' }}>
              <strong style={{ color: '#14181A' }}>{company.fullName}</strong> é uma empresa
              moçambicana fundada em {company.founded}, dedicada à Consultoria, Gestão de Riscos,
              Formação Profissional e Inspeção de Qualidade. Trabalhamos com uma equipa
              multidisciplinar, nacional e internacional, para reduzir a exposição a riscos
              laborais e assegurar o cumprimento da legislação em vigor.
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ mb: 3.5 }}>
              {values.map((v) => (
                <Chip key={v.title} label={v.title} size="small" sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', fontWeight: 600, fontSize: '0.72rem' }} />
              ))}
            </Stack>
            <Button href="#certificacoes" variant="outlined" color="primary" endIcon={<ArrowOutwardIcon />}>
              Saber Mais
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Referencias.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { resultsChart } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

function transformData() {
  return resultsChart.labels.map((label, i) => {
    const row = { label };
    resultsChart.series.forEach((s) => {
      row[s.key] = s.data[i];
    });
    return row;
  });
}

export default function Referencias() {
  const data = transformData();

  return (
    <Box id="referencias" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            08 — Resultados
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 1.5 }}>
            Formação e Redução de Acidentes
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
            Percepção de risco, adesão à formação e evolução do índice de acidentes em algumas das
            operações onde actuámos.
          </Typography>
        </Box>

        <Box sx={{ bgcolor: '#fff', p: { xs: 2, md: 4 } }}>
          <Box sx={{ width: '100%', height: 360 }}>
            <ResponsiveContainer>
              <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0DED6" />
                <XAxis dataKey="label" tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} />
                <YAxis tick={{ fontFamily: 'IBM Plex Mono', fontSize: 11 }} />
                <Tooltip contentStyle={{ fontFamily: 'IBM Plex Sans', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontFamily: 'IBM Plex Sans', fontSize: 12 }} />
                {resultsChart.series.map((s) => (
                  <Bar key={s.key} dataKey={s.key} name={s.name} fill={s.color} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Solucoes.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PolicyIcon from '@mui/icons-material/Policy';
import SchoolIcon from '@mui/icons-material/School';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { gradients } from '../theme';
import Reveal from './Reveal';

const pillars = [
  {
    icon: PolicyIcon,
    title: 'Consultoria',
    text: 'Levantamento e análise de riscos, planos de segurança e emergência, políticas de SST e implementação de Sistemas de Gestão Integrada (ISO 9001, 14001 e 45001).',
    href: '#quem-somos',
  },
  {
    icon: SchoolIcon,
    title: 'Formação',
    text: 'Mais de 30 formações técnicas e preventivas, com formadores experientes e conteúdo adaptado à realidade de cada equipa e sector de actividade.',
    href: '#formacoes',
  },
  {
    icon: FactCheckIcon,
    title: 'Inspeção de Qualidade',
    text: 'Mais de 100 certificações em equipamentos de elevação de cargas e trabalho em altura, com padrões elevados de segurança e conformidade.',
    href: '#certificacoes',
  },
];

export default function Solucoes() {
  return (
    <Box id="solucoes" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            01 — O Que Fazemos
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1 }}>
            Três pilares, uma só missão de segurança
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Grid item xs={12} md={4} key={p.title}>
                <Reveal delay={i * 0.12}>
                  <Box
                    component="a"
                    href={p.href}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'inherit',
                      height: '100%',
                      p: 4,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'border-color 0.2s ease, transform 0.2s ease',
                      '&:hover': { borderColor: 'secondary.main', transform: 'translateY(-3px)' },
                    }}
                  >
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      sx={{ width: 56, height: 56, backgroundImage: gradients.primary, mb: 3 }}
                    >
                      <Icon sx={{ color: 'warning.main', fontSize: 28 }} />
                    </Stack>
                    <Typography variant="h4" sx={{ fontSize: '1.3rem', mb: 1.2 }}>
                      {p.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>{p.text}</Typography>
                  </Box>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Stats.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { company } from '../data/content';
import { totalCourses } from '../data/courses';
import { gradients } from '../theme';
import Reveal from './Reveal';
import Counter from './Counter';

const stats = [
  { value: new Date().getFullYear() - company.founded, suffix: '+', label: 'Anos no terreno' },
  { value: 100, suffix: '+', label: 'Certificações em equipamentos' },
  { value: totalCourses, suffix: '+', label: 'Formações técnicas' },
  { value: 9, suffix: '+', label: 'Empresas clientes' },
];

export default function Stats() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
          {/* CORREÇÃO: Adicionado justifyContent="center" para centralizar a fileira de cards inteira */}
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {stats.map((s, i) => (
              <Grid item xs={6} md={3} key={s.label}>
                <Reveal delay={i * 0.1}>
                  <Box
                    sx={{
                      bgcolor: 'background.paper',
                      p: { xs: 2.5, md: 4 },
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      height: '100%', // Garante que todos os cards tenham a mesma altura
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Counter
                      to={s.value}
                      suffix={s.suffix}
                      sx={{
                        fontFamily: '"Big Shoulders Display"',
                        fontWeight: 800,
                        fontSize: { xs: '2.4rem', md: '3rem' },
                        color: 'primary.main',
                        lineHeight: 1,
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    />
                    <Typography 
                      sx={{ 
                        fontSize: '0.85rem', 
                        color: 'text.secondary', 
                        mt: 1,
                        fontWeight: 500,
                        lineHeight: 1.3
                      }}
                    >
                      {s.label}
                    </Typography>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/TopBar.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { company, socials } from '../data/content';
import { gradients } from '../theme';

const socialIcons = [
  { key: 'facebook', Icon: FacebookIcon, label: 'Facebook' },
  { key: 'instagram', Icon: InstagramIcon, label: 'Instagram' },
  { key: 'linkedin', Icon: LinkedInIcon, label: 'LinkedIn' },
];

function IconBadge({ children }) {
  return (
    <Box
      sx={{
        width: 26,
        height: 26,
        borderRadius: '50%',
        bgcolor: 'rgba(255,255,255,0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {children}
    </Box>
  );
}

export default function TopBar() {
  return (
    <Box sx={{ backgroundImage: gradients.primary, display: { xs: 'none', md: 'block' } }}>
      <Container maxWidth="lg">
        {/* Uma única linha flex, largura total, sem Stacks aninhadas — telefone/email
            fixos à esquerda (flex-start), redes sociais fixas à direita (flex-end). */}
        <Box
          sx={{
            width: '100%',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Grupo esquerdo: telefone + email */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Box
              component="a"
              href={`tel:${company.phone1.replace(/\s/g, '')}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <IconBadge>
                <PhoneIcon sx={{ fontSize: 14, color: '#fff', display: 'block' }} />
              </IconBadge>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1 }}>{company.phone1}</Typography>
            </Box>

            <Box
              component="a"
              href={`mailto:${company.email}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <IconBadge>
                <EmailIcon sx={{ fontSize: 14, color: '#fff', display: 'block' }} />
              </IconBadge>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1 }}>{company.email}</Typography>
            </Box>
          </Box>

          {/* Grupo direito: redes sociais */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            {socialIcons.map(({ key, Icon, label }) => (
              <IconButton
                key={key}
                component="a"
                href={socials[key] || '#'}
                target={socials[key] ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                size="small"
                disableRipple
                sx={{ color: '#fff', p: 0, '&:hover': { opacity: 0.8, bgcolor: 'transparent' } }}
              >
                <Icon sx={{ fontSize: 19, display: 'block' }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
</file>

<file path="src/theme.js">
import { createTheme } from '@mui/material/styles';

// Paleta ancorada na identidade HST Plus: vermelho-terra (marca), verde-segurança
// (aprovação/conformidade), preto-industrial e branco técnico. Amarelo-perigo usado
// como acento raro, no espírito da sinalética de segurança do sector.
export const colors = {
  maroon: '#7A1420',
  maroonDark: '#4A0D14',
  safetyRed: '#C81D2C',
  safetyGreen: '#1F7A3D',
  safetyGreenDark: '#14522A',
  hazardYellow: '#F0B429',
  ink: '#14181A',
  paper: '#F6F5F1',
  paperAlt: '#EFEDE6',
  line: 'rgba(20,24,26,0.12)',
};

// Gradientes usados em botões, cabeçalhos e secções escuras — mantêm a identidade
// maroon/verde da marca com um pouco mais de profundidade do que uma cor lisa.
export const gradients = {
  primary: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.maroonDark} 100%)`,
  secondary: `linear-gradient(135deg, #2E9350 0%, ${colors.safetyGreenDark} 100%)`,
  dark: `linear-gradient(160deg, ${colors.maroonDark} 0%, #2E0810 55%, ${colors.ink} 130%)`,
  // Gradientes muito subtis para as secções "claras" — dão profundidade sem
  // comprometer a legibilidade do texto.
  surfaceLight: `linear-gradient(180deg, #FFFFFF 0%, ${colors.paper} 100%)`,
  surfaceAlt: `linear-gradient(180deg, ${colors.paper} 0%, ${colors.paperAlt} 100%)`,
  footer: `linear-gradient(160deg, #171B1C 0%, #0A0C0D 100%)`,
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: colors.maroon, dark: colors.maroonDark, contrastText: '#fff' },
    secondary: { main: colors.safetyGreen, dark: colors.safetyGreenDark, contrastText: '#fff' },
    warning: { main: colors.hazardYellow },
    background: { default: colors.paper, paper: '#FFFFFF' },
    text: { primary: colors.ink, secondary: 'rgba(20,24,26,0.68)' },
    divider: colors.line,
  },
  shape: { borderRadius: 2 },
  typography: {
    fontFamily: '"IBM Plex Sans", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 0.95,
    },
    h2: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 1,
    },
    h3: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: '"Big Shoulders Display", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    subtitle1: { fontWeight: 600 },
    button: {
      fontFamily: '"IBM Plex Mono", monospace',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
    overline: {
      fontFamily: '"IBM Plex Mono", monospace',
      letterSpacing: '0.18em',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 2, paddingInline: '1.4em', paddingBlock: '0.8em' },
        contained: {
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '35%',
            height: '100%',
            background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)',
            transform: 'translateX(-120%) skewX(-15deg)',
            pointerEvents: 'none',
          },
          '&:hover::after': {
            animation: 'hstButtonShine 0.85s ease',
          },
        },
        containedPrimary: {
          backgroundImage: gradients.primary,
          '&:hover': { backgroundImage: gradients.primary, filter: 'brightness(1.08)' },
        },
        containedSecondary: {
          backgroundImage: gradients.secondary,
          '&:hover': { backgroundImage: gradients.secondary, filter: 'brightness(1.08)' },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
  },
});

export default theme;
</file>

<file path="README.md">
# HST Plus — Landing Page

Site institucional de página única para a **HST Plus, Consultancy & Training**.
Estrutura inspirada na Above Academy (above.co.mz), mais arejada e com menos blocos de
imagem/texto, com o conteúdo e identidade visual da HST Plus.

## Stack

- **React 19 + Vite**
- **Material UI (MUI)** v5 — tema customizado em `src/theme.js`
- **Recharts** — gráfico de resultados na secção Referências
- Fontes: **Big Shoulders Display** (títulos), **IBM Plex Sans** (corpo), **IBM Plex Mono** (dados técnicos)

## Como correr localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # pré-visualiza o build de produção
```

## Docker

```bash
docker compose up --build                             # produção, porta 8080 + API do blog
docker compose -f docker-compose.dev.yml up --build    # dev com hot-reload, portas 5173 + 4000
```

O `docker-compose.yml` sobe dois serviços: `hstplus-site` (nginx, frontend) e `api`
(Node/Express — busca publicações do Facebook/Instagram, ver `server/README.md` para
configurar as credenciais da Meta). O nginx encaminha `/api/*` para o serviço `api`.

## Estrutura de rotas e páginas

O site deixou de ser uma única página — agora usa `react-router-dom`:

- **`/`** (`src/pages/HomePage.jsx`) — todas as secções institucionais, na mesma ordem de sempre
- **`/galeria`** (`src/pages/GaleriaPage.jsx`) — página própria com grid 3x3 de fotos e lightbox
  (clicar numa foto amplia, com setas para navegar e tecla/botão fechar)

Ambas as páginas partilham o `src/layouts/MainLayout.jsx` (TopBar, Header, Footer,
WhatsAppButton) e são envolvidas por `src/components/PageFade.jsx`, que aplica um fade
leve sempre que se muda de página (Home ↔ Galeria). Navegar para uma âncora de outra
página (ex: clicar "Certificações" estando em `/galeria`) leva de volta a `/` e faz
scroll suave até à secção, via `src/hooks/useScrollToHash.js`.

### Secções da Home (ordem em `HomePage.jsx`)

1. `Hero` — título + CTA único
2. `ClientLogos` — logótipos reais dos clientes
3. `Solucoes` — 3 pilares (Consultoria / Formação / Inspeção)
4. `Formacoes` — catálogo de cursos por categoria, em separadores (tabs)
5. `Stats` — números-chave (com contagem animada)
6. `QuemSomos` — missão institucional resumida + valores
7. `GaleriaCTA` — convite para a página `/galeria` (já não mostra fotos aqui)
8. `InspecaoQualidade`
9. `Metodologia` — aulas teóricas vs práticas
10. `Consultoria` — consultor especializado + serviços
11. `Legalidade` — certificações e registos legais
12. `Referencias` — gráfico de resultados
13. `Blog` — publicações do Facebook/Instagram, via `server/` (ver `server/README.md`)
14. `Contacto`

## Nota sobre as fotos da Galeria

As fotos em `src/assets/gallery/` (usadas em `GaleriaPage.jsx`) são **placeholders** —
a HST Plus vai enviar o conjunto definitivo. Para trocar: substituir os ficheiros nessa
pasta e actualizar a lista `photos` no topo de `src/pages/GaleriaPage.jsx` (mantém
múltiplos de 3 para a grid ficar sempre alinhada).

## Nota sobre logótipos de clientes

Os logótipos em `src/assets/clients/` foram extraídos e recortados directamente do
portfólio em PDF fornecido pela HST Plus (que já os incluía como referências autorizadas
pelos próprios clientes). Foram identificados por OCR e corte automático — vale a pena
confirmar com a equipa da HST Plus se algum logótipo precisa de ser substituído por uma
versão em maior resolução ou mais recente.

## Próximos passos sugeridos

- Rever textos/dados em `src/data/`.
- Ligar "Pedir Proposta" a um formulário real.
- Confirmar resolução/qualidade final dos logótipos de clientes com a HST Plus.
- Substituir as fotos placeholder da Galeria pelas definitivas (ver nota acima).
- **Newsletter**: a HST Plus quer um formulário de subscrição, mas ainda não decidiu como
  deve funcionar. Opções a discutir quando houver clareza:
  - Mais simples: embed dum serviço externo (Mailchimp, Brevo/Sendinblue) — sem código
    adicional no `server/`, mas a lista de subscritores fica gerida fora do site.
  - Mais integrado: endpoint novo em `server/` (`POST /api/newsletter`) que grava o email
    (ficheiro/CSV ou tabela simples) e opcionalmente sincroniza com um serviço de email
    marketing depois — dá mais controlo mas exige mais manutenção.
  - Ficar apenas com os contactos directos (WhatsApp/telefone/email) que já existem, sem
    newsletter, se não for prioridade agora.
- Outras mudanças de design que a HST Plus está a desenhar (aguardar especificação).
</file>

<file path="graphify-out/cache/stat-index.json">
{"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\.oxlintrc.json":{"size":231,"mtime_ns":1783452491000000000,"word_count":18,"hash":"bf9b11d9cafa31776d5071f4aa1dbdfe7d30a5d35630d82e7f2f8041028784a1"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\README.md":{"size":4696,"mtime_ns":1783882015000000000,"word_count":670,"hash":"dd305a1260db58f3fdc56a5879cdb25fbff4c993da2081391ad99afd72aacc31"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\docker-compose.dev.yml":{"size":600,"mtime_ns":1783773658835062100,"word_count":52,"hash":"143d4370f955b97ae33aa11cce1c4f1e5e0b9c3c94117dc929d24a9355a05c24"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\docker-compose.yml":{"size":507,"mtime_ns":1783773710072708100,"word_count":39,"hash":"346f5c22c5b76073ee6139665ba2355c647f04998ff128bb2d0defa2292896d1"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\index.html":{"size":958,"mtime_ns":1783452721000000000,"word_count":67,"hash":"d6ca0f02b4f1ca963a52f3304d4e8dc79b13fb4c6f51e29b99daa76e877376de"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\package.json":{"size":661,"mtime_ns":1783881662000000000,"word_count":55,"hash":"7170799999f8f07626595a69efc8d1ad51fd60daa8fd5c44ee35cf67cc803839"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\README.md":{"size":3439,"mtime_ns":1783773126000000000,"word_count":504,"hash":"cc791647b0940c146da3ef7b46b03fa6b0e8053e27ac51f68ca00feacb153c7a"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\package.json":{"size":393,"mtime_ns":1783772980000000000,"word_count":39,"hash":"c3f2196c05614a1579f3f7ea493e58862bf6973f613bf8f7eb1989bc53bf6436"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\src\\fetchPosts.js":{"size":3609,"mtime_ns":1783772997000000000,"word_count":361},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\server\\src\\index.js":{"size":1009,"mtime_ns":1783773004000000000,"word_count":127},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\App.jsx":{"size":646,"mtime_ns":1783881747000000000,"word_count":59},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\about.jpg":{"size":171034,"mtime_ns":1783452682000000000,"word_count":6452,"hash":"70b5af1dabd7b771f508a3bcdb23e093c266e7eb6eec6c40fe8321f719c6d710"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\gabriel-couto.jpg":{"size":6314,"mtime_ns":1783708202000000000,"word_count":228,"hash":"dea2249d40f53e97c933946e62de4d45aa56de91bab3d0ffdb3ed46f865aa243"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\lcpower.png":{"size":13858,"mtime_ns":1783708202000000000,"word_count":489,"hash":"1db8672685d4c43e19c778edd0bb9655f8c34316e9d79a9e2172a251ef25cf52"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\manica.jpg":{"size":4427,"mtime_ns":1783708202000000000,"word_count":166,"hash":"b9fdfffe301f03ff844a52567a58daee2cfd4e062eb37a772999c9354f5dab60"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\mota-engil.png":{"size":2285,"mtime_ns":1783708202000000000,"word_count":66,"hash":"704fce35e3d1d663f517801fc1cf156125ec77f58edbc297706da01844e26cb9"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\protecna.jpg":{"size":15787,"mtime_ns":1783708202000000000,"word_count":483,"hash":"ded457ca5faa87034b0320d4123dc3b420a1b5ce2aeecdf301c5323c60eebda0"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\tata.png":{"size":30262,"mtime_ns":1783708202000000000,"word_count":1015,"hash":"e6d3f85715eaa5f14c9b15c78a12d303da12685b1308774d4282cc0ad8ba9b77"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\tcpi.png":{"size":44704,"mtime_ns":1783708202000000000,"word_count":1565,"hash":"1ba67643c87182fdaa17f3350bdfef106c5464f42f833b2d6b7245e438ec2818"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\terminais-do-norte.png":{"size":5896,"mtime_ns":1783708202000000000,"word_count":193,"hash":"9f1a7ced5515f36001d306d0bf6a60af61b56bbc3458dc8749e3ba187adce81b"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\clients\\uni-span.png":{"size":53758,"mtime_ns":1783708202000000000,"word_count":1877,"hash":"69846f3f5287865c11d561e8df538c0ef92c5904f20e687846cff0f5e0b37bc7"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\cta.jpg":{"size":32061,"mtime_ns":1783452682000000000,"word_count":1185,"hash":"4072e3faaf31dc751157f27ea1d2edbc59da4369565971a3a44ee40730ca65d2"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery1.jpg":{"size":78365,"mtime_ns":1783452682000000000,"word_count":2945,"hash":"d5b6e5ca50a3833ddc2eb7bee711f37a0988b785c09930422b656fb54fc2d76e"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery2.jpg":{"size":168683,"mtime_ns":1783452682000000000,"word_count":5939,"hash":"25aa2b2291d0024d99093bba142c19e2762481e132bbdccfa31bb66ec7ddbfb6"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery3.jpg":{"size":65579,"mtime_ns":1783452682000000000,"word_count":2403,"hash":"a541ba793896e526a3af5ce463a9c6b86d768d43bb6bc4ba3b7f2a269fa99a19"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery4.jpg":{"size":36028,"mtime_ns":1783452682000000000,"word_count":1251,"hash":"adb95f99d905263fd04a988e7cb2032ddf39ae45a79d7bc7e63a402e7d65e539"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery5.jpg":{"size":18386,"mtime_ns":1783452682000000000,"word_count":641,"hash":"6fc2dfe501e4359079527837d5cd9e6275b0483016810cbf988879df605bf876"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery6.jpg":{"size":25482,"mtime_ns":1783452682000000000,"word_count":963,"hash":"fea59e98870387f26c9de347ce96c61004bbcb2b5f90bd504627d25c654e067c"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\combate-incendio.jpg":{"size":65579,"mtime_ns":1783800739000000000,"word_count":2403,"hash":"07f190aa084a673f2008520e12761fce8bafef6f9f3247e79576fa956e64a36e"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\conducao-defensiva.jpg":{"size":36028,"mtime_ns":1783800739000000000,"word_count":1251,"hash":"c0a3f78d94ef520c9d995141902f9ea27c90c06ad7658d074ee84e206f651e71"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\equipamentos-medicao.jpg":{"size":18386,"mtime_ns":1783800739000000000,"word_count":641,"hash":"5d3ff4e7a5887bdef5531718311da2ee116997f8d260a1d377227ad13fca25e3"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\formacao-equipa.jpg":{"size":171034,"mtime_ns":1783800739000000000,"word_count":6452,"hash":"7f597baca0bfe7fb8a9d30108ed4f3ee57acd292f699e5529caa19d93991bbf6"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\formacao-sala-manica.jpg":{"size":165564,"mtime_ns":1783881667000000000,"word_count":6072,"hash":"be1d0c01c368c3129f1e8a9ee3ddd55bbf9bc808dc59477f1a3003ba7aacb932"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\inspecao-gancho.jpg":{"size":78365,"mtime_ns":1783800739000000000,"word_count":2945,"hash":"da73ccbd867d07f11731ab99e66b88c07bc5e5ee1fa4b88f8ba91e2c257749d5"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\montagem-andaime.jpg":{"size":32061,"mtime_ns":1783800739000000000,"word_count":1185,"hash":"3956f5f2103a2edbccc339c3cf5d0418902abd26571af968635ce05375ce645f"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\rigger-altura.jpg":{"size":48421,"mtime_ns":1783800739000000000,"word_count":1464,"hash":"1787f0481ea28ae5efef0db489b1ea10004194babd24467dbc07663d8348db46"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\sala-formacao.jpg":{"size":131636,"mtime_ns":1783800740000000000,"word_count":4705,"hash":"a92b674ed6f2aeb776027770f9673a4aeb9da2af3fbbf6c94484e8ee7d2e12f1"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\hero.jpg":{"size":48421,"mtime_ns":1783452682000000000,"word_count":1464,"hash":"1a192bb38ae69ae06ed69ac3a517494a22657511d78817267df9995be2081079"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\logo.png":{"size":27769,"mtime_ns":1783452682000000000,"word_count":960,"hash":"4ed5e265ec4c4fe487c9e861e0a0451fddeb2bc23174230c343ae90b1f624346"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Analytics.jsx":{"size":1187,"mtime_ns":1783777021000000000,"word_count":129},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Blog.jsx":{"size":5061,"mtime_ns":1783800880000000000,"word_count":451},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\ClientLogos.jsx":{"size":2349,"mtime_ns":1783775880000000000,"word_count":236},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Consultoria.jsx":{"size":3356,"mtime_ns":1783800880000000000,"word_count":304},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Contacto.jsx":{"size":3345,"mtime_ns":1783775880000000000,"word_count":295},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Counter.jsx":{"size":1563,"mtime_ns":1783802593000000000,"word_count":192},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Eyebrow.jsx":{"size":619,"mtime_ns":1783452794000000000,"word_count":71},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Footer.jsx":{"size":4898,"mtime_ns":1783881804000000000,"word_count":427},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Formacoes.jsx":{"size":3590,"mtime_ns":1783802652000000000,"word_count":316},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Galeria.jsx":{"size":6349,"mtime_ns":1783880997000000000,"word_count":577},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\GaleriaCTA.jsx":{"size":1534,"mtime_ns":1783881697000000000,"word_count":161},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\HazardDivider.jsx":{"size":656,"mtime_ns":1783452789000000000,"word_count":84},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Header.jsx":{"size":5246,"mtime_ns":1783881784000000000,"word_count":490},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Hero.jsx":{"size":1790,"mtime_ns":1783775880000000000,"word_count":178},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\InspecaoQualidade.jsx":{"size":1865,"mtime_ns":1783800794000000000,"word_count":170},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Legalidade.jsx":{"size":3230,"mtime_ns":1783802634000000000,"word_count":275},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Metodologia.jsx":{"size":2643,"mtime_ns":1783800867000000000,"word_count":263},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\OQueFazemos.jsx":{"size":4418,"mtime_ns":1783452865000000000,"word_count":401},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\PageFade.jsx":{"size":1111,"mtime_ns":1783881676000000000,"word_count":148},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\QuemSomos.jsx":{"size":2181,"mtime_ns":1783800782000000000,"word_count":214},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Referencias.jsx":{"size":2415,"mtime_ns":1783800880000000000,"word_count":258},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Reveal.jsx":{"size":1434,"mtime_ns":1783775808000000000,"word_count":167},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\ScrollProgress.jsx":{"size":1246,"mtime_ns":1783802680000000000,"word_count":140},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Solucoes.jsx":{"size":3402,"mtime_ns":1783887137375345000,"word_count":316},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\Stats.jsx":{"size":3267,"mtime_ns":1783885816805051600,"word_count":265},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\TopBar.jsx":{"size":3795,"mtime_ns":1783801938000000000,"word_count":326},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\components\\WhatsAppButton.jsx":{"size":923,"mtime_ns":1783708441000000000,"word_count":90},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\data\\content.js":{"size":7167,"mtime_ns":1783772640000000000,"word_count":964},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\data\\courses.js":{"size":3669,"mtime_ns":1783452776000000000,"word_count":481},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\hooks\\useScrollToHash.js":{"size":720,"mtime_ns":1783881683000000000,"word_count":110},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\layouts\\MainLayout.jsx":{"size":481,"mtime_ns":1783881742000000000,"word_count":49},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\main.jsx":{"size":444,"mtime_ns":1783452782000000000,"word_count":43},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\pages\\GaleriaPage.jsx":{"size":6801,"mtime_ns":1783882238000000000,"word_count":595},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\pages\\HomePage.jsx":{"size":1121,"mtime_ns":1783881713000000000,"word_count":100},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\theme.js":{"size":4113,"mtime_ns":1783802583000000000,"word_count":400},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\vite.config.js":{"size":390,"mtime_ns":1783453684000000000,"word_count":50},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\avaliacao-escrita-unispan.jpg":{"size":149333,"mtime_ns":1783882220000000000,"word_count":5446,"hash":"fb2b0ead549fbadd1eca43805a083f043b86e78a96fb1002b112309560311d50"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\encerramento-formacao-unispan.jpg":{"size":143600,"mtime_ns":1783882221000000000,"word_count":5432,"hash":"660e0be3823284e003a596feced08b35bfe21f2dc008873a2a513287e4f7cf7e"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\equipa-unispan-1.jpg":{"size":162452,"mtime_ns":1783882220000000000,"word_count":5860,"hash":"8c6e59da3803c0e4b2ef93584c9c39d715ff8beb954b8ab57637963bdd516e41"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\equipa-unispan-2.jpg":{"size":153690,"mtime_ns":1783882220000000000,"word_count":5617,"hash":"7c6105c8dbc131872015edc5b06316604832b4afb36455b95dd069f97254070f"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\espaco-confinado-terminais.jpg":{"size":111373,"mtime_ns":1783882221000000000,"word_count":4007,"hash":"ffb42fcddaf795be627dc6e7df358e9b2de5134d79f003293e754bf4ebc0b947"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\formacao-altura-unispan-1.jpg":{"size":144466,"mtime_ns":1783882220000000000,"word_count":5270,"hash":"8c34ead4ac4e327446cc7f2717e41357b8afc519389c087128ffb7bb2254c182"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\src\\assets\\gallery\\visita-terreno-unispan.jpg":{"size":242977,"mtime_ns":1783882221000000000,"word_count":8506,"hash":"3e5a7fe5163e567d7d90be9ed4a6a59de3eeb22d88fca186fbcb54b159e25193"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\.claude\\settings.json":{"size":499,"mtime_ns":1783946773100255500,"word_count":38,"hash":"c9ea7214fcefe922bdabc4e6544300fa5a8efbf3bdc0657eb36297646a21f1a9"},"C:\\Users\\Dony\\Documents\\Workspace\\hstplus-site\\CLAUDE.md":{"size":781,"mtime_ns":1783946773027778300,"word_count":106,"hash":"b5a5237f0dd262308961666186afbe48d20e935dfee4ce03b818c7badbca2cc4"}}
</file>

<file path="src/components/Formacoes.jsx">
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { courseCatalog, totalCourses } from '../data/courses';
import { gradients } from '../theme';
import Reveal from './Reveal';

export default function Formacoes() {
  const [tab, setTab] = useState(0);
  const active = courseCatalog[tab];

  return (
    <Box id="formacoes" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceAlt }}>
      <Container maxWidth="lg">
        <Reveal>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            02 — Nossas Formações
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1, mb: 1.5 }}>
            Catálogo de {totalCourses}+ formações técnicas
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
            Formadores experientes e conteúdo adaptado à realidade de cada equipa, com cargas
            horárias definidas para formação básica e reciclagem.
          </Typography>
        </Box>

        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            mb: 4,
            minHeight: 0,
            '& .MuiTab-root': {
              fontSize: '0.72rem',
              fontFamily: '"IBM Plex Mono"',
              fontWeight: 600,
              letterSpacing: '0.03em',
              minHeight: 0,
              py: 1.4,
              px: 2,
              color: 'text.secondary',
            },
            '& .Mui-selected': { color: 'primary.main !important' },
            '& .MuiTabs-indicator': { bgcolor: 'secondary.main', height: 3 },
          }}
        >
          {courseCatalog.map((c) => (
            <Tab key={c.category} label={c.category} />
          ))}
        </Tabs>

        <Box sx={{ bgcolor: '#fff', p: { xs: 3, md: 5 } }}>
          <Grid container spacing={1.5}>
            {active.courses.map((c, i) => (
              <Grid item xs={12} sm={6} key={c.name}>
                <Reveal delay={Math.min(i, 8) * 0.05} y={10}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ py: 1.4, borderBottom: '1px solid', borderColor: 'divider' }}
                  >
                    <Typography sx={{ fontSize: '0.88rem' }}>{c.name}</Typography>
                    <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.7rem', color: 'secondary.dark', whiteSpace: 'nowrap' }}>
                      {c.basico}
                    </Typography>
                  </Stack>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Stack alignItems="center" sx={{ mt: 4 }}>
          <Button href="#contacto" variant="outlined" color="primary" endIcon={<ArrowOutwardIcon />}>
            Pedir Calendário de Formações
          </Button>
        </Stack>
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/components/Header.jsx">
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';
import { gradients } from '../theme';

// Âncoras da página principal usam "/#id" (funcionam a partir de qualquer
// página); a Galeria é uma página própria, por isso usa um caminho normal.
const links = [
  { to: '/#quem-somos', label: 'Quem Somos' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/#solucoes', label: 'Soluções' },
  { to: '/#formacoes', label: 'Formações' },
  { to: '/#certificacoes', label: 'Certificações' },
  { to: '/#referencias', label: 'Referências' },
  { to: '/#blog', label: 'Blog' },
  { to: '/#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={scrolled ? 4 : 0}
        sx={{ backgroundImage: gradients.primary, top: 0, transition: 'box-shadow 0.3s ease' }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: scrolled ? 58 : 72 },
            px: { xs: 2, md: 5 },
            transition: 'min-height 0.25s ease',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ flexGrow: 1 }}
            component={RouterLink}
            to="/"
            style={{ textDecoration: 'none' }}
          >
            <Box
              component="img"
              src={logo}
              alt="HST Plus"
              sx={{
                height: { xs: 32, md: scrolled ? 28 : 36 },
                transition: 'height 0.25s ease',
              }}
            />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1 }}>
                HST PLUS
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.08em',
                  maxHeight: scrolled ? 0 : 14,
                  opacity: scrolled ? 0 : 1,
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                }}
              >
                CONSULTANCY &amp; TRAINING
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', lg: 'flex' } }}>
            {links.map((l) => (
              <Button key={l.to} component={RouterLink} to={l.to} sx={{ color: '#fff', fontSize: '0.72rem', px: 1.5 }}>
                {l.label}
              </Button>
            ))}
          </Stack>

          <Button
            component={RouterLink}
            to="/#contacto"
            variant="contained"
            color="secondary"
            sx={{ ml: 2, display: { xs: 'none', md: 'inline-flex' } }}
          >
            Pedir Proposta
          </Button>

          <IconButton
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            sx={{ color: '#fff', display: { xs: 'inline-flex', lg: 'none' }, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, backgroundImage: gradients.primary, height: '100%', color: '#fff', p: 3 }}>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)} sx={{ color: '#fff' }} aria-label="Fechar menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={0.5} sx={{ mt: 2 }}>
            {links.map((l) => (
              <Button
                key={l.to}
                component={RouterLink}
                to={l.to}
                onClick={() => setOpen(false)}
                sx={{ color: '#fff', justifyContent: 'flex-start', fontSize: '0.8rem' }}
              >
                {l.label}
              </Button>
            ))}
            <Button
              component={RouterLink}
              to="/#contacto"
              onClick={() => setOpen(false)}
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
            >
              Pedir Proposta
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
</file>

<file path="src/components/Legalidade.jsx">
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { legal, certifications } from '../data/content';
import { gradients } from '../theme';
import Reveal from './Reveal';

export default function Legalidade() {
  return (
    <Box id="certificacoes" sx={{ py: { xs: 8, md: 11 }, backgroundImage: gradients.surfaceLight }}>
      <Container maxWidth="lg">
        <Reveal>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'primary.main' }}>
            07 — Legalidade &amp; Certificações
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.4rem' }, mt: 1 }}>
            Transparência, segurança e responsabilidade
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {certifications.map((c, i) => (
            <Grid item xs={12} sm={6} md={3} key={c.title}>
              <Reveal delay={i * 0.1}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    height: '100%',
                    borderColor: 'divider',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <VerifiedUserIcon sx={{ color: 'secondary.main', fontSize: 30, mb: 1.5 }} />
                    <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>{c.title}</Typography>
                    <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', mb: 1 }}>{c.subtitle}</Typography>
                  </Box>
                  <Typography sx={{ fontFamily: '"IBM Plex Mono"', fontSize: '0.68rem', color: 'primary.main', mt: 1.5 }}>
                    {c.code}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          spacing={{ xs: 1, sm: 4 }}
          sx={{ fontSize: '0.78rem', color: 'text.secondary', textAlign: 'center' }}
        >
          <Typography sx={{ fontSize: 'inherit' }}>{legal.text}</Typography>
        </Stack>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          {legal.registrations.map((r) => (
            <Grid item xs={12} sm="auto" key={r.label}>
              <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', textAlign: 'center' }}>
                {r.label}: <strong style={{ fontFamily: '"IBM Plex Mono"' }}>{r.value}</strong>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Reveal>
      </Container>
    </Box>
  );
}
</file>

<file path="src/App.jsx">
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analytics from './components/Analytics';
import ScrollProgress from './components/ScrollProgress';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GaleriaPage from './pages/GaleriaPage';

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <ScrollProgress />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
</file>

</files>
