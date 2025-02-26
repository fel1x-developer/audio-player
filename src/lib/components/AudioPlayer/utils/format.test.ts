import { describe, expect, test } from 'vitest';
import format from './format.js';

describe('format', () => {
	test('seconds', () => {
		expect(format(45)).toEqual('00:45');
	});

	test('minute and seconds', () => {
		expect(format(100)).toEqual('01:40');
	});

	test('input is NaN', () => {
		expect(format(NaN)).toEqual('...');
	});
});
