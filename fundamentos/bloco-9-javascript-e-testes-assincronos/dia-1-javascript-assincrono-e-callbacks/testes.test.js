const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Testando uppercase - lalanametala para LALANAMETALA', (done) => {
  uppercase('lalanametala', (str) => {
    try {
      expect(str).toBe('LALANAMETALA');
      done();
    } catch (error) {
      done(error);
    }
  });
});