import Image from "next/image";

function Test({ testimonial: { author, designation, title, description, img, color, star } }) {
	return (
		<div className="aximo-testimonial-slider-column" style={{ backgroundColor: color, padding: '70px', borderRadius: '29px' }}>
			<div className="aximo-testimonial-slider-data" style={{ marginBottom: '20px' }}>
				<h3 
					style={{ 
						fontSize: '30px', 
						lineHeight: '40px', 
						color: 'white', 
						lineHeight: '50px',
						/* Responsive Font Size */
						'@media (min-width: 640px)': { fontSize: '35px', lineHeight: '45px' },  /* sm */
						'@media (min-width: 768px)': { fontSize: '40px', lineHeight: '50px' },  /* md */
						'@media (min-width: 1024px)': { fontSize: '45px', lineHeight: '60px' }  /* lg */
					}}
				>
					{title} <img src={star} alt="Rating Stars" />
				</h3>
				
				<p 
					style={{
						fontSize: '16px', 
						color: 'white', 
						textJustify: 'inter-word',
						'@media (min-width: 640px)': { fontSize: '18px' }  /* sm */
					}}
				>
					{description}
				</p>
                
				<h2 style={{ fontSize: '20px' }}>
					<span 
						style={{
							color: 'black',
							backgroundColor: '#FDB920',
							border: '2px solid #000000',
							borderRadius: '269px',
							padding: '8px',
							textTransform: 'uppercase',
							fontWeight: 'bolder',
							fontSize: '14px',
							'@media (min-width: 640px)': { fontSize: '16px' }  /* sm */
						}}
					> 
						HIRE A HOSTCURATOR
					</span>
				</h2>
			</div>
			<div className="aximo-testimonial-slider-wrap" style={{ marginBottom: '20px' }}>
				<div className="aximo-testimonial-slider-thumb">
					{/* Uncomment the line below if you need to display the author's image */}
					{/* <Image src={img} alt={title} sizes="100vw" /> */}
				</div>
			</div>
		</div>
	);
}

export default Test;
