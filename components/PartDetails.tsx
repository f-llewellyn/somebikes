import Button from "./Button";
import * as partTypes from "../types/bikeParts";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "next/image";

export interface PartDetailsProps {
	partType: string;
	baseCost?: number;
	quantity?: number;
	retailer?: string;
	itemDetails?:
		| partTypes.forkType
		| partTypes.frameType
		| partTypes.wheelType;
}

const PartDetails = ({ partType, itemDetails }: PartDetailsProps) => {
	return (
		<section className="bg-gray-50 shadow-md rounded p-4 mb-8 xl:mb-0 xl:grid xl:grid-cols-10 items-center xl:p-0 xl:px-4 xl:gap-8 xl:bg-transparent xl:rounded-none xl:shadow-none xl:border-t-2">
			{!itemDetails ? (
				<>
					<span className="text-2xl font-bold">{partType}</span>
					<div className="flex items-center justify-around gap-4 py-4 lg:justify-start lg:gap-8 lg:ml-8 xl:ml-0 xl:col-span-4">
						<Image
							src="/img/lyrik-square.png"
							width="100%"
							height="70"
							objectFit="contain"
							alt="Lyrik Ultimate"
						/>
						<span className="text-xl font-medium text-end">
							Rockshox Lyrik Ultimate (180mm)
						</span>
					</div>
					<div className="lg:flex items-center xl:grid xl:grid-cols-5 xl:col-span-5 xl:gap-8">
						<div className="flex flex-wrap gap-4 w-full justify-between lg:justify-start lg:gap-16 xl:grid xl:grid-cols-3 xl:col-span-3 xl:items-start xl:gap-8">
							<div className="flex items-center">
								<span className="text-md font-medium xl:hidden">
									Base:
								</span>
								<br />
								<span>£500.00</span>
							</div>
							<div className="flex items-center">
								<span className="text-md font-medium xl:hidden">
									Quantity:
								</span>
								<br />
								<span>1</span>
							</div>
							<div className="flex items-center">
								<span className="text-md font-medium xl:hidden">
									Retailer:
								</span>
								<Image
									src="/img/crc-logo.png"
									width="100%"
									height="20"
									objectFit="contain"
									alt="crc logo"
								/>
							</div>
						</div>
						<div className="flex justify-between items-center mt-2 lg:mt-0 lg:gap-8 xl:grid xl:grid-cols-2 xl:col-span-2">
							<div className="flex items-center">
								<span className="text-lg font-medium xl:hidden">
									Cost:
								</span>
								<br />
								<span className="text-xl font-bold text-primary leading-none">
									£500.00
								</span>
							</div>
							<div className="flex gap-4 items-center">
								<Button>Buy</Button>
								<Button colour="error" type="outlined" square>
									<FaRegTrashAlt size="1.25rem" />
								</Button>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className="flex justify-between items-center w-full py-4">
					<span className="text-2xl font-bold">{partType}</span>
					<Button type="secondary">Add Part</Button>
				</div>
			)}
		</section>
	);
};

export default PartDetails;
