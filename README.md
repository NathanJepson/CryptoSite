# CryptoSite
This repo currently consists of a Javascript web app which creates RSA keys--either randomly, or shows how an RSA key can be created using two prime numbers. It allows a key to be formatted into PKCS #1 and PKCS #8 formats (which here includes PEM and ASN.1), like as shown below:

-----BEGIN PUBLIC KEY-----
MIGgMA0GCSqGSIb3DQEBAQUAA4GOADCBigKBgQCp4WeYPznVX/Kgk0FepnmJhcg1XZqRW/sdAdoZcCYXD72lItA1hW16mGYUQVzPt7cIOwnJkbgZaTdt+WUee9mpMySjfzu7r0YBhjY0MssHA1lS/IWLMQS4zBgIFEjmTxz7XWDE4FwfU9N/U9hpAfEF+Hpw0b6Dxl84zxwsqmqn6wIEAAEAAQ==
-----END PUBLIC KEY-----


-----BEGIN RSA PRIVATE KEY-----
MIICYAIBAAKBgQCp4WeYPznVX/Kgk0FepnmJhcg1XZqRW/sdAdoZcCYXD72lItA1hW16mGYUQVzPt7cIOwnJkbgZaTdt+WUee9mpMySjfzu7r0YBhjY0MssHA1lS/IWLMQS4zBgIFEjmTxz7XWDE4FwfU9N/U9hpAfEF+Hpw0b6Dxl84zxwsqmqn6wIEAAEAAQKBgQBnzUhMmg2PmMIbZf8ig5xt8KYGHbztpwOIlPIcaw+LNd4Ogngwy+e6alatd8brUXlweQqg9P5F4Kmy9Bnah5jWMIR05PxZbMHGd9ypkdB8MKCixQheIXFD/A0HPfD6bRSeTmPwF1h5HEuYHD09sBvf+iU7o8AsmAX2EAnYh9sDGQJBANDDIsbeopkYdo+NvKZ11mY/1I1FUox29XLE6/BGmvE+XKpVC5va3Wtt+Pw7PAhDk7Vb/s7q/WiEI2Kv8zHCueUCQQDQUfweIrdb7bWOAcjXq/JY1PeClPNTqBlFy2bKKBlf4hAr84/sajB0+E0R9KfEILVHIdxJAfkKICnwJAiEYH2PAkEANLpkyUgoV3TXVVDeakjvGypaHEh7HiFZw2A7m5epwO8YZqlOYlI4hM7lCYhIlGnFIBSZWlf+I2zkpyN70IC3hQJBAJ4vszea+wsGXVfhCQakXdmQlgYFXyQGQHKcOoiFnIcPnWISiBZoqDU
aG0PoOMCYaa8DCkgyBE7pD493fTQwJQcCQQBXGGfWCtK1q8K6eudU2pwFT4HU7wGJHjI9acsxxFLIVFUlADscKnwmUNXpptd3y88V9e4L1Y3us69MoXxjRkH2                   
-----END RSA PRIVATE KEY-----

The web app also allows for the encryption of messages. Currently, in terms of cryptographic modes of operation, it is implemented as a stream cipher (encrypting each individual ASCII character), partially like ECB (not dependent on any initialization vectors (IV)). 

Additionally, I have allowed for the decryption of messages if the decryption exponent is known. 


