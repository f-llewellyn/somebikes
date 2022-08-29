import { ReactElement } from "react";

export interface ButtonPropsType {
	colour?: string;
	type?: string;
	square?: boolean;
	children: string | ReactElement;
}

const Button = ({
	colour = "primary",
	type = "solid",
	children,
	square,
}: ButtonPropsType) => {
	return (
		<button
			className={`py-2 rounded-lg flex gap-2 justify-center items-center transition-all whitespace-nowrap ${
				square ? "px-2" : "px-4"
			} ${
				colour === "primary" &&
				type === "solid" &&
				"bg-primary text-white hover:bg-primary-dark"
			} ${
				colour === "primary" &&
				type === "outlined" &&
				"border border-primary text-primary hover:bg-primary-dark hover:text-white"
			} ${
				colour === "secondary" &&
				type === "solid" &&
				"bg-secondary text-white hover:bg-secondary-dark"
			} ${
				colour === "secondary" &&
				type === "outlined" &&
				"border border-secondary text-secondary hover:bg-secondary-dark hover:text-white"
			} ${
				colour === "error" &&
				type === "solid" &&
				"bg-error text-white hover:bg-error-dark"
			} ${
				colour === "error" &&
				type === "outlined" &&
				"border border-error text-error hover:bg-error-dark hover:text-white"
			}`}
		>
			{children}
		</button>
	);
};

export default Button;
