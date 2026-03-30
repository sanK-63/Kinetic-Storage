const fs = require('fs');
const path = require('path');

const repoUser = "sanK-63";
const repoName = "Kinetic-Storage";
const modsDir = "./mods";

const manifest = {
    version: "1.20.1",
    serverName: "KineticCraft Main",
    mods: []
};

const files = fs.readdirSync(modsDir);

files.forEach(file => {
    if (file.endsWith('.jar')) {
        const stats = fs.statSync(path.join(modsDir, file));
        manifest.mods.push({
            name: file,
            url: `https://raw.githubusercontent.com/${repoUser}/${repoName}/main/mods/${file}`,
            size: stats.size
        });
    }
});

fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 4));
console.log("Манифест готов! Загрузи его в корень репозитория.");
