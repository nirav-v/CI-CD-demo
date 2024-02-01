import React from 'react';

export default function Character({ name, birth, death, race, realm, spouse }) {
  return (
    <div>
      <img src="" alt="" />
      <h2>{name}</h2>
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
