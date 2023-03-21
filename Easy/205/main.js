let s = 'far';
t = 'foo';

const isIsomorphic = function (s, t) {
  let mapS = new Map();
  let mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapS[s.charAt(i)] != mapT[t.charAt(i)]) {
      return false;
    }

    mapS[s.charAt(i)] = i + 1;
    mapT[t.charAt(i)] = i + 1;
  }
  return true;
};

console.log(isIsomorphic(s, t));
