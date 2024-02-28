const skill: string[] = ["danilo", "santos","alvarado"];

interface Character {
    name: string,
    edad: number,
    skills: string[],
    hometown?: string
}

const strider: Character = {
    name: "danilo",
    edad: 2222,
    skills: skill
}

strider.hometown = "hola tio";

console.table( strider);
