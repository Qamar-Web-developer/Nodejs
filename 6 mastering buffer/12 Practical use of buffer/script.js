import fs from "node:fs/promises";

const a= await fs.readFile('video.mp4')
fs.writeFile('qamar.txt','Qamar Abbas Zindabad')
console.log(a)