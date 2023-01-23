export default function Card({
    degree = "none",
    color = "#FBFFB9",
    font = "0",
    image = "icon/personTwo.png"

}) {
    return(
        <div style={{backgroundColor: color, fontSize: font}}>
            {
                color === "red" ? <img src={'icon/business.jpeg'} width="50"/> :
                color === "blue" ? <img src={'icon/computing.jpeg'} width="50"/> :
                                    <img src={image} width="50"/> 
            }
            {degree}
        </div>
    )
}