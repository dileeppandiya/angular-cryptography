angular.module('mdo-angular-cryptography', [])
    .provider('$crypto', function CryptoKeyProvider() {
        var cryptoKey;

        this.setCryptographyKey = function(value) {
            this.cryptoKey = value;
        }

        this.$get = [function(){
            return {
                cryptoKey: this.cryptoKey,

                encrypt: function(message, key) {
                    return CryptoJS.AES.encrypt(message, key ).toString();
                },

                decrypt: function(message, key) {
                    return CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8)
                }
            }
        }];
    });