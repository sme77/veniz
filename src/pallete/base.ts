import { flat } from '../colors';

const { wetAsphalt: base, amethyst: primary } = flat;

export default {
	transparent: 'transparent',
	current: 'currentColor',
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
	}
};
