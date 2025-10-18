// calc.ts
export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export function calculate(operation: Operation, numbers: number[]): number | string {
  // 引数の個数チェック
  if (numbers.length < 1 || numbers.length > 30) {
    throw new Error('Number of arguments must be between 1 and 30');
  }

  // 数字チェック
  if (!numbers.every(n => typeof n === 'number' && !isNaN(n))) {
    throw new Error('All arguments must be numbers');
  }

  let result: number;

  switch (operation) {
    case 'add':
      result = numbers.reduce((a, b) => a + b, 0);
      if (result > 1000) return 'too big';
      return result;

    case 'subtract':
      result = numbers.reduce((a, b) => a - b);
      if (result < 0) return 'negative number';
      return result;

    case 'multiply':
      result = numbers.reduce((a, b) => a * b, 1);
      if (result > 1000) return 'big big number';
      return result;

    case 'divide':
      result = numbers.reduce((a, b) => a / b);
      return result;

    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

// コマンドライン用ラッパー
if (require.main === module) {
  const [operation, ...args] = process.argv.slice(2);
  const numbers = args.map(Number);
  try {
    const result = calculate(operation as Operation, numbers);
    console.log(result);
  } catch (err: any) {
    console.error(err.message);
  }
}
