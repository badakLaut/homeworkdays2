const videoData = [
    {
      name: 'Miss Scarlet',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Rusty',
      present: false,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Colonel Mustard',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Professor Plum',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    }
  ]

let count = 0
videoData.forEach(element => {
    if(element.present===true){
        count++
    }
});
let presents = videoData.filter(element=>element.present===true)
console.log(count);
console.log(presents.length);
console.log(presents);