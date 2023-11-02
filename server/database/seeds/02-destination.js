/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('destination').del();
  await knex('destination').insert([
    {
      user_id: '760a2087-f3d1-477d-8fc0-3118c71667b5',
      name: 'Lawang Sewu',
      location: 'Semarang, Jawa Tengah',
      description:
        "Lawang Sewu, a historic building in Semarang, is famed for its grandeur and the tales that surround its past. Once a railway office, today it stands as a testament to the city's colonial history. Tourists are often drawn to its beautiful architecture and the mysteries associated with the building."
    },
    {
      id: '2ba03e7c-d463-45fc-8d55-266443b84811',
      user_id: '760a2087-f3d1-477d-8fc0-3118c71667b5',
      name: 'Candi Borobudur',
      location: 'Magelang, Jawa Tengah',
      description:
        "Candi Borobudur in Magelang is the world's largest Buddhist temple. This UNESCO World Heritage Site is a symbol of Indonesia's rich cultural heritage. The monument consists of nine stacked platforms, six square and three circular, topped by a central dome. It's renowned for its intricate relief panels narrating the life of Buddha."
    },
    {
      user_id: '760a2087-ab53-4080-9444-4c7c3599fd45',
      name: 'Kota Lama',
      location: 'Semarang, Jawa Tengah',
      description:
        "Kota Lama, Semarang's old town, stands as a window into Indonesia's colonial era. With cobbled streets and Dutch-style buildings, it's a stark contrast to modern Semarang. The area is a haven for history buffs, offering a glimpse into the country's colonial past. It's also home to various cafes, galleries, and cultural events."
    },
    {
      user_id: '760a2087-ab53-4080-9444-4c7c3599fd45',
      name: 'Candi Prambanan',
      location: 'Klaten, Jawa Tengah',
      description:
        "Candi Prambanan in Klaten is the largest Hindu temple site in Indonesia, and one of the biggest in Southeast Asia. This architectural marvel, with its tall, pointed structures, stands as a testament to the country's Hindu past. The temple is dedicated to the Trimurti and is surrounded by smaller temples in its complex."
    }
  ]);
};
