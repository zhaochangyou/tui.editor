'use strict';

var toMark = require('../src/toMark');

describe('toMark', function() {
    describe('Lists', function() {
        it('Unordered List can be converted', function() {
            var htmlStr = [
                '<ul>',
                    '<li>TEST</li>',
                '</ul>'
            ].join('');

            expect(toMark(htmlStr)).toEqual('* TEST\n');
        });

        it('Ordered List can be converted', function() {
            var htmlStr = [
                '<ol>',
                    '<li>TEST</li>',
                '</ol>'
            ].join('');

            expect(toMark(htmlStr)).toEqual('1. TEST\n');
        });

        it('Nested List can be converted', function() {
            var htmlStr = [
                '<ol>',
                    '<li>DEPTH1',
                        '<ul>',
                            '<li>DEPTH2-1</li>',
                            '<li>DEPTH2-2</li>',
                        '</ul>',
                    '</li>',
                '</ol>'
            ].join('');

            expect(toMark(htmlStr)).toEqual('1. DEPTH1\n    * DEPTH2-1\n    * DEPTH2-2\n');
        });

        it('Multiple Nesting', function() {
            var htmlStr = [
                '<ol>',
                    '<li>DEPTH1',
                        '<ul>',
                            '<li>DEPTH2',
                                '<ul>',
                                    '<li>DEPTH3',
                                        '<ul>',
                                            '<li>DEPTH4</li>',
                                        '</ul>',
                                     '</li>',
                                '</ul>',
                            '</li>',
                        '</ul>',
                    '</li>',
                '</ol>'
            ].join('');
            expect(toMark(htmlStr)).toEqual('1. DEPTH1\n    * DEPTH2\n        * DEPTH3\n            * DEPTH4\n');
        });
    });
});
