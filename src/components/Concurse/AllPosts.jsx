import React from 'react';
import Like from './Like'
import { useReadAllQuery } from '../../features/actions/ConcurseAPI'
import { useSelector } from 'react-redux';


const AllPosts = () => {

  const userID = useSelector(state => state.user.id)
  const {
    data : info,
    isSuccess,
    isError
  } = useReadAllQuery();

  function generateCards(data){


    return(
    <div className='cardTopContainer'>
      <div className='postContainer'>
        <div className='imgContainer'>
          <img style={{width:'100%'}} src={data.photo} alt={'foto del curso: ' + data.course} />
        </div>
        <div className='courseData'>
          <h3>{`${data.college} ${data.course}`}</h3>
          <p>Descripcion del curso: {data.description}</p>
        </div>
      </div>
      <div className='userCreatorLikes'>
        <div className='userData'>
          <img style={{width: '50px'}} src={data.name.photo} alt={`Perfil de ${data.name.name}}`}/>
          <p>{data.name.name}</p>
        </div>
        <Like like={data.likes} postId={data._id} userId={userID}/>
      </div>
    </div>
    )
  }


  return (
    <div>
      <h3>Todos los post:</h3>
      <div className="PostsContainer">
        {isSuccess ? info.concurses.map(generateCards) : null}
      </div>
    </div>
  );
}

export default AllPosts;
