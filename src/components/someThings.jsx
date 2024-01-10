
import   { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const SomeThings = () => {
  const userName = useSelector((s) => s.user.name);

  useEffect(() => {
    if (userName !== "") {
      const div = document.createElement("div");
      document.body.appendChild(div);
    }
  }, [userName]);

  return (
    <div>someThings</div>
  );
};