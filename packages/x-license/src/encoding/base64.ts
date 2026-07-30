/* eslint-disable */
const _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function utf8Encode(str: string) {
  for (let n = 0; n < str.length; n++) {
    const c = str.charCodeAt(n);

    if (c >= 128) {
      throw new Error(
        'MUI X: Only ASCII characters are supported in license encoding. ' +
          'Non-ASCII characters cannot be encoded. ' +
          'Ensure the input contains only ASCII characters.',
      );
    }
  }

  return str;
}

export const base64Decode = (input: string): string => {
  let output = '';
  let chr1, chr2, chr3;
  let enc1, enc2, enc3, enc4;
  let i = 0;

  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

  while (i < input.length) {
    enc1 = _keyStr.indexOf(input.charAt(i++));
    enc2 = _keyStr.indexOf(input.charAt(i++));
    enc3 = _keyStr.indexOf(input.charAt(i++));
    enc4 = _keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3);
    }
  }

  return output;
};

export const base64Encode = (input: string): string => {
    throw new Error("STUB");
};
