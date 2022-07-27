const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convert(value:number, base:string, conv:string):number{
  const baseIndex = units.indexOf(base);
  const convIndex = units.indexOf(conv);

  return value * Math.pow(10, (convIndex - baseIndex));
}

console.log(convert(1, 'm', 'km'));

export {};