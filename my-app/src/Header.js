export default function Header(){
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            width:"100%",
            position: 'Fixed',
            backgroundColor:'White',
                }}
         >
            <h1 style={{
                fontWeight:"normal",
                fontFamily:"italic",
                fontSize:"25px", 
            }}
            >My Food</h1>
        </div>
    )
}