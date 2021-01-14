function toCapitalCase() {
  let string = 'lorem ipsum stan';
  var splits = string.split(" ");
  var update = "";

  for (let i = 0; i < splits.length; i++) {
    let Name = splits[i];
    let First = Name.substring(0, 1).toUpperCase();
    let Leftovers = Name.substring(1, Name.length)
    update += First + Leftovers + " ";
  }

  console.log(update)
}
toCapitalCase();
