
// import fs from 'fs'
// const folderPath = '/path/to/your/folder';

// export const filterImages = () => {
//     fs.readdir(folderPath, (err, files) => {
//         if (err) {
//           console.error('Error:', err);
//         } else {
//           console.log('Filenames in the folder:', files);
//         }
//       });
// }

export const filterImages = (urls) => {
    try {
        return urls.split(',')
    } catch {
        console.log('err')
    }
}

export const produceImageCollection = (arr, className) => {
    return arr.map((url, index) => {
        return (
        <img key={index} src={url} alt="icon" className={className}/>
        )
    })
}