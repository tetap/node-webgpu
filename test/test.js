import Mocha from 'mocha';

const mocha = new Mocha({
});

mocha.addFile('./test/tests/basic-tests.js');

await mocha.loadFilesAsync();
mocha.run(failures => {
  process.exit(failures);
});
