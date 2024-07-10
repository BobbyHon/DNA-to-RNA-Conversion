function DNAtoRNA(dna) {
    return dna.split('').map((x) => {
      if (x == 'T') return 'U'
      return x
    }).join('')
  }