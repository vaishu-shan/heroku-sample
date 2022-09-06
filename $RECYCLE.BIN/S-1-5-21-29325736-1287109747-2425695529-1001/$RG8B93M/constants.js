export const capType = {
	"LC": "Low Cap",
	"MC": "Medium Cap",
	"HC": "High Cap"
};

export const NetworkStatus = {
	success: 200,
	expired: 401
};

export const carouselResponsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};
