import { heroes } from '../data/heroes';

export const getHeroByName = (name) => {
    if (!name) {
        return [];
    }

    name = name.toLocaleLowerCase();

    return heroes.filter((hero) => {
        if (
            hero.superhero.toLocaleLowerCase().includes(name) ||
            hero.alter_ego.toLocaleLowerCase().includes(name) ||
            hero.characters.toLocaleLowerCase().includes(name)
        ) {
            return true
        } else {
            return false
        }
    });
};
