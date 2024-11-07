const total = 10000;
let numbers = [];
const totalBuilds = 6;

// Generar números aleatorios entre 1 y el total menos 1
for (let i = 0; i < 4; i++) {
    numbers.push(Math.floor(Math.random() * (total - totalBuilds + 1)))
}

// Añadir el total y ordenar los números para evitar valores negativos
numbers.push(0, total);
numbers.sort((a, b) => a - b);

// Calcular las diferencias
let results = [];
for (let i = 1; i < numbers.length; i++) {
    results.push(numbers[i] - numbers[i - 1]);
}

// Remover el primer y último número que fueron añadidos para control
results.shift();
results.pop();

// Añadir el último valor que hace la suma 10000
results.push(total - results.reduce((a, b) => a + b, 0));
const builds = [
    //1
    {
        name: `Archmage Ball Lightning of Orbiting/Ice Nova of Frostbolts`,
        character: `Templar`,
        ascendancy: `Hierophant`,
        iconURL: `https://www.poewiki.net/images/c/ca/Ball_Lightning_of_Orbiting_inventory_icon.png`,
        count: results[0],
        color: `#8CC8EC`,
    },
    //2
    {
        name: `Hexblast Mines`,
        character: `Shadow`,
        ascendancy: `Trickster`,
        iconURL: `https://www.poewiki.net/images/b/bf/Hexblast_inventory_icon.png`,
        count: results[1],
        color: `#715FD6`
    },
    //3
    {
        name: `Elemental Hit of the Spectrum`,
        character: `Ranger`,
        ascendancy: `Deadeye`,
        iconURL: `https://www.poewiki.net/images/b/b4/Elemental_Hit_of_the_Spectrum_inventory_icon.png`,
        count: results[2],
        color: `#B6D65F`
    },
    //4
    {
        name: `Toxic Rain Selfcast/Ballista`,
        character: `Ranger`,
        ascendancy: `Pathfinder`,
        iconURL: `https://www.poewiki.net/images/b/bb/Toxic_Rain_inventory_icon.png`,
        count: results[3],
        color: `#3D7F44`
    },
    //5
    {
        name: `Frost Blades Katabasis`,
        character: `Duelist`,
        ascendancy: `Slayer`,
        iconURL: ``,
        count: results[4],
        color: `#52A390`
    },
    //6
    {
        name: `Blink Arrow of Prismatic Clones/Mirror Arrow of Bombarding Clones`,
        character: `Witch`,
        ascendancy: `Necromancer`,
        iconURL: `https://www.poewiki.net/wiki/Blink_Arrow_of_Bombarding_Clones#/media/File:Blink_Arrow_of_Bombarding_Clones_inventory_icon.png`,
        count: results[5],
        color: `#7CA352`
    }
]
export default builds