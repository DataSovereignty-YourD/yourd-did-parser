const method_char = `[a-z0-9]`;
const method_name = `(${method_char}+)`;
const pct_encoded = '%[0-9A-Fa-f]{2}';
const idchar = `(?:[a-zA-Z0-9._-]|${pct_encoded})`;
const method_specific_id = `((?:${idchar}*:)*(${idchar}+))`;
export const didValidator = new RegExp(`^did:${method_name}:${method_specific_id}`);
const unreserved = '[A-Za-z0-9-._~]';
const pctEncoded = '%[0-9A-Fa-f]{2}';
const subDelims = '[!$&\'()*+,;=]';
const pchar = `${unreserved}|${pctEncoded}|${subDelims}|:|@`;
const segment = `(?:${pchar})*`;
const pathAbempty = `((?:/${segment})*)?`;
const query = `((?:${pchar}|/|\\?)*)?`;
const fragment = `(#(?:${pchar}|/|\\?)*)?`;

export const didurlValidator = new RegExp(`^did:${method_name}:${method_specific_id}${pathAbempty}${query}${fragment}`);

export interface ParsedDID {
    method: string
    methodSpecificId: string
};

export interface ParsedDIDURL extends ParsedDID {
    pathAbempty: string | null
    query: string | null
    fragment: string | null
}

export class Parser {

    parseDID(did: string): ParsedDID | null {
        const match = did.match(didValidator);
        // console.log(match);
        if (!match) {
            return null;
        }

        if (!match[0] || !match[1] || !match[2]) {
            return null;
        }

        return {
            method: match[1],
            methodSpecificId: match[2],
        };
    }
    /** 
     * test case of DIDURL
       'did:example:123',
       'did:example:123/path',
       'did:example:123/path/subpath',
       'did:example:123?query=value',
       'did:example:123#fragment',
       'did:example:123/path?query=value',
       'did:example:123/path/subpath?query=value&another=value#fragment',
       'did:example:123/path/subpath??/query=value&another=value#fragment',
       'did:klaytn:baobab:0xA738931B9Dd4019D282D9cf368644fEc52e9ec58?service=files&relativeRef=%2Fmyresume%2Fdoc%3Fversion%3Dlatest'
       */
    /**
     * 
     * @param didUrl 
     * @returns ParsedDIDURL
     */
    parseDIDURL(didUrl: string): ParsedDIDURL | null {
        const match = didUrl.match(`^did:${method_name}:${method_specific_id}${pathAbempty}${query}${fragment}`);
        // console.log(match);
        if (!match) {
            return null;
        }

        if (!match[0] || !match[1] || !match[2]) {
            return null;
        }

        return {
            method: match[1],
            methodSpecificId: match[2],
            pathAbempty: match[4] ? match[4] : null,
            query: match[5] ? match[5] : null,
            fragment: match[6] ? match[6] : null
        };
    }
}
