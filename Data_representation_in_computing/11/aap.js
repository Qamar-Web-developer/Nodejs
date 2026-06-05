import { read } from "fs"
import fs from "fs/promises"

// console.log(await fs.readFile('text.txt'))
const contentBuffer=await fs.readFile('text.txt')

contentBuffer.forEach((el)=>{
    console.log(el.toString(2))
})


console.log(contentBuffer)
console.dir(contentBuffer)