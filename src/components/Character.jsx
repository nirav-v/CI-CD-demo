import React from 'react';

export default function Character({
  name,
  birth,
  death,
  race,
  realm,
  spouse,
  imgUrl,
}) {
  return (
    <div>
      <img src={imgUrl} alt={name + 'image'} />
      <h2>fail{name}</h2>
      <ul>
        <li>Date of Birth: {birth}</li>
        <li>Date of Death: {death} </li>
        <li>Race: {race}</li>
        <li>Realm: {realm}</li>
        <li>Spouse: {spouse} </li>
      </ul>
    </div>
  );
}
