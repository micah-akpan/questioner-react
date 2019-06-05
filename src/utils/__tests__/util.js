import appUtil, { genHash } from '..';

describe('AppUtil tests', () => {
  test('should add classes', () => {
    expect(appUtil.addClasses(['my-class', 'new-class'])).toEqual('my-class new-class');
  });

  test('should add classes', () => {
    expect(appUtil.addClasses(['blue-bg', 'red-fg'])).toEqual('blue-bg red-fg');
  });

  test('should generate a random hash', () => {
    expect(genHash().length).toEqual(7);
  });
});
