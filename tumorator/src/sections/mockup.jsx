import Model from "../components/3d.jsx";

const Mockup = () =>{
    return(
       <>
           <Model/>
           <div className="description">
               <p className="description-text">
                   our app will help you find the best diagnoses and therapy centers in your area
                   <br/>
                   <span className="description-text-sub">
                       stay tuned!
                   </span>
               </p>
           </div>
       </>


    )
}
export default Mockup;