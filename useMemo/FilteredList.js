import { useEffect, useMemo, useState } from "react";

const users = [
    { id: 1, name: "Mario", age: 27 },
    { id: 2, name: "Maria", age: 12 },
    { id: 3, name: "Marie", age: 21 },
    { id: 4, name: "Marii", age: 3 },
  ]

export function FilteredList() {
  const [item, setItem] = useState([]);

  const filteredUsers = useMemo(() => users.filter((el) => el.age > 18), [])

  useEffect(() => {
    setItem(
      (item) =>
        (item = filteredUsers )
    );
  }, [filteredUsers]);

  return (
    <div>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
