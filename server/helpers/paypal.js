const paypal = require("paypal-rest-sdk");

paypal.configure({
    mode: "sandbox",
    client_id: "AWkeVe0j_sSL5m42wKCkAoDgX1H2DxQLdDaDWYsEouONFTITtKyS4Q56gPGmE1wzWCTk54fyj7ljdZvm",
    client_secret: "EHd0LKKhQXc99oAQDXSj_z2IsG9LLkpPvsPpzEPi_dcpiRppm-nln_1qXJJoTzTGK_7cACydSV0kGeHa",
});

module.exports = paypal;

