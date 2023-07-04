function topThreeWords(text) {
    text = text.replace(/[^\w']+/g,' ').toLowerCase();
    const words = text.match(/\b[a-z']+\b/g) || [];
    const count = {};
    words.forEach(w => {
      count[w] = (count[w] || 0)+ 1;
    })
    
    const sortedWords = Object.entries(count).sort((a,b) => b[1] - a[1]);
    return sortedWords.splice(0,3).map(([w]) => w);
  }