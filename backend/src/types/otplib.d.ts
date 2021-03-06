/** Declaration file generated by dts-gen */

export class Authenticator {
    constructor();

    Authenticator(): any;

    check(token$$1: any, secret: any): any;

    decode(...args: any[]): any;

    encode(...args: any[]): any;

    generate(secret: any): any;

    generateSecret(...args: any[]): any;

    keyuri(...args: any[]): any;

}

export class HOTP {
    constructor();

    HOTP(): void;

    check(token: any, secret: any, counter: any): any;

    generate(secret: any, counter: any): any;

    resetOptions(): any;

    verify(opts: any): any;

}

export class TOTP {
    constructor();

    TOTP(): any;

    check(token: any, secret: any): any;

    generate(secret: any): any;

    verify(opts: any): any;

}

export namespace Authenticator {
    namespace prototype {
        class HOTP {
            constructor();

            HOTP(): void;

            check(token: any, secret: any, counter: any): any;

            generate(secret: any, counter: any): any;

            resetOptions(): any;

            verify(opts: any): any;

        }

        class TOTP {
            constructor();

            TOTP(): any;

            check(token: any, secret: any): any;

            generate(secret: any): any;

            verify(opts: any): any;

        }

        // Circular reference from otplib.Authenticator.prototype
        const Authenticator: any;

        const defaultOptions: {
            encoding: string;
            epoch: any;
            step: number;
        };

        const options: {
        };

        function check(token$$1: any, secret: any): any;

        function decode(...args: any[]): any;

        function encode(...args: any[]): any;

        function generate(secret: any): any;

        function generateSecret(...args: any[]): any;

        function keyuri(...args: any[]): any;

        function resetOptions(): any;

        function verify(opts: any): any;

        namespace HOTP {
            namespace prototype {
                // Circular reference from otplib.Authenticator.prototype.HOTP.prototype
                const HOTP: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.HOTP.prototype
                const check: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.HOTP.prototype
                const defaultOptions: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.HOTP.prototype
                const generate: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.HOTP.prototype
                const options: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.HOTP.prototype
                const resetOptions: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.HOTP.prototype
                const verify: any;

            }

        }

        namespace TOTP {
            namespace prototype {
                // Too-deep object hierarchy from otplib.Authenticator.prototype.TOTP.prototype
                const HOTP: any;

                // Circular reference from otplib.Authenticator.prototype.TOTP.prototype
                const TOTP: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.TOTP.prototype
                const check: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.TOTP.prototype
                const defaultOptions: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.TOTP.prototype
                const generate: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.TOTP.prototype
                const options: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.TOTP.prototype
                const resetOptions: any;

                // Too-deep object hierarchy from otplib.Authenticator.prototype.TOTP.prototype
                const verify: any;

            }

        }

        namespace check {
            const prototype: {
            };

        }

        namespace decode {
            const prototype: {
            };

        }

        namespace encode {
            const prototype: {
            };

        }

        namespace generate {
            const prototype: {
            };

        }

        namespace generateSecret {
            const prototype: {
            };

        }

        namespace keyuri {
            const prototype: {
            };

        }

        namespace resetOptions {
            const prototype: {
            };

        }

        namespace utils {
            function check(token: any, secret: any, options: any): any;

            function decodeKey(encodedKey: any): any;

            function encodeKey(secret: any): any;

            function keyuri(...args: any[]): any;

            function token(secret: any, options: any): any;

            namespace check {
                // Too-deep object hierarchy from otplib.Authenticator.prototype.utils.check
                const prototype: any;

            }

            namespace decodeKey {
                // Too-deep object hierarchy from otplib.Authenticator.prototype.utils.decodeKey
                const prototype: any;

            }

            namespace encodeKey {
                // Too-deep object hierarchy from otplib.Authenticator.prototype.utils.encodeKey
                const prototype: any;

            }

            namespace keyuri {
                // Too-deep object hierarchy from otplib.Authenticator.prototype.utils.keyuri
                const prototype: any;

            }

            namespace token {
                // Too-deep object hierarchy from otplib.Authenticator.prototype.utils.token
                const prototype: any;

            }

        }

        namespace verify {
            const prototype: {
            };

        }

    }

}

export namespace HOTP {
    namespace prototype {
        // Circular reference from otplib.HOTP.prototype
        const HOTP: any;

        const defaultOptions: {
        };

        const options: {
        };

        function check(token: any, secret: any, counter: any): any;

        function generate(secret: any, counter: any): any;

        function resetOptions(): any;

        function verify(opts: any): any;

        namespace check {
            const prototype: {
            };

        }

        namespace generate {
            const prototype: {
            };

        }

        namespace resetOptions {
            const prototype: {
            };

        }

        namespace verify {
            const prototype: {
            };

        }

    }

}

export namespace TOTP {
    namespace prototype {
        class HOTP {
            constructor();

            HOTP(): void;

            check(token: any, secret: any, counter: any): any;

            generate(secret: any, counter: any): any;

            resetOptions(): any;

            verify(opts: any): any;

        }

        // Circular reference from otplib.TOTP.prototype
        const TOTP: any;

        const defaultOptions: {
            epoch: any;
            step: number;
        };

        const options: {
        };

        function check(token: any, secret: any): any;

        function generate(secret: any): any;

        function resetOptions(): any;

        function verify(opts: any): any;

        namespace HOTP {
            namespace prototype {
                // Circular reference from otplib.TOTP.prototype.HOTP.prototype
                const HOTP: any;

                // Too-deep object hierarchy from otplib.TOTP.prototype.HOTP.prototype
                const check: any;

                // Too-deep object hierarchy from otplib.TOTP.prototype.HOTP.prototype
                const defaultOptions: any;

                // Too-deep object hierarchy from otplib.TOTP.prototype.HOTP.prototype
                const generate: any;

                // Too-deep object hierarchy from otplib.TOTP.prototype.HOTP.prototype
                const options: any;

                // Too-deep object hierarchy from otplib.TOTP.prototype.HOTP.prototype
                const resetOptions: any;

                // Too-deep object hierarchy from otplib.TOTP.prototype.HOTP.prototype
                const verify: any;

            }

        }

        namespace check {
            const prototype: {
            };

        }

        namespace generate {
            const prototype: {
            };

        }

        namespace resetOptions {
            const prototype: {
            };

        }

        namespace verify {
            const prototype: {
            };

        }

    }

}

export namespace authenticator {
    class Authenticator {
        constructor();

        Authenticator(): any;

        check(token$$1: any, secret: any): any;

        decode(...args: any[]): any;

        encode(...args: any[]): any;

        generate(secret: any): any;

        generateSecret(...args: any[]): any;

        keyuri(...args: any[]): any;

    }

    class HOTP {
        constructor();

        HOTP(): void;

        check(token: any, secret: any, counter: any): any;

        generate(secret: any, counter: any): any;

        resetOptions(): any;

        verify(opts: any): any;

    }

    class TOTP {
        constructor();

        TOTP(): any;

        check(token: any, secret: any): any;

        generate(secret: any): any;

        verify(opts: any): any;

    }

    const defaultOptions: {
        encoding: string;
        epoch: any;
        step: number;
    };

    const options: {
        crypto: {
            Certificate: any;
            Cipher: any;
            Cipheriv: any;
            Credentials: any;
            DEFAULT_ENCODING: string;
            Decipher: any;
            Decipheriv: any;
            DiffieHellman: any;
            DiffieHellmanGroup: any;
            Hash: any;
            Hmac: any;
            Sign: any;
            Verify: any;
            constants: {
                ALPN_ENABLED: number;
                DH_CHECK_P_NOT_PRIME: number;
                DH_CHECK_P_NOT_SAFE_PRIME: number;
                DH_NOT_SUITABLE_GENERATOR: number;
                DH_UNABLE_TO_CHECK_GENERATOR: number;
                ENGINE_METHOD_ALL: number;
                ENGINE_METHOD_CIPHERS: number;
                ENGINE_METHOD_DH: number;
                ENGINE_METHOD_DIGESTS: number;
                ENGINE_METHOD_DSA: number;
                ENGINE_METHOD_ECDH: number;
                ENGINE_METHOD_ECDSA: number;
                ENGINE_METHOD_NONE: number;
                ENGINE_METHOD_PKEY_ASN1_METHS: number;
                ENGINE_METHOD_PKEY_METHS: number;
                ENGINE_METHOD_RAND: number;
                ENGINE_METHOD_RSA: number;
                ENGINE_METHOD_STORE: number;
                NPN_ENABLED: number;
                POINT_CONVERSION_COMPRESSED: number;
                POINT_CONVERSION_HYBRID: number;
                POINT_CONVERSION_UNCOMPRESSED: number;
                RSA_NO_PADDING: number;
                RSA_PKCS1_OAEP_PADDING: number;
                RSA_PKCS1_PADDING: number;
                RSA_PKCS1_PSS_PADDING: number;
                RSA_PSS_SALTLEN_AUTO: number;
                RSA_PSS_SALTLEN_DIGEST: number;
                RSA_PSS_SALTLEN_MAX_SIGN: number;
                RSA_SSLV23_PADDING: number;
                RSA_X931_PADDING: number;
                SSL_OP_ALL: number;
                SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
                SSL_OP_CIPHER_SERVER_PREFERENCE: number;
                SSL_OP_CISCO_ANYCONNECT: number;
                SSL_OP_COOKIE_EXCHANGE: number;
                SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
                SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
                SSL_OP_EPHEMERAL_RSA: number;
                SSL_OP_LEGACY_SERVER_CONNECT: number;
                SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
                SSL_OP_MICROSOFT_SESS_ID_BUG: number;
                SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
                SSL_OP_NETSCAPE_CA_DN_BUG: number;
                SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
                SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
                SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
                SSL_OP_NO_COMPRESSION: number;
                SSL_OP_NO_QUERY_MTU: number;
                SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
                SSL_OP_NO_SSLv2: number;
                SSL_OP_NO_SSLv3: number;
                SSL_OP_NO_TICKET: number;
                SSL_OP_NO_TLSv1: number;
                SSL_OP_NO_TLSv1_1: number;
                SSL_OP_NO_TLSv1_2: number;
                SSL_OP_PKCS1_CHECK_1: number;
                SSL_OP_PKCS1_CHECK_2: number;
                SSL_OP_SINGLE_DH_USE: number;
                SSL_OP_SINGLE_ECDH_USE: number;
                SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
                SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
                SSL_OP_TLS_BLOCK_PADDING_BUG: number;
                SSL_OP_TLS_D5_BUG: number;
                SSL_OP_TLS_ROLLBACK_BUG: number;
                defaultCipherList: string;
                defaultCoreCipherList: string;
            };
            createCipher: any;
            createCipheriv: any;
            createCredentials: any;
            createDecipher: any;
            createDecipheriv: any;
            createDiffieHellman: any;
            createDiffieHellmanGroup: any;
            createECDH: any;
            createHash: any;
            createHmac: any;
            createSign: any;
            createVerify: any;
            fips: number;
            getCiphers: any;
            getCurves: any;
            getDiffieHellman: any;
            getHashes: any;
            pbkdf2: any;
            pbkdf2Sync: any;
            privateDecrypt: any;
            privateEncrypt: any;
            prng: any;
            pseudoRandomBytes: any;
            publicDecrypt: any;
            publicEncrypt: any;
            randomBytes: any;
            randomFill: any;
            randomFillSync: any;
            rng: any;
            setEngine: any;
            timingSafeEqual: any;
        };
        encoding: string;
        epoch: any;
        step: number;
    };

    function check(token$$1: any, secret: any): any;

    function decode(...args: any[]): any;

    function encode(...args: any[]): any;

    function generate(secret: any): any;

    function generateSecret(...args: any[]): any;

    function keyuri(...args: any[]): any;

    function resetOptions(): any;

    function verify(opts: any): any;

    namespace Authenticator {
        namespace prototype {
            class HOTP {
                constructor();

                HOTP(): void;

                check(token: any, secret: any, counter: any): any;

                generate(secret: any, counter: any): any;

                resetOptions(): any;

                verify(opts: any): any;

                static prototype: any;

            }

            class TOTP {
                constructor();

                TOTP(): any;

                check(token: any, secret: any): any;

                generate(secret: any): any;

                verify(opts: any): any;

                static prototype: any;

            }

            // Circular reference from otplib.authenticator.Authenticator.prototype
            const Authenticator: any;

            const defaultOptions: {
                encoding: string;
                epoch: any;
                step: number;
            };

            const options: {
            };

            function check(token$$1: any, secret: any): any;

            function decode(...args: any[]): any;

            function encode(...args: any[]): any;

            function generate(secret: any): any;

            function generateSecret(...args: any[]): any;

            function keyuri(...args: any[]): any;

            function resetOptions(): any;

            function verify(opts: any): any;

            namespace check {
                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.check
                const prototype: any;

            }

            namespace decode {
                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.decode
                const prototype: any;

            }

            namespace encode {
                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.encode
                const prototype: any;

            }

            namespace generate {
                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.generate
                const prototype: any;

            }

            namespace generateSecret {
                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.generateSecret
                const prototype: any;

            }

            namespace keyuri {
                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.keyuri
                const prototype: any;

            }

            namespace resetOptions {
                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.resetOptions
                const prototype: any;

            }

            namespace utils {
                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.utils
                const check: any;

                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.utils
                const decodeKey: any;

                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.utils
                const encodeKey: any;

                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.utils
                const keyuri: any;

                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.utils
                const token: any;

            }

            namespace verify {
                // Too-deep object hierarchy from otplib.authenticator.Authenticator.prototype.verify
                const prototype: any;

            }

        }

    }

    namespace HOTP {
        namespace prototype {
            // Circular reference from otplib.authenticator.HOTP.prototype
            const HOTP: any;

            const defaultOptions: {
            };

            const options: {
            };

            function check(token: any, secret: any, counter: any): any;

            function generate(secret: any, counter: any): any;

            function resetOptions(): any;

            function verify(opts: any): any;

            namespace check {
                // Too-deep object hierarchy from otplib.authenticator.HOTP.prototype.check
                const prototype: any;

            }

            namespace generate {
                // Too-deep object hierarchy from otplib.authenticator.HOTP.prototype.generate
                const prototype: any;

            }

            namespace resetOptions {
                // Too-deep object hierarchy from otplib.authenticator.HOTP.prototype.resetOptions
                const prototype: any;

            }

            namespace verify {
                // Too-deep object hierarchy from otplib.authenticator.HOTP.prototype.verify
                const prototype: any;

            }

        }

    }

    namespace TOTP {
        namespace prototype {
            class HOTP {
                constructor();

                HOTP(): void;

                check(token: any, secret: any, counter: any): any;

                generate(secret: any, counter: any): any;

                resetOptions(): any;

                verify(opts: any): any;

                static prototype: any;

            }

            // Circular reference from otplib.authenticator.TOTP.prototype
            const TOTP: any;

            const defaultOptions: {
                epoch: any;
                step: number;
            };

            const options: {
            };

            function check(token: any, secret: any): any;

            function generate(secret: any): any;

            function resetOptions(): any;

            function verify(opts: any): any;

            namespace check {
                // Too-deep object hierarchy from otplib.authenticator.TOTP.prototype.check
                const prototype: any;

            }

            namespace generate {
                // Too-deep object hierarchy from otplib.authenticator.TOTP.prototype.generate
                const prototype: any;

            }

            namespace resetOptions {
                // Too-deep object hierarchy from otplib.authenticator.TOTP.prototype.resetOptions
                const prototype: any;

            }

            namespace verify {
                // Too-deep object hierarchy from otplib.authenticator.TOTP.prototype.verify
                const prototype: any;

            }

        }

    }

    namespace check {
        const prototype: {
        };

    }

    namespace decode {
        const prototype: {
        };

    }

    namespace encode {
        const prototype: {
        };

    }

    namespace generate {
        const prototype: {
        };

    }

    namespace generateSecret {
        const prototype: {
        };

    }

    namespace keyuri {
        const prototype: {
        };

    }

    namespace resetOptions {
        const prototype: {
        };

    }

    namespace utils {
        function check(token: any, secret: any, options: any): any;

        function decodeKey(encodedKey: any): any;

        function encodeKey(secret: any): any;

        function keyuri(...args: any[]): any;

        function token(secret: any, options: any): any;

        namespace check {
            const prototype: {
            };

        }

        namespace decodeKey {
            const prototype: {
            };

        }

        namespace encodeKey {
            const prototype: {
            };

        }

        namespace keyuri {
            const prototype: {
            };

        }

        namespace token {
            const prototype: {
            };

        }

    }

    namespace verify {
        const prototype: {
        };

    }

}

export namespace hotp {
    class HOTP {
        constructor();

        HOTP(): void;

        check(token: any, secret: any, counter: any): any;

        generate(secret: any, counter: any): any;

        resetOptions(): any;

        verify(opts: any): any;

    }

    const defaultOptions: {
    };

    const options: {
        crypto: {
            Certificate: any;
            Cipher: any;
            Cipheriv: any;
            Credentials: any;
            DEFAULT_ENCODING: string;
            Decipher: any;
            Decipheriv: any;
            DiffieHellman: any;
            DiffieHellmanGroup: any;
            Hash: any;
            Hmac: any;
            Sign: any;
            Verify: any;
            constants: {
                ALPN_ENABLED: number;
                DH_CHECK_P_NOT_PRIME: number;
                DH_CHECK_P_NOT_SAFE_PRIME: number;
                DH_NOT_SUITABLE_GENERATOR: number;
                DH_UNABLE_TO_CHECK_GENERATOR: number;
                ENGINE_METHOD_ALL: number;
                ENGINE_METHOD_CIPHERS: number;
                ENGINE_METHOD_DH: number;
                ENGINE_METHOD_DIGESTS: number;
                ENGINE_METHOD_DSA: number;
                ENGINE_METHOD_ECDH: number;
                ENGINE_METHOD_ECDSA: number;
                ENGINE_METHOD_NONE: number;
                ENGINE_METHOD_PKEY_ASN1_METHS: number;
                ENGINE_METHOD_PKEY_METHS: number;
                ENGINE_METHOD_RAND: number;
                ENGINE_METHOD_RSA: number;
                ENGINE_METHOD_STORE: number;
                NPN_ENABLED: number;
                POINT_CONVERSION_COMPRESSED: number;
                POINT_CONVERSION_HYBRID: number;
                POINT_CONVERSION_UNCOMPRESSED: number;
                RSA_NO_PADDING: number;
                RSA_PKCS1_OAEP_PADDING: number;
                RSA_PKCS1_PADDING: number;
                RSA_PKCS1_PSS_PADDING: number;
                RSA_PSS_SALTLEN_AUTO: number;
                RSA_PSS_SALTLEN_DIGEST: number;
                RSA_PSS_SALTLEN_MAX_SIGN: number;
                RSA_SSLV23_PADDING: number;
                RSA_X931_PADDING: number;
                SSL_OP_ALL: number;
                SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
                SSL_OP_CIPHER_SERVER_PREFERENCE: number;
                SSL_OP_CISCO_ANYCONNECT: number;
                SSL_OP_COOKIE_EXCHANGE: number;
                SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
                SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
                SSL_OP_EPHEMERAL_RSA: number;
                SSL_OP_LEGACY_SERVER_CONNECT: number;
                SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
                SSL_OP_MICROSOFT_SESS_ID_BUG: number;
                SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
                SSL_OP_NETSCAPE_CA_DN_BUG: number;
                SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
                SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
                SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
                SSL_OP_NO_COMPRESSION: number;
                SSL_OP_NO_QUERY_MTU: number;
                SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
                SSL_OP_NO_SSLv2: number;
                SSL_OP_NO_SSLv3: number;
                SSL_OP_NO_TICKET: number;
                SSL_OP_NO_TLSv1: number;
                SSL_OP_NO_TLSv1_1: number;
                SSL_OP_NO_TLSv1_2: number;
                SSL_OP_PKCS1_CHECK_1: number;
                SSL_OP_PKCS1_CHECK_2: number;
                SSL_OP_SINGLE_DH_USE: number;
                SSL_OP_SINGLE_ECDH_USE: number;
                SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
                SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
                SSL_OP_TLS_BLOCK_PADDING_BUG: number;
                SSL_OP_TLS_D5_BUG: number;
                SSL_OP_TLS_ROLLBACK_BUG: number;
                defaultCipherList: string;
                defaultCoreCipherList: string;
            };
            createCipher: any;
            createCipheriv: any;
            createCredentials: any;
            createDecipher: any;
            createDecipheriv: any;
            createDiffieHellman: any;
            createDiffieHellmanGroup: any;
            createECDH: any;
            createHash: any;
            createHmac: any;
            createSign: any;
            createVerify: any;
            fips: number;
            getCiphers: any;
            getCurves: any;
            getDiffieHellman: any;
            getHashes: any;
            pbkdf2: any;
            pbkdf2Sync: any;
            privateDecrypt: any;
            privateEncrypt: any;
            prng: any;
            pseudoRandomBytes: any;
            publicDecrypt: any;
            publicEncrypt: any;
            randomBytes: any;
            randomFill: any;
            randomFillSync: any;
            rng: any;
            setEngine: any;
            timingSafeEqual: any;
        };
    };

    function check(token: any, secret: any, counter: any): any;

    function generate(secret: any, counter: any): any;

    function resetOptions(): any;

    function verify(opts: any): any;

    namespace HOTP {
        namespace prototype {
            // Circular reference from otplib.hotp.HOTP.prototype
            const HOTP: any;

            const defaultOptions: {
            };

            const options: {
            };

            function check(token: any, secret: any, counter: any): any;

            function generate(secret: any, counter: any): any;

            function resetOptions(): any;

            function verify(opts: any): any;

            namespace check {
                // Too-deep object hierarchy from otplib.hotp.HOTP.prototype.check
                const prototype: any;

            }

            namespace generate {
                // Too-deep object hierarchy from otplib.hotp.HOTP.prototype.generate
                const prototype: any;

            }

            namespace resetOptions {
                // Too-deep object hierarchy from otplib.hotp.HOTP.prototype.resetOptions
                const prototype: any;

            }

            namespace verify {
                // Too-deep object hierarchy from otplib.hotp.HOTP.prototype.verify
                const prototype: any;

            }

        }

    }

    namespace check {
        const prototype: {
        };

    }

    namespace generate {
        const prototype: {
        };

    }

    namespace resetOptions {
        const prototype: {
        };

    }

    namespace verify {
        const prototype: {
        };

    }

}

export namespace totp {
    class HOTP {
        constructor();

        HOTP(): void;

        check(token: any, secret: any, counter: any): any;

        generate(secret: any, counter: any): any;

        resetOptions(): any;

        verify(opts: any): any;

    }

    class TOTP {
        constructor();

        TOTP(): any;

        check(token: any, secret: any): any;

        generate(secret: any): any;

        verify(opts: any): any;

    }

    const defaultOptions: {
        epoch: any;
        step: number;
    };

    const options: {
        crypto: {
            Certificate: any;
            Cipher: any;
            Cipheriv: any;
            Credentials: any;
            DEFAULT_ENCODING: string;
            Decipher: any;
            Decipheriv: any;
            DiffieHellman: any;
            DiffieHellmanGroup: any;
            Hash: any;
            Hmac: any;
            Sign: any;
            Verify: any;
            constants: {
                ALPN_ENABLED: number;
                DH_CHECK_P_NOT_PRIME: number;
                DH_CHECK_P_NOT_SAFE_PRIME: number;
                DH_NOT_SUITABLE_GENERATOR: number;
                DH_UNABLE_TO_CHECK_GENERATOR: number;
                ENGINE_METHOD_ALL: number;
                ENGINE_METHOD_CIPHERS: number;
                ENGINE_METHOD_DH: number;
                ENGINE_METHOD_DIGESTS: number;
                ENGINE_METHOD_DSA: number;
                ENGINE_METHOD_ECDH: number;
                ENGINE_METHOD_ECDSA: number;
                ENGINE_METHOD_NONE: number;
                ENGINE_METHOD_PKEY_ASN1_METHS: number;
                ENGINE_METHOD_PKEY_METHS: number;
                ENGINE_METHOD_RAND: number;
                ENGINE_METHOD_RSA: number;
                ENGINE_METHOD_STORE: number;
                NPN_ENABLED: number;
                POINT_CONVERSION_COMPRESSED: number;
                POINT_CONVERSION_HYBRID: number;
                POINT_CONVERSION_UNCOMPRESSED: number;
                RSA_NO_PADDING: number;
                RSA_PKCS1_OAEP_PADDING: number;
                RSA_PKCS1_PADDING: number;
                RSA_PKCS1_PSS_PADDING: number;
                RSA_PSS_SALTLEN_AUTO: number;
                RSA_PSS_SALTLEN_DIGEST: number;
                RSA_PSS_SALTLEN_MAX_SIGN: number;
                RSA_SSLV23_PADDING: number;
                RSA_X931_PADDING: number;
                SSL_OP_ALL: number;
                SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
                SSL_OP_CIPHER_SERVER_PREFERENCE: number;
                SSL_OP_CISCO_ANYCONNECT: number;
                SSL_OP_COOKIE_EXCHANGE: number;
                SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
                SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
                SSL_OP_EPHEMERAL_RSA: number;
                SSL_OP_LEGACY_SERVER_CONNECT: number;
                SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
                SSL_OP_MICROSOFT_SESS_ID_BUG: number;
                SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
                SSL_OP_NETSCAPE_CA_DN_BUG: number;
                SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
                SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
                SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
                SSL_OP_NO_COMPRESSION: number;
                SSL_OP_NO_QUERY_MTU: number;
                SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
                SSL_OP_NO_SSLv2: number;
                SSL_OP_NO_SSLv3: number;
                SSL_OP_NO_TICKET: number;
                SSL_OP_NO_TLSv1: number;
                SSL_OP_NO_TLSv1_1: number;
                SSL_OP_NO_TLSv1_2: number;
                SSL_OP_PKCS1_CHECK_1: number;
                SSL_OP_PKCS1_CHECK_2: number;
                SSL_OP_SINGLE_DH_USE: number;
                SSL_OP_SINGLE_ECDH_USE: number;
                SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
                SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
                SSL_OP_TLS_BLOCK_PADDING_BUG: number;
                SSL_OP_TLS_D5_BUG: number;
                SSL_OP_TLS_ROLLBACK_BUG: number;
                defaultCipherList: string;
                defaultCoreCipherList: string;
            };
            createCipher: any;
            createCipheriv: any;
            createCredentials: any;
            createDecipher: any;
            createDecipheriv: any;
            createDiffieHellman: any;
            createDiffieHellmanGroup: any;
            createECDH: any;
            createHash: any;
            createHmac: any;
            createSign: any;
            createVerify: any;
            fips: number;
            getCiphers: any;
            getCurves: any;
            getDiffieHellman: any;
            getHashes: any;
            pbkdf2: any;
            pbkdf2Sync: any;
            privateDecrypt: any;
            privateEncrypt: any;
            prng: any;
            pseudoRandomBytes: any;
            publicDecrypt: any;
            publicEncrypt: any;
            randomBytes: any;
            randomFill: any;
            randomFillSync: any;
            rng: any;
            setEngine: any;
            timingSafeEqual: any;
        };
        epoch: any;
        step: number;
    };

    function check(token: any, secret: any): any;

    function generate(secret: any): any;

    function resetOptions(): any;

    function verify(opts: any): any;

    namespace HOTP {
        namespace prototype {
            // Circular reference from otplib.totp.HOTP.prototype
            const HOTP: any;

            const defaultOptions: {
            };

            const options: {
            };

            function check(token: any, secret: any, counter: any): any;

            function generate(secret: any, counter: any): any;

            function resetOptions(): any;

            function verify(opts: any): any;

            namespace check {
                // Too-deep object hierarchy from otplib.totp.HOTP.prototype.check
                const prototype: any;

            }

            namespace generate {
                // Too-deep object hierarchy from otplib.totp.HOTP.prototype.generate
                const prototype: any;

            }

            namespace resetOptions {
                // Too-deep object hierarchy from otplib.totp.HOTP.prototype.resetOptions
                const prototype: any;

            }

            namespace verify {
                // Too-deep object hierarchy from otplib.totp.HOTP.prototype.verify
                const prototype: any;

            }

        }

    }

    namespace TOTP {
        namespace prototype {
            class HOTP {
                constructor();

                HOTP(): void;

                check(token: any, secret: any, counter: any): any;

                generate(secret: any, counter: any): any;

                resetOptions(): any;

                verify(opts: any): any;

                static prototype: any;

            }

            // Circular reference from otplib.totp.TOTP.prototype
            const TOTP: any;

            const defaultOptions: {
                epoch: any;
                step: number;
            };

            const options: {
            };

            function check(token: any, secret: any): any;

            function generate(secret: any): any;

            function resetOptions(): any;

            function verify(opts: any): any;

            namespace check {
                // Too-deep object hierarchy from otplib.totp.TOTP.prototype.check
                const prototype: any;

            }

            namespace generate {
                // Too-deep object hierarchy from otplib.totp.TOTP.prototype.generate
                const prototype: any;

            }

            namespace resetOptions {
                // Too-deep object hierarchy from otplib.totp.TOTP.prototype.resetOptions
                const prototype: any;

            }

            namespace verify {
                // Too-deep object hierarchy from otplib.totp.TOTP.prototype.verify
                const prototype: any;

            }

        }

    }

    namespace check {
        const prototype: {
        };

    }

    namespace generate {
        const prototype: {
        };

    }

    namespace resetOptions {
        const prototype: {
        };

    }

    namespace verify {
        const prototype: {
        };

    }

}

