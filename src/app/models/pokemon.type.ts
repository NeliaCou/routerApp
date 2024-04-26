export type Pokemon = {
    count: number;
    next: string;
    previous: string;
    results: PokemonDetails[];
}

export type PokemonDetails = {
    name: string;
};