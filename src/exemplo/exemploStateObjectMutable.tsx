import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  const [player, setPlayer] = useState<any>({
    name: "Gabriel",
    nickName: "Suldine",
    score: 0
  });

  const handleClick = () => {
    //jeito errado de fazer abaixo
    //player.score++
    //correto Abaixo
    const newScore = player.score + 1;
    setPlayer({ ...player, score: newScore })
  }

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    // const newPlayer = {...player, name:newName}; ou abaixo   
    //setPlayer(newPlayer);abaixo
    setPlayer({ ...player, name: newName })
  }
  const handleChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    const newNickName = event.target.value;
    // const newPlayer = {...player, name:newNickName}; ou abaixo   
    //setPlayer(newPlayer);abaixo
    setPlayer({ ...player, nickName: newNickName })
  }

  return (
    <>
      <h1>imutabilidade</h1>
      <h2>Dados do jogador</h2>
      <p>
        <h3> Score: {player.score}</h3>
        <button onClick={handleClick}>+</button>
      </p>
      <p>
        <label>Player Name
          <input type="text"
            name="name"
            onChange={handleChangeName}
            value={player.name} />
        </label>
      </p>
      <p>
        <label>Player NickName
          <input type="text"
            name="nickName"
            onChange={handleChangeNickName}
            value={player.nickName} />
        </label>
      </p>
      <hr />
      {" "}
      <h3>{player.name} | {player.nickName}</h3>
    </>

  )
}

export default App
