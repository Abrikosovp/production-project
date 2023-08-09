type Mods = Record<string, boolean | string>

export function classNames(cls: string, modes: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(modes)
            .filter(([_, value]) => Boolean(value))
            .map(([cl]) => cl),
    ].join(' ');
}
