//creating Large File 
const a=new ArrayBuffer(1.55*1024*1024)
console.log(a)
const dataView=new DataView(a)


for(let i=0;i<dataView.byteLength;i++)
{
    dataView.setInt8(i,i+1)
}
console.log(dataView)
console.log('End')