import { Person } from '../types/Person';

type Props = {
  people: Person[];
  onSelected: (person: Person) => void;
};

export const DropdownMenu: React.FC<Props> = ({ people, onSelected }) => {
  const handleSelect = (person: Person) => {
    onSelected(person);
  };

  return (
    <div className="dropdown-menu" role="menu" data-cy="suggestions-list">
      <div className="dropdown-content">
        {people.map(person => (
          <div
            className="dropdown-item"
            data-cy="suggestion-item"
            key={person.name}
            onClick={() => handleSelect(person)}
          >
            <p className="has-text-link">{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
