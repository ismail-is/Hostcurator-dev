import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
	return (
		<div id='service'>
		<div className="section aximo-section-padding4" style={{backgroundColor:'black'}} id='cards'>
			<div className="container">
				{/* <div className="aximo-section-title center">
					<h2>
						We provide effective
						<span className="aximo-title-animation">
							design solutions
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div> */}
				<div className="aximo-service-wrap">
  <div className="row" >
    {services.map((item, index) => (
      <FadeInStagger key={item.id} index={index} className="col-lg-3 d-flex gap-0">
        <ServiceCard service={item} />
      </FadeInStagger>
    ))}
  </div>
</div>

			</div>
		</div>
		</div>
	);
}

export default Services;
