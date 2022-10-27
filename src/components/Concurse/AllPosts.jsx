import React from 'react';
import Like from './Like'
import { useReadAllQuery } from '../../features/actions/ConcurseAPI'
import { useSelector } from 'react-redux';
import './cardsTop.css'
import { AiOutlineDelete  } from "react-icons/ai";
import { useDeleteConcurseMutation } from '../../features/actions/ConcurseAPI';
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";


const AllPosts = () => {

  const navigate = useNavigate()

  const userID = useSelector(state => state.user.id)
  const user = useSelector(state => state.user)
  const {
    data : info,
    isSuccess,
    isError
  } = useReadAllQuery();


  // delete Concurse
  const [deleteProduct] = useDeleteConcurseMutation();

  const handleDelete = (id) => {

    deleteProduct({id : id})
  }


  function generateCards(data){
    return(
      <div class="card">
        <div class="card-img">
          <img src={data.photo} alt={'foto del curso: ' + data.course}/>
        </div>
        <div class="card-info">
          {user.role !== "user" || user.id === data.name._id ? 
            <div className='divDelete'>
              <AiOutlineDelete onClick={() => handleDelete(data._id)}  size="30" /> 
            </div> 
          : 
          <></>
          }
          <p class="text-title">{data.college} {data.course}</p>
          <p class="text-body">{data.description}</p>
          <div class="card-button">
            <img style={{width: '50px'}} src={data.name.photo} alt={data.name.name}/>
            <p>{data.name.name}</p>
            <Like like={data.likes} postId={data._id} userId={userID}/>
          </div>
        </div>
      </div>
    )
  }

  const handleClick = () => {
    switch (user.buyer) {
      case true:
        navigate('/crearconcurso')
        break;
      case false:
        swal({
          title: "Debes ser comprador para poder participar",
          icon: "warning",
          buttons:{
            aceptar: 'Aceptar',
          }
        })
        break;
      default:
        swal({
          title: "Debes iniciar sesion para poder participar",
          icon: "warning",
          buttons:{
            no: 'Cerrar',
            iniciarSesion: {
              text: "Iniciar sesion",
              value: "Si"
            },
          }
        }).then((value) => {
          switch (value) {
            case "Si":
              navigate('/signin')
              break;
            default:
              console.log('');
          }
        });
        break;
    }
  }




  return (
    <div className='posts'>
      <button onClick={handleClick} className='cartbtnDelete'>Participar del concurso</button>
      <h2 className='postsTitle'>Todos los post:</h2>
      <div className="PostsContainer">
        {isSuccess ? info.concurses.map(generateCards) : null}
      </div>
    </div>
  );
}

export default AllPosts;
