const TableHeader = () => {
	return (
		<div className="xl:grid grid-cols-10 gap-8 px-4 mb-2 hidden">
			<span className="font-medium">Part Type:</span>
			<span className="col-span-4 font-medium">Selection:</span>
			<span className="font-medium">Base:</span>
			<span className="font-medium">Quantity:</span>
			<span className="font-medium">Retailer:</span>
			<span className="font-medium">Cost:</span>
		</div>
	);
};

export default TableHeader;
