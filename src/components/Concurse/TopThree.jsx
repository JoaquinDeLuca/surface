import React from 'react';
import { useTopThreeQuery } from '../../features/actions/ConcurseAPI'
import './cardsTop.css'
import { useSelector } from 'react-redux';
import Like from './Like'
import Spinner from '../Spinner/Spinner'

const TopThree = () => {

  const userID = useSelector(state => state.user.id)

  const {
    data : info,
    isSuccess,
    isLoading,
  } = useTopThreeQuery();


  function generateCards(data){
    return(
      <div className="card" key={data._id}>
        <div className="card-img">
          <img src={data.photo} alt={'foto del curso: ' + data.course}/>
        </div>
        <div className="card-info">
          <p className="text-title">{data.college} {data.course}</p>
          <p className="text-body">{data.description}</p>
          <div className="card-button">
            <img style={{width: '50px'}} src={data.name.photo} alt={data.name.name}/>
            <p>{data.name.name}</p>
            <Like like={data.likes} postId={data._id} userId={userID}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=''>
      <h2 style={{width: '100%', textAlign: "center"}}>TOP 3 más votados:</h2>
        {isLoading && <Spinner text='Cargando TOP 3...'/>}
      <div className='topThreeContainer'>
        {isSuccess ? info.response.map(generateCards) : null}
      </div>
    </div>
  );
}

export default TopThree;
