var expect = require('chai').expect;

const titleCase = (title) => {
  const words = title.split(' ');
  const result = words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  return result;
};
expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');

expect(titleCase('the great mouse detective')).to.equal(
  'The Great Mouse Detective'
);
