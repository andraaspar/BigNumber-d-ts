declare module BigNumber {
	export interface ISettings {
		DECIMAL_PLACES?: number;
		ROUNDING_MODE?: number;
		EXPONENTIAL_AT?: any;
		RANGE?: any;
		ERRORS?: any;
	}
}

declare class BigNumber {
	constructor(value: BigNumber, base?: number);
	constructor(value: string, base?: number);
	constructor(value: number, base?: number);
	
	static config(settings?: BigNumber.ISettings): BigNumber.ISettings;
	
	static ROUND_UP: number;
	static ROUND_DOWN: number;
	static ROUND_CEIL: number;
	static ROUND_FLOOR: number;
	static ROUND_HALF_UP: number;
	static ROUND_HALF_DOWN: number;
	static ROUND_HALF_EVEN: number;
	static ROUND_HALF_CEIL: number;
	static ROUND_HALF_FLOOR: number;
	
	absoluteValue(): BigNumber;
	abs(): BigNumber;
	
	ceil(): BigNumber;
	
	decimalPlaces(): number;
	dp(): number;
	
	floor(): BigNumber;
	
	negated(): BigNumber;
	neg(): BigNumber;
	
	squareRoot(): BigNumber;
	sqrt(): BigNumber;
	
	isFinite(): boolean;
	isF(): boolean;
	
	isNaN(): boolean;
	
	isNegative(): boolean;
	isNeg(): boolean;
	
	isZero(): boolean;
	isZ(): boolean;
	
	comparedTo(n: number, base?: number): number;
	comparedTo(n: string, base?: number): number;
	comparedTo(n: BigNumber, base?: number): number;
	cmp(n: number, base?: number): number;
	cmp(n: string, base?: number): number;
	cmp(n: BigNumber, base?: number): number;
	
	dividedBy(n: number, base?: number): BigNumber;
	dividedBy(n: string, base?: number): BigNumber;
	dividedBy(n: BigNumber, base?: number): BigNumber;
	div(n: number, base?: number): BigNumber;
	div(n: string, base?: number): BigNumber;
	div(n: BigNumber, base?: number): BigNumber;
	
	minus(n: number, base?: number): BigNumber;
	minus(n: string, base?: number): BigNumber;
	minus(n: BigNumber, base?: number): BigNumber;
	
	modulo(n: number, base?: number): BigNumber;
	modulo(n: string, base?: number): BigNumber;
	modulo(n: BigNumber, base?: number): BigNumber;
	mod(n: number, base?: number): BigNumber;
	mod(n: string, base?: number): BigNumber;
	mod(n: BigNumber, base?: number): BigNumber;
	
	plus(n: number, base?: number): BigNumber;
	plus(n: string, base?: number): BigNumber;
	plus(n: BigNumber, base?: number): BigNumber;
	
	times(n: number, base?: number): BigNumber;
	times(n: string, base?: number): BigNumber;
	times(n: BigNumber, base?: number): BigNumber;
	
	toPower(exp: number): BigNumber;
	pow(exp: number): BigNumber;
	
	equals(n: number, base?: number): boolean;
	equals(n: string, base?: number): boolean;
	equals(n: BigNumber, base?: number): boolean;
	eq(n: number, base?: number): boolean;
	eq(n: string, base?: number): boolean;
	eq(n: BigNumber, base?: number): boolean;
	
	greaterThan(n: number, base?: number): boolean;
	greaterThan(n: string, base?: number): boolean;
	greaterThan(n: BigNumber, base?: number): boolean;
	gt(n: number, base?: number): boolean;
	gt(n: string, base?: number): boolean;
	gt(n: BigNumber, base?: number): boolean;
	
	greaterThanOrEqualTo(n: number, base?: number): boolean;
	greaterThanOrEqualTo(n: string, base?: number): boolean;
	greaterThanOrEqualTo(n: BigNumber, base?: number): boolean;
	gte(n: number, base?: number): boolean;
	gte(n: string, base?: number): boolean;
	gte(n: BigNumber, base?: number): boolean;
	
	lessThan(n: number, base?: number): boolean;
	lessThan(n: string, base?: number): boolean;
	lessThan(n: BigNumber, base?: number): boolean;
	lt(n: number, base?: number): boolean;
	lt(n: string, base?: number): boolean;
	lt(n: BigNumber, base?: number): boolean;
	
	lessThanOrEqualTo(n: number, base?: number): boolean;
	lessThanOrEqualTo(n: string, base?: number): boolean;
	lessThanOrEqualTo(n: BigNumber, base?: number): boolean;
	lte(n: number, base?: number): boolean;
	lte(n: string, base?: number): boolean;
	lte(n: BigNumber, base?: number): boolean;
	
	toExponential(decimal_places?: number): string;
	toE(decimal_places?: number): string;
	
	toFixed(decimal_places?: number): string;
	toF(decimal_places?: number): string;
	
	toNumber(): number;
	toN(): number;
	
	toPrecision(significant_figures?: number): string;
	toP(significant_figures?: number): string;
	
	toString(base?: number): string;
	toS(base?: number): string;
	
	valueOf(): string;
	
	toFraction(max_denominator?: number): string[];
	toFraction(max_denominator?: string): string[];
	toFraction(max_denominator?: BigNumber): string[];
	toFr(max_denominator?: number): string[];
	toFr(max_denominator?: string): string[];
	toFr(max_denominator?: BigNumber): string[];
	
	round(decimal_places?: number, rounding_mode?: number): BigNumber;
	
	c: number[];
	e: number;
	s: number;
}