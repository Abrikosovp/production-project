// import { classNames } from './classNames';

import { classNames } from 'shared/lib/classNames/classNames';

describe('', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with two additional', () => {
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        )).toBe('someClass class1 class2');
    });
    test('with mode two true', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with mode two false', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(classNames(
            'someClass',
            { hovered: false, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with mode two undefined', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(classNames(
            'someClass',
            { hovered: undefined, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
