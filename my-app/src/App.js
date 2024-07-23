import Hearder from "./Header";
import { datashow } from "./Data";
import Post from "./Post";
import Footer from "./Footer";

export default function App(){
  const data= datashow.map((x,index) => <Post 
    key={index}
    PostImags={x.PostImags}
    PostTitel={x.PostTitel}
    PostParagraph={x.PostParagraph}
    PostPrice={x.PostPrice}
    />) 
  return(
    <div>
      <Hearder />
      <div
      style={{
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "auto auto auto auto",
        gap: "25px",
       fontFamily:'italic',

      }}
      >{data}</div>
      <div>
      <Footer />
      </div>
    </div>
  )
 
};
