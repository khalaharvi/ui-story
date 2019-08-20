import createClassNames from './createClassNames';

describe('createClassNames', () => {
  it('expect to return classNames', () => {
    const cx = createClassNames('Widget');

    const actual = cx('', null, undefined, false, 'one', 'two').split(' ');
    const expectation = ['dh-Widget', 'dh-Widget-one', 'dh-Widget-two'];

    expect(actual).toEqual(expectation);
  });

  it('expect to return classNames with custom prefix', () => {
    const cx = createClassNames('Widget', 'dh-custom');

    const actual = cx('', null, undefined, false, 'one', 'two').split(' ');
    const expectation = ['dh-custom-Widget', 'dh-custom-Widget-one', 'dh-custom-Widget-two'];

    expect(actual).toEqual(expectation);
  });
});
