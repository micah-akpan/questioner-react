import appUtil from '..';

describe('AppUtil tests', () => {
  test('should add classes', () => {
    expect(appUtil.addClasses(['my-class', 'new-class'])).toEqual('my-class new-class');
  });

  test('should add classes', () => {
    expect(appUtil.addClasses(['blue-bg', 'red-fg'])).toEqual('blue-bg red-fg');
  });
});
