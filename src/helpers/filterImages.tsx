

export const filterImages = (urls: string) => {
    try {
        return urls.split(',')
    } catch {
        console.log('err')
    }
}

export const produceImageCollection = (arr: string[], className: string) => {
    return arr.map((url, index) => {
        return (
        <img key={index} src={url} alt="icon" className={className}/>
        )
    })
}