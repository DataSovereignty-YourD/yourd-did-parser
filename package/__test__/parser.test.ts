import { Parser } from '../index'

describe('util test', () => {
    const parser = new Parser();
    it('did:yourd:klaytn:[method-specifier] test', async () => {
        const parsedDID = parser.parseDID('did:yourd:klaytn:baobab:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58');
        const parsedDIDURL = parser.parseDIDURL('did:yourd:klaytn:baobab:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58');
        console.log(parsedDID);
        console.log(parsedDIDURL);
        expect(parsedDID?.method).toEqual('yourd');
        expect(parsedDID?.methodSpecificId).toEqual('klaytn:baobab:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58');
        expect(parsedDIDURL?.method).toEqual('yourd');
        expect(parsedDIDURL?.methodSpecificId).toEqual('klaytn:baobab:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58');
        expect(parsedDIDURL?.pathAbempty).toEqual(null);
        expect(parsedDIDURL?.query).toEqual(null);
        expect(parsedDIDURL?.fragment).toEqual(null);
    })

    it('did:yourd:tezos:[method-specifier] test', async () => {
        const parsedDID = parser.parseDID('did:yourd:tezos:mainnet:tz1cYSgk4T76D87d5tDQnmXTDo6mCXJgKVQe');
        const parsedDIDURL = parser.parseDIDURL('did:yourd:tezos:mainnet:tz1cYSgk4T76D87d5tDQnmXTDo6mCXJgKVQe')
        console.log(parsedDID);
        console.log(parsedDIDURL);
        expect(parsedDID?.method).toEqual('yourd');
        expect(parsedDID?.methodSpecificId).toEqual('tezos:mainnet:tz1cYSgk4T76D87d5tDQnmXTDo6mCXJgKVQe');
        expect(parsedDIDURL?.method).toEqual('yourd');
        expect(parsedDIDURL?.methodSpecificId).toEqual('tezos:mainnet:tz1cYSgk4T76D87d5tDQnmXTDo6mCXJgKVQe');
        expect(parsedDIDURL?.pathAbempty).toEqual(null);
        expect(parsedDIDURL?.query).toEqual(null);
        expect(parsedDIDURL?.fragment).toEqual(null);
    })

    it('did:yourd:aleo:[method-specifier] test', async () => {
        const parsedDID = parser.parseDID('did:yourd:aleo:mainnet:candymachine.leo');
        const parsedDIDURL = parser.parseDIDURL('did:yourd:aleo:mainnet:candymachine.leo')
        console.log(parsedDID);
        console.log(parsedDIDURL);
        expect(parsedDID?.method).toEqual('yourd');
        expect(parsedDID?.methodSpecificId).toEqual('aleo:mainnet:candymachine.leo');
        expect(parsedDIDURL?.method).toEqual('yourd');
        expect(parsedDIDURL?.methodSpecificId).toEqual('aleo:mainnet:candymachine.leo');
        expect(parsedDIDURL?.pathAbempty).toEqual(null);
        expect(parsedDIDURL?.query).toEqual(null);
        expect(parsedDIDURL?.fragment).toEqual(null);
    })


    it('did URL with path, query and fragment', () => {
        const didUrl = 'did:example:123/path?query=value#fragment';
        const result = new Parser().parseDIDURL(didUrl);
        expect(result).toEqual({
            method: 'example',
            methodSpecificId: '123',
            pathAbempty: '/path',
            query: '?query=value',
            fragment: '#fragment'
        })
    });

    it('did URL with path', () => {
        const didUrl = 'did:example:123/path/subpath/aasdfad';
        const result = new Parser().parseDIDURL(didUrl);
        expect(result?.method).toEqual('example');
        expect(result?.methodSpecificId).toEqual('123');
        expect(result?.pathAbempty).toEqual('/path/subpath/aasdfad');
        expect(result?.query).toBeNull();
        expect(result?.fragment).toBeNull();
    });

    it('did URL with query', () => {
        const didUrl = 'did:yourd:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58?service=files&relativeRef=%2Fmyresume%2Fdoc%3Fversion%3Dlatest';
        const result = new Parser().parseDIDURL(didUrl);
        expect(result?.method).toEqual('yourd');
        expect(result?.methodSpecificId).toEqual('0xA738931B9Dd4019D282D9cf368644fEc52e9ec58');
        expect(result?.pathAbempty).toBeNull();
        expect(result?.query).toEqual('?service=files&relativeRef=%2Fmyresume%2Fdoc%3Fversion%3Dlatest');
        expect(result?.fragment).toBeNull();
    });

    it('did URL with fragment', () => {
        const didUrl = 'did:yourd:aaa:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58#aasef';
        const result = new Parser().parseDIDURL(didUrl);
        expect(result?.method).toEqual('yourd');
        expect(result?.methodSpecificId).toEqual('aaa:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58');
        expect(result?.pathAbempty).toBeNull();
        expect(result?.query).toBeNull();
        expect(result?.fragment).toEqual('#aasef');
    });

    it('did URL with path and query', () => {
        const didUrl = 'did:example:123:0xdfasfef/path/subpath?query=value&another=value';
        const result = new Parser().parseDIDURL(didUrl);
        expect(result?.method).toEqual('example');
        expect(result?.methodSpecificId).toEqual('123:0xdfasfef');
        expect(result?.pathAbempty).toEqual('/path/subpath');
        expect(result?.query).toEqual('?query=value&another=value');
        expect(result?.fragment).toBeNull();
    });

    it('did URL with path and fragment', () => {
        const didUrl = 'did:example:123:0xdfasfef/path/subpath#framgent';
        const result = new Parser().parseDIDURL(didUrl);
        expect(result?.method).toEqual('example');
        expect(result?.methodSpecificId).toEqual('123:0xdfasfef');
        expect(result?.pathAbempty).toEqual('/path/subpath');
        expect(result?.query).toBeNull();
        expect(result?.fragment).toEqual('#framgent');
    });

    it('did URL with query and fragment', () => {
        const didUrl = 'did:example:123??/query=value&another=value&absaefsaf=key&asdfdsa#fragment/with/slash';
        const result = new Parser().parseDIDURL(didUrl);
        console.log(result);
        expect(result?.method).toEqual('example');
        expect(result?.methodSpecificId).toEqual('123');
        expect(result?.pathAbempty).toBeNull;
        expect(result?.query).toEqual('??/query=value&another=value&absaefsaf=key&asdfdsa');
        expect(result?.fragment).toEqual('#fragment/with/slash');
    });

    it('did URL with path and query', () => {
        const didUrl = 'did:example:123:asdfadfsa:asdfasfe:ASDfasfd:ASDF??/query=value&another=value&absaefsaf=key&asdfdsa';
        const result = new Parser().parseDIDURL(didUrl);
        expect(result?.method).toEqual('example');
        expect(result?.methodSpecificId).toEqual('123:asdfadfsa:asdfasfe:ASDfasfd:ASDF');
        expect(result?.pathAbempty).toBeNull;
        expect(result?.query).toEqual('??/query=value&another=value&absaefsaf=key&asdfdsa');
        expect(result?.fragment).toBeNull;
    });

    it('did URL with path and query', () => {
        const didUrl = 'did:example:123:asdfadfsa:asdfasfe:ASDfasfd:ASDF/asdf.asdf/asdf/?service=files&relativeRef=%2Fmyresume%2Fdoc%3Fversion%3Dlatest';
        const result = new Parser().parseDIDURL(didUrl);
        expect(result?.method).toEqual('example');
        expect(result?.methodSpecificId).toEqual('123:asdfadfsa:asdfasfe:ASDfasfd:ASDF');
        expect(result?.pathAbempty).toEqual('/asdf.asdf/asdf/');
        expect(result?.query).toEqual('?service=files&relativeRef=%2Fmyresume%2Fdoc%3Fversion%3Dlatest');
        expect(result?.fragment).toBeNull;
    });
})