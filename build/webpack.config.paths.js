const path = require('path');
const rootPath = path.join(__dirname, '..');
const srcDir = path.resolve(rootPath, 'src');

module.exports = {
	bundle: path.join(srcDir, 'index.tsx'),
	srcDir: srcDir,
	nodeModulesDir: path.join(rootPath, 'node_modules'),
	outputDir: path.resolve(rootPath, 'dist')
};
