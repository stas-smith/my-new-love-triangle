/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  triangle = 0; 
  preferences.forEach(function (pref, lover, links){
      pref2 = links[pref-1]
      pref3 = links[pref2-1]
      if ((lover+1 == pref3) && (lover+1 != pref)) triangle++ 
  })
  return (triangle / 3)
};