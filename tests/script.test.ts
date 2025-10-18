import { calculate } from "../src/script";

describe('四則演算', () => {
  test('第二引数以降が、数字以外だとエラー', () => {
    expect(() => calculate('add', [1, NaN])).toThrow();
  });

  test('引数が31個以上だとエラー', () => {
    const nums = Array(31).fill(1);
    expect(() => calculate('add', nums)).toThrow();
  });

  test('第一引数にaddを指定したとき、足し算が実施される', () => {
    expect(calculate('add', [300, 696, 4])).toBe(1000);
  });

  test('第一引数にsubtractを指定したとき、引き算が実施される', () => {
    expect(calculate('subtract', [10, 3, 2])).toBe(5); 
  });

  test('第一引数にmultiplyを指定したとき、掛け算が実施される', () => {
    expect(calculate('multiply', [50,20,1])).toBe(1000);
  });

  test('第一引数にdivideを指定したとき、割り算が実施される', () => {
    expect(calculate('divide', [100, 10])).toBe(10);
  });

  test('足し算の結果が1000を超える場合、too bigを返却する', () => {
    expect(calculate('add', [500, 501])).toBe('too big');
  });

  test('掛け算の結果が1000を超える場合、big big numberを返却する', () => {
    expect(calculate('multiply', [334, 3])).toBe('big big number');
  });

  test('引き算の結果がマイナスの場合は "negative number" が返る', () => {
    expect(calculate('subtract', [3, 10, 3])).toBe('negative number'); // 3 - 10 - 3 = -10
  });
});
