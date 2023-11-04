import Button from "../components/Button";
import {arrowRight} from "../assets/icons/index";
import {statistics} from "../constants/index"

const Hero = () => {
  return (
   <section id="home" className="w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-cotainer">
   <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full xl:padding-x pt-28">
<p>Our Summer Collection</p>
<h1>
  <span>The New Arrival</span>
  <br/>
  <span>Nike </span>
  Shoes
</h1>
<p>
  Discover Stylish Nike arrivals,quality comfort,and innovation for your active life.
</p>
<Button label="Shop Now" iconURL={arrowRight}/>
<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
{statistics.map((stat,index)=>{
  return (
    <div key={index}>
    
      <p >{stat.value}</p>
      <p >{stat.label}</p>
    </div>
  )

})}

</div>
   </div>
   </section>
  )
}

export default Hero