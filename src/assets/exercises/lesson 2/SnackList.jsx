export default function SnackList() {
    const snacks = [
        { id: 1, name: 'Dark Chocolate Hummus', tier: '1' },
        { id: 2, name: 'Yogurt Covered Pretzels', tier: '4' },
        { id: 3, name: 'Cheddar Rice Cakes', tier: '3' },
        { id: 4, name: 'Spicy Dill Pickle Kettle Chips', tier: '2' },
        { id: 5, name: 'Kettle Corn Pop Corners', tier: '5' }
    ];


const sortedSnacks = snacks.sort((a, b) => a.tier - b.tier);

return (
    <section>
        <h2>Snack Tier</h2>
        <ol>
            {sortedSnacks.map(snack => (
                <li key={snack.id}>
                    {snack.name} (Tier {snack.tier})
                </li>
            ))}
        </ol>
    </section>
);
}