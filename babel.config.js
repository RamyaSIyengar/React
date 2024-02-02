module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };

//   {
//     "extends": "@parcel/config-default",
//     "transformers": {
//       "*.{js,mjs,jsx,cjs,ts,tsx}": [
//         "@parcel/transformer-js",
//         "@parcel/transformer-react-refresh-wrap"
//       ]
//     }
//   }