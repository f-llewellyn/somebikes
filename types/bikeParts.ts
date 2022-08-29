export interface frameType {
	name: string;
	imagePath?: string;
	modelYear?: string;
	size?: string;
	details: {
		hardtail?: boolean;
		mullet?: boolean;
		material?: boolean;
		breakMountType?: string;
		wheelSize?: {
			front: number;
			rear: number;
		};
		minTravel?: {
			front: number;
			rear: number;
		};
		maxTravel?: {
			front: number;
			rear: number;
		};
		shockSize?: string;
		shockMount?: string;
		minRotor?: number;
		maxRotor?: number;
		axle?: string;
		weight?: number;
		steererDiameter?: number;
		steererType?: string;
		bottomBracket?: string;
		cableRouting?: string;
		frontMechMount?: false;
		bottleCageMount?: false;
		maxTyreWidth?: number;
		seatPostDiameter?: number;
	};
	gemoetry: {
		reach?: number;
		seatTube?: number;
		headTube?: number;
		stack?: number;
		wheelBase?: number;
		headAngle?: number;
		seatAngle?: number;
		chainstay?: number;
		bottomBracketDrop?: number;
		forkLength?: number;
		forkOffset?: number;
	};
}

export interface forkType {
	name: string;
	imagePath?: string;
	modelYear?: string;
	details: {
		wheelSize?: number;
		travel?: number;
		steererDiameter?: number;
		steererType?: string;
		spring?: string;
		damper?: string;
		offset?: number;
		minRotor?: number;
		maxRotor?: number;
		axle?: string;
		stantionWidth?: number;
		ebikeApproved?: boolean;
		weight?: number;
	};
}

export interface wheelType {
	name: string;
	imagePath?: string;
	modelYear?: string;
	details: {
		wheelSize?: number;
		material?: string;
		rimWidth?: {
			inner: number;
			outer: number;
		};
		wheelPosition?: number;
		axleSystem?: string;
		builtInDimennsion?: string;
		brakeInterface?: string;
		cassetteInterface?: string;
		hub?: string;
		valveHole?: string;
		tyreInterface?: string;
		spokes?: string;
		spokePatter?: string;
		nipples?: string;
	};
}
