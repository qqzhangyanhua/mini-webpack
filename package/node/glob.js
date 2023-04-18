const {
    glob,
    globSync,
    globStream,
    globStreamSync,
    Glob,
  } = require('glob');
async function getJsFiles(){
    const jsfiles = await glob('**/*.js', { ignore: 'node_modules/**' })
    console.log(jsfiles);
}
getJsFiles()