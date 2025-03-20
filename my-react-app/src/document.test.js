import { describe, test, expect } from 'vitest';

describe('jsdom verification', () => {
  test('document should be defined', () => {
    expect(typeof document).not.toBe('undefined');
  });
});
