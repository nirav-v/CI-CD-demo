import React from 'react';
import characterData from '../data/characterData.json';
import Character from './Character';

export default function CharacterGallery() {
  return (
    <div>
      {characterData.map(character => (
        <Character
          key={character._id}
          name={character.name}
          birth={character.birth}
          spouse={character.spouse}
          imgUrl={character.imgUrl}
        />
      ))}
    </div>
  );
}
