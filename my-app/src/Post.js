export default function Post({PostImags,PostTitel,PostParagraph,PostPrice}){
    return(
        <div style={{
            height: "180px",
            paddingTop:"16px",
            marginTop:"50px",
            textAlign:"center",
            display:"table",
            float:"left",
        
        }}

        >
            <img src={PostImags} alt= ""  style={{
                 width:'250px',

               
            }}
            />

            <h3>{PostTitel}</h3>
            <p>{ PostParagraph }</p>
            <p>{PostPrice}</p>

        </div>
    )
}

