const axios = require("axios");
const fs = require("fs");

//Requisiçao http
// pegar o arquivo
//escrever o arquivo em um diretorio , se o direitorio nao existe vamos criar
// fazer um for de capitulos e de paginas dentro de capitulo / desafio quantas paginas tem o capitulo , posso fazer um if para condição / descobri quando acaba as paginas 


async function downloadImage(capitulo, pagina) {
    
    const nomeManga = "naruto"
    const diretorio = `${nomeManga}/${capitulo}`;
    fs.promises.mkdir(diretorio , {recursive: true});
  const baseUrl = `https://img.mangaschan.com/uploads/manga-images/n/naruto/capitulo-${capitulo}/${pagina}.jpg`;
  try {
    const response = await axios.get(baseUrl, { responseType: "arraybuffer" });
    fs.writeFile(`${diretorio}/pagina-${pagina}.jpg`, response.data, () => {});
  } catch (error) {
    console.error(error);
  }
}
for (let pagina = 2; pagina <= 23; pagina++) {
    downloadImage(700,pagina);
    
}


