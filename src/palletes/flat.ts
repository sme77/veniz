import colors from '../colors';

const {
	wetAsphalt: base,
	amethyst: primary,
	nephritis: success,
	sunflower: warning,
	alizarin: danger,
	peterRiver: info
} = colors.flat;

export default {
	base: {
		basic: {
			dark: base['500'],
			light: base['100'],
			lighter: base['50']
		},
		light: {
			light: base['300'],
			dark: base['500']
		},
		outlined: {
			dark: base['500'],
			light: 'transparent'
		},
		inverted: {
			dark: base['500'],
			light: 'transparent'
		},
		dark: {
			dark: base['900'],
			light: base['400']
		}
	},
	primary: {
		basic: {
			dark: primary['500'],
			light: primary['100'],
			lighter: primary['50']
		},
		light: {
			dark: primary['500'],
			light: primary['500']
		},
		outlined: {
			dark: primary['500'],
			light: 'transparent'
		},
		inverted: {
			dark: primary['500'],
			light: 'transparent'
		},
		dark: {
			dark: base['900'],
			light: primary['400']
		}
	},
	success: {
		basic: {
			dark: success['500'],
			light: success['100'],
			lighter: success['50']
		},
		light: {
			dark: success['500'],
			light: success['500']
		},
		outlined: {
			dark: success['500'],
			light: 'transparent'
		},
		inverted: {
			dark: success['500'],
			light: 'transparent'
		},
		dark: {
			dark: base['900'],
			light: success['400']
		}
	},
	warning: {
		basic: {
			dark: warning['500'],
			light: warning['100'],
			lighter: warning['50']
		},
		light: {
			dark: warning['500'],
			light: warning['500']
		},
		outlined: {
			dark: warning['500'],
			light: 'transparent'
		},
		inverted: {
			dark: warning['500'],
			light: 'transparent'
		},
		dark: {
			dark: base['900'],
			light: warning['400']
		}
	},
	danger: {
		basic: {
			dark: danger['500'],
			light: danger['100'],
			lighter: danger['50']
		},
		light: {
			dark: danger['500'],
			light: danger['500']
		},
		outlined: {
			dark: danger['500'],
			light: 'transparent'
		},
		inverted: {
			dark: danger['500'],
			light: 'transparent'
		},
		dark: {
			dark: base['900'],
			light: danger['400']
		}
	},
	info: {
		basic: {
			dark: info['500'],
			light: info['100'],
			lighter: info['50']
		},
		light: {
			dark: info['500'],
			light: info['500']
		},
		outlined: {
			dark: info['500'],
			light: 'transparent'
		},
		inverted: {
			dark: info['500'],
			light: 'transparent'
		},
		dark: {
			dark: base['900'],
			light: info['400']
		}
	}
};
