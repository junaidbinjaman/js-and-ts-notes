var marks = [45, 81, 63, 98, 56, 35, 23, 81, 45, 76, 23];
var uniq = []

for (let i = 0; i < marks.length; i++) {
  const element = marks[i];
  if(uniq.indexOf(element) === -1) {
    uniq.push(element)
  }
}

console.log(uniq, marks);