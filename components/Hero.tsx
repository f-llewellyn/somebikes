export interface HeroPropTypes {
	title: string;
	text?: string;
}

const Hero = ({ title = "SomeBikes" }: HeroPropTypes) => {
	return (
		<section
			style={{
				background:
					"linear-gradient(#0000007f, #0000007f), url('/img/bike-builder-hero.jpg') no-repeat center",
				minHeight: "20vh",
			}}
			className="flex flex-col justify-center gap-4"
		>
			<div className="container mx-auto">
				<h1 className="text-7xl md:text-8xl font-bold leading-none text-white">
					{title}
				</h1>
			</div>
		</section>
	);
};

export default Hero;
