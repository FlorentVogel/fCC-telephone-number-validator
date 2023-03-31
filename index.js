function telephoneCheck(str) {
    const regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/
    return !!str.match(regex);
}

telephoneCheck("555-555-5555"); //true
telephoneCheck("555-5555") //false