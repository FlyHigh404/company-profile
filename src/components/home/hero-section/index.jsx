export default function HeroSection() {
	return (
		<section className="hero-section">
			<div className="hero-content">
				<h1>Welcome to FlyHigh!</h1>
				<p>Your journey to the skies begins here.</p>
				<a href="/career" className="btn btn-primary">
					Explore Careers
				</a>
			</div>
			<style jsx>{`
				.hero-section {
					background: url("/images/hero-bg.jpg") no-repeat center center;
					background-size: cover;
					color: white;
					padding: 50px 20px;
					text-align: center;
				}
				.hero-content {
					max-width: 600px;
					margin: auto;
				}
				.btn {
					background-color: #0070f3;
					color: white;
					padding: 10px 20px;
					text-decoration: none;
					border-radius: 5px;
				}
			`}</style>
		</section>
	);
}
