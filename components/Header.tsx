import Button from "./Button";

const Header = () => {
	return (
		<header className="px-4 py-2 md:px-8 md:py-4 flex items-center">
			<h1 className="text-title leading-none font-bold">SomeBikes</h1>

			<div className="flex items-center gap-2 ml-auto">
				<Button colour="transparent">Log in</Button>
				<Button>Sign Up</Button>
			</div>
		</header>
	);
};

export default Header;
