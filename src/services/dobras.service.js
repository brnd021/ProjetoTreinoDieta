export function dobras(nome, sexo) {
  switch (nome) {
    case 'JP3':
      return sexo === 'M'
        ? ['Peito', 'Abdômen', 'Coxa']
        : ['Tríceps', 'Supra-ilíaca', 'Coxa'];
    case 'JP4':
      return ['Tríceps', 'Bíceps', 'Subescapular', 'Supra-ilíaca'];
    case 'JP7':
      return ['Peito', 'Abdômen', 'Coxa', 'Tríceps', 'Subescapular', 'Supra-ilíaca', 'Axilar média'];
    case 'DW':
      return ['Bíceps', 'Tríceps', 'Supra-ilíaca', 'Subescapular'];
    case 'F':
      return ['Abdômen', 'Tríceps', 'Subescapular', 'Supra-ilíaca'];
    case 'S':
      return sexo === 'M'
        ? ['Peito', 'Coxa']
        : ['Tríceps', 'Crista ilíaca'];
    case 'G':
      return sexo === 'M'
        ? ['Peito', 'Abdômen', 'Coxa']
        : ['Tríceps', 'Supra-ilíaca', 'Coxa'];
    default:
      return [];
  }
}
