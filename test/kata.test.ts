import { kata } from '../src/kata';

describe('TemplateTest', () => {
    it('should return hello world', () => {
        expect(kata()).toEqual('hello world');
    })
})