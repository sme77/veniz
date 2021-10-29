import { defineConfig } from 'windicss/helpers';

// const ENV = process.env.ENV;

// const createSafeList = () => {
// 	const colors = ['basic', 'primary', 'success', 'warning', 'danger', 'info'];
// 	const modes = ['fill', 'bg', 'text', 'border'];
// 	const variants = ['norm', 'ligt', 'darc', 'inv', 'out'];
// 	const types = ['supp', 'main'];

// 	let str = '';

// 	modes.forEach((mode) => {
// 		colors.forEach((color) => {
// 			variants.forEach((variant) => {
// 				types.forEach((t) => {
// 					str += mode + '-' + color + '-' + variant + '-' + t + ' ';
// 				});
// 			});
// 		});
// 	});

// 	console.log({ str });

// 	return str;
// };

export default defineConfig({
	darcMode: 'class'
});
