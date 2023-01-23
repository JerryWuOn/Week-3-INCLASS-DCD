export default function Card({
    degree = "none",
    color = "#FBFFB9",
    font = "0",
    image = "icon/"

}) {
    return(
        <div style={{backgroundColor: color, fontSize: font}}>
            {
                color === "red" ? <img src={'icon/person.png'} width="50"/> :
                color === "blue" ? <img src={'icon/person.png'} width="50"/> :
                                    <img src={image} width="50"/> 
            }
            {degree}
        </div>
    )
}